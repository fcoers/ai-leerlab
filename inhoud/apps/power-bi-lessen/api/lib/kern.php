<?php
/**
 * Power BI-lessen (nakijk- en hulpapp): kern voor de API. Bouwt op de gedeelde kern van de apps (config buiten de
 * webroot, ap_db, ap_rem, pv_instelling).
 *
 * Wat de server bewaart, per cohort: naam, de lessen die open staan, de Argon2id-hash van de inschrijfcode en de
 * wisdatum. Per duo: de duonaam, twee voornamen, de Argon2id-hash van de duocode, het afvinken, de controlevragen en
 * (les 1) de antwoorden die het duo intypt met de feedback daarop, steeds met alleen een datum. Hulpvragen tellen als rij met een datum. Het gesprek met de tutor staat hooguit 14 dagen, alleen als
 * context voor de tutor, en gaat weg zodra de stap klaar is. Geen e-mail, studentnummer, IP-adres of tijdstip.
 * Na de wisdatum van het cohort gaat alles van zijn duo's weg.
 */
if (!defined('PB')) {
    http_response_code(404);
    exit;
}
if (!defined('AI_APPS')) {
    define('AI_APPS', true);
}
require dirname(__DIR__, 3) . '/postvak/lib/kern.php';

const PB_SCHEMA = '2';       // 2: lessen per cohort (pb_cohort_les), antwoorden (pb_antwoord), tellers (pb_teller)
const PB_GESPREK_DAGEN = 14;
const PB_SESSIE_DAGEN = 1;            // een sessie geldt vandaag en morgen; daarna opnieuw de duocode
const PB_STANDAARD_WIS_DAGEN = 120;   // als beheer geen wisdatum meegeeft
const PB_MAX_VRAAG = 500;             // tekens per hulpvraag
const PB_HULP_PER_DAG = 25;
const PB_HULP_PER_STAP = 8;
const PB_CONTROLE_PER_DAG = 30;     // pogingen op de controlevragen per duo per dag
const PB_PLAFOND_EURO = 40.0;
const PB_MELDING_FRACTIE = 0.8;
const PB_VERSIE = 1;

// ---------------------------------------------------------------- instellingen

/** Instellingen van deze app in apps-config.php onder 'nakijkapp'. Alles is optioneel. */
function pb_cfg(): array
{
    static $c = null;
    if ($c !== null) {
        return $c;
    }
    $c = (array)(ap_config()['nakijkapp'] ?? []);
    $c += [
        'anthropic_sleutel' => '',
        'basis_url' => null,          // alleen voor tests met een nagebootste API
        'maandplafond_euro' => PB_PLAFOND_EURO,
        'koers_usd_eur' => 1.0,       // 1 dollar telt als 1 euro: aan de veilige kant
        'zoeksleutel' => '',
        'nep' => [],                  // vaste antwoorden voor de nep-tutor in tests
    ];
    return $c;
}

/** Echte tutor alleen met een sleutel; anders de nep-tutor (voor testen). */
function pb_tutor_modus(): string
{
    return trim((string)pb_cfg()['anthropic_sleutel']) !== '' ? 'echt' : 'nep';
}

// ---------------------------------------------------------------- lesinhoud

function pb_les(int $les): ?array
{
    static $cache = [];
    if (array_key_exists($les, $cache)) {
        return $cache[$les];
    }
    $pad = __DIR__ . "/lessen/les-$les.php";
    if (!is_file($pad)) {
        return $cache[$les] = null;
    }
    return $cache[$les] = require $pad;
}

function pb_lessen(): array
{
    $uit = [];
    foreach (glob(__DIR__ . '/lessen/les-*.php') ?: [] as $pad) {
        if (preg_match('/les-(\d+)\.php$/', $pad, $m)) {
            $uit[] = (int)$m[1];
        }
    }
    sort($uit);
    return $uit;
}

/** Alle momenten van een les op volgorde, met de stap erbij. */
function pb_momenten(array $les): array
{
    $uit = [];
    foreach ($les['stappen'] as $s) {
        foreach ($s['momenten'] as $m) {
            $uit[] = ['id' => $m['id'], 'stap' => $s['id']];
        }
    }
    return $uit;
}

function pb_stap(array $les, string $id): ?array
{
    foreach ($les['stappen'] as $s) {
        if ($s['id'] === $id) {
            return $s;
        }
    }
    return null;
}

/** Wat de browser van de les mag zien: zonder geheim, vaste hints, verbodenlijst en controlewaarden. */
function pb_les_openbaar(array $les): array
{
    $stappen = [];
    foreach ($les['stappen'] as $s) {
        $stappen[] = [
            'id' => $s['id'], 'titel' => $s['titel'], 'minuten' => $s['minuten'], 'uitleg' => $s['uitleg'],
            'na' => $s['na'] ?? null,
            'momenten' => array_map(fn($m) => ['id' => $m['id'], 'zin' => $m['zin'], 'kort' => $m['kort'], 'knop' => $m['knop'] ?? null], $s['momenten']),
            'kiet' => $s['kiet'],
        ];
    }
    return [
        'les' => $les['les'], 'vak' => $les['vak'], 'titel' => $les['titel'], 'inleverplek' => $les['inleverplek'],
        'lever' => $les['lever'], 'afsluiting' => $les['afsluiting'], 'stappen' => $stappen,
        'controle_aantal' => $les['controle']['aantal'],
    ];
}

/**
 * Controletabel van een les (Wouter: inhoud/controletabel-les<n>.json, hier als PHP buiten bereik van de browser).
 * Geeft ['waarden' => ["R01|45|aantal" => waarde], 'tolerantie' => [maat => t]]. Vragen met rand: true (de waarde ligt
 * zo dicht bij een afrondingsgrens dat een goed antwoord fout kan lijken) worden niet gesteld. Null als er geen tabel is.
 */
function pb_controletabel(int $les): ?array
{
    static $cache = [];
    if (array_key_exists($les, $cache)) {
        return $cache[$les];
    }
    $pad = __DIR__ . "/lessen/les-$les-controletabel.php";
    if (!is_file($pad)) {
        return $cache[$les] = null;
    }
    $t = require $pad;
    if (!is_array($t) || empty($t['vragen'])) {
        return $cache[$les] = null;
    }
    $uit = ['waarden' => [], 'tolerantie' => []];
    foreach ($t['maten'] as $maat => $m) {
        $uit['tolerantie'][$maat] = (float)$m['tolerantie'];
    }
    foreach ($t['vragen'] as $v) {
        if (empty($v['rand'])) {
            $uit['waarden'][$v['ruimte_id'] . '|' . $v['week'] . '|' . $v['maat']] = (float)$v['waarde'];
        }
    }
    return $cache[$les] = $uit;
}

// ---------------------------------------------------------------- database

function pb_db(): PDO
{
    static $klaar = false;
    pb_zoeksleutel();
    $pdo = ap_db();
    if (!$klaar) {
        pb_tabellen($pdo);
        $klaar = true;
    }
    return $pdo;
}

function pb_tabellen(PDO $pdo): void
{
    if (pv_instelling('pb_schema') === PB_SCHEMA) {
        return;
    }
    $sqlite = ap_is_sqlite($pdo);
    $eind = $sqlite ? '' : ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';
    $id = $sqlite ? 'INTEGER PRIMARY KEY AUTOINCREMENT' : 'BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY';
    $tekst = $sqlite ? 'TEXT' : 'TEXT';
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_cohort (
        id $id,
        naam VARCHAR(80) NOT NULL,
        les INT NOT NULL,
        code_hash VARCHAR(255) NULL,
        status VARCHAR(12) NOT NULL DEFAULT 'open',
        gemaakt DATE NOT NULL,
        wis_na DATE NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_duo (
        id $id,
        cohort_id BIGINT NOT NULL,
        duonaam VARCHAR(60) NOT NULL,
        voornaam1 VARCHAR(40) NOT NULL,
        voornaam2 VARCHAR(40) NOT NULL,
        code_hash VARCHAR(255) NOT NULL,
        code_zoek CHAR(4) NOT NULL,
        gemaakt DATE NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_vink (
        duo_id BIGINT NOT NULL,
        les INT NOT NULL,
        moment VARCHAR(8) NOT NULL,
        datum DATE NOT NULL,
        PRIMARY KEY (duo_id, les, moment))$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_hulp (
        id $id,
        duo_id BIGINT NOT NULL,
        les INT NOT NULL,
        stap VARCHAR(8) NOT NULL,
        datum DATE NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_gesprek (
        id $id,
        duo_id BIGINT NOT NULL,
        les INT NOT NULL,
        stap VARCHAR(8) NOT NULL,
        rol CHAR(1) NOT NULL,
        tekst $tekst NOT NULL,
        datum DATE NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_vraag (
        id $id,
        duo_id BIGINT NOT NULL,
        les INT NOT NULL,
        nr TINYINT NOT NULL,
        ruimte VARCHAR(8) NOT NULL,
        week TINYINT NOT NULL,
        maat VARCHAR(30) NOT NULL,
        pogingen TINYINT NOT NULL DEFAULT 0,
        goed TINYINT NOT NULL DEFAULT 0,
        vervangen TINYINT NOT NULL DEFAULT 0,
        met_hint TINYINT NOT NULL DEFAULT 0,
        datum DATE NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_sessie (
        token_sha256 CHAR(64) NOT NULL PRIMARY KEY,
        duo_id BIGINT NOT NULL,
        geldig_tot DATE NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_kosten (
        maand CHAR(7) NOT NULL PRIMARY KEY,
        micro_euro BIGINT NOT NULL DEFAULT 0,
        antwoorden INT NOT NULL DEFAULT 0,
        extern_op TINYINT NOT NULL DEFAULT 0)$eind");
    foreach ([
        'CREATE INDEX pb_duo_cohort ON pb_duo (cohort_id)',
        'CREATE INDEX pb_duo_zoek ON pb_duo (code_zoek)',
        'CREATE INDEX pb_hulp_duo ON pb_hulp (duo_id, datum)',
        'CREATE INDEX pb_gesprek_duo ON pb_gesprek (duo_id, stap)',
        'CREATE INDEX pb_vraag_duo ON pb_vraag (duo_id, nr)',
    ] as $sql) {
        try {
            $pdo->exec($sql);
        } catch (Throwable $e) {
            // bestaat al
        }
    }
    // Schema 2 (les 1): één inschrijving en één duocode voor alle lessen. Per cohort de lessen die open staan; per duo de
    // antwoorden die het in de app typt, met de laatste uitslag en feedback; tellers per duo per dag.
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_cohort_les (
        cohort_id BIGINT NOT NULL,
        les INT NOT NULL,
        PRIMARY KEY (cohort_id, les))$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_antwoord (
        duo_id BIGINT NOT NULL,
        les INT NOT NULL,
        item VARCHAR(8) NOT NULL,
        velden $tekst NOT NULL,
        uitslag $tekst NULL,
        status VARCHAR(10) NOT NULL DEFAULT 'leeg',
        feedback INT NOT NULL DEFAULT 0,
        datum DATE NOT NULL,
        PRIMARY KEY (duo_id, les, item))$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS pb_teller (
        duo_id BIGINT NOT NULL,
        soort VARCHAR(8) NOT NULL,
        datum DATE NOT NULL,
        aantal INT NOT NULL DEFAULT 0,
        PRIMARY KEY (duo_id, soort, datum))$eind");
    pb_migreer_lessen($pdo);
    pv_zet_instelling('pb_schema', PB_SCHEMA);
}

/**
 * Migratie naar schema 2: elk cohort zonder rij in pb_cohort_les krijgt de lessen die er nu zijn tot en met zijn eigen
 * les (een cohort van les 2 krijgt les 1 en 2), zodat bestaande duo's les 1 kunnen kiezen. pb_cohort.les blijft staan
 * als de les waar een duo zonder keuze in komt (oude browsers die nog geen les meesturen). Mag vaker draaien.
 */
function pb_migreer_lessen(PDO $pdo): void
{
    $bestaand = pb_lessen();
    $zonder = $pdo->query('SELECT id, les FROM pb_cohort WHERE id NOT IN (SELECT cohort_id FROM pb_cohort_les)')->fetchAll();
    $ins = $pdo->prepare('INSERT INTO pb_cohort_les (cohort_id, les) VALUES (?, ?)');
    foreach ($zonder as $c) {
        $lessen = array_values(array_filter($bestaand, fn($n) => $n <= (int)$c['les']));
        if (!in_array((int)$c['les'], $lessen, true)) {
            $lessen[] = (int)$c['les'];
        }
        foreach ($lessen as $n) {
            try {
                $ins->execute([$c['id'], $n]);
            } catch (Throwable $e) {
                // tegelijk door een ander verzoek gedaan
            }
        }
    }
}

/** De lessen die voor een cohort open staan, oplopend. */
function pb_cohort_lessen(int $cohort_id): array
{
    $st = pb_db()->prepare('SELECT les FROM pb_cohort_les WHERE cohort_id = ? ORDER BY les');
    $st->execute([$cohort_id]);
    return array_map('intval', $st->fetchAll(PDO::FETCH_COLUMN));
}

/** Zet de open lessen van een cohort; de eerste wordt de les zonder keuze. */
function pb_zet_cohort_lessen(int $cohort_id, array $lessen): void
{
    $pdo = pb_db();
    $pdo->beginTransaction();
    $pdo->prepare('DELETE FROM pb_cohort_les WHERE cohort_id = ?')->execute([$cohort_id]);
    $ins = $pdo->prepare('INSERT INTO pb_cohort_les (cohort_id, les) VALUES (?, ?)');
    foreach ($lessen as $n) {
        $ins->execute([$cohort_id, $n]);
    }
    $pdo->prepare('UPDATE pb_cohort SET les = ? WHERE id = ?')->execute([min($lessen), $cohort_id]);
    $pdo->commit();
}

/** Telt één keer mee voor een duo vandaag; false als het maximum van vandaag al bereikt is. */
function pb_tel_vandaag(int $duo_id, string $soort, int $max): bool
{
    $pdo = pb_db();
    $st = $pdo->prepare('SELECT aantal FROM pb_teller WHERE duo_id = ? AND soort = ? AND datum = ?');
    $st->execute([$duo_id, $soort, pb_vandaag()]);
    $n = $st->fetchColumn();
    if ($n === false) {
        try {
            $pdo->prepare('INSERT INTO pb_teller (duo_id, soort, datum, aantal) VALUES (?, ?, ?, 1)')->execute([$duo_id, $soort, pb_vandaag()]);
            return true;
        } catch (Throwable $e) {
            $n = 0;
        }
    }
    if ((int)$n >= $max) {
        return false;
    }
    $pdo->prepare('UPDATE pb_teller SET aantal = aantal + 1 WHERE duo_id = ? AND soort = ? AND datum = ?')->execute([$duo_id, $soort, pb_vandaag()]);
    return true;
}

function pb_vandaag(int $plus_dagen = 0): string
{
    return date('Y-m-d', time() + $plus_dagen * 86400);
}

function pb_maand(): string
{
    return date('Y-m');
}

// ---------------------------------------------------------------- codes en hashes

/** Argon2id via password_hash; zonder libargon2 in PHP via libsodium (zelfde soort hash). */
function pb_hash(string $code): string
{
    if (defined('PASSWORD_ARGON2ID')) {
        return password_hash($code, PASSWORD_ARGON2ID, ['memory_cost' => 19456, 'time_cost' => 2, 'threads' => 1]);
    }
    return sodium_crypto_pwhash_str($code, 2, 19456 * 1024);
}

function pb_controleer_hash(string $code, string $hash): bool
{
    if (str_starts_with($hash, '$argon2id$') && !defined('PASSWORD_ARGON2ID') && function_exists('sodium_crypto_pwhash_str_verify')) {
        return sodium_crypto_pwhash_str_verify($hash, $code);
    }
    return password_verify($code, $hash);
}

/**
 * Een korte zoekwaarde naast de hash, zodat de server bij een duocode niet elke hash hoeft te proberen. HMAC met een
 * sleutel uit de config (niet uit de database), afgekapt tot 16 bits: zonder die sleutel zegt hij niets over de code.
 */
function pb_zoek(string $code): string
{
    return substr(hash_hmac('sha256', $code, pb_zoeksleutel()), 0, 4);
}

/**
 * De zoeksleutel uit de config. Zonder zoeksleutel start de app niet: een sleutel die er later bij komt, maakt elke
 * bestaande duocode onvindbaar. Met de echte tutor moet hij minstens 32 tekens zijn.
 */
function pb_zoeksleutel(): string
{
    $sleutel = trim((string)pb_cfg()['zoeksleutel']);
    $min = pb_tutor_modus() === 'echt' ? 32 : 1;
    if (strlen($sleutel) < $min) {
        error_log("power-bi-lessen: zoeksleutel ontbreekt of is korter dan $min tekens in apps-config.php ('nakijkapp' => ['zoeksleutel' => ...])");
        ap_fout(503, 'De nakijkapp is nog niet ingesteld. Meld het je docent.', 'niet_ingesteld');
    }
    return $sleutel;
}

/**
 * Woorden voor de duocode. Samen met twee cijfers: 163 x 163 x 90 = ongeveer 2,4 miljoen codes. Hardop te zeggen en
 * over te schrijven: 3 tot 6 letters, geen IJ, EI, AU of OU (klinkt hetzelfde, schrijf je anders), geen C, Q, X of Y,
 * en geen twee woorden die één letter verschillen (zoals PEER en PIER). Twee woorden aan elkaar geschreven zijn
 * altijd maar op één manier te splitsen; tests/server_test.py controleert dat.
 */
const PB_WOORDEN = ['TULP', 'ROOS', 'BEUK', 'LINDE', 'WILG', 'KLAVER', 'MAAN', 'STER', 'WOLK', 'BERG', 'DUIN', 'MEER', 'HAVEN',
    'MOLEN', 'SLOOT', 'KADE', 'BAAI', 'VOS', 'DAS', 'OTTER', 'VINK', 'UIL', 'ZWAAN', 'HAAS', 'EGEL', 'BEVER',
    'ZALM', 'HARING', 'PAARD', 'KOE', 'PANDA', 'LEEUW', 'ZEBRA', 'KAMEEL', 'MEREL', 'APPEL', 'KERS', 'PRUIM',
    'DADEL', 'MANGO', 'KIWI', 'NOOT', 'PEPER', 'MUNT', 'SALIE', 'DILLE', 'RIET', 'VAREN', 'BOOG', 'ANKER', 'ROER',
    'MAST', 'KOMPAS', 'KAART', 'VUUR', 'GLOED', 'SNEEUW', 'HAGEL', 'STORM', 'BRIES', 'WIND', 'REGEN', 'ZAND',
    'GRIND', 'ZILVER', 'KOPER', 'STAAL', 'PAREL', 'KORAAL', 'FLUIT', 'HOORN', 'HARP', 'GONG', 'WALS', 'POLKA',
    'SAMBA', 'RUMBA', 'BLOK', 'KUBUS', 'PRISMA', 'HOEK', 'ZAAG', 'HAMER', 'TANG', 'WIEL', 'RADAR', 'SONAR',
    'LASER', 'KNOP', 'BLAD', 'WORTEL', 'STAM', 'TAK', 'TOREN', 'BRUG', 'FAKKEL', 'BANAAN', 'MELOEN', 'DRUIF',
    'TOMAAT', 'KANO', 'SLOEP', 'VLOT', 'GITAAR', 'PIANO', 'ORGEL', 'VIOOL', 'BANJO', 'TUBA', 'BAZUIN', 'KOMEET',
    'RAKET', 'MARS', 'VENUS', 'PLUTO', 'ORKAAN', 'DONDER', 'HEUVEL', 'KLIF', 'GROT', 'OASE', 'DELTA', 'FJORD',
    'MAGMA', 'MUIS', 'RAT', 'BIZON', 'ELAND', 'HERT', 'WEZEL', 'WALRUS', 'ORKA', 'KRAAI', 'EKSTER', 'FAZANT',
    'ZWALUW', 'AREND', 'VALK', 'HAVIK', 'KOKOS', 'PERZIK', 'LIMOEN', 'PAPAJA', 'HONING', 'SIROOP', 'SUIKER',
    'GEMBER', 'TAFEL', 'STOEL', 'BANK', 'DEKEN', 'KUSSEN', 'WEKKER', 'RADIO', 'PASSER', 'PAPIER', 'ATLAS', 'GLOBE',
    'HELM', 'LAARS', 'BROEK', 'HEMD', 'TRUI'];

/** Duocode: twee verschillende woorden en twee cijfers, zoals TULP-ROOS-38. */
function pb_nieuwe_duocode(): string
{
    $n = count(PB_WOORDEN);
    $a = random_int(0, $n - 1);
    $b = random_int(0, $n - 2);
    if ($b >= $a) {
        $b++;
    }
    return PB_WOORDEN[$a] . '-' . PB_WOORDEN[$b] . '-' . random_int(10, 99);
}

/** Inschrijfcode: één woord dat de docent hardop zegt. Zonder eigen woord kiest de server er een. */
function pb_nieuwe_inschrijfcode(): string
{
    $lang = array_values(array_filter(PB_WOORDEN, fn($w) => strlen($w) >= 5));
    return $lang[random_int(0, count($lang) - 1)] . $lang[random_int(0, count($lang) - 1)];
}

/** Hoofdletters, alleen letters. Leeg als het geen woord van 4 tot 24 letters is. */
function pb_schone_inschrijfcode($invoer): string
{
    if (!is_string($invoer)) {
        return '';
    }
    $s = strtoupper(preg_replace('/[\s\-.]+/', '', $invoer));
    return preg_match('/^[A-Z]{4,24}$/', $s) ? $s : '';
}

/**
 * "tulp roos 38", "Tulp-Roos38" en "TULPROOS38" worden "TULP-ROOS-38". Zonder streepjes splitst de server op de
 * woordenlijst. Leeg als het er niet op lijkt.
 */
function pb_schone_duocode($invoer): string
{
    if (!is_string($invoer) || strlen($invoer) > 40) {
        return '';
    }
    $s = strtoupper(trim($invoer));
    if (preg_match('/^([A-Z]{3,6})[\s\-.]+([A-Z]{3,6})[\s\-.]*(\d{2})$/', $s, $m)) {
        return $m[1] . '-' . $m[2] . '-' . $m[3];
    }
    $s = preg_replace('/[\s\-.]+/', '', $s);
    if (!preg_match('/^([A-Z]{6,12})(\d{2})$/', $s, $m)) {
        return '';
    }
    foreach (PB_WOORDEN as $w) {
        if (str_starts_with($m[1], $w) && in_array(substr($m[1], strlen($w)), PB_WOORDEN, true)) {
            return $w . '-' . substr($m[1], strlen($w)) . '-' . $m[2];
        }
    }
    return '';
}

/** Een naam uit een veld: spaties samengenomen, geen stuurtekens, hooguit $max tekens. Leeg als ongeldig. */
function pb_schone_naam($invoer, int $max): string
{
    if (!is_string($invoer)) {
        return '';
    }
    $s = trim(preg_replace('/\s+/u', ' ', $invoer));
    if ($s === '' || mb_strlen($s, 'UTF-8') > $max || preg_match('/[\p{C}<>]/u', $s)) {
        return '';
    }
    return $s;
}

// ---------------------------------------------------------------- verzoeken

function pb_eis_eigen_herkomst(): void
{
    $herkomst = (string)($_SERVER['HTTP_ORIGIN'] ?? '');
    if ($herkomst !== '' && parse_url($herkomst, PHP_URL_HOST) !== parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
        ap_fout(403, 'Verzoek van een andere site.', 'herkomst');
    }
}

function pb_rem_vol(string $sleutel, int $max, int $venster): bool
{
    $st = ap_db()->prepare('SELECT venster, aantal FROM ap_rem WHERE sleutel = ?');
    $st->execute([$sleutel]);
    $rij = $st->fetch();
    return $rij && (int)$rij['venster'] === intdiv(time(), $venster) * $venster && (int)$rij['aantal'] >= $max;
}

// ---------------------------------------------------------------- sessies

function pb_nieuwe_sessie(int $duo_id): string
{
    $token = rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
    pb_db()->prepare('INSERT INTO pb_sessie (token_sha256, duo_id, geldig_tot) VALUES (?, ?, ?)')
        ->execute([hash('sha256', $token), $duo_id, pb_vandaag(PB_SESSIE_DAGEN)]);
    return $token;
}

/** Het duo bij de sessie uit het verzoek, met cohort. Stopt met 401 als de sessie niet (meer) geldt. */
function pb_duo_uit_sessie(array $in): array
{
    $token = $in['sessie'] ?? null;
    if (!is_string($token) || $token === '' || strlen($token) > 100) {
        ap_fout(401, 'Vul jullie duocode opnieuw in.', 'sessie');
    }
    pb_opruimen();
    $st = pb_db()->prepare('SELECT d.*, c.les, c.status AS cohort_status, c.naam AS cohort_naam, c.wis_na AS cohort_wis_na FROM pb_sessie s
        JOIN pb_duo d ON d.id = s.duo_id JOIN pb_cohort c ON c.id = d.cohort_id
        WHERE s.token_sha256 = ? AND s.geldig_tot >= ?');
    $st->execute([hash('sha256', $token), pb_vandaag()]);
    $duo = $st->fetch();
    if (!$duo) {
        ap_fout(401, 'Vul jullie duocode opnieuw in.', 'sessie');
    }
    if ($duo['cohort_wis_na'] < pb_vandaag()) {
        // Voorbij de wisdatum: nu meteen alles van dit cohort weg, ook als het opruimen van dit uur al was.
        pb_wis_cohort((int)$duo['cohort_id']);
        ap_fout(410, 'Deze les is afgelopen en de gegevens zijn gewist.', 'gewist');
    }
    if ($duo['cohort_status'] === 'gesloten') {
        ap_fout(410, 'Deze les is afgesloten.', 'gesloten');
    }
    // De les waar het duo aan werkt: uit het verzoek als die meekomt (en open staat voor het cohort), anders de les van
    // het cohort. Oude browsers sturen geen les mee en blijven zo in hun les.
    $duo['cohort_les'] = (int)$duo['les'];
    if (array_key_exists('les', $in) && $in['les'] !== null) {
        if (!is_int($in['les']) || !in_array($in['les'], pb_cohort_lessen((int)$duo['cohort_id']), true) || !pb_les($in['les'])) {
            ap_fout(409, 'Deze les staat nog niet open.', 'les_dicht');
        }
        $duo['les'] = $in['les'];
    }
    return $duo;
}

/** Stopt met 409 als de les van het duo niet van deze soort is (stappen voor les 2, vragen voor les 1). */
function pb_eis_soort(array $duo, string $soort): array
{
    $les = pb_les((int)$duo['les']);
    if (!$les || ($les['soort'] ?? 'stappen') !== $soort) {
        ap_fout(409, 'Dit hoort niet bij deze les.', 'soort');
    }
    return $les;
}

/** Zoekt een duo bij een (schone) duocode. Probeert alleen de hashes met dezelfde zoekwaarde. */
function pb_duo_op_code(string $code): ?array
{
    $st = pb_db()->prepare('SELECT * FROM pb_duo WHERE code_zoek = ?');
    $st->execute([pb_zoek($code)]);
    foreach ($st->fetchAll() as $d) {
        if (pb_controleer_hash($code, $d['code_hash'])) {
            return $d;
        }
    }
    return null;
}

function pb_duocode_vrij(string $code): bool
{
    return pb_duo_op_code($code) === null;
}

// ---------------------------------------------------------------- opruimen

/**
 * Wist gesprekken na 14 dagen, verlopen sessies, en alle duogegevens van cohorten voorbij hun wisdatum. Draait bij elk
 * verzoek van een duo en bij beheer, hooguit eens per uur; beheer.php {actie: opruimen} draait hem altijd, zodat het
 * wissen niet van verkeer afhangt (dagelijks vanaf de Mac). Geeft wat er weg is.
 */
function pb_opruimen(bool $altijd = false): array
{
    $uit = ['gesprekken' => 0, 'sessies' => 0, 'cohorten' => 0, 'duos' => 0];
    $laatst = (int)(pv_instelling('pb_opgeruimd') ?? 0);
    if (!$altijd && time() - $laatst < 3600) {
        return $uit;
    }
    $pdo = pb_db();
    $st = $pdo->prepare('DELETE FROM pb_gesprek WHERE datum < ?');
    $st->execute([pb_vandaag(-PB_GESPREK_DAGEN)]);
    $uit['gesprekken'] = $st->rowCount();
    $st = $pdo->prepare('DELETE FROM pb_sessie WHERE geldig_tot < ? OR duo_id NOT IN (SELECT id FROM pb_duo)');
    $st->execute([pb_vandaag()]);
    $uit['sessies'] = $st->rowCount();
    $pdo->prepare('DELETE FROM pb_teller WHERE datum < ?')->execute([pb_vandaag()]);
    $st = $pdo->prepare('SELECT id FROM pb_cohort WHERE wis_na < ?');
    $st->execute([pb_vandaag()]);
    foreach ($st->fetchAll(PDO::FETCH_COLUMN) as $id) {
        $uit['duos'] += pb_wis_cohort((int)$id);
        $uit['cohorten']++;
    }
    pv_zet_instelling('pb_opgeruimd', (string)time());
    return $uit;
}

function pb_wis_duo(int $duo_id): void
{
    $pdo = pb_db();
    foreach (['pb_vink', 'pb_hulp', 'pb_gesprek', 'pb_vraag', 'pb_sessie', 'pb_antwoord', 'pb_teller'] as $t) {
        $pdo->prepare("DELETE FROM $t WHERE duo_id = ?")->execute([$duo_id]);
    }
    $pdo->prepare('DELETE FROM pb_duo WHERE id = ?')->execute([$duo_id]);
}

/** Wist een cohort en alles van zijn duo's. Geeft het aantal gewiste duo's. */
function pb_wis_cohort(int $cohort_id): int
{
    $pdo = pb_db();
    $pdo->beginTransaction();
    $st = $pdo->prepare('SELECT id FROM pb_duo WHERE cohort_id = ?');
    $st->execute([$cohort_id]);
    $ids = $st->fetchAll(PDO::FETCH_COLUMN);
    foreach ($ids as $id) {
        pb_wis_duo((int)$id);
    }
    $pdo->prepare('DELETE FROM pb_cohort_les WHERE cohort_id = ?')->execute([$cohort_id]);
    $pdo->prepare('DELETE FROM pb_cohort WHERE id = ?')->execute([$cohort_id]);
    $pdo->commit();
    return count($ids);
}

// ---------------------------------------------------------------- stand van een duo

function pb_afgevinkt(int $duo_id, int $les): array
{
    $st = pb_db()->prepare('SELECT moment FROM pb_vink WHERE duo_id = ? AND les = ?');
    $st->execute([$duo_id, $les]);
    return $st->fetchAll(PDO::FETCH_COLUMN);
}

/** Het eerstvolgende moment dat nog niet is afgevinkt, of null als alles klaar is. */
function pb_volgend_moment(array $les, array $afgevinkt): ?array
{
    foreach (pb_momenten($les) as $m) {
        if (!in_array($m['id'], $afgevinkt, true)) {
            return $m;
        }
    }
    return null;
}

/** Hoeveel hulpvragen het duo nog heeft: vandaag, bij deze stap, en of de maand op is. */
function pb_tegoed(int $duo_id, int $les, ?string $stap): array
{
    $pdo = pb_db();
    $st = $pdo->prepare('SELECT COUNT(*) FROM pb_hulp WHERE duo_id = ? AND datum = ?');
    $st->execute([$duo_id, pb_vandaag()]);
    $dag = PB_HULP_PER_DAG - (int)$st->fetchColumn();
    $bij_stap = PB_HULP_PER_STAP;
    if ($stap !== null) {
        $st = $pdo->prepare('SELECT COUNT(*) FROM pb_hulp WHERE duo_id = ? AND les = ? AND stap = ?');
        $st->execute([$duo_id, $les, $stap]);
        $bij_stap = PB_HULP_PER_STAP - (int)$st->fetchColumn();
    }
    $over = max(0, min($dag, $bij_stap));
    $reden = null;
    if (pb_maand_op()) {
        $reden = 'maand';
        $over = 0;
    } elseif ($dag <= 0) {
        $reden = 'dag';
    } elseif ($bij_stap <= 0) {
        $reden = 'stap';
    }
    return ['over' => $over, 'op' => $reden];
}

/** Controlevragen van het duo: de lopende vraag per nummer (de vervangen vragen niet). */
function pb_vragen(int $duo_id, int $les): array
{
    $st = pb_db()->prepare('SELECT * FROM pb_vraag WHERE duo_id = ? AND les = ? AND vervangen = 0 ORDER BY nr');
    $st->execute([$duo_id, $les]);
    return $st->fetchAll();
}

/** Maakt de controlevragen bij het eerste bezoek na de laatste stap: verschillende maten, willekeurige ruimte en week. */
function pb_maak_vragen(array $duo, array $les): void
{
    if (pb_vragen((int)$duo['id'], (int)$les['les'])) {
        return;
    }
    $c = $les['controle'];
    $maten = array_keys($c['maten']);
    shuffle($maten);
    $pdo = pb_db();
    $st = $pdo->prepare('INSERT INTO pb_vraag (duo_id, les, nr, ruimte, week, maat, datum) VALUES (?, ?, ?, ?, ?, ?, ?)');
    for ($nr = 1; $nr <= $c['aantal']; $nr++) {
        $maat = $maten[($nr - 1) % count($maten)];
        $opties = pb_vraag_opties($les, $maat, []);
        [$r, $w] = $opties[array_rand($opties)];
        $st->execute([$duo['id'], $les['les'], $nr, $r, $w, $maat, pb_vandaag()]);
    }
}

/** Ruimte en week voor een maat die in de controletabel staan (zonder randgevallen) en die het duo nog niet had. */
function pb_vraag_opties(array $les, string $maat, array $gehad): array
{
    $tabel = pb_controletabel((int)$les['les']);
    $opties = [];
    foreach (array_keys($les['controle']['ruimtes']) as $r) {
        foreach ($les['controle']['weken'] as $w) {
            if (isset($tabel['waarden']["$r|$w|$maat"]) && !isset($gehad["$r|$w|$maat"])) {
                $opties[] = [$r, $w];
            }
        }
    }
    return $opties;
}

/** Nieuwe vraag op hetzelfde nummer na drie fouten: dezelfde maat, een andere combinatie van ruimte en week. */
function pb_vervang_vraag(array $vraag, array $les): void
{
    $pdo = pb_db();
    $st = $pdo->prepare('SELECT ruimte, week, maat FROM pb_vraag WHERE duo_id = ? AND les = ?');
    $st->execute([$vraag['duo_id'], $les['les']]);
    $gehad = [];
    foreach ($st->fetchAll() as $r) {
        $gehad[$r['ruimte'] . '|' . $r['week'] . '|' . $r['maat']] = true;
    }
    $opties = pb_vraag_opties($les, $vraag['maat'], $gehad) ?: pb_vraag_opties($les, $vraag['maat'], []);
    [$r, $w] = $opties[array_rand($opties)];
    $pdo->beginTransaction();
    $pdo->prepare('UPDATE pb_vraag SET vervangen = 1 WHERE id = ?')->execute([$vraag['id']]);
    $pdo->prepare('INSERT INTO pb_vraag (duo_id, les, nr, ruimte, week, maat, met_hint, datum) VALUES (?, ?, ?, ?, ?, ?, 1, ?)')
        ->execute([$vraag['duo_id'], $les['les'], $vraag['nr'], $r, $w, $vraag['maat'], pb_vandaag()]);
    $pdo->commit();
}

/** Een getal zoals een student het typt: "47,8", "47.8", "7.811" of "7811". Null als het geen getal is. */
function pb_lees_getal($invoer, int $decimalen): ?float
{
    if (!is_string($invoer) && !is_int($invoer) && !is_float($invoer)) {
        return null;
    }
    $s = str_replace(["\u{2212}", ' ', "\u{00A0}", '°C', '%'], ['-', '', '', '', ''], trim((string)$invoer));
    if ($decimalen === 0) {
        // een aantal: punten en komma's zijn scheidingstekens voor duizendtallen
        $s = str_replace(['.', ','], '', $s);
        return preg_match('/^-?\d{1,9}$/', $s) ? (float)$s : null;
    }
    if (substr_count($s, ',') + substr_count($s, '.') > 1) {
        return null;
    }
    $s = str_replace(',', '.', $s);
    return preg_match('/^-?\d{1,6}(\.\d{1,4})?$/', $s) ? (float)$s : null;
}

/** Nakijkregel uit de controletabel: |antwoord - waarde| <= tolerantie (per maat) + 1e-9. */
function pb_klopt(float $antwoord, float $waarde, float $tolerantie): bool
{
    return abs($antwoord - $waarde) <= $tolerantie + 1e-9;
}

/** De vraag zoals de browser hem ziet: zonder het antwoord. */
function pb_vraag_openbaar(array $v, array $les): array
{
    $c = $les['controle'];
    $maat = $c['maten'][$v['maat']];
    $ruimte = $c['ruimtes'][$v['ruimte']];
    $uit = [
        'nr' => (int)$v['nr'],
        'vraag' => strtr($maat['vraag'], ['{ruimte}' => $ruimte['naam'], '{week}' => (string)$v['week']]),
        'eenheid' => $maat['eenheid'],
        'decimalen' => $maat['decimalen'],
        'pogingen' => (int)$v['pogingen'],
        'max' => $c['pogingen'],
        'goed' => (bool)$v['goed'],
        'nieuw' => (bool)$v['met_hint'],
        'hint' => $v['met_hint'] ? $maat['hint'] : null,
    ];
    return $uit;
}

/** De hele stand voor de browser. */
function pb_stand(array $duo): array
{
    $les = pb_les((int)$duo['les']);
    if (!$les) {
        ap_fout(503, 'Deze les staat nog niet klaar.', 'les');
    }
    if (($les['soort'] ?? 'stappen') === 'vragen') {
        return pb_stand_vragen($duo, $les) + ['keuze' => pb_keuze($duo)];
    }
    $afgevinkt = pb_afgevinkt((int)$duo['id'], (int)$duo['les']);
    $volgend = pb_volgend_moment($les, $afgevinkt);
    $uit = [
        'ok' => true,
        'duo' => ['naam' => $duo['duonaam'], 'voornaam1' => $duo['voornaam1'], 'voornaam2' => $duo['voornaam2']],
        'les' => pb_les_openbaar($les),
        'afgevinkt' => $afgevinkt,
        'volgend' => $volgend,
        'tutor' => pb_tutor_modus(),
        'tegoed' => $volgend ? pb_tegoed((int)$duo['id'], (int)$duo['les'], $volgend['stap']) : null,
        'vragen' => null,
        'klaar' => false,
        'soort' => 'stappen',
        'keuze' => pb_keuze($duo),
    ];
    if ($volgend === null) {
        if (pb_controletabel((int)$duo['les']) === null) {
            $uit['vragen_niet_klaar'] = true;
            return $uit;
        }
        pb_maak_vragen($duo, $les);
        $vragen = pb_vragen((int)$duo['id'], (int)$duo['les']);
        $uit['vragen'] = array_map(fn($v) => pb_vraag_openbaar($v, $les), $vragen);
        $uit['klaar'] = count($vragen) === $les['controle']['aantal'] && !array_filter($vragen, fn($v) => !$v['goed']);
    }
    return $uit;
}

/**
 * De lessenkeuze: elke les die er is, met of hij open staat voor het cohort van het duo en hoe ver het duo is.
 * {les, titel, sub, open, stand: tekst, klaar, begonnen}
 */
function pb_keuze(array $duo): array
{
    $open = pb_cohort_lessen((int)$duo['cohort_id']);
    $uit = [];
    foreach (pb_lessen() as $n) {
        $l = pb_les($n);
        $r = ['les' => $n, 'titel' => $l['titel'], 'sub' => $l['sub'] ?? '', 'open' => in_array($n, $open, true), 'stand' => '', 'klaar' => false, 'begonnen' => false];
        if ($r['open']) {
            $v = pb_voortgang((int)$duo['id'], $l);
            $r['klaar'] = $v['klaar'];
            $r['begonnen'] = $v['begonnen'];
            $r['stand'] = $v['klaar'] ? 'Klaar om in te leveren' : $v['tekst'];
        }
        $uit[] = $r;
    }
    return $uit;
}

/**
 * Hoe ver een duo is in een les, voor de lessenkeuze en het docentoverzicht. Les met stappen: stappen klaar en
 * controlevragen goed. Les met vragen: de items (vragen, fout 1 en 2) die klaar zijn en de controlevraag van deel 2.
 * {klaar, begonnen, tekst, stappen_klaar: [id], controle_goed, controle_totaal, stappen: [{id, titel}]}
 */
function pb_voortgang(int $duo_id, array $les): array
{
    $n = (int)$les['les'];
    $vragen = pb_vragen($duo_id, $n);
    $goed = count(array_filter($vragen, fn($v) => (int)$v['goed'] === 1));
    if (($les['soort'] ?? 'stappen') === 'vragen') {
        $st = pb_db()->prepare('SELECT item, status FROM pb_antwoord WHERE duo_id = ? AND les = ?');
        $st->execute([$duo_id, $n]);
        $status = $st->fetchAll(PDO::FETCH_KEY_PAIR);
        $stappen = [];
        foreach ($les['vragen'] as $v) {
            $stappen[] = ['id' => (string)$v['nr'], 'titel' => $v['titel'], 'item' => $v['id']];
        }
        $stappen[] = ['id' => 'F1', 'titel' => 'Fout 1 beschreven', 'item' => 'f1'];
        $stappen[] = ['id' => 'F2', 'titel' => 'Fout 2 beschreven', 'item' => 'f2'];
        $klaar_ids = array_values(array_map(fn($s) => $s['id'], array_filter($stappen, fn($s) => ($status[$s['item']] ?? '') === 'klaar')));
        $vragen_klaar = count(array_filter($les['vragen'], fn($v) => ($status[$v['id']] ?? '') === 'klaar'));
        $klaar = count($klaar_ids) === count($stappen) && $goed === 1;
        $hulp = pb_db()->prepare('SELECT COUNT(*) FROM pb_hulp WHERE duo_id = ? AND les = ?');
        $hulp->execute([$duo_id, $n]);
        // De controlevraag van deel 2 ontstaat al bij het eerste bekijken; begonnen is pas iets invullen of hulp vragen.
        $geprobeerd = array_filter($vragen, fn($v) => (int)$v['pogingen'] > 0) !== [];
        return ['klaar' => $klaar, 'begonnen' => $status !== [] || $geprobeerd || (int)$hulp->fetchColumn() > 0,
                'tekst' => $vragen_klaar . ' van ' . count($les['vragen']) . ' vragen',
                'stappen_klaar' => $klaar_ids, 'controle_goed' => $goed, 'controle_totaal' => 1,
                'stappen' => array_map(fn($s) => ['id' => $s['id'], 'titel' => $s['titel']], $stappen),
                // zoals de app telt: "x van 8 vragen" in deel 1, de twee fouten apart in deel 2
                'groepen' => [['naam' => 'vragen', 'ids' => array_map(fn($v) => (string)$v['nr'], $les['vragen'])],
                    ['naam' => 'fouten', 'ids' => ['F1', 'F2']]]];
    }
    $afgevinkt = pb_afgevinkt($duo_id, $n);
    $klaar_ids = [];
    foreach ($les['stappen'] as $s) {
        if (!array_diff(array_column($s['momenten'], 'id'), $afgevinkt)) {
            $klaar_ids[] = $s['id'];
        }
    }
    $totaal = (int)$les['controle']['aantal'];
    $hulp = pb_db()->prepare('SELECT COUNT(*) FROM pb_hulp WHERE duo_id = ? AND les = ?');
    $hulp->execute([$duo_id, $n]);
    return ['klaar' => count($klaar_ids) === count($les['stappen']) && $totaal > 0 && $goed === $totaal,
            'begonnen' => $afgevinkt !== [] || (int)$hulp->fetchColumn() > 0,
            'tekst' => count($klaar_ids) . ' van ' . count($les['stappen']) . ' stappen',
            'stappen_klaar' => $klaar_ids, 'controle_goed' => $goed, 'controle_totaal' => $totaal,
            'stappen' => array_map(fn($s) => ['id' => $s['id'], 'titel' => $s['titel']], $les['stappen'])];
}

// ---------------------------------------------------------------- kosten

/** Prijzen in dollars per miljoen tokens (Anthropic, november 2026). Onbekend model: de duurste regel, aan de veilige kant. */
const PB_PRIJZEN = [
    'claude-sonnet-5-5' => ['in' => 2.00, 'uit' => 10.00, 'lezen' => 0.20, 'schrijven' => 2.50],
    'claude-haiku-5-5' => ['in' => 0.10, 'uit' => 0.50, 'lezen' => 0.01, 'schrijven' => 0.125],
    '*' => ['in' => 4.00, 'uit' => 20.00, 'lezen' => 0.40, 'schrijven' => 5.00],
];

function pb_kosten_micro_euro(string $model, int $in, int $uit, int $lezen, int $schrijven): int
{
    $p = PB_PRIJZEN[$model] ?? PB_PRIJZEN['*'];
    $dollar = ($in * $p['in'] + $uit * $p['uit'] + $lezen * $p['lezen'] + $schrijven * $p['schrijven']) / 1e6;
    return (int)ceil($dollar * (float)pb_cfg()['koers_usd_eur'] * 1e6);
}

function pb_kosten_rij(): array
{
    $pdo = pb_db();
    $st = $pdo->prepare('SELECT * FROM pb_kosten WHERE maand = ?');
    $st->execute([pb_maand()]);
    $rij = $st->fetch();
    if (!$rij) {
        try {
            $pdo->prepare('INSERT INTO pb_kosten (maand, micro_euro, antwoorden, extern_op) VALUES (?, 0, 0, 0)')->execute([pb_maand()]);
        } catch (Throwable $e) {
            // tegelijk aangemaakt
        }
        $rij = ['maand' => pb_maand(), 'micro_euro' => 0, 'antwoorden' => 0, 'extern_op' => 0];
    }
    return $rij;
}

function pb_tel_kosten(int $micro_euro, bool $antwoord): void
{
    pb_kosten_rij();
    pb_db()->prepare('UPDATE pb_kosten SET micro_euro = micro_euro + ?, antwoorden = antwoorden + ? WHERE maand = ?')
        ->execute([$micro_euro, $antwoord ? 1 : 0, pb_maand()]);
}

function pb_markeer_extern_op(): void
{
    pb_kosten_rij();
    pb_db()->prepare('UPDATE pb_kosten SET extern_op = 1 WHERE maand = ?')->execute([pb_maand()]);
}

function pb_maand_op(): bool
{
    $r = pb_kosten_rij();
    return (int)$r['extern_op'] === 1 || (int)$r['micro_euro'] >= (int)round((float)pb_cfg()['maandplafond_euro'] * 1e6);
}

function pb_kosten_stand(): array
{
    $r = pb_kosten_rij();
    $plafond = (float)pb_cfg()['maandplafond_euro'];
    $euro = (int)$r['micro_euro'] / 1e6;
    return [
        'maand' => $r['maand'],
        'euro' => round($euro, 2),
        'plafond_euro' => $plafond,
        'antwoorden' => (int)$r['antwoorden'],
        'melding' => $euro >= $plafond * PB_MELDING_FRACTIE,
        'op' => pb_maand_op(),
        'extern_op' => (int)$r['extern_op'] === 1,
        'tutor' => pb_tutor_modus(),
    ];
}

require __DIR__ . '/vragen.php';
