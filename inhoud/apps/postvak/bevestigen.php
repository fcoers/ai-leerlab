<?php
/** POST JSON {ids: [41, 42]}, header X-Postvak-Sleutel  ->  wist precies die inzendingen. Opnieuw bevestigen is veilig. */
define('AI_APPS', true);
require __DIR__ . '/lib/kern.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    ap_fout(405, 'Alleen POST.', 'methode');
}
pv_controleer_sleutel();
$in = ap_lees_json(64 * 1024);
$ids = $in['ids'] ?? null;
if (!is_array($ids) || !array_is_list($ids) || $ids === []) {
    ap_fout(400, 'Stuur een lijst ids met minstens één nummer.', 'verzoek');
}
if (count($ids) > 1000) {
    ap_fout(413, 'Hooguit 1000 ids per keer.', 'te_veel');
}
foreach ($ids as $id) {
    if (!is_int($id) || $id < 1) {
        ap_fout(400, 'Elke id moet een geheel getal groter dan 0 zijn. Er is niets gewist.', 'verzoek');
    }
}
$ids = array_values(array_unique($ids));
$pdo = ap_db();
$plek = implode(',', array_fill(0, count($ids), '?'));
$pdo->beginTransaction();
$st = $pdo->prepare("SELECT id FROM pv_inzending WHERE id IN ($plek)");
$st->execute($ids);
$gevonden = array_map('intval', $st->fetchAll(PDO::FETCH_COLUMN));
$pdo->prepare("DELETE FROM pv_inzending WHERE id IN ($plek)")->execute($ids);
$pdo->commit();
ap_json(['ok' => true, 'gewist' => count($gevonden), 'niet_gevonden' => array_values(array_diff($ids, $gevonden))]);
