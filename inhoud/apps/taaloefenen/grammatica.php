<?php
/**
 * Grammatica (klus 952, ontwerp Bram, inhoud Dide): overzicht per taal en één pagina per onderdeel.
 * Overzicht: /apps/taaloefenen/<taal>/grammatica/    Onderdeel: /apps/taaloefenen/<taal>/grammatica/<slug>/
 * Alles staat als HTML in de pagina; JavaScript zet alleen de luisterknoppen aan (spraak.js).
 * Titels en description: lib/pagina.php (to_gram_titel, TO_GRAM_TITEL_*, TO_GRAM_OMSCHRIJVING_*).
 */
define('TAALOEFENEN', true);
require __DIR__ . '/lib/kern.php';
require __DIR__ . '/lib/pagina.php';

$taal = is_string($_GET['taal'] ?? null) ? $_GET['taal'] : '';
$slug = is_string($_GET['slug'] ?? null) ? $_GET['slug'] : null;

$g = null;
try {
    if (isset(TO_TALEN[$taal])) {
        $g = to_grammatica($taal);
    }
} catch (Throwable $e) {
    error_log('taaloefenen: ' . $e->getMessage());
}
$o = null;
$plek = -1;
if ($g && $slug !== null) {
    foreach ($g['onderdelen'] as $i => $x) {
        if ($x['slug'] === $slug) {
            $o = $x;
            $plek = $i;
        }
    }
}

if (!$g || ($slug !== null && !$o)) {
    http_response_code(404);
    to_kop(['titel' => 'Pagina niet gevonden · AI-leerlab', 'omschrijving' => TO_OMSCHRIJVING, 'pad' => '/apps/taaloefenen/',
            'indexeren' => false, 'prive' => true, 'klasse' => 'to-niet', 'data' => ['scherm' => 'niet']]);
    ?>
    <a class="to-terug" href="<?= $g ? to_esc(to_grammatica_pad($taal)) : '/apps/taaloefenen/' ?>"><?= $g ? 'Grammatica ' . to_esc(TO_TALEN[$taal]['naam']) : 'Taaloefenen' ?></a>
    <h1>Deze uitleg bestaat niet (meer)</h1>
    <p class="lede">Misschien heeft het onderdeel een andere naam gekregen.</p>
    <p><a class="knop knop-primair" href="/apps/taaloefenen/">Naar de start</a></p>
<?php
    to_voet();
    exit;
}

$T = TO_TALEN[$taal];
$lang = $T['lang'];
$bijv = $taal === 'duits' ? 'Duitse' : 'Franse';
$overzicht = to_grammatica_pad($taal);
$n = count($g['onderdelen']);
$n_tekst = $n === 1 ? '1 onderdeel' : "$n onderdelen";

/** Tekst met de veranderde letters als <b> (vet en onderstreept, geen kleur). */
function to_met_nadruk(string $vorm, array $posities): string
{
    if (!$posities) {
        return to_esc($vorm);
    }
    // aaneengesloten letters in één <b> (n<b>imm</b>st), zodat de onderstreping doorloopt
    $uit = '';
    $open = false;
    foreach (mb_str_split($vorm, 1, 'UTF-8') as $i => $c) {
        $vet = in_array($i, $posities, true);
        if ($vet !== $open) {
            $uit .= $vet ? '<b>' : '</b>';
            $open = $vet;
        }
        $uit .= to_esc($c);
    }
    return $uit . ($open ? '</b>' : '');
}

/** Wat de luisterknop bij een regel van het rijtje zegt: er/sie/es wordt er, je ai wordt j'ai, (e) valt weg. */
function to_rijtje_regel(string $persoon, string $vorm): string
{
    $p = explode('/', $persoon)[0];
    $v = trim(preg_replace('/\([^()]*\)/u', '', $vorm));
    if ($p === 'je' && preg_match('/^[aeiouyéèêâîôûh]/iu', $v)) {
        return "j'" . $v;
    }
    return $p . ' ' . $v;
}

if ($o === null) {
    // ---------------------------------------------------------------- overzicht
    $h1 = $bijv . ' grammatica';
    $omschrijving = sprintf(TO_GRAM_OMSCHRIJVING_OVERZICHT, $bijv, $n_tekst);
    to_kop(['titel' => TO_GRAM_TITEL_OVERZICHT[$taal], 'omschrijving' => $omschrijving, 'pad' => $overzicht, 'indexeren' => true,
            'schema' => to_schema_les($h1, $omschrijving, $overzicht, $taal), 'klasse' => 'to-grammatica',
            'data' => ['scherm' => 'grammatica', 'taal' => $taal]]);
    $groepen = [];
    foreach ($g['onderdelen'] as $x) {
        $groepen[$x['groep']][] = $x;
    }
    ?>
    <a class="to-terug" href="/apps/taaloefenen/?taal=<?= to_esc($taal) ?>">Taaloefenen</a>
    <p class="label"><?= to_esc($T['naam']) ?></p>
    <h1><?= to_esc($h1) ?></h1>
    <p class="lede">Korte uitleg bij de woordjes en zinnen die je oefent, met rijtjes en voorbeeldzinnen.</p>
<?php foreach ($groepen as $naam => $lijst): ?>
    <h2><?= to_esc($naam) ?></h2>
    <ul class="to-themas">
<?php foreach ($lijst as $x): ?>
      <li><a class="to-thema" href="<?= to_esc(to_grammatica_pad($taal, $x['slug'])) ?>">
        <div class="to-thema-tekst"><h3><?= to_esc($x['titel']) ?></h3>
        <span class="to-regel"><?= to_esc($x['kort']) ?></span></div>
        <span class="to-chev" aria-hidden="true"></span>
      </a></li>
<?php endforeach; ?>
    </ul>
<?php endforeach; ?>
<?php
    to_voet();
    exit;
}

// ---------------------------------------------------------------- één onderdeel
$pad = to_grammatica_pad($taal, $o['slug']);
$thema = null;
try {
    $thema = to_thema_op_namen($taal, $o['hoort_bij']);
} catch (Throwable $e) {
    error_log('taaloefenen: ' . $e->getMessage());
}
$omschrijving = sprintf(TO_GRAM_OMSCHRIJVING_ONDERDEEL, rtrim($o['kort'], '. '), $thema ? ' en oefenen' : '');
to_kop(['titel' => to_gram_titel($o['titel'], $T['naam']), 'omschrijving' => $omschrijving, 'pad' => $pad,
        'indexeren' => true, 'schema' => to_schema_les($o['titel'], $omschrijving, $pad, $taal, ['Grammatica ' . $T['naam'], $overzicht]),
        'klasse' => 'to-grammatica to-onderdeel', 'data' => ['scherm' => 'grammatica', 'taal' => $taal]]);

// Vette letters per rijtje uit nadruk_letters van Dide (persoon zonder letters: niets vet), en dezelfde woorden in de voorbeeldzinnen.
$nadruk_woorden = [];
$rijtjes = [];
foreach ($o['rijtjes'] as $r) {
    $regels = [];
    foreach ($r['vormen'] as $p => $v) {
        $pos = $r['letters'][$p] ?? [];
        if ($pos) {
            $nadruk_woorden[mb_strtolower($v)] = $pos;
        }
        $regels[] = [$p, $v, $pos];
    }
    $rijtjes[] = [$r, $regels];
}
/** Een voorbeeldzin met de veranderde letters van de rijtjes onderstreept (bij een woord dat precies zo in een rijtje staat). */
function to_zin_met_nadruk(string $zin, array $woorden): string
{
    $delen = preg_split('/(\p{L}+)/u', $zin, -1, PREG_SPLIT_DELIM_CAPTURE);
    $uit = '';
    foreach ($delen as $d) {
        $k = mb_strtolower($d);
        $uit .= isset($woorden[$k]) ? str_replace('<b>', '<b class="to-onder">', to_met_nadruk($d, $woorden[$k])) : to_esc($d);
    }
    return $uit;
}
?>
    <a class="to-terug" href="<?= to_esc($overzicht) ?>">Grammatica <?= to_esc($T['naam']) ?></a>
    <p class="label"><?= to_esc($T['naam']) ?> · <?= to_esc($o['groep']) ?></p>
    <h1><?= to_esc($o['titel']) ?></h1>
    <div class="to-uitleg">
<?php foreach ($o['uitleg'] as $a): ?>
      <p><?= to_esc($a) ?></p>
<?php endforeach; ?>
    </div>

<?php if ($rijtjes): ?>
    <div class="to-rijtjes">
<?php foreach ($rijtjes as [$r, $regels]):
    $kop = mb_strtoupper(mb_substr($r['werkwoord'], 0, 1)) . mb_substr($r['werkwoord'], 1) . ' · ' . $r['tijd'];
    $spreek = implode("\n", array_map(fn($x) => to_rijtje_regel($x[0], $x[1]), $regels)); ?>
      <div class="to-rijtje to-gram-rijtje" lang="<?= $lang ?>">
        <div class="to-rijtje-kop"><p class="to-etiket"><?= to_esc($kop) ?></p><?= to_luister($spreek, $taal, 'het rijtje van ' . $r['werkwoord']) ?></div>
        <table>
          <caption class="to-sr"><?= to_esc($r['werkwoord'] . ', ' . $r['tijd']) ?></caption>
          <tbody>
<?php foreach ($regels as [$p, $v, $pos]): ?>
            <tr><th scope="row"><?= to_esc(str_replace('/', ' / ', $p)) ?></th><td><?= to_met_nadruk($v, $pos) ?></td></tr>
<?php endforeach; ?>
          </tbody>
        </table>
      </div>
<?php endforeach; ?>
    </div>
<?php endif; ?>

<?php foreach ($o['tabellen'] as $tb): ?>
    <div class="to-rijtje to-gram-tabel">
      <table>
        <thead><tr><?php foreach ($tb['kolommen'] as $k): ?><th scope="col"><?= to_esc($k) ?></th><?php endforeach; ?></tr></thead>
        <tbody>
<?php foreach ($tb['rijen'] as $rij): ?>
          <tr><?php foreach ($rij as $c): ?><td><?= to_esc($c) ?></td><?php endforeach; ?></tr>
<?php endforeach; ?>
        </tbody>
      </table>
    </div>
<?php endforeach; ?>

<?php if (!empty($o['let_op'])): $lo = $o['let_op']; ?>
    <aside class="to-letop" aria-label="Let op">
      <p class="to-etiket">Let op</p>
      <p><?= to_esc($lo['tekst']) ?></p>
<?php if ($lo['fout'] !== '' && $lo['goed'] !== ''): ?>
      <dl class="to-letop-paar">
        <div><dt>Niet</dt><dd lang="<?= $lang ?>"><?= to_esc($lo['fout']) ?></dd></div>
        <div><dt>Wel</dt><dd lang="<?= $lang ?>"><?= to_esc($lo['goed']) ?></dd></div>
      </dl>
<?php endif; ?>
    </aside>
<?php endif; ?>

<?php if ($o['voorbeelden']): ?>
    <h2>Voorbeelden</h2>
    <ul class="to-voorbeelden">
<?php foreach ($o['voorbeelden'] as $vb): ?>
      <li>
        <div><p class="to-vb-zin" lang="<?= $lang ?>"><?= to_zin_met_nadruk($vb['zin'], $nadruk_woorden) ?></p>
<?php if ($vb['nl'] !== ''): ?>
        <p class="to-vb-nl"><?= to_esc($vb['nl']) ?></p>
<?php endif; ?>
        </div>
        <?= to_luister($vb['zin'], $taal) ?>

      </li>
<?php endforeach; ?>
    </ul>
<?php endif; ?>

<?php if ($thema): ?>
    <p class="to-oefen"><a class="knop knop-primair" href="<?= to_esc(to_pad($thema)) ?>">Oefen <?= to_esc(mb_strtolower(mb_substr($o['titel'], 0, 1)) . mb_substr($o['titel'], 1)) ?></a></p>
<?php endif; ?>

    <nav class="to-vorvol" aria-label="Andere onderdelen">
<?php $vorige = $g['onderdelen'][$plek - 1] ?? null; $volgende = $g['onderdelen'][$plek + 1] ?? null; ?>
<?php if ($vorige): ?>
      <a class="to-vv" href="<?= to_esc(to_grammatica_pad($taal, $vorige['slug'])) ?>" rel="prev"><span>Vorige</span><b><?= to_esc($vorige['titel']) ?></b></a>
<?php else: ?>
      <span class="to-vv-leeg"></span>
<?php endif; ?>
<?php if ($volgende): ?>
      <a class="to-vv to-vv-volgende" href="<?= to_esc(to_grammatica_pad($taal, $volgende['slug'])) ?>" rel="next"><span>Volgende</span><b><?= to_esc($volgende['titel']) ?></b></a>
<?php else: ?>
      <span class="to-vv-leeg"></span>
<?php endif; ?>
    </nav>
<?php
to_voet();
