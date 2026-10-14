<?php
/**
 * Lesquiz, beheer. Alleen voor Frits, achter het beheerwachtwoord uit lesquiz-config.php.
 * Per les: vak, titel, datum en drie meerkeuzevragen met het goede antwoord; openen en sluiten;
 * QR-code en link voor de dia; dashboardlink; inzendingen bekijken, downloaden en wissen.
 * Alles via gewone formulieren (POST, dan terug naar een pagina), met CSRF-token.
 */
define('LESQUIZ', true);
require __DIR__ . '/../api/lib/kern.php';

const LQ_AANTAL_VRAGEN = 3;
const LQ_AANTAL_OPTIES = 4;

$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || strtolower((string)($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '')) === 'https';
session_name('lesquiz_beheer');
session_set_cookie_params(['lifetime' => 0, 'path' => '/apps/lesquiz/beheer/', 'secure' => $https,
                           'httponly' => true, 'samesite' => 'Strict']);
session_start();

lq_kopteksten();
header("Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: blob:; "
     . "font-src 'self'; connect-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'none'");
header('X-Frame-Options: DENY');

$cfg = lq_config();
$basis = ($https ? 'https://' : 'http://') . ($_SERVER['HTTP_HOST'] ?? 'ai-leerlab.nl');
$adres = rtrim((string)($cfg['adres'] ?? $basis), '/');

// ---------------------------------------------------------------- hulpjes
function h($s): string
{
    return htmlspecialchars((string)$s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function ingelogd(): bool
{
    return !empty($_SESSION['in']) && ($_SESSION['tot'] ?? 0) > time();
}

function csrf(): string
{
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(24));
    }
    return $_SESSION['csrf'];
}

function csrf_veld(): string
{
    return '<input type="hidden" name="csrf" value="' . h(csrf()) . '">';
}

function naar(string $pad, string $melding = ''): void
{
    if ($melding !== '') {
        $_SESSION['melding'] = $melding;
    }
    header('Location: ' . $pad, true, 303);
    exit;
}

function les_ophalen(int $id): ?array
{
    $st = lq_db()->prepare('SELECT * FROM lq_les WHERE id = ?');
    $st->execute([$id]);
    return $st->fetch() ?: null;
}

function datum_nl(string $d): string
{
    $m = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    $t = strtotime($d);
    return $t ? date('j', $t) . ' ' . $m[(int)date('n', $t) - 1] . ' ' . date('Y', $t) : $d;
}

function icoon(string $naam): string
{
    $p = [
        'plus' => '<path d="M12 5v14M5 12h14"/>',
        'pijl' => '<path d="M5 12h14M13 6l6 6-6 6"/>',
        'terug' => '<path d="M19 12H5M11 6l-6 6 6 6"/>',
        'open' => '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
        'dicht' => '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
        'kopie' => '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h9"/>',
        'download' => '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
        'scherm' => '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
        'wis' => '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
        'goed' => '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
        'sleutel' => '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2"/>',
        'potlood' => '<path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/>',
    ][$naam] ?? '';
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' . $p . '</svg>';
}

function kop(string $titel, bool $met_uitloggen = true): void
{
    $melding = $_SESSION['melding'] ?? '';
    unset($_SESSION['melding']);
    ?><!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title><?= h($titel) ?> · Lesquiz beheer</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <meta name="color-scheme" content="light dark">
  <link rel="stylesheet" href="/assets/site.css?v=202610142034">
  <link rel="stylesheet" href="/apps/lesquiz/assets/lesquiz.css?v=202610142034">
  <script src="/apps/lesquiz/assets/qrcode.js?v=202610142034" defer></script>
  <script src="/apps/lesquiz/assets/qr.js?v=202610142034" defer></script>
  <script src="/apps/lesquiz/assets/beheer.js?v=202610142034" defer></script>
</head>
<body class="lq-beheer">
  <header class="lq-kop">
    <div class="wrap">
      <a class="merk" href="/apps/lesquiz/beheer/" aria-label="Lesquiz beheer, naar het overzicht">
        <picture><source media="(prefers-color-scheme: dark)" srcset="/assets/img/logo-op-donker.svg"><img class="logo" src="/assets/img/logo.svg" width="211" height="52" alt=""></picture>
      </a>
      <p class="label">Lesquiz · beheer</p>
      <?php if ($met_uitloggen && ingelogd()): ?>
      <form method="post" action="?"><?= csrf_veld() ?><button class="knop knop-spook lq-klein" name="actie" value="uitloggen">Uitloggen</button></form>
      <?php endif; ?>
    </div>
  </header>
  <main id="inhoud" class="wrap lq-main">
  <?php if ($melding !== ''): ?><p class="lq-melding" role="status"><?= icoon('goed') ?><span><?= h($melding) ?></span></p><?php endif; ?>
<?php
}

function voet(): void
{
    echo "\n  </main>\n</body>\n</html>\n";
}

// ---------------------------------------------------------------- acties (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $actie = (string)($_POST['actie'] ?? '');
    if ($actie === 'inloggen') {
        // Rem per bezoeker, zodat een ander Frits niet uit het beheer kan houden:
        // - een browser waarop eerder goed is ingelogd (ondertekend cookie) heeft een eigen teller;
        // - anders telt de sessie (10 per 10 minuten) en het netwerkadres, versleuteld (40 per 10 minuten,
        //   ruimer omdat een klas achter één adres kan zitten). Het adres zelf wordt niet bewaard.
        $apparaat = lq_apparaat();
        $ip_sleutel = 'login-ip:' . substr(hash_hmac('sha256', (string)($_SERVER['REMOTE_ADDR'] ?? ''), lq_geheim()), 0, 32);
        $vrij = $apparaat !== ''
            ? lq_rem('login-a:' . $apparaat, 10, 600)
            : (lq_rem('login-s:' . substr(hash('sha256', session_id()), 0, 32), 10, 600) && lq_rem($ip_sleutel, 40, 600));
        if (!$vrij) {
            $_SESSION['fout_login'] = 'Te vaak geprobeerd. Wacht tien minuten.';
            naar('?');
        }
        $ww = (string)($cfg['beheer_wachtwoord'] ?? '');
        if (strlen($ww) < 12) {
            $_SESSION['fout_login'] = 'Er staat nog geen beheerwachtwoord van minstens 12 tekens in lesquiz-config.php.';
            naar('?');
        }
        if (hash_equals($ww, (string)($_POST['wachtwoord'] ?? ''))) {
            session_regenerate_id(true);
            lq_apparaat_onthouden($https);
            $_SESSION = ['in' => true, 'tot' => time() + 8 * 3600, 'csrf' => bin2hex(random_bytes(24))];
            naar('?');
        }
        $_SESSION['fout_login'] = 'Dat wachtwoord klopt niet.';
        naar('?');
    }
    if (!ingelogd() || !hash_equals(csrf(), (string)($_POST['csrf'] ?? ''))) {
        naar('?', 'Je sessie was verlopen. Log opnieuw in.');
    }
    $pdo = lq_db();
    $id = (int)($_POST['id'] ?? 0);
    switch ($actie) {
        case 'uitloggen':
            $_SESSION = [];
            session_destroy();
            naar('?');
        case 'opslaan':
            [$les, $fouten] = les_uit_formulier($_POST);
            if ($fouten) {
                $_SESSION['formulier'] = ['waarden' => $_POST, 'fouten' => $fouten];
                naar($id ? "?p=bewerk&id=$id" : '?p=nieuw');
            }
            if ($id) {
                $pdo->prepare('UPDATE lq_les SET vak = ?, titel = ?, datum = ?, vragen = ? WHERE id = ?')
                    ->execute([$les['vak'], $les['titel'], $les['datum'], $les['vragen'], $id]);
                naar("?p=les&id=$id", 'De les is bijgewerkt.');
            }
            for ($i = 0; $i < 5; $i++) {
                try {
                    $pdo->prepare('INSERT INTO lq_les (code, scherm, vak, titel, datum, vragen, open_tot, aangemaakt)
                                   VALUES (?, ?, ?, ?, ?, ?, NULL, ?)')
                        ->execute([lq_willekeurig(6), lq_willekeurig(32, 'abcdefghijkmnpqrstuvwxyz23456789'),
                                   $les['vak'], $les['titel'], $les['datum'], $les['vragen'], lq_nu()]);
                    naar('?p=les&id=' . (int)$pdo->lastInsertId(), 'De les is aangemaakt. Open hem als de les begint.');
                } catch (PDOException $e) {
                    // code bestond al: nog een keer
                }
            }
            naar('?', 'Aanmaken lukte niet. Probeer het opnieuw.');
        case 'open':
            $uren = max(1, (int)$cfg['open_uren']);
            $pdo->prepare('UPDATE lq_les SET open_tot = ? WHERE id = ?')->execute([lq_nu($uren * 3600), $id]);
            naar("?p=les&id=$id", "De quiz staat open, tot hooguit $uren uur vanaf nu.");
        case 'sluit':
            $pdo->prepare('UPDATE lq_les SET open_tot = NULL WHERE id = ?')->execute([$id]);
            naar("?p=les&id=$id", 'De quiz is gesloten. Er kan niets meer worden ingezonden.');
        case 'wis_inzending':
            $pdo->prepare('DELETE FROM lq_inzending WHERE id = ? AND les_id = ?')->execute([(int)$_POST['inzending'], $id]);
            naar("?p=les&id=$id#inzendingen", 'De inzending is gewist.');
        case 'wis_inzendingen':
            $pdo->prepare('DELETE FROM lq_inzending WHERE les_id = ?')->execute([$id]);
            naar("?p=les&id=$id", 'Alle inzendingen van deze les zijn gewist.');
        case 'verwijder_les':
            $pdo->prepare('DELETE FROM lq_inzending WHERE les_id = ?')->execute([$id]);
            $pdo->prepare('DELETE FROM lq_les WHERE id = ?')->execute([$id]);
            naar('?', 'De les en de inzendingen zijn verwijderd.');
        case 'nieuwe_sleutel':
            lq_zet_instelling('export_versie', (string)((int)(lq_instelling('export_versie') ?? '1') + 1));
            naar('?p=koppeling', 'Er is een nieuwe sleutel. De oude werkt niet meer.');
    }
    naar('?');
}

/** Id van een browser waarop eerder goed is ingelogd (cookie met HMAC), of '' als die er niet is of niet klopt. */
function lq_apparaat(): string
{
    $c = (string)($_COOKIE['lesquiz_apparaat'] ?? '');
    if (!preg_match('/^([a-z0-9]{24})\.([0-9a-f]{64})$/', $c, $m)) {
        return '';
    }
    return hash_equals(hash_hmac('sha256', 'apparaat-' . $m[1], lq_geheim()), $m[2]) ? $m[1] : '';
}

function lq_apparaat_onthouden(bool $https): void
{
    $id = lq_apparaat() ?: lq_willekeurig(24, 'abcdefghijkmnpqrstuvwxyz23456789');
    setcookie('lesquiz_apparaat', $id . '.' . hash_hmac('sha256', 'apparaat-' . $id, lq_geheim()),
              ['expires' => time() + 180 * 86400, 'path' => '/apps/lesquiz/beheer/', 'secure' => $https,
               'httponly' => true, 'samesite' => 'Strict']);
}

/** Leest en controleert het lesformulier. Geeft [les, fouten]. */
function les_uit_formulier(array $p): array
{
    $f = [];
    $t = fn($k, $max) => mb_substr(trim(preg_replace('/\s+/u', ' ', (string)($p[$k] ?? ''))), 0, $max, 'UTF-8');
    $vak = $t('vak', 80);
    $titel = $t('titel', 120);
    $datum = (string)($p['datum'] ?? '');
    if ($vak === '') {
        $f['vak'] = 'Vul het vak in.';
    }
    if ($titel === '') {
        $f['titel'] = 'Vul de les in, bijvoorbeeld "Les 4: regressie".';
    }
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $datum) || !strtotime($datum)) {
        $f['datum'] = 'Kies een datum.';
    }
    $vragen = [];
    for ($i = 0; $i < LQ_AANTAL_VRAGEN; $i++) {
        $vraag = mb_substr(trim((string)($p['vraag'][$i] ?? '')), 0, 300, 'UTF-8');
        $opties = [];
        $goed = null;
        for ($j = 0; $j < LQ_AANTAL_OPTIES; $j++) {
            $o = mb_substr(trim((string)($p['optie'][$i][$j] ?? '')), 0, 150, 'UTF-8');
            if ($o !== '') {
                if ((string)($p['goed'][$i] ?? '') === (string)$j) {
                    $goed = count($opties);
                }
                $opties[] = $o;
            }
        }
        if ($vraag === '') {
            $f["vraag$i"] = 'Vul vraag ' . ($i + 1) . ' in.';
        } elseif (count($opties) < 2) {
            $f["vraag$i"] = 'Geef bij vraag ' . ($i + 1) . ' minstens twee antwoorden.';
        } elseif ($goed === null) {
            $f["vraag$i"] = 'Kies bij vraag ' . ($i + 1) . ' welk antwoord goed is.';
        }
        $vragen[] = ['vraag' => $vraag, 'opties' => $opties, 'goed' => $goed ?? 0];
    }
    return [['vak' => $vak, 'titel' => $titel, 'datum' => $datum,
             'vragen' => json_encode($vragen, JSON_UNESCAPED_UNICODE)], $f];
}

// ---------------------------------------------------------------- pagina's (GET)
$p = (string)($_GET['p'] ?? '');

if (!ingelogd()) {
    $fout = $_SESSION['fout_login'] ?? '';
    unset($_SESSION['fout_login']);
    kop('Inloggen', false); ?>
    <section class="lq-smal">
      <h1>Inloggen</h1>
      <p>Het beheer van de lesquiz. Hier maak je per les de vragen, open en sluit je de quiz en zie je wie er was.</p>
      <form method="post" action="?" class="lq-formulier">
        <input type="hidden" name="actie" value="inloggen">
        <label for="ww">Beheerwachtwoord</label>
        <input id="ww" name="wachtwoord" type="password" autocomplete="current-password" required
               <?= $fout ? 'aria-invalid="true" aria-describedby="ww-fout"' : '' ?> autofocus>
        <?php if ($fout): ?><p class="lq-fout" id="ww-fout"><?= h($fout) ?></p><?php endif; ?>
        <button class="knop knop-primair">Inloggen<?= icoon('pijl') ?></button>
      </form>
    </section>
<?php voet();
    exit;
}

lq_opruimen();
$pdo = lq_db();

if ($p === 'csv') {
    $les = les_ophalen((int)($_GET['id'] ?? 0)) ?? naar('?');
    $vragen = lq_vragen($les);
    $st = $pdo->prepare('SELECT voornaam, achternaam, antwoorden, tijd FROM lq_inzending WHERE les_id = ? ORDER BY tijd, id');
    $st->execute([$les['id']]);
    $naam = preg_replace('/[^A-Za-z0-9 _-]/', '', $les['vak'] . ' ' . $les['datum'] . ' ' . $les['titel']);
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="Lesquiz ' . $naam . '.csv"');
    $uit = fopen('php://output', 'w');
    fwrite($uit, "\xEF\xBB\xBF");
    $kop = ['Voornaam', 'Achternaam', 'Tijd'];
    foreach ($vragen as $i => $v) {
        $kop[] = 'Antwoord ' . ($i + 1);
        $kop[] = 'Goed ' . ($i + 1);
    }
    $kop[] = 'Score';
    fputcsv($uit, $kop, ';', '"', '');
    foreach ($st as $r) {
        $a = explode(',', $r['antwoorden']);
        $g = lq_goed($vragen, $r['antwoorden']);
        $rij = [$r['voornaam'], $r['achternaam'], $r['tijd']];
        foreach ($vragen as $i => $v) {
            $rij[] = $v['opties'][(int)$a[$i]] ?? '';
            $rij[] = $g[$i] ? 'ja' : 'nee';
        }
        $rij[] = array_sum($g) . ' van ' . count($vragen);
        // Geen formules in Excel: een naam die met = + - @ begint krijgt een apostrof.
        $rij = array_map(fn($c) => preg_match('/^[=+\-@]/', (string)$c) ? "'" . $c : $c, $rij);
        fputcsv($uit, $rij, ';', '"', '');
    }
    exit;
}

if ($p === 'nieuw' || $p === 'bewerk') {
    $les = $p === 'bewerk' ? les_ophalen((int)($_GET['id'] ?? 0)) : null;
    if ($p === 'bewerk' && !$les) {
        naar('?');
    }
    $form = $_SESSION['formulier'] ?? null;
    unset($_SESSION['formulier']);
    $fouten = $form['fouten'] ?? [];
    if ($form) {
        $w = $form['waarden'];
    } elseif ($les) {
        $w = ['vak' => $les['vak'], 'titel' => $les['titel'], 'datum' => $les['datum'], 'vraag' => [], 'optie' => [], 'goed' => []];
        foreach (lq_vragen($les) as $i => $v) {
            $w['vraag'][$i] = $v['vraag'];
            $w['optie'][$i] = $v['opties'];
            $w['goed'][$i] = (string)$v['goed'];
        }
    } else {
        $w = ['vak' => (string)($_GET['vak'] ?? ''), 'titel' => '', 'datum' => date('Y-m-d')];
    }
    $vakken = $pdo->query('SELECT DISTINCT vak FROM lq_les ORDER BY vak')->fetchAll(PDO::FETCH_COLUMN);
    $n_inz = 0;
    if ($les) {
        $st = $pdo->prepare('SELECT COUNT(*) FROM lq_inzending WHERE les_id = ?');
        $st->execute([$les['id']]);
        $n_inz = (int)$st->fetchColumn();
    }
    kop($les ? 'Les bewerken' : 'Nieuwe les'); ?>
    <p><a class="lq-terug" href="<?= $les ? '?p=les&amp;id=' . (int)$les['id'] : '?' ?>"><?= icoon('terug') ?>Terug</a></p>
    <h1><?= $les ? 'Les bewerken' : 'Nieuwe les' ?></h1>
    <?php if ($n_inz): ?><p class="lq-let-op">Er zijn al <?= $n_inz ?> inzendingen. Pas je het goede antwoord aan, dan rekent het dashboard opnieuw. Haal geen antwoorden weg: dan schuiven de antwoorden van studenten mee.</p><?php endif; ?>
    <?php if ($fouten): ?><p class="lq-fout" role="alert" tabindex="-1" id="fouten">Nog niet opgeslagen: <?= h(implode(' ', $fouten)) ?></p><?php endif; ?>
    <form method="post" action="?" class="lq-formulier lq-lesformulier" novalidate>
      <?= csrf_veld() ?>
      <input type="hidden" name="actie" value="opslaan">
      <input type="hidden" name="id" value="<?= (int)($les['id'] ?? 0) ?>">
      <div class="lq-rij3">
        <div>
          <label for="vak">Vak</label>
          <input id="vak" name="vak" list="vakken" maxlength="80" required value="<?= h($w['vak'] ?? '') ?>" <?= isset($fouten['vak']) ? 'aria-invalid="true"' : '' ?>>
          <datalist id="vakken"><?php foreach ($vakken as $v): ?><option value="<?= h($v) ?>"><?php endforeach; ?></datalist>
        </div>
        <div>
          <label for="titel">Les</label>
          <input id="titel" name="titel" maxlength="120" required placeholder="Les 4: regressie" value="<?= h($w['titel'] ?? '') ?>" <?= isset($fouten['titel']) ? 'aria-invalid="true"' : '' ?>>
        </div>
        <div>
          <label for="datum">Datum</label>
          <input id="datum" name="datum" type="date" required value="<?= h($w['datum'] ?? '') ?>" <?= isset($fouten['datum']) ? 'aria-invalid="true"' : '' ?>>
        </div>
      </div>
      <p class="lq-hint">De drie vragen gaan over de vorige les. Twee tot vier antwoorden per vraag; kies bij elke vraag het goede antwoord. Een korte vraag (tot ongeveer 120 tekens) blijft groot op het dashboard; een langere wordt daar kleiner.</p>
      <?php for ($i = 0; $i < LQ_AANTAL_VRAGEN; $i++): ?>
      <fieldset class="lq-vraagblok" <?= isset($fouten["vraag$i"]) ? 'aria-invalid="true"' : '' ?>>
        <legend>Vraag <?= $i + 1 ?></legend>
        <label class="sr" for="v<?= $i ?>">Vraag <?= $i + 1 ?></label>
        <textarea id="v<?= $i ?>" name="vraag[<?= $i ?>]" rows="2" maxlength="300" required><?= h($w['vraag'][$i] ?? '') ?></textarea>
        <ol class="lq-opties-invoer">
          <?php for ($j = 0; $j < LQ_AANTAL_OPTIES; $j++): $letter = chr(65 + $j); ?>
          <li>
            <span class="lq-letter" aria-hidden="true"><?= $letter ?></span>
            <label class="sr" for="o<?= $i ?>_<?= $j ?>">Antwoord <?= $letter ?> bij vraag <?= $i + 1 ?></label>
            <input id="o<?= $i ?>_<?= $j ?>" name="optie[<?= $i ?>][<?= $j ?>]" maxlength="150" value="<?= h($w['optie'][$i][$j] ?? '') ?>" <?= $j < 2 ? 'required' : 'placeholder="(mag leeg)"' ?>>
            <label class="lq-goedkeuze"><input type="radio" name="goed[<?= $i ?>]" value="<?= $j ?>" <?= (string)($w['goed'][$i] ?? '') === (string)$j ? 'checked' : '' ?>><span>Goed</span></label>
          </li>
          <?php endfor; ?>
        </ol>
      </fieldset>
      <?php endfor; ?>
      <div class="knoppen">
        <button class="knop knop-primair"><?= $les ? 'Opslaan' : 'Les aanmaken' ?><?= icoon('pijl') ?></button>
        <a class="knop knop-spook" href="<?= $les ? '?p=les&amp;id=' . (int)$les['id'] : '?' ?>">Annuleren</a>
      </div>
    </form>
<?php voet();
    exit;
}

if ($p === 'les') {
    $les = les_ophalen((int)($_GET['id'] ?? 0)) ?? naar('?');
    $vragen = lq_vragen($les);
    $open = lq_is_open($les);
    $st = $pdo->prepare('SELECT id, voornaam, achternaam, antwoorden, tijd FROM lq_inzending WHERE les_id = ? ORDER BY tijd, id');
    $st->execute([$les['id']]);
    $inz = $st->fetchAll();
    $studentlink = $adres . '/apps/lesquiz/?les=' . $les['code'];
    $schermlink = $adres . '/apps/lesquiz/scherm/?s=' . $les['scherm'];
    kop($les['titel']); ?>
    <p><a class="lq-terug" href="?"><?= icoon('terug') ?>Alle lessen</a></p>
    <div class="lq-leskop">
      <div>
        <p class="label"><?= h($les['vak']) ?> · <?= h(datum_nl($les['datum'])) ?></p>
        <h1><?= h($les['titel']) ?></h1>
      </div>
      <a class="knop knop-spook lq-klein" href="?p=bewerk&amp;id=<?= (int)$les['id'] ?>"><?= icoon('potlood') ?>Bewerken</a>
    </div>

    <section class="lq-paneel lq-status <?= $open ? 'is-open' : '' ?>" aria-labelledby="status-kop">
      <div>
        <h2 id="status-kop" class="lq-statuskop"><?= icoon($open ? 'open' : 'dicht') ?><?= $open ? 'Open' : 'Gesloten' ?></h2>
        <p><?= $open ? 'Studenten kunnen inzenden tot ' . h(date('H:i', strtotime($les['open_tot']))) . ', of tot je sluit.'
                      : 'Niemand kan inzenden. Open de quiz als de les begint.' ?></p>
      </div>
      <form method="post" action="?"><?= csrf_veld() ?><input type="hidden" name="id" value="<?= (int)$les['id'] ?>">
        <?php if ($open): ?>
        <button class="knop knop-secundair" name="actie" value="sluit"><?= icoon('dicht') ?>Quiz sluiten</button>
        <?php else: ?>
        <button class="knop knop-primair" name="actie" value="open"><?= icoon('open') ?>Quiz openen</button>
        <?php endif; ?>
      </form>
    </section>

    <div class="lq-twee">
      <section class="lq-paneel" aria-labelledby="dia-kop">
        <h2 id="dia-kop">Voor je dia</h2>
        <p>Zet de QR-code op je dia. Wie niet kan scannen, typt het adres en de code.</p>
        <div class="lq-qr" data-qr="<?= h($studentlink) ?>" role="img" aria-label="QR-code naar de quiz van deze les"></div>
        <p class="lq-code"><span class="label">Lescode</span><strong><?= h($les['code']) ?></strong></p>
        <p class="lq-link"><?= h($studentlink) ?></p>
        <div class="knoppen">
          <button class="knop knop-secundair lq-klein" type="button" data-qr-download="QR <?= h($les['vak'] . ' ' . $les['titel']) ?>.png" hidden><?= icoon('download') ?>QR-code downloaden</button>
          <button class="knop knop-spook lq-klein" type="button" data-kopieer="<?= h($studentlink) ?>" hidden><?= icoon('kopie') ?>Link kopiëren</button>
        </div>
      </section>
      <section class="lq-paneel" aria-labelledby="dash-kop">
        <h2 id="dash-kop">Dashboard</h2>
        <p>Laat zien hoeveel vragen goed zijn beantwoord, zonder namen. Deze link is geheim: wie hem heeft, ziet de stand van deze les.</p>
        <p class="lq-link"><?= h($schermlink) ?></p>
        <div class="knoppen">
          <a class="knop knop-primair lq-klein" href="<?= h($schermlink) ?>" target="_blank" rel="noopener"><?= icoon('scherm') ?>Dashboard openen</a>
          <button class="knop knop-spook lq-klein" type="button" data-kopieer="<?= h($schermlink) ?>" hidden><?= icoon('kopie') ?>Link kopiëren</button>
        </div>
        <p class="lq-hint">In PowerPoint: zie de handleiding, "Dashboard op een dia".</p>
      </section>
    </div>

    <section class="lq-paneel" id="inzendingen" aria-labelledby="inz-kop">
      <div class="lq-paneelkop">
        <h2 id="inz-kop">Inzendingen <span class="lq-aantal"><?= count($inz) ?></span></h2>
        <?php if ($inz): ?><a class="knop knop-spook lq-klein" href="?p=csv&amp;id=<?= (int)$les['id'] ?>"><?= icoon('download') ?>Download (CSV)</a><?php endif; ?>
      </div>
      <?php if (!$inz): ?>
      <p>Nog niemand. Ververs de pagina tijdens de les, of kijk op het dashboard.</p>
      <?php else: ?>
      <div class="lq-tabel-wrap">
      <table class="lq-tabel">
        <thead><tr><th scope="col">Naam</th><th scope="col">Tijd</th><th scope="col">Goed</th><th scope="col"><span class="sr">Wissen</span></th></tr></thead>
        <tbody>
        <?php foreach ($inz as $r): $g = lq_goed($vragen, $r['antwoorden']); ?>
          <tr>
            <td><?= h($r['voornaam'] . ' ' . $r['achternaam']) ?></td>
            <td><?= h(date('H:i', strtotime($r['tijd']))) ?></td>
            <td><?= array_sum($g) ?> van <?= count($vragen) ?></td>
            <td><form method="post" action="?"><?= csrf_veld() ?><input type="hidden" name="id" value="<?= (int)$les['id'] ?>"><input type="hidden" name="inzending" value="<?= (int)$r['id'] ?>">
              <button class="lq-ikoonknop" name="actie" value="wis_inzending" data-bevestig="De inzending van <?= h($r['voornaam'] . ' ' . $r['achternaam']) ?> wissen?" aria-label="Inzending van <?= h($r['voornaam'] . ' ' . $r['achternaam']) ?> wissen"><?= icoon('wis') ?></button></form></td>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>
      </div>
      <?php endif; ?>
    </section>

    <section class="lq-paneel" aria-labelledby="vr-kop">
      <h2 id="vr-kop">Vragen</h2>
      <ol class="lq-vragenlijst">
        <?php foreach ($vragen as $v): ?>
        <li><p><?= h($v['vraag']) ?></p>
          <ul><?php foreach ($v['opties'] as $j => $o): ?>
            <li class="<?= $j === (int)$v['goed'] ? 'is-goed' : '' ?>"><span class="lq-letter" aria-hidden="true"><?= chr(65 + $j) ?></span><?= h($o) ?><?php if ($j === (int)$v['goed']): ?><span class="lq-goedlabel"><?= icoon('goed') ?>goed</span><?php endif; ?></li>
          <?php endforeach; ?></ul>
        </li>
        <?php endforeach; ?>
      </ol>
    </section>

    <section class="lq-paneel lq-gevaar" aria-labelledby="wis-kop">
      <h2 id="wis-kop">Wissen</h2>
      <p>Inzendingen worden vanzelf gewist <?= (int)$cfg['bewaar_dagen'] ?> dagen na de lesdatum. Eerder kan hier.</p>
      <form method="post" action="?" class="knoppen"><?= csrf_veld() ?><input type="hidden" name="id" value="<?= (int)$les['id'] ?>">
        <button class="knop knop-spook lq-klein" name="actie" value="wis_inzendingen" data-bevestig="Alle <?= count($inz) ?> inzendingen van deze les wissen? Dat kan niet ongedaan."><?= icoon('wis') ?>Alle inzendingen wissen</button>
        <button class="knop knop-spook lq-klein" name="actie" value="verwijder_les" data-bevestig="De les met vragen en inzendingen verwijderen? Dat kan niet ongedaan."><?= icoon('wis') ?>Les verwijderen</button>
      </form>
    </section>
<?php voet();
    exit;
}

if ($p === 'koppeling') {
    kop('Koppeling met je Mac'); ?>
    <p><a class="lq-terug" href="?"><?= icoon('terug') ?>Alle lessen</a></p>
    <h1>Koppeling met je Mac</h1>
    <section class="lq-paneel">
      <p>Het script op je Mac haalt tijdens de les de inzendingen op en zet ze in Excel. Het vraagt de eerste keer om deze sleutel en bewaart hem in de sleutelhanger van je Mac.</p>
      <p class="lq-code"><span class="label">Sleutel</span><strong class="lq-sleutel"><?= h(lq_exportsleutel()) ?></strong></p>
      <div class="knoppen">
        <button class="knop knop-secundair lq-klein" type="button" data-kopieer="<?= h(lq_exportsleutel()) ?>" hidden><?= icoon('kopie') ?>Sleutel kopiëren</button>
      </div>
      <p class="lq-hint">Denk je dat iemand anders de sleutel heeft? Maak een nieuwe. Het script vraagt dan opnieuw.</p>
      <form method="post" action="?"><?= csrf_veld() ?>
        <button class="knop knop-spook lq-klein" name="actie" value="nieuwe_sleutel" data-bevestig="Een nieuwe sleutel maken? De oude werkt daarna niet meer."><?= icoon('sleutel') ?>Nieuwe sleutel maken</button>
      </form>
    </section>
<?php voet();
    exit;
}

// Overzicht
$lessen = $pdo->query('SELECT l.*, (SELECT COUNT(*) FROM lq_inzending i WHERE i.les_id = l.id) AS n
                       FROM lq_les l ORDER BY l.vak, l.datum DESC, l.id DESC')->fetchAll();
$per_vak = [];
foreach ($lessen as $l) {
    $per_vak[$l['vak']][] = $l;
}
kop('Lessen'); ?>
    <div class="lq-leskop">
      <h1>Lessen</h1>
      <a class="knop knop-primair" href="?p=nieuw"><?= icoon('plus') ?>Nieuwe les</a>
    </div>
    <?php if (!$lessen): ?>
    <section class="lq-paneel">
      <p>Nog geen lessen. Maak er een met <strong>Nieuwe les</strong>: kies het vak, de les en de datum, en vul drie vragen over de vorige les in.</p>
    </section>
    <?php endif; ?>
    <?php foreach ($per_vak as $vak => $rij): ?>
    <section class="lq-vak" aria-labelledby="vak-<?= md5($vak) ?>">
      <div class="lq-paneelkop">
        <h2 id="vak-<?= md5($vak) ?>"><?= h($vak) ?></h2>
        <a class="lq-klein-link" href="?p=nieuw&amp;vak=<?= urlencode($vak) ?>"><?= icoon('plus') ?>Les bij dit vak</a>
      </div>
      <ul class="lq-lessen">
        <?php foreach ($rij as $l): $open = lq_is_open($l); ?>
        <li>
          <a href="?p=les&amp;id=<?= (int)$l['id'] ?>">
            <span class="lq-datum"><?= h(datum_nl($l['datum'])) ?></span>
            <span class="lq-lestitel"><?= h($l['titel']) ?></span>
            <span class="lq-pil <?= $open ? 'is-open' : '' ?>"><?= icoon($open ? 'open' : 'dicht') ?><?= $open ? 'Open' : 'Gesloten' ?></span>
            <span class="lq-n"><?= (int)$l['n'] ?> <span class="sr">inzendingen</span><span aria-hidden="true">ingezonden</span></span>
          </a>
        </li>
        <?php endforeach; ?>
      </ul>
    </section>
    <?php endforeach; ?>
    <section class="lq-paneel lq-onder">
      <p><a href="?p=koppeling"><?= icoon('sleutel') ?>Koppeling met je Mac</a> · Inzendingen worden <?= (int)$cfg['bewaar_dagen'] ?> dagen na de lesdatum vanzelf gewist.</p>
    </section>
<?php voet();
