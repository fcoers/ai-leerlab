<?php
/**
 * Klasoverzicht voor de docent. POST JSON {docentcode, periode: week|4weken|alles}  ->  klastotalen per onderdeel.
 * De docentcode hoort bij precies één klas; de server zoekt de klas alleen op via de hash van die code, dus met een
 * code zie je nooit een andere klas. Getallen pas vanaf WO_DREMPEL_STUDENTEN aanmeldingen. Alleen totalen.
 * De rekenregels staan in wo_klasoverzicht() in lib/kern.php; klassen.php (actie overzicht) gebruikt dezelfde.
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

ap_json(wo_klasoverzicht($klas, $in['periode'] ?? null));
