<?php
/**
 * Wiskunde oefenen: kern voor de API. Bouwt op de gedeelde kern van de apps (config buiten de webroot, ap_db, rem).
 *
 * Wat de server bewaart: per klas een naam, een klascode voor studenten, de SHA-256 van de docentcode en het aantal
 * aanmeldingen; per poging alleen klas, datum (zonder tijdstip), onderdeel, goed of fout, foutcode en aantal
 * hulpstappen. Geen account, naam, apparaatnummer, tijdstip of IP-adres. Beheer (klas maken, docentcode uitgeven
 * en intrekken) alleen vanaf de Mac, met de sleutel van het postvak: api/klassen.php.
 */
if (!defined('WISKUNDE')) {
    http_response_code(404);
    exit;
}
if (!defined('AI_APPS')) {
    define('AI_APPS', true);
}
require dirname(__DIR__, 3) . '/postvak/lib/kern.php';

const WO_TEKENS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';  // geen 0/O, 1/I/L
const WO_KLASCODE_LENGTE = 6;
const WO_DOCENTCODE_LENGTE = 20;
const WO_DREMPEL_STUDENTEN = 3;     // getallen pas vanaf drie aanmeldingen in de klas
const WO_MIN_POGINGEN = 10;         // een onderdeel komt pas bij "waar de klas vastloopt" vanaf tien pogingen
const WO_BEWAAR_DAGEN = 400;        // pogingen ouder dan dit vervallen
const WO_MAX_POGINGEN_PER_VERZOEK = 50;
const WO_SCHEMA = '1';

function wo_bank(): array
{
    static $bank = null;
    return $bank ??= require __DIR__ . '/bank.php';
}

function wo_db(): PDO
{
    static $klaar = false;
    $pdo = ap_db();
    if (!$klaar) {
        wo_tabellen($pdo);
        $klaar = true;
    }
    return $pdo;
}

/** Tabellen bij het eerste gebruik, in dezelfde database als de andere apps. Frits hoeft niets te importeren. */
function wo_tabellen(PDO $pdo): void
{
    if (pv_instelling('wo_schema') === WO_SCHEMA) {
        return;
    }
    $sqlite = ap_is_sqlite($pdo);
    $eind = $sqlite ? '' : ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';
    $id = $sqlite ? 'INTEGER PRIMARY KEY AUTOINCREMENT' : 'BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY';
    $pdo->exec("CREATE TABLE IF NOT EXISTS wo_klas (
        id $id,
        naam VARCHAR(80) NOT NULL,
        klascode VARCHAR(8) NOT NULL UNIQUE,
        docent_sha256 CHAR(64) NULL,
        status VARCHAR(12) NOT NULL DEFAULT 'actief',
        aanmeldingen INT NOT NULL DEFAULT 0,
        gemaakt DATE NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS wo_poging (
        id $id,
        klas_id BIGINT NOT NULL,
        datum DATE NOT NULL,
        onderdeel CHAR(1) NOT NULL,
        goed TINYINT NOT NULL,
        foutcode VARCHAR(60) NULL,
        hulp TINYINT NOT NULL)$eind");
    try {
        $pdo->exec('CREATE INDEX wo_poging_klas_datum ON wo_poging (klas_id, datum)');
        $pdo->exec('CREATE INDEX wo_klas_docent ON wo_klas (docent_sha256)');
    } catch (Throwable $e) {
        // bestaan al
    }
    pv_zet_instelling('wo_schema', WO_SCHEMA);
}

function wo_vandaag(int $plus_dagen = 0): string
{
    return date('Y-m-d', time() + $plus_dagen * 86400);
}

function wo_code(int $lengte): string
{
    $uit = '';
    for ($i = 0; $i < $lengte; $i++) {
        $uit .= WO_TEKENS[random_int(0, strlen(WO_TEKENS) - 1)];
    }
    return $uit;
}

/** Hoofdletters, zonder spaties en streepjes. Leeg als er een teken in staat dat niet in een code hoort. */
function wo_schone_code($invoer, int $lengte): string
{
    if (!is_string($invoer)) {
        return '';
    }
    $s = strtoupper(preg_replace('/[\s-]+/', '', $invoer));
    if (strlen($s) !== $lengte || strspn($s, WO_TEKENS) !== $lengte) {
        return '';
    }
    return $s;
}

/** Docentcode in groepjes van vier, zodat Frits hem goed kan doorgeven. */
function wo_groepjes(string $code): string
{
    return implode('-', str_split($code, 4));
}

function wo_klas_op_code(string $klascode): ?array
{
    $st = wo_db()->prepare('SELECT * FROM wo_klas WHERE klascode = ?');
    $st->execute([$klascode]);
    $k = $st->fetch();
    return $k ?: null;
}

/** Alleen een verzoek van deze site zelf (de browser stuurt Origin mee bij een POST met fetch). */
function wo_eis_eigen_herkomst(): void
{
    $herkomst = (string)($_SERVER['HTTP_ORIGIN'] ?? '');
    if ($herkomst !== '' && parse_url($herkomst, PHP_URL_HOST) !== parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
        ap_fout(403, 'Verzoek van een andere site.', 'herkomst');
    }
}

/** Is de rem al vol, zonder hem op te hogen? Voor de rem op foute docentcodes: alleen fouten tellen. */
function wo_rem_vol(string $sleutel, int $max, int $venster): bool
{
    $st = ap_db()->prepare('SELECT venster, aantal FROM ap_rem WHERE sleutel = ?');
    $st->execute([$sleutel]);
    $rij = $st->fetch();
    return $rij && (int)$rij['venster'] === intdiv(time(), $venster) * $venster && (int)$rij['aantal'] >= $max;
}

/** Wist pogingen ouder dan WO_BEWAAR_DAGEN. Hooguit eens per uur. */
function wo_opruimen(): void
{
    $laatst = (int)(pv_instelling('wo_opgeruimd') ?? 0);
    if (time() - $laatst < 3600) {
        return;
    }
    wo_db()->prepare('DELETE FROM wo_poging WHERE datum < ?')->execute([wo_vandaag(-WO_BEWAAR_DAGEN)]);
    pv_zet_instelling('wo_opgeruimd', (string)time());
}

/** Eén poging uit de browser controleren. Geeft de rij of null als er iets niet klopt. */
function wo_geldige_poging($p): ?array
{
    if (!is_array($p)) {
        return null;
    }
    $bank = wo_bank();
    $onderdeel = $p['onderdeel'] ?? null;
    if (!is_string($onderdeel) || !in_array($onderdeel, $bank['onderdelen'], true)) {
        return null;
    }
    if (!is_bool($p['goed'] ?? null)) {
        return null;
    }
    $hulp = $p['hulp'] ?? null;
    if (!is_int($hulp) || $hulp < 0 || $hulp > 4) {
        return null;
    }
    $foutcode = $p['foutcode'] ?? null;
    if ($foutcode !== null && (!is_string($foutcode) || !in_array($foutcode, $bank['foutcodes'], true))) {
        $foutcode = 'andere';   // onbekende code (oude versie van de app): telt als andere fout
    }
    if ($p['goed']) {
        $foutcode = null;
    }
    // Alleen een datum, niet in de toekomst en hooguit 14 dagen terug (offline geoefend). Anders vandaag.
    $datum = $p['datum'] ?? '';
    if (!is_string($datum) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $datum) || $datum > wo_vandaag(1) || $datum < wo_vandaag(-14)) {
        $datum = wo_vandaag();
    }
    return ['datum' => $datum, 'onderdeel' => $onderdeel, 'goed' => $p['goed'] ? 1 : 0, 'foutcode' => $foutcode, 'hulp' => $hulp];
}

/**
 * Klasoverzicht: klastotalen per onderdeel voor één klas. Gedeeld door overzicht.php (docentcode) en klassen.php
 * (actie overzicht, beheersleutel), zodat beide precies hetzelfde antwoord geven. Getallen pas vanaf
 * WO_DREMPEL_STUDENTEN aanmeldingen; daaronder alleen de klas en genoeg = false. Een onbekende periode wordt week.
 */
function wo_klasoverzicht(array $klas, $periode): array
{
    $periode = in_array($periode, ['week', '4weken', 'alles'], true) ? $periode : 'week';
    $maandag = date('Y-m-d', strtotime('monday this week'));
    $vanaf = ['week' => $maandag, '4weken' => wo_vandaag(-27), 'alles' => '0000-01-01'][$periode];

    $uit = [
        'ok' => true,
        'klas' => ['naam' => $klas['naam'], 'aanmeldingen' => (int)$klas['aanmeldingen'], 'status' => $klas['status']],
        'drempel' => WO_DREMPEL_STUDENTEN,
        'min_pogingen' => WO_MIN_POGINGEN,
        'periode' => $periode,
        'vanaf' => $periode === 'alles' ? null : $vanaf,
    ];
    if ((int)$klas['aanmeldingen'] < WO_DREMPEL_STUDENTEN) {
        $uit['genoeg'] = false;
        return $uit;
    }
    $uit['genoeg'] = true;

    $pdo = wo_db();
    $st = $pdo->prepare('SELECT onderdeel, COUNT(*) AS pogingen, SUM(goed) AS goed, AVG(hulp) AS hulp_gem,
            SUM(CASE WHEN hulp >= 4 THEN 1 ELSE 0 END) AS tot_uitleg
        FROM wo_poging WHERE klas_id = ? AND datum >= ? GROUP BY onderdeel');
    $st->execute([$klas['id'], $vanaf]);
    $per = [];
    foreach ($st->fetchAll() as $r) {
        $per[$r['onderdeel']] = $r;
    }
    $st = $pdo->prepare('SELECT onderdeel, COUNT(*) AS n FROM wo_poging WHERE klas_id = ? AND datum >= ? GROUP BY onderdeel');
    $st->execute([$klas['id'], $maandag]);
    $week = [];
    foreach ($st->fetchAll() as $r) {
        $week[$r['onderdeel']] = (int)$r['n'];
    }
    $st = $pdo->prepare('SELECT onderdeel, foutcode, COUNT(*) AS n FROM wo_poging
        WHERE klas_id = ? AND datum >= ? AND goed = 0 AND foutcode IS NOT NULL GROUP BY onderdeel, foutcode ORDER BY n DESC, foutcode');
    $st->execute([$klas['id'], $vanaf]);
    $fouten = [];
    foreach ($st->fetchAll() as $r) {
        $fouten[$r['onderdeel']][] = ['foutcode' => $r['foutcode'], 'aantal' => (int)$r['n']];
    }

    $uit['onderdelen'] = [];
    foreach (wo_bank()['onderdelen'] as $o) {
        $r = $per[$o] ?? null;
        $uit['onderdelen'][] = [
            'onderdeel' => $o,
            'pogingen' => $r ? (int)$r['pogingen'] : 0,
            'goed' => $r ? (int)$r['goed'] : 0,
            'hulp_gem' => $r ? round((float)$r['hulp_gem'], 1) : 0,
            'tot_uitleg' => $r ? (int)$r['tot_uitleg'] : 0,
            'deze_week' => $week[$o] ?? 0,
            'foutcodes' => array_slice($fouten[$o] ?? [], 0, 3),
        ];
    }
    return $uit;
}
