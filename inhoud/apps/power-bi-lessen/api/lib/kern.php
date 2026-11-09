<?php
/**
 * Power BI-lessen (nakijk- en hulpapp): kern voor de API. Bouwt op de gedeelde kern van de apps (config buiten de
 * webroot, ap_db, ap_rem, pv_instelling).
 *
 * Wat de server bewaart, per cohort: naam, les, de Argon2id-hash van de inschrijfcode en de wisdatum. Per duo: de
 * duonaam, twee voornamen, de Argon2id-hash van de duocode, het afvinken en de controlevragen, steeds met alleen een
 * datum. Hulpvragen tellen als rij met een datum. Het gesprek met de tutor staat hooguit 14 dagen, alleen als
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

const PB_SCHEMA = '1';
const PB_GESPREK_DAGEN = 14;
const PB_SESSIE_DAGEN = 1;            // een sessie geldt vandaag en morgen; daarna opnieuw de duocode
const PB_STANDAARD_WIS_DAGEN = 120;   // als beheer geen wisdatum meegeeft
const PB_MAX_VRAAG = 500;             // tekens per hulpvraag
const PB_HULP_PER_DAG = 25;
const PB_HULP_PER_STAP = 8;
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
    pv_zet_instelling('pb_schema', PB_SCHEMA);
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
    $sleutel = (string)pb_cfg()['zoeksleutel'];
    if ($sleutel === '') {
        $sleutel = 'pb-zoek|' . (string)(ap_config()['postvak_sleutel_sha256'] ?? '');
    }
    return substr(hash_hmac('sha256', $code, $sleutel), 0, 4);
}

const PB_WOORDEN = ['TULP', 'ROOS', 'BEUK', 'LINDE', 'WILG', 'DEN', 'HAZEL', 'KLAVER', 'MAAN', 'ZON', 'STER', 'WOLK',
    'BERG', 'DUIN', 'MEER', 'BEEK', 'HAVEN', 'DIJK', 'BRUG', 'TOREN', 'MOLEN', 'SLOOT', 'KADE', 'PIER', 'BAAI', 'KAAP',
    'VOS', 'DAS', 'OTTER', 'MEES', 'VINK', 'UIL', 'REIGER', 'ZWAAN', 'HAAS', 'EGEL', 'MOL', 'BEVER', 'KREEFT', 'ZALM',
    'HARING', 'PAARD', 'GEIT', 'KOE', 'LAMA', 'PANDA', 'TIJGER', 'LEEUW', 'ZEBRA', 'KAMEEL', 'APPEL', 'PEER', 'KERS',
    'PRUIM', 'DADEL', 'VIJG', 'MANGO', 'KIWI', 'BES', 'NOOT', 'PEPER', 'MUNT', 'SALIE', 'TIJM', 'DILLE', 'BIES', 'RIET',
    'VARENS', 'MOS', 'KOGEL', 'PIJL', 'BOOG', 'SCHILD', 'ANKER', 'ROER', 'ZEIL', 'MAST', 'KIEL', 'BOEG', 'KOMPAS', 'KAART',
    'LAMP', 'KAARS', 'VONK', 'VUUR', 'GLOED', 'IJS', 'SNEEUW', 'HAGEL', 'STORM', 'BRIES', 'WIND', 'REGEN', 'DAUW', 'MIST',
    'KLEI', 'ZAND', 'GRIND', 'KEI', 'ROTS', 'KRIJT', 'GOUD', 'ZILVER', 'KOPER', 'TIN', 'ZINK', 'IJZER', 'STAAL', 'PARELS',
    'KORAAL', 'SCHELP', 'JADE', 'OPAAL', 'ROBIJN', 'AGAAT', 'TROMMEL', 'FLUIT', 'HOORN', 'HARP', 'LUIT', 'BEL', 'GONG',
    'TANGO', 'WALS', 'POLKA', 'SAMBA', 'RUMBA', 'BLOK', 'KUBUS', 'BOL', 'KEGEL', 'PRISMA', 'CIRKEL', 'LIJN', 'PUNT', 'HOEK',
    'VLAK', 'ZAAG', 'HAMER', 'BEITEL', 'TANG', 'VIJL', 'BOOR', 'SCHAAF', 'LIER', 'KATROL', 'HEFBOOM', 'WIEL', 'AS',
    'RADAR', 'SONAR', 'LASER', 'PIXEL', 'BYTE', 'DATA', 'CODE', 'LUS', 'TAK', 'STAM', 'WORTEL', 'KNOP', 'BLAD', 'BLOEI'];

/** Duocode: kort woord en twee cijfers, zoals TULP-38. */
function pb_nieuwe_duocode(): string
{
    return PB_WOORDEN[random_int(0, count(PB_WOORDEN) - 1)] . '-' . random_int(10, 99);
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

/** "tulp 38", "Tulp38" en "TULP-38" worden "TULP-38". Leeg als het er niet op lijkt. */
function pb_schone_duocode($invoer): string
{
    if (!is_string($invoer)) {
        return '';
    }
    $s = strtoupper(preg_replace('/[\s\-.]+/', '', $invoer));
    return preg_match('/^([A-Z]{2,8})(\d{2})$/', $s, $m) ? $m[1] . '-' . $m[2] : '';
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
    $st = pb_db()->prepare('SELECT d.*, c.les, c.status AS cohort_status, c.naam AS cohort_naam FROM pb_sessie s
        JOIN pb_duo d ON d.id = s.duo_id JOIN pb_cohort c ON c.id = d.cohort_id
        WHERE s.token_sha256 = ? AND s.geldig_tot >= ?');
    $st->execute([hash('sha256', $token), pb_vandaag()]);
    $duo = $st->fetch();
    if (!$duo) {
        ap_fout(401, 'Vul jullie duocode opnieuw in.', 'sessie');
    }
    if ($duo['cohort_status'] === 'gesloten') {
        ap_fout(410, 'Deze les is afgesloten.', 'gesloten');
    }
    return $duo;
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

/** Wist gesprekken na 14 dagen, verlopen sessies, en alle duogegevens van cohorten voorbij hun wisdatum. Eens per uur. */
function pb_opruimen(bool $altijd = false): void
{
    $laatst = (int)(pv_instelling('pb_opgeruimd') ?? 0);
    if (!$altijd && time() - $laatst < 3600) {
        return;
    }
    $pdo = pb_db();
    $pdo->prepare('DELETE FROM pb_gesprek WHERE datum < ?')->execute([pb_vandaag(-PB_GESPREK_DAGEN)]);
    $pdo->prepare('DELETE FROM pb_sessie WHERE geldig_tot < ?')->execute([pb_vandaag()]);
    $st = $pdo->prepare('SELECT id FROM pb_cohort WHERE wis_na < ?');
    $st->execute([pb_vandaag()]);
    foreach ($st->fetchAll(PDO::FETCH_COLUMN) as $id) {
        pb_wis_cohort((int)$id);
    }
    pv_zet_instelling('pb_opgeruimd', (string)time());
}

function pb_wis_duo(int $duo_id): void
{
    $pdo = pb_db();
    foreach (['pb_vink', 'pb_hulp', 'pb_gesprek', 'pb_vraag', 'pb_sessie'] as $t) {
        $pdo->prepare("DELETE FROM $t WHERE duo_id = ?")->execute([$duo_id]);
    }
    $pdo->prepare('DELETE FROM pb_duo WHERE id = ?')->execute([$duo_id]);
}

function pb_wis_cohort(int $cohort_id): void
{
    $pdo = pb_db();
    $pdo->beginTransaction();
    $st = $pdo->prepare('SELECT id FROM pb_duo WHERE cohort_id = ?');
    $st->execute([$cohort_id]);
    foreach ($st->fetchAll(PDO::FETCH_COLUMN) as $id) {
        pb_wis_duo((int)$id);
    }
    $pdo->prepare('DELETE FROM pb_cohort WHERE id = ?')->execute([$cohort_id]);
    $pdo->commit();
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
