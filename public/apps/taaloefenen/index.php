<?php
/**
 * Start van taaloefenen: taal, wat vandaag klaarstaat, de openbare thema's.
 * De lede en de themalijst staan in de HTML; wat vandaag klaarstaat rekent de browser uit de eigen voortgang.
 */
define('TAALOEFENEN', true);
require __DIR__ . '/lib/kern.php';
require __DIR__ . '/lib/pagina.php';

$themas = ['frans' => [], 'duits' => []];
$grammatica = ['frans' => null, 'duits' => null];   // klus 952: één rij per taal onder de thema's
try {
    foreach (to_openbare_themas() as $t) {
        $themas[$t['taal']][] = $t;
    }
    foreach (array_keys(TO_TALEN) as $taal) {
        $grammatica[$taal] = to_grammatica($taal);
    }
} catch (Throwable $e) {
    error_log('taaloefenen: ' . $e->getMessage());   // zonder database: de pagina staat er, zonder thema's
}

// Terug uit een thema: /apps/taaloefenen/?taal=duits toont meteen die taal (de canonical blijft zonder ?taal).
$kies = isset($_GET['taal']) && is_string($_GET['taal']) && isset(TO_TALEN[$_GET['taal']]) ? $_GET['taal'] : 'frans';

$h1 = 'Frans en Duits oefenen';
$lede = 'Woordjes, zinnen en werkwoorden. Jij typt wat je weet, de app kijkt na en onthoudt wat je nog lastig vindt.';
to_kop(['titel' => TO_TITEL, 'omschrijving' => TO_OMSCHRIJVING, 'pad' => '/apps/taaloefenen/', 'indexeren' => true,
        'ogtitel' => TO_TITEL, 'schema' => to_schema('Taaloefenen: Frans en Duits oefenen', TO_OMSCHRIJVING, '/apps/taaloefenen/'),
        'klasse' => 'to-start', 'data' => ['scherm' => 'start']]);
?>
    <div class="to-intro">
      <div>
        <h1><?= to_esc($h1) ?></h1>
        <p class="lede"><?= to_esc($lede) ?></p>
      </div>
      <picture class="to-avatar"><source media="(prefers-color-scheme: dark)" srcset="/assets/img/avatars/donker/dide-rust.webp"><img src="/assets/img/avatars/dide-rust.webp" width="401" height="560" alt=""></picture>
    </div>

    <div class="to-taal" role="group" aria-label="Taal">
<?php foreach (TO_TALEN as $code => $T): ?>
      <button type="button" data-kies-taal="<?= $code ?>" aria-pressed="<?= $code === $kies ? 'true' : 'false' ?>"><?= $T['naam'] ?></button>
<?php endforeach; ?>
    </div>

    <div class="to-wissel" data-wissel>
      <section class="to-vandaag to-kaart" aria-labelledby="kop-vandaag" data-vandaag>
        <h2 id="kop-vandaag" class="label">Vandaag</h2>
        <p class="to-getal" data-vandaag-getal>&nbsp;</p>
        <p data-vandaag-tekst>Kies hieronder een thema om te beginnen.</p>
        <div class="to-stapel" data-vandaag-knoppen hidden>
          <button type="button" class="knop knop-primair" data-start="overhoren">Begin met overhoren</button>
          <button type="button" class="to-tekstlink" data-start="kaartjes">Eerst oefenen met kaartjes</button>
        </div>
      </section>

      <div class="to-tegels" data-tegels hidden>
        <a class="to-tegel" href="/apps/taaloefenen/paspoort/"><span class="to-tegel-beeld" data-tegel-stempel></span><span><b>Paspoort</b><small data-tegel-paspoort>&nbsp;</small></span></a>
        <a class="to-tegel" href="/apps/taaloefenen/reiziger/"><span class="to-tegel-beeld" data-tegel-reiziger></span><span><b>Reiziger</b><small data-tegel-stappen>&nbsp;</small></span></a>
      </div>

      <section aria-label="Thema's">
<?php foreach (TO_TALEN as $code => $T):
    // Per hoofdstuk (klus 1066), nieuwste bovenaan. Geen enkel thema met een hoofdstuk: één lijst onder "Thema's".
    $groepen = to_per_hoofdstuk($themas[$code]);
    $per_hoofdstuk = (bool)array_filter($groepen, fn($g) => $g['hoofdstuk'] !== null);
?>
        <div data-themas="<?= $code ?>"<?= $code === $kies ? '' : ' hidden' ?>>
<?php if (!$per_hoofdstuk): ?>
          <h2>Thema's</h2>
<?php endif; ?>
<?php if (!$themas[$code]): ?>
          <p class="to-zacht" data-geen-themas>Nog geen thema's in het <?= $T['naam'] ?>.</p>
<?php endif; ?>
<?php foreach ($groepen as $g): ?>
<?php if ($per_hoofdstuk): ?>
          <h2 class="to-hoofdstuk"<?= $g['hoofdstuk'] !== null ? ' lang="' . $T['lang'] . '"' : '' ?>><?= to_esc($g['hoofdstuk'] ?? 'Overig') ?></h2>
<?php endif; ?>
          <ul class="to-themas" data-groep="<?= to_esc($g['hoofdstuk'] ?? '') ?>">
<?php foreach ($g['themas'] as $t): ?>
            <li><a class="to-thema" href="<?= to_esc(to_pad($t)) ?>" data-thema="<?= to_esc($t['uid']) ?>">
              <div class="to-thema-tekst"><h3><?= to_esc($per_hoofdstuk ? to_naam_in_hoofdstuk($t) : $t['naam']) ?></h3>
              <span class="to-regel" data-regel><?= to_esc(to_aantal_tekst($t)) ?></span>
              <span class="to-balk" aria-hidden="true"><i data-balk></i></span></div>
              <span class="to-chev" aria-hidden="true"></span>
            </a></li>
<?php endforeach; ?>
          </ul>
<?php endforeach; ?>
<?php if ($per_hoofdstuk): ?>
          <h2 class="to-hoofdstuk" data-eigen-kop hidden>Via een link</h2>
<?php endif; ?>
          <ul class="to-themas" data-eigen-themas hidden></ul>
<?php if ($grammatica[$code]): $n = count($grammatica[$code]['onderdelen']); ?>
          <h2>Grammatica</h2>
          <ul class="to-themas">
            <li><a class="to-thema" href="<?= to_esc(to_grammatica_pad($code)) ?>">
              <div class="to-thema-tekst"><h3>Grammatica <?= $T['naam'] ?></h3>
              <span class="to-regel"><?= $n === 1 ? '1 onderdeel' : $n . ' onderdelen' ?></span></div>
              <span class="to-chev" aria-hidden="true"></span>
            </a></li>
          </ul>
<?php endif; ?>
        </div>
<?php endforeach; ?>
      </section>
    </div>

    <p class="to-voetnoot">Je voortgang staat alleen op dit apparaat, in deze browser. Er gaat niets over jou naar de site.</p>
<?php
to_voet();
