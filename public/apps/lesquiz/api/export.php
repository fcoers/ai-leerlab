<?php
/**
 * Voor het script op Frits' Mac. Header X-Lesquiz-Sleutel: <exportsleutel uit het beheer>.
 * Geeft de lessen die open staan of van vandaag of gisteren zijn, met de inzendingen.
 * (Geen Authorization-header: die laat PHP-FPM achter Apache/LiteSpeed soms vallen.)
 */
define('LESQUIZ', true);
require __DIR__ . '/lib/kern.php';

$sleutel = (string)($_SERVER['HTTP_X_LESQUIZ_SLEUTEL'] ?? '');
if ($sleutel === '' || !hash_equals(lq_exportsleutel(), $sleutel)) {
    // Geen rem vóór de controle: een vreemde kan zo het script op de Mac niet laten haperen.
    // Raden heeft geen zin: de sleutel is 40 tekens (160 bits).
    lq_fout(403, 'De sleutel klopt niet. Haal hem opnieuw op in het beheer, onder Koppeling met je Mac.');
}
if (!lq_rem('export', 120, 60)) {
    lq_fout(429, 'Te vaak opgevraagd.');
}
lq_opruimen();
$pdo = lq_db();
// ?ids=1,2,3: ook deze lessen, hoe oud ook. Het script vraagt zo de lessen die al in Excel staan; een les die
// niet terugkomt, is verwijderd, en een les zonder inzendingen is gewist. Zo volgt Excel de server.
$ids = array_slice(array_values(array_unique(array_filter(array_map('intval', explode(',', (string)($_GET['ids'] ?? '')))))), 0, 1000);
$waar = 'datum >= ? OR open_tot > ?';
$args = [date('Y-m-d', time() - 86400), lq_nu()];
if ($ids) {
    $waar .= ' OR id IN (' . implode(',', array_fill(0, count($ids), '?')) . ')';
    $args = array_merge($args, $ids);
}
$st = $pdo->prepare("SELECT * FROM lq_les WHERE $waar ORDER BY datum, id");
$st->execute($args);
$lessen = [];
foreach ($st->fetchAll() as $les) {
    $vragen = lq_vragen($les);
    $q = $pdo->prepare('SELECT voornaam, achternaam, toestel, antwoorden, tijd FROM lq_inzending WHERE les_id = ? ORDER BY tijd, id');
    $q->execute([$les['id']]);
    $rijen = [];
    $per_toestel = [];
    foreach ($q->fetchAll() as $r) {
        $naam = $r['voornaam'] . ' ' . $r['achternaam'];
        $eerder = $per_toestel[$r['toestel']] ?? null;
        $per_toestel[$r['toestel']] = $per_toestel[$r['toestel']] ?? $naam;
        $a = array_map('intval', explode(',', $r['antwoorden']));
        $rijen[] = ['voornaam' => $r['voornaam'], 'achternaam' => $r['achternaam'], 'tijd' => $r['tijd'],
                    'antwoorden' => array_map(fn($i, $v) => $v['opties'][$i] ?? '', $a, $vragen),
                    'goed' => lq_goed($vragen, $r['antwoorden']), 'zelfde_toestel_als' => $eerder];
    }
    $lessen[] = ['id' => (int)$les['id'], 'vak' => $les['vak'], 'titel' => $les['titel'], 'datum' => $les['datum'],
                 'open' => lq_is_open($les), 'vragen' => array_map(fn($v) => $v['vraag'], $vragen),
                 'inzendingen' => $rijen];
}
lq_json(['ok' => true, 'tijd' => lq_nu(), 'lessen' => $lessen]);
