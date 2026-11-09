<?php
/** Terugkomen met de duocode. POST {duocode} -> {ok, sessie, stand}. */
define('PB', true);
require __DIR__ . '/lib/kern.php';

pb_eis_eigen_herkomst();
$in = ap_lees_json(1024);
// Rem zonder IP: alleen foute codes tellen, 300 per kwartier voor iedereen samen. Met ongeveer 2,4 miljoen codes loont
// raden niet (bij 30 duo's 0,4 % kans per kwartier), en een klas die zich vertypt komt er niet aan.
const PB_TERUG_FOUT_MAX = 300;
if (pb_rem_vol('pb-terug-fout', PB_TERUG_FOUT_MAX, 900)) {
    ap_fout(429, 'Er zijn te veel verkeerde codes geprobeerd. Wacht een kwartier, of vraag je docent om een nieuwe code.', 'rem');
}
pb_opruimen();
$code = pb_schone_duocode($in['duocode'] ?? null);
$duo = $code === '' ? null : pb_duo_op_code($code);
if (!$duo) {
    ap_rem('pb-terug-fout', PB_TERUG_FOUT_MAX, 900);
    ap_fout(404, 'Deze code kennen we niet. Een code ziet eruit als TULP-ROOS-38.', 'onbekend');
}
$sessie = pb_nieuwe_sessie((int)$duo['id']);
ap_json(['ok' => true, 'sessie' => $sessie, 'stand' => pb_stand(pb_duo_uit_sessie(['sessie' => $sessie]))]);
