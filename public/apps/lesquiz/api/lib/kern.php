<?php
/**
 * Lesquiz: gedeelde kern voor de API en het beheer.
 * Config, database (MySQL/MariaDB op de hosting, SQLite alleen lokaal), tabellen, rem en opruimen.
 * Geen wachtwoord of sleutel in dit bestand: die staan in lesquiz-config.php, buiten de webroot.
 */
if (!defined('LESQUIZ')) {
    http_response_code(404);
    exit;
}

const LQ_ALFABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';   // geen 0/O, 1/I/L: goed over te typen van een dia

date_default_timezone_set('Europe/Amsterdam');

/** Plekken waar de config mag staan: omgevingsvariabele, dan elke map boven de app (tot 6 niveaus). */
function lq_config_plekken(): array
{
    $plekken = [];
    $env = getenv('LESQUIZ_CONFIG');
    if (is_string($env) && $env !== '') {
        $plekken[] = $env;
    }
    $dir = dirname(__DIR__, 2);          // .../apps/lesquiz
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

function lq_binnen_basedir(string $pad): bool
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

function lq_config(): array
{
    static $cfg = null;
    if ($cfg !== null) {
        return $cfg;
    }
    foreach (lq_config_plekken() as $pad) {
        if (lq_binnen_basedir($pad) && @is_file($pad)) {
            $c = require $pad;
            if (is_array($c)) {
                $c += ['bewaar_dagen' => 90, 'open_uren' => 3, 'beheer_wachtwoord' => ''];
                return $cfg = $c;
            }
        }
    }
    lq_fout(500, 'De lesquiz is nog niet ingesteld: lesquiz-config.php is niet gevonden.');
}

function lq_db(): PDO
{
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }
    $db = lq_config()['db'] ?? [];
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
        lq_fout(500, 'Geen verbinding met de database. Controleer naam, gebruiker en wachtwoord in lesquiz-config.php.');
    }
    lq_tabellen($pdo);
    return $pdo;
}

function lq_is_sqlite(PDO $pdo): bool
{
    return $pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'sqlite';
}

/** Maakt de tabellen bij het eerste gebruik. Frits hoeft niets te importeren. */
function lq_tabellen(PDO $pdo): void
{
    try {
        $pdo->query("SELECT waarde FROM lq_instelling WHERE naam = 'schema'")->fetch();
        return;
    } catch (Throwable $e) {
        // tabellen bestaan nog niet
    }
    $sqlite = lq_is_sqlite($pdo);
    $id = $sqlite ? 'INTEGER PRIMARY KEY AUTOINCREMENT' : 'INT NOT NULL AUTO_INCREMENT PRIMARY KEY';
    $eind = $sqlite ? '' : ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';
    $pdo->exec("CREATE TABLE IF NOT EXISTS lq_instelling (naam VARCHAR(40) NOT NULL PRIMARY KEY, waarde VARCHAR(255) NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS lq_les (
        id $id,
        code VARCHAR(12) NOT NULL UNIQUE,
        scherm VARCHAR(48) NOT NULL UNIQUE,
        vak VARCHAR(80) NOT NULL,
        titel VARCHAR(120) NOT NULL,
        datum VARCHAR(10) NOT NULL,
        vragen TEXT NOT NULL,
        open_tot VARCHAR(19) NULL,
        aangemaakt VARCHAR(19) NOT NULL)$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS lq_inzending (
        id $id,
        les_id INT NOT NULL,
        voornaam VARCHAR(60) NOT NULL,
        achternaam VARCHAR(80) NOT NULL,
        naam_sleutel VARCHAR(64) NOT NULL,
        toestel VARCHAR(64) NOT NULL,
        antwoorden VARCHAR(20) NOT NULL,
        tijd VARCHAR(19) NOT NULL,
        UNIQUE (les_id, naam_sleutel))$eind");
    $pdo->exec("CREATE TABLE IF NOT EXISTS lq_rem (sleutel VARCHAR(80) NOT NULL PRIMARY KEY, venster INT NOT NULL, aantal INT NOT NULL)$eind");
    $pdo->prepare('INSERT INTO lq_instelling (naam, waarde) VALUES (?, ?)')->execute(['schema', '1']);
    $pdo->prepare('INSERT INTO lq_instelling (naam, waarde) VALUES (?, ?)')->execute(['geheim', bin2hex(random_bytes(32))]);
}

function lq_instelling(string $naam): ?string
{
    $st = lq_db()->prepare('SELECT waarde FROM lq_instelling WHERE naam = ?');
    $st->execute([$naam]);
    $w = $st->fetchColumn();
    return $w === false ? null : (string)$w;
}

function lq_zet_instelling(string $naam, string $waarde): void
{
    $pdo = lq_db();
    $st = $pdo->prepare('UPDATE lq_instelling SET waarde = ? WHERE naam = ?');
    $st->execute([$waarde, $naam]);
    if ($st->rowCount() === 0 && lq_instelling($naam) === null) {
        $pdo->prepare('INSERT INTO lq_instelling (naam, waarde) VALUES (?, ?)')->execute([$naam, $waarde]);
    }
}

/** Geheim voor afgeleide sleutels (toestel-hash, exportsleutel). Staat in de database, niet in de code. */
function lq_geheim(): string
{
    return (string)lq_instelling('geheim');
}

/** De sleutel waarmee het script op de Mac de inzendingen ophaalt. Nieuwe sleutel = nieuwe 'versie'. */
function lq_exportsleutel(): string
{
    $versie = lq_instelling('export_versie') ?? '1';
    return substr(hash_hmac('sha256', 'export-' . $versie, lq_geheim()), 0, 40);
}

function lq_nu(int $plus = 0): string
{
    return date('Y-m-d H:i:s', time() + $plus);
}

function lq_willekeurig(int $lengte, string $alfabet = LQ_ALFABET): string
{
    $s = '';
    $max = strlen($alfabet) - 1;
    for ($i = 0; $i < $lengte; $i++) {
        $s .= $alfabet[random_int(0, $max)];
    }
    return $s;
}

function lq_is_open(array $les): bool
{
    return !empty($les['open_tot']) && $les['open_tot'] > lq_nu();
}

/** Rem zonder IP-adressen: hooguit $max keer per $venster seconden per sleutel. */
function lq_rem(string $sleutel, int $max, int $venster): bool
{
    $pdo = lq_db();
    $nu = intdiv(time(), $venster);
    $sleutel = substr($sleutel, 0, 80);
    $st = $pdo->prepare('SELECT venster, aantal FROM lq_rem WHERE sleutel = ?');
    $st->execute([$sleutel]);
    $rij = $st->fetch();
    if (!$rij) {
        try {
            $pdo->prepare('INSERT INTO lq_rem (sleutel, venster, aantal) VALUES (?, ?, 1)')->execute([$sleutel, $nu]);
        } catch (Throwable $e) {
            $pdo->prepare('UPDATE lq_rem SET aantal = aantal + 1 WHERE sleutel = ?')->execute([$sleutel]);
        }
        return true;
    }
    if ((int)$rij['venster'] !== $nu) {
        $pdo->prepare('UPDATE lq_rem SET venster = ?, aantal = 1 WHERE sleutel = ?')->execute([$nu, $sleutel]);
        return true;
    }
    if ((int)$rij['aantal'] >= $max) {
        return false;
    }
    $pdo->prepare('UPDATE lq_rem SET aantal = aantal + 1 WHERE sleutel = ?')->execute([$sleutel]);
    return true;
}

/** Bewaartermijn: inzendingen van lessen ouder dan bewaar_dagen gaan weg. Hooguit eens per uur. */
function lq_opruimen(bool $altijd = false): void
{
    $pdo = lq_db();
    $laatst = (int)(lq_instelling('opgeruimd') ?? 0);
    if (!$altijd && time() - $laatst < 3600) {
        return;
    }
    $dagen = max(1, (int)lq_config()['bewaar_dagen']);
    $grens = date('Y-m-d', time() - $dagen * 86400);
    $pdo->prepare('DELETE FROM lq_inzending WHERE les_id IN (SELECT id FROM lq_les WHERE datum < ?)')->execute([$grens]);
    $pdo->prepare('DELETE FROM lq_rem WHERE venster < ?')->execute([intdiv(time(), 3600) - 48]);
    lq_zet_instelling('opgeruimd', (string)time());
}

function lq_vragen(array $les): array
{
    $v = json_decode((string)$les['vragen'], true);
    return is_array($v) ? $v : [];
}

/** Per vraag 1 als goed, 0 als fout. */
function lq_goed(array $vragen, string $antwoorden): array
{
    $a = explode(',', $antwoorden);
    $uit = [];
    foreach ($vragen as $i => $v) {
        $uit[] = (isset($a[$i]) && $a[$i] !== '' && (int)$a[$i] === (int)$v['goed']) ? 1 : 0;
    }
    return $uit;
}

function lq_naam_sleutel(string $voornaam, string $achternaam): string
{
    $n = mb_strtolower(trim(preg_replace('/\s+/u', ' ', $voornaam . ' ' . $achternaam)), 'UTF-8');
    return hash('sha256', $n);
}

function lq_kopteksten(): void
{
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    header('X-Robots-Tag: noindex, nofollow');
    header('Referrer-Policy: same-origin');
}

function lq_json($data, int $status = 200): void
{
    http_response_code($status);
    lq_kopteksten();
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function lq_fout(int $status, string $melding): void
{
    lq_json(['ok' => false, 'fout' => $melding], $status);
}

function lq_les_op_code(string $code): ?array
{
    $code = strtoupper(preg_replace('/[^A-Za-z0-9]/', '', $code));
    if ($code === '' || strlen($code) > 12) {
        return null;
    }
    $st = lq_db()->prepare('SELECT * FROM lq_les WHERE code = ?');
    $st->execute([$code]);
    $les = $st->fetch();
    return $les ?: null;
}
