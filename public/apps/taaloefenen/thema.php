<?php
/**
 * Eén thema: stand, soorten, overhoren, kaartjes, toetsronde en de lastige items.
 * Openbaar: /apps/taaloefenen/<taal>/<slug>/   Privé: /apps/taaloefenen/t/<code>/ (altijd noindex, geen canonical).
 * De .htaccess zet de mooie adressen om naar thema.php?taal=&slug= of thema.php?code=.
 */
define('TAALOEFENEN', true);
require __DIR__ . '/lib/kern.php';
require __DIR__ . '/lib/pagina.php';

$code = is_string($_GET['code'] ?? null) ? $_GET['code'] : null;
$taal = is_string($_GET['taal'] ?? null) ? $_GET['taal'] : '';
$slug = is_string($_GET['slug'] ?? null) ? $_GET['slug'] : '';

$t = null;
try {
    if ($code !== null) {
        $t = to_thema_op_code($code);
    } elseif (isset(TO_TALEN[$taal]) && preg_match('/^[a-z0-9-]{1,90}$/', $slug)) {
        $t = to_thema_op_slug($taal, $slug);
    }
} catch (Throwable $e) {
    error_log('taaloefenen: ' . $e->getMessage());
}

if (!$t) {
    http_response_code(404);
    to_kop(['titel' => 'Thema niet gevonden · AI-leerlab', 'omschrijving' => TO_OMSCHRIJVING, 'pad' => '/apps/taaloefenen/',
            'indexeren' => false, 'prive' => true, 'klasse' => 'to-niet', 'data' => ['scherm' => 'niet']]);
    ?>
    <a class="to-terug" href="/apps/taaloefenen/">Taaloefenen</a>
    <h1>Dit thema bestaat niet (meer)</h1>
    <p class="lede"><?= $code !== null
        ? 'Deze link werkt niet. Misschien is er een nieuwe link; vraag je docent erom.'
        : 'Misschien heeft het thema een andere naam gekregen. Op de start staan alle thema\'s.' ?></p>
    <p><a class="knop knop-primair" href="/apps/taaloefenen/">Naar de start</a></p>
<?php
    to_voet();
    exit;
}

$T = TO_TALEN[$t['taal']];
$prive = $t['zichtbaarheid'] === 'prive';
$a = to_aantallen($t);
$soorten = [['woord', 'Woorden', $a['woord'] ?? 0], ['zin', 'Zinnen', $a['zin'] ?? 0],
            ['vervoeging', 'Vervoegen', ($a['vervoeging-zin'] ?? 0) + ($a['vervoeging-kort'] ?? 0)]];
$soorten = array_values(array_filter($soorten, fn($s) => $s[2] > 0));
$omschrijving = 'Oefen de woorden, zinnen en werkwoorden van ' . $t['naam'] . ' in het ' . $T['naam'] .
    '. Je typt het antwoord, de app kijkt na en laat terugkomen wat je nog lastig vindt.';
$pad = to_pad($t);

to_kop(['titel' => $t['naam'] . ', ' . $T['naam'] . ' oefenen · AI-leerlab', 'omschrijving' => $omschrijving,
        'pad' => $pad, 'indexeren' => !$prive, 'prive' => $prive,
        'schema' => $prive ? null : to_schema($t['naam'] . ', ' . $T['naam'] . ' oefenen', $omschrijving, $pad),
        'klasse' => 'to-themapagina',
        'data' => ['scherm' => 'thema', 'taal' => $t['taal'], 'thema' => $t['uid'], 'code' => $prive ? $t['code'] : '',
                   'naam' => $t['naam']]]);
?>
    <a class="to-terug" href="/apps/taaloefenen/">Taaloefenen</a>
    <p class="label"><?= to_esc($T['naam']) ?><?= $prive ? ' · via een link' : '' ?></p>
    <h1><?= to_esc($t['naam']) ?></h1>

    <div class="to-stand" data-stand>
      <p class="to-getal"><span data-ken>&nbsp;</span> <span class="to-van" data-van><?= to_esc(to_aantal_tekst($t)) ?></span></p>
      <p data-stand-tekst>Je kent een item als het vier keer op rij goed ging, met dagen ertussen.</p>
    </div>

<?php if (count($soorten) > 1): ?>
    <h2>Wat oefen je</h2>
    <div class="to-soorten" role="group" aria-label="Soorten">
<?php foreach ($soorten as [$s, $label, $n]): ?>
      <button type="button" class="to-soort" data-soort="<?= $s ?>" aria-pressed="true"><span class="v" aria-hidden="true"></span><?= $label ?> <small><?= $n ?></small></button>
<?php endforeach; ?>
    </div>
<?php endif; ?>

    <div class="to-stapel">
      <button type="button" class="knop knop-primair" data-start="overhoren">Overhoor wat klaarstaat <span data-klaar-aantal></span></button>
      <button type="button" class="knop knop-secundair" data-start="kaartjes">Oefen met kaartjes</button>
      <button type="button" class="knop knop-secundair to-twee" data-start="toets">Overhoor het hele thema<span class="sub">Voor een toets. Telt niet mee voor je bakjes.</span></button>
    </div>

    <section class="to-lastig-blok" aria-labelledby="kop-lastig" data-lastig-blok hidden>
      <h2 id="kop-lastig">Lastig in dit thema</h2>
      <ul class="to-lastig" data-lastig></ul>
    </section>

<?php if ($prive): ?>
    <p class="to-voetnoot">Dit thema open je alleen met deze link. Je browser onthoudt het, dus het staat daarna ook op je start. Je voortgang staat alleen op dit apparaat.</p>
<?php else: ?>
    <p class="to-voetnoot">Je voortgang staat alleen op dit apparaat, in deze browser. Er gaat niets over jou naar de site.</p>
<?php endif; ?>
<?php
to_voet();
