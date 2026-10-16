<?php
/**
 * Lesquiz: kern voor de API. Bouwt op de gedeelde kern van de apps (config, database, rem, postvak).
 * Beheer gebeurt alleen in de Productiviteit-app op de Mac; die stuurt lessen via api/lessen.php.
 * Op de site staan lessen met vragen en naamloze antwoorden (lesnummer en gekozen antwoorden). Inzendingen
 * met naam gaan naar het postvak en blijven daar tot de Mac ze ophaalt.
 */
if (!defined('LESQUIZ')) {
    http_response_code(404);
    exit;
}
if (!defined('AI_APPS')) {
    define('AI_APPS', true);
}
require dirname(__DIR__, 3) . '/postvak/lib/kern.php';

const LQ_ALFABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';   // geen 0/O, 1/I/L: goed over te typen van een dia
const LQ_SCHERM_ALFABET = 'abcdefghijkmnpqrstuvwxyz23456789';
const LQ_INHOUD_VERSIE = 1;                            // versie van de inzending in het postvak
const LQ_SCHEMA = '2';

function lq_db(): PDO
{
    static $klaar = false;
    $pdo = ap_db();
    if (!$klaar) {
        lq_tabellen($pdo);
        $klaar = true;
    }
    return $pdo;
}

/**
 * Tabellen van de lesquiz. Schema 2 (16-10-2026): beheer vanaf de Mac, namen alleen in het postvak.
 * Schema 1 bestond alleen in lokale tests (nooit live): die tabellen gaan weg, met hun testgegevens.
 */
function lq_tabellen(PDO $pdo): void
{
    $schema = null;
    try {
        $schema = $pdo->query("SELECT waarde FROM lq_instelling WHERE naam = 'schema'")->fetchColumn();
    } catch (Throwable $e) {
        // nog geen tabellen
    }
    if ($schema === LQ_SCHEMA) {
        return;
    }
    foreach (['lq_inzending', 'lq_rem', 'lq_antwoord', 'lq_les', 'lq_instelling'] as $t) {
        $pdo->exec("DROP TABLE IF EXISTS $t");
    }
    $sqlite = ap_is_sqlite($pdo);
    $id = $sqlite ? 'INTEGER PRIMARY KEY AUTOINCREMENT' : 'INT NOT NULL AUTO_INCREMENT PRIMARY KEY';
    $eind = $sqlite ? '' : ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';
    $pdo->exec("CREATE TABLE lq_instelling (naam VARCHAR(40) NOT NULL PRIMARY KEY, waarde VARCHAR(255) NOT NULL)$eind");
    $pdo->exec("CREATE TABLE lq_les (
        id $id,
        uid VARCHAR(64) NOT NULL UNIQUE,
        code VARCHAR(12) NOT NULL UNIQUE,
        scherm VARCHAR(48) NOT NULL UNIQUE,
        vak VARCHAR(80) NOT NULL,
        titel VARCHAR(120) NOT NULL,
        datum VARCHAR(10) NOT NULL,
        vragen TEXT NOT NULL,
        open_tot VARCHAR(19) NULL,
        aangemaakt VARCHAR(19) NOT NULL)$eind");
    // Naamloos, voor het dashboard: alleen de les en de gekozen antwoorden. Geen naam, geen tijd, geen toestel.
    $pdo->exec("CREATE TABLE lq_antwoord (
        id $id,
        les_id INT NOT NULL,
        antwoorden VARCHAR(20) NOT NULL)$eind");
    $pdo->exec('CREATE INDEX lq_antwoord_les ON lq_antwoord (les_id)');
    $st = $pdo->prepare('INSERT INTO lq_instelling (naam, waarde) VALUES (?, ?)');
    $st->execute(['schema', LQ_SCHEMA]);
    $st->execute(['geheim', bin2hex(random_bytes(32))]);
}

/** Geheim voor de toestelcode. Staat in de database, niet in de code. */
function lq_geheim(): string
{
    static $g = null;
    return $g ??= (string)lq_db()->query("SELECT waarde FROM lq_instelling WHERE naam = 'geheim'")->fetchColumn();
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
    return !empty($les['open_tot']) && $les['open_tot'] > ap_nu();
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

function lq_les_op_code(string $code): ?array
{
    $code = strtoupper(preg_replace('/[^A-Za-z0-9]/', '', $code));
    if ($code === '' || strlen($code) > 12) {
        return null;
    }
    $st = lq_db()->prepare('SELECT * FROM lq_les WHERE code = ?');
    $st->execute([$code]);
    return $st->fetch() ?: null;
}

function lq_les_op_uid(string $uid): ?array
{
    $st = lq_db()->prepare('SELECT * FROM lq_les WHERE uid = ?');
    $st->execute([$uid]);
    return $st->fetch() ?: null;
}

function lq_groep(array $les): string
{
    return 'les:' . (int)$les['id'];
}

function lq_aantal_antwoorden(array $les): int
{
    $st = lq_db()->prepare('SELECT COUNT(*) FROM lq_antwoord WHERE les_id = ?');
    $st->execute([$les['id']]);
    return (int)$st->fetchColumn();
}

/** De stand van een les voor de Mac (koppelvlak 4.1). */
function lq_stand(array $les): array
{
    $adres = ap_adres();
    $open = lq_is_open($les);
    return ['uid' => $les['uid'], 'code' => $les['code'], 'scherm' => $les['scherm'],
            'student_url' => $adres . '/apps/lesquiz/?les=' . $les['code'],
            'dashboard_url' => $adres . '/apps/lesquiz/scherm/?s=' . $les['scherm'],
            'vak' => $les['vak'], 'titel' => $les['titel'], 'datum' => $les['datum'],
            'vragen' => array_map(fn($v) => ['vraag' => $v['vraag'], 'opties' => $v['opties'], 'goed' => (int)$v['goed']],
                                  lq_vragen($les)),
            'open' => $open, 'open_tot' => $open ? ap_iso((int)strtotime($les['open_tot'])) : null,
            'antwoorden' => lq_aantal_antwoorden($les), 'in_postvak' => pv_aantal_groep('lesquiz', lq_groep($les))];
}

/** Meldt het postvak tot wanneer er een quiz open staat, zodat de Mac dan vaker vraagt. */
function lq_meld_actief(): void
{
    $st = lq_db()->prepare('SELECT MAX(open_tot) FROM lq_les WHERE open_tot > ?');
    $st->execute([ap_nu()]);
    $tot = $st->fetchColumn();
    pv_zet_actief('lesquiz', $tot ? (int)strtotime($tot) : 0);
}
