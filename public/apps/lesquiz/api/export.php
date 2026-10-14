<?php
/**
 * Voor het script op Frits' Mac. Header X-Lesquiz-Sleutel: <exportsleutel uit het beheer>.
 * Geeft de lessen die open staan of van vandaag of gisteren zijn, met de inzendingen.
 * (Geen Authorization-header: die laat PHP-FPM achter Apache/LiteSpeed soms vallen.)
 */
define('LESQUIZ', true);
require __DIR__ . '/lib/kern.php';

$sleutel = (string)($_SERVER['HTTP_X_LESQUIZ_SLEUTEL'] ?? '');
if (!lq_rem('export', 120, 60)) {
    lq_fout(429, 'Te vaak opgevraagd.');
}
if ($sleutel === '' || !hash_equals(lq_exportsleutel(), $sleutel)) {
    lq_fout(403, 'De sleutel klopt niet. Haal hem opnieuw op in het beheer, onder Koppeling met je Mac.');
}
lq_opruimen();
$pdo = lq_db();
$st = $pdo->prepare('SELECT * FROM lq_les WHERE datum >= ? OR open_tot > ? ORDER BY datum, id');
$st->execute([date('Y-m-d', time() - 86400), lq_nu()]);
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
