<?php
/**
 * Naamloze pogingen ontvangen. POST JSON {klascode, pogingen: [{onderdeel, goed, foutcode, hulp, datum}, ...]}
 *   ->  {ok, opgeslagen}
 * Er wordt per poging alleen bewaard: klas, datum, onderdeel, goed, foutcode, hulp. Geen tijdstip, geen IP-adres,
 * geen apparaat. Een poging die niet klopt, slaan we over.
 */
define('WISKUNDE', true);
require __DIR__ . '/lib/kern.php';

wo_eis_eigen_herkomst();
$in = ap_lees_json(16 * 1024);
$code = wo_schone_code($in['klascode'] ?? null, WO_KLASCODE_LENGTE);
if ($code === '') {
    ap_fout(404, 'Deze klascode kennen we niet.', 'onbekend');
}
$lijst = $in['pogingen'] ?? null;
if (!is_array($lijst) || !array_is_list($lijst) || count($lijst) > WO_MAX_POGINGEN_PER_VERZOEK) {
    ap_fout(400, 'Verzoek niet te lezen.', 'verzoek');
}
if (!ap_rem('wo-pogingen', 3000, 60)) {
    ap_fout(429, 'Even te veel tegelijk.', 'rem');
}
$klas = wo_klas_op_code($code);
if (!$klas) {
    ap_fout(404, 'Deze klascode kennen we niet.', 'onbekend');
}
if ($klas['status'] !== 'actief') {
    ap_fout(410, 'Deze klascode is niet meer in gebruik.', 'gestopt');
}
// Per klas hooguit 600 verzoeken per minuut: een klas van dertig die tegelijk oefent, haalt dat niet.
if (!ap_rem('wo-k:' . $klas['id'], 600, 60)) {
    ap_fout(429, 'Even te veel tegelijk.', 'rem');
}

$pdo = wo_db();
$st = $pdo->prepare('INSERT INTO wo_poging (klas_id, datum, onderdeel, goed, foutcode, hulp) VALUES (?, ?, ?, ?, ?, ?)');
$n = 0;
$pdo->beginTransaction();
foreach ($lijst as $p) {
    $rij = wo_geldige_poging($p);
    if ($rij === null) {
        continue;
    }
    $st->execute([$klas['id'], $rij['datum'], $rij['onderdeel'], $rij['goed'], $rij['foutcode'], $rij['hulp']]);
    $n++;
}
$pdo->commit();
wo_opruimen();
ap_json(['ok' => true, 'opgeslagen' => $n]);
