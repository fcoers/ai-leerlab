<?php
/**
 * Gedeelde kern voor de apps op ai-leerlab.nl: config, database, JSON-antwoorden, rem, en het postvak.
 *
 * Het postvak is de brievenbus voor persoonsgegevens: een app legt er een inzending met naam in, de Productiviteit-app
 * op de Mac van Frits haalt haar op en bevestigt, en pas dan wist de server haar. Niet opgehaald na
 * postvak_bewaar_dagen (hooguit 3): toch weg. Koppelvlak: Projecten/AI-leerlab/Leveringen/_bron/Lesquiz/Koppelvlak postvak.md
 *
 * Geen wachtwoord of sleutel in dit bestand. De database-gegevens en de hash van de sleutel van de Mac staan in
 * lesquiz-config.php, buiten de webroot.
 */
if (!defined('AI_APPS')) {
    http_response_code(404);
    exit;
}

date_default_timezone_set('Europe/Amsterdam');

const PV_MAX_BEWAAR_DAGEN = 3;

set_exception_handler(function (Throwable $e) {
    error_log('apps: ' . $e->getMessage());
    if (PHP_SAPI === 'cli') {
        fwrite(STDERR, 'Fout: ' . $e->getMessage() . "\n");
        exit(1);
    }
    ap_fout(500, 'Er ging iets mis op de server. Probeer het later opnieuw.', 'server');
});

// ---------------------------------------------------------------- config

/** Plekken waar de config mag staan: omgevingsvariabele, dan elke map boven deze (tot 6 niveaus). */
function ap_config_plekken(): array
{
    $plekken = [];
    $env = getenv('LESQUIZ_CONFIG');
    if (is_string($env) && $env !== '') {
        $plekken[] = $env;
    }
    $dir = dirname(__DIR__);          // .../apps/postvak
    for ($i = 0; $i < 6; $i++) {
        $hoger = dirname($dir);
        if ($hoger === $dir) {
            break;
        }
        $dir = $hoger;
        $plekken[] = $dir . '/private/lesquiz-config.php';
        $plekken[] = $dir . '/lesquiz-config.php';
    }
    return $plekken;
}

function ap_binnen_basedir(string $pad): bool
{
    $ob = (string)ini_get('open_basedir');
    if ($ob === '') {
        return true;
    }
    foreach (explode(PATH_SEPARATOR, $ob) as $basis) {
        $basis = rtrim(trim($basis), '/');
        if ($basis !== '' && strpos($pad, $basis) === 0) {
            return true;
        }
    }
    return false;
}

function ap_config(): array
{
    static $cfg = null;
    if ($cfg !== null) {
        return $cfg;
    }
    foreach (ap_config_plekken() as $pad) {
        if (ap_binnen_basedir($pad) && @is_file($pad)) {
            $c = require $pad;
            if (is_array($c)) {
                $c += ['open_uren' => 3, 'postvak_bewaar_dagen' => PV_MAX_BEWAAR_DAGEN, 'postvak_sleutel_sha256' => ''];
                return $cfg = $c;
            }
        }
    }
    ap_fout(503, 'De apps zijn nog niet ingesteld: lesquiz-config.php is niet gevonden.', 'niet_ingesteld');
}

/** Het adres van de site voor links (QR-code, dashboard): 'adres' uit de config, anders de host van dit verzoek. */
function ap_adres(): string
{
    $a = (string)(ap_config()['adres'] ?? '');
    if ($a !== '') {
        return rtrim($a, '/');
    }
    $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || strtolower((string)($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '')) === 'https';
    return ($https ? 'https://' : 'http://') . ($_SERVER['HTTP_HOST'] ?? 'ai-leerlab.nl');
}

// ---------------------------------------------------------------- database

function ap_db(): PDO
{
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }
    $db = ap_config()['db'] ?? [];
    $opties = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
               PDO::ATTR_EMULATE_PREPARES => false];
    try {
        if (($db['driver'] ?? 'mysql') === 'sqlite') {
            $pdo = new PDO('sqlite:' . $db['sqlite_path'], null, null, $opties);
            $pdo->exec('PRAGMA journal_mode=WAL; PRAGMA busy_timeout=3000; PRAGMA foreign_keys=ON');
        } else {
            $host = (string)($db['host'] ?? 'localhost');
            $poort = (int)($db['port'] ?? 3306);
            if (preg_match('/^([^:]+):(\d+)$/', $host, $m)) {
                [$host, $poort] = [$m[1], (int)$m[2]];
            }
            $dsn = "mysql:host={$host};port={$poort};dbname={$db['name']};charset=utf8mb4";
            $pdo = new PDO($dsn, $db['user'], $db['pass'], $opties);
            $pdo->exec("SET time_zone = '+00:00'");
        }
    } catch (Throwable $e) {
        $pdo = null;
        ap_fout(503, 'Geen verbinding met de database. Controleer naam, gebruiker en wachtwoord in lesquiz-config.php.', 'database');
    }
    ap_tabellen($pdo);
    return $pdo;
}

function ap_is_sqlite(PDO $pdo): bool
{
    return $pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'sqlite';
}

/** Tabellen van het postvak en de rem. Maakt ze bij het eerste gebruik; Frits hoeft niets te importeren. */
function ap_tabellen(PDO $pdo): void
{
    try {
        $pdo->query("SELECT waarde FROM pv_instelling WHERE naam = 'schema'")->fetch();
        return;
    } catch (Throwable $e) {
        // tabellen bestaan nog niet
    }
    $sqlite = ap_is_sqlite($pdo);
    $eind = $sqlite ? '' : ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';
    $tekst = $sqlite ? 'TEXT' : 'MEDIUMTEXT';
    $pdo->exec("CREATE TABLE IF NOT EXISTS pv_instelling (naam VARCHAR(60) NOT NULL PRIMARY KEY, waarde VARCHAR(255) NOT NULL)$eind");
    // Geen AUTO_INCREMENT: het nummer komt uit een eigen teller, zodat het nooit terugloopt (ook niet na een
    // leeg postvak en een herstart van de database). De Mac herkent dubbel ophalen aan dit nummer.
    $pdo->exec("CREATE TABLE IF NOT EXISTS pv_inzending (
        id BIGINT NOT NULL PRIMARY KEY,
        app VARCHAR(40) NOT NULL,
        versie INT NOT NULL,
        groep VARCHAR(80) NOT NULL,
        ontvangen BIGINT NOT NULL,
        inhoud $tekst NOT NULL)$eind");
    $pdo->exec('CREATE INDEX pv_inzending_ontvangen ON pv_inzending (ontvangen)');
    $pdo->exec('CREATE INDEX pv_inzending_groep ON pv_inzending (app, groep)');
    $pdo->exec("CREATE TABLE IF NOT EXISTS ap_rem (sleutel VARCHAR(80) NOT NULL PRIMARY KEY, venster BIGINT NOT NULL, aantal INT NOT NULL)$eind");
    $st = $pdo->prepare('INSERT INTO pv_instelling (naam, waarde) VALUES (?, ?)');
    $st->execute(['laatste_id', '0']);
    $st->execute(['schema', '1']);
}

// ---------------------------------------------------------------- antwoorden

function ap_kopteksten(): void
{
    if (PHP_SAPI === 'cli' || headers_sent()) {
        return;
    }
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    header('X-Robots-Tag: noindex, nofollow');
    header('Referrer-Policy: same-origin');
}

function ap_json($data, int $status = 200): void
{
    if (PHP_SAPI !== 'cli' && !headers_sent()) {
        http_response_code($status);
        ap_kopteksten();
        header('Content-Type: application/json; charset=utf-8');
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), PHP_SAPI === 'cli' ? "\n" : '';
    exit;
}

/** Fout als JSON: { ok: false, code, fout }. De app leest code; fout is een zin voor Frits of de student. */
function ap_fout(int $status, string $melding, string $code = 'fout', array $extra = []): void
{
    if (PHP_SAPI === 'cli') {
        fwrite(STDERR, "Fout ($code): $melding\n");
        exit(1);
    }
    if ($status === 429 && PHP_SAPI !== 'cli' && !headers_sent()) {
        header('Retry-After: 60');
    }
    ap_json(['ok' => false, 'code' => $code, 'fout' => $melding] + $extra, $status);
}

/** Leest een POST met JSON. Geeft het object als array, of stopt met 405, 413, 415 of 400. */
function ap_lees_json(int $max_bytes): array
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        ap_fout(405, 'Alleen POST.', 'methode');
    }
    if (stripos((string)($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json') !== 0) {
        ap_fout(415, 'Verkeerd soort verzoek: stuur JSON.', 'soort');
    }
    if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > $max_bytes) {
        ap_fout(413, 'Het verzoek is te groot.', 'te_veel');
    }
    $ruw = (string)file_get_contents('php://input', false, null, 0, $max_bytes + 1);
    if (strlen($ruw) > $max_bytes) {
        ap_fout(413, 'Het verzoek is te groot.', 'te_veel');
    }
    $in = json_decode($ruw, true);
    if (!is_array($in) || array_is_list($in) && $in !== []) {
        ap_fout(400, 'Verzoek niet te lezen.', 'verzoek');
    }
    return $in;
}

function ap_nu(int $plus = 0): string
{
    return date('Y-m-d H:i:s', time() + $plus);
}

function ap_iso(int $ts): string
{
    return date('c', $ts);
}

/** Rem zonder IP-adressen: hooguit $max keer per $venster seconden per sleutel. */
function ap_rem(string $sleutel, int $max, int $venster): bool
{
    $pdo = ap_db();
    $nu = intdiv(time(), $venster) * $venster;
    $sleutel = substr($sleutel, 0, 80);
    $st = $pdo->prepare('SELECT venster, aantal FROM ap_rem WHERE sleutel = ?');
    $st->execute([$sleutel]);
    $rij = $st->fetch();
    if (!$rij) {
        try {
            $pdo->prepare('INSERT INTO ap_rem (sleutel, venster, aantal) VALUES (?, ?, 1)')->execute([$sleutel, $nu]);
        } catch (Throwable $e) {
            $pdo->prepare('UPDATE ap_rem SET aantal = aantal + 1 WHERE sleutel = ?')->execute([$sleutel]);
        }
        return true;
    }
    if ((int)$rij['venster'] !== $nu) {
        $pdo->prepare('UPDATE ap_rem SET venster = ?, aantal = 1 WHERE sleutel = ?')->execute([$nu, $sleutel]);
        return true;
    }
    if ((int)$rij['aantal'] >= $max) {
        return false;
    }
    $pdo->prepare('UPDATE ap_rem SET aantal = aantal + 1 WHERE sleutel = ?')->execute([$sleutel]);
    return true;
}

// ---------------------------------------------------------------- postvak

function pv_instelling(string $naam): ?string
{
    $st = ap_db()->prepare('SELECT waarde FROM pv_instelling WHERE naam = ?');
    $st->execute([$naam]);
    $w = $st->fetchColumn();
    return $w === false ? null : (string)$w;
}

function pv_zet_instelling(string $naam, string $waarde): void
{
    $pdo = ap_db();
    $st = $pdo->prepare('UPDATE pv_instelling SET waarde = ? WHERE naam = ?');
    $st->execute([$waarde, $naam]);
    if ($st->rowCount() === 0 && pv_instelling($naam) === null) {
        $pdo->prepare('INSERT INTO pv_instelling (naam, waarde) VALUES (?, ?)')->execute([$naam, $waarde]);
    }
}

/** Hoe lang een niet-opgehaalde inzending online mag blijven: 1 tot 3 dagen, standaard 3. */
function pv_bewaar_dagen(): int
{
    return max(1, min(PV_MAX_BEWAAR_DAGEN, (int)ap_config()['postvak_bewaar_dagen']));
}

/**
 * Controleert de header X-Postvak-Sleutel tegen de SHA-256-hash in de config. Stopt met 401 of 503.
 * Geen rem vóór de controle: een vreemde kan de Mac zo niet laten haperen. Raden heeft geen zin (256 bits).
 */
function pv_controleer_sleutel(): void
{
    $hash = strtolower(trim((string)ap_config()['postvak_sleutel_sha256']));
    if (!preg_match('/^[0-9a-f]{64}$/', $hash)) {
        ap_fout(503, 'Er staat nog geen sleutel voor de Mac in lesquiz-config.php (postvak_sleutel_sha256).', 'niet_ingesteld');
    }
    $sleutel = (string)($_SERVER['HTTP_X_POSTVAK_SLEUTEL'] ?? '');
    if ($sleutel === '') {
        ap_fout(401, 'De sleutel ontbreekt.', 'geen_sleutel');
    }
    if (!hash_equals($hash, hash('sha256', $sleutel))) {
        ap_fout(401, 'De sleutel klopt niet. Controleer de hash in lesquiz-config.php.', 'sleutel');
    }
    if (!ap_rem('postvak', 240, 60)) {
        ap_fout(429, 'Te veel verzoeken. Wacht een minuut.', 'rem');
    }
}

/**
 * Legt een inzending in het postvak en geeft het nummer. Moet binnen een transactie van de aanroeper lopen,
 * zodat de teller en de inzending samen slagen of samen mislukken.
 * $groep is voor de app zelf (lesquiz: 'les:<id>'), om te tellen of te wissen per les.
 */
function pv_leg(string $app, int $versie, string $groep, array $inhoud): int
{
    $pdo = ap_db();
    if (!$pdo->inTransaction()) {
        throw new LogicException('pv_leg buiten een transactie');
    }
    // De UPDATE zet een schrijfslot op de teller tot de transactie klaar is: nummers lopen op in volgorde van opslaan.
    $pdo->exec("UPDATE pv_instelling SET waarde = waarde + 1 WHERE naam = 'laatste_id'");
    $id = (int)$pdo->query("SELECT waarde FROM pv_instelling WHERE naam = 'laatste_id'")->fetchColumn();
    $pdo->prepare('INSERT INTO pv_inzending (id, app, versie, groep, ontvangen, inhoud) VALUES (?, ?, ?, ?, ?, ?)')
        ->execute([$id, $app, $versie, $groep, time(), json_encode($inhoud, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)]);
    return $id;
}

/** Een app meldt tot wanneer er iets open staat (0 = niets). De Mac vraagt dan vaker. */
function pv_zet_actief(string $app, int $tot): void
{
    pv_zet_instelling('actief:' . $app, (string)$tot);
}

function pv_actief(): array
{
    $st = ap_db()->prepare("SELECT naam FROM pv_instelling WHERE naam LIKE 'actief:%' AND CAST(waarde AS DECIMAL(20,0)) > ? ORDER BY naam");
    $st->execute([time()]);
    return array_map(fn($n) => substr($n, 7), $st->fetchAll(PDO::FETCH_COLUMN));
}

function pv_aantal_groep(string $app, string $groep): int
{
    $st = ap_db()->prepare('SELECT COUNT(*) FROM pv_inzending WHERE app = ? AND groep = ?');
    $st->execute([$app, $groep]);
    return (int)$st->fetchColumn();
}

function pv_wis_groep(string $app, string $groep): int
{
    $st = ap_db()->prepare('DELETE FROM pv_inzending WHERE app = ? AND groep = ?');
    $st->execute([$app, $groep]);
    return $st->rowCount();
}

/** Vangnet: wist wat langer dan pv_bewaar_dagen() in het postvak ligt, en oude rem-tellers. Zonder $altijd hooguit eens per uur. */
function pv_opruimen(bool $altijd = false): int
{
    $pdo = ap_db();
    $laatst = (int)(pv_instelling('opgeruimd') ?? 0);
    if (!$altijd && time() - $laatst < 3600) {
        return 0;
    }
    $st = $pdo->prepare('DELETE FROM pv_inzending WHERE ontvangen < ?');
    $st->execute([time() - pv_bewaar_dagen() * 86400]);
    $n = $st->rowCount();
    $pdo->prepare('DELETE FROM ap_rem WHERE venster < ?')->execute([time() - 86400]);
    pv_zet_instelling('opgeruimd', (string)time());
    return $n;
}
