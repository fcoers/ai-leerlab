<?php
/** GET ?s=<schermsleutel>  ->  stand voor het dashboard: aantallen, nooit namen. */
define('LESQUIZ', true);
require __DIR__ . '/lib/kern.php';

$s = (string)($_GET['s'] ?? '');
if (!preg_match('/^[A-Za-z0-9]{20,48}$/', $s)) {
    lq_fout(404, 'Deze dashboardlink klopt niet.');
}
$st = lq_db()->prepare('SELECT * FROM lq_les WHERE scherm = ?');
$st->execute([$s]);
$les = $st->fetch();
if (!$les) {
    lq_fout(404, 'Deze dashboardlink klopt niet.');
}
$vragen = lq_vragen($les);
$goed = array_fill(0, count($vragen), 0);
$n = 0;
$st = lq_db()->prepare('SELECT antwoorden FROM lq_inzending WHERE les_id = ?');
$st->execute([$les['id']]);
foreach ($st as $rij) {
    $n++;
    foreach (lq_goed($vragen, $rij['antwoorden']) as $i => $g) {
        $goed[$i] += $g;
    }
}
lq_json(['ok' => true, 'vak' => $les['vak'], 'titel' => $les['titel'], 'code' => $les['code'],
         'open' => lq_is_open($les), 'ingezonden' => $n,
         'vragen' => array_map(fn($v, $g) => ['vraag' => $v['vraag'], 'goed' => $g], $vragen, $goed)]);
