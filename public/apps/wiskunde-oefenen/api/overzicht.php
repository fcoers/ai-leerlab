<?php
/**
 * Klasoverzicht voor de docent. POST JSON {docentcode, periode: week|4weken|alles}  ->  klastotalen per onderdeel.
 * De docentcode hoort bij precies één klas; de server zoekt de klas alleen op via de hash van die code, dus met een
 * code zie je nooit een andere klas. Getallen pas vanaf WO_DREMPEL_STUDENTEN aanmeldingen. Alleen totalen.
 */
define('WISKUNDE', true);
require __DIR__ . '/lib/kern.php';

wo_eis_eigen_herkomst();
$in = ap_lees_json(1024);

// Rem op foute codes, zonder IP: alle foute pogingen samen hooguit 30 per minuut.
if (wo_rem_vol('wo-docent-fout', 30, 60)) {
    ap_fout(429, 'Te veel foute codes. Wacht een minuut.', 'rem');
}
$code = wo_schone_code($in['docentcode'] ?? null, WO_DOCENTCODE_LENGTE);
$klas = null;
if ($code !== '') {
    $st = wo_db()->prepare('SELECT * FROM wo_klas WHERE docent_sha256 = ?');
    $st->execute([hash('sha256', $code)]);
    $klas = $st->fetch() ?: null;
}
if (!$klas || !hash_equals((string)$klas['docent_sha256'], hash('sha256', $code))) {
    ap_rem('wo-docent-fout', 30, 60);
    ap_fout(401, 'Deze docentcode kennen we niet, of hij is ingetrokken.', 'code');
}

$periode = in_array($in['periode'] ?? '', ['week', '4weken', 'alles'], true) ? $in['periode'] : 'week';
$maandag = date('Y-m-d', strtotime('monday this week'));
$vanaf = ['week' => $maandag, '4weken' => wo_vandaag(-27), 'alles' => '0000-01-01'][$periode];

$uit = [
    'ok' => true,
    'klas' => ['naam' => $klas['naam'], 'aanmeldingen' => (int)$klas['aanmeldingen'], 'status' => $klas['status']],
    'drempel' => WO_DREMPEL_STUDENTEN,
    'min_pogingen' => WO_MIN_POGINGEN,
    'periode' => $periode,
    'vanaf' => $periode === 'alles' ? null : $vanaf,
];
if ((int)$klas['aanmeldingen'] < WO_DREMPEL_STUDENTEN) {
    $uit['genoeg'] = false;
    ap_json($uit);
}
$uit['genoeg'] = true;

$pdo = wo_db();
$st = $pdo->prepare('SELECT onderdeel, COUNT(*) AS pogingen, SUM(goed) AS goed, AVG(hulp) AS hulp_gem,
        SUM(CASE WHEN hulp >= 4 THEN 1 ELSE 0 END) AS tot_uitleg
    FROM wo_poging WHERE klas_id = ? AND datum >= ? GROUP BY onderdeel');
$st->execute([$klas['id'], $vanaf]);
$per = [];
foreach ($st->fetchAll() as $r) {
    $per[$r['onderdeel']] = $r;
}
$st = $pdo->prepare('SELECT onderdeel, COUNT(*) AS n FROM wo_poging WHERE klas_id = ? AND datum >= ? GROUP BY onderdeel');
$st->execute([$klas['id'], $maandag]);
$week = [];
foreach ($st->fetchAll() as $r) {
    $week[$r['onderdeel']] = (int)$r['n'];
}
$st = $pdo->prepare('SELECT onderdeel, foutcode, COUNT(*) AS n FROM wo_poging
    WHERE klas_id = ? AND datum >= ? AND goed = 0 AND foutcode IS NOT NULL GROUP BY onderdeel, foutcode ORDER BY n DESC, foutcode');
$st->execute([$klas['id'], $vanaf]);
$fouten = [];
foreach ($st->fetchAll() as $r) {
    $fouten[$r['onderdeel']][] = ['foutcode' => $r['foutcode'], 'aantal' => (int)$r['n']];
}

$uit['onderdelen'] = [];
foreach (wo_bank()['onderdelen'] as $o) {
    $r = $per[$o] ?? null;
    $uit['onderdelen'][] = [
        'onderdeel' => $o,
        'pogingen' => $r ? (int)$r['pogingen'] : 0,
        'goed' => $r ? (int)$r['goed'] : 0,
        'hulp_gem' => $r ? round((float)$r['hulp_gem'], 1) : 0,
        'tot_uitleg' => $r ? (int)$r['tot_uitleg'] : 0,
        'deze_week' => $week[$o] ?? 0,
        'foutcodes' => array_slice($fouten[$o] ?? [], 0, 3),
    ];
}
ap_json($uit);
