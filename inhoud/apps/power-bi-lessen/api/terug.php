<?php
/** Terugkomen met de duocode. POST {duocode} -> {ok, sessie, stand}. */
define('PB', true);
require __DIR__ . '/lib/kern.php';

pb_eis_eigen_herkomst();
$in = ap_lees_json(1024);
// Rem zonder IP: alleen foute codes tellen, 30 per kwartier voor iedereen samen, zodat raden niet loont.
if (pb_rem_vol('pb-terug-fout', 30, 900)) {
    ap_fout(429, 'Er zijn te veel verkeerde codes geprobeerd. Wacht een kwartier, of vraag je docent om een nieuwe code.', 'rem');
}
$code = pb_schone_duocode($in['duocode'] ?? null);
$duo = $code === '' ? null : pb_duo_op_code($code);
if (!$duo) {
    ap_rem('pb-terug-fout', 30, 900);
    ap_fout(404, 'Deze code kennen we niet. Een code ziet eruit als TULP-38.', 'onbekend');
}
pb_opruimen();
$sessie = pb_nieuwe_sessie((int)$duo['id']);
ap_json(['ok' => true, 'sessie' => $sessie, 'stand' => pb_stand(pb_duo_uit_sessie(['sessie' => $sessie]))]);
