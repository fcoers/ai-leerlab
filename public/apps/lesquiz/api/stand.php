<?php
/** GET ?s=<schermsleutel>  ->  stand voor het dashboard: aantallen uit de naamloze antwoorden, nooit namen.
 *  Bij een gesloten quiz per vraag ook goed_antwoord {letter, tekst}. */
define('LESQUIZ', true);
require __DIR__ . '/lib/kern.php';

$s = (string)($_GET['s'] ?? '');
if (!preg_match('/^[A-Za-z0-9]{20,48}$/', $s)) {
    ap_fout(404, 'Deze dashboardlink klopt niet.', 'onbekende_les');
}
$st = lq_db()->prepare('SELECT * FROM lq_les WHERE scherm = ?');
$st->execute([$s]);
$les = $st->fetch();
if (!$les) {
    ap_fout(404, 'Deze dashboardlink klopt niet.', 'onbekende_les');
}
$vragen = lq_vragen($les);
$goed = array_fill(0, count($vragen), 0);
$n = 0;
$st = lq_db()->prepare('SELECT antwoorden FROM lq_antwoord WHERE les_id = ?');
$st->execute([$les['id']]);
foreach ($st as $rij) {
    $n++;
    foreach (lq_goed($vragen, $rij['antwoorden']) as $i => $g) {
        $goed[$i] += $g;
    }
}
// Het goede antwoord gaat alleen mee als de quiz dicht is (klus 1088): zolang hij open is, kan een student die de
// dashboardlink heeft het antwoord niet aflezen. Weer open = weer zonder.
$open = lq_is_open($les);
ap_json(['ok' => true, 'vak' => $les['vak'], 'titel' => $les['titel'], 'code' => $les['code'],
         'open' => $open, 'ingezonden' => $n,
         'vragen' => array_map(function ($v, $g) use ($open) {
             $uit = ['vraag' => $v['vraag'], 'goed' => $g];
             $k = (int)($v['goed'] ?? -1);
             if (!$open && isset($v['opties'][$k])) {
                 $uit['goed_antwoord'] = ['letter' => chr(65 + $k), 'tekst' => (string)$v['opties'][$k]];
             }
             return $uit;
         }, $vragen, $goed)]);
