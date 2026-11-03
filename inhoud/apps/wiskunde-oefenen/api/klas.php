<?php
/**
 * Aanmelden met een klascode. POST JSON {klascode}  ->  {ok, naam} of een duidelijke melding.
 * Telt alleen hoeveel keer er is aangemeld; er wordt niets over de student bewaard.
 */
define('WISKUNDE', true);
require __DIR__ . '/lib/kern.php';

wo_eis_eigen_herkomst();
$in = ap_lees_json(1024);
$code = wo_schone_code($in['klascode'] ?? null, WO_KLASCODE_LENGTE);
if ($code === '') {
    ap_fout(404, 'Deze klascode kennen we niet.', 'onbekend');
}
// Rem zonder IP: alle aanmeldingen samen, zodat niemand klascodes kan raden.
if (!ap_rem('wo-aanmelden', 120, 60)) {
    ap_fout(429, 'Even te veel tegelijk. Probeer het over een minuut opnieuw.', 'rem');
}
$klas = wo_klas_op_code($code);
if (!$klas) {
    ap_fout(404, 'Deze klascode kennen we niet.', 'onbekend');
}
if ($klas['status'] !== 'actief') {
    ap_fout(410, 'Deze klascode is niet meer in gebruik.', 'gestopt');
}
wo_db()->prepare('UPDATE wo_klas SET aanmeldingen = aanmeldingen + 1 WHERE id = ?')->execute([$klas['id']]);
ap_json(['ok' => true, 'naam' => $klas['naam']]);
