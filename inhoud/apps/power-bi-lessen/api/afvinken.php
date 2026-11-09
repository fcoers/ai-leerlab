<?php
/**
 * Een "Je ziet nu"-moment afvinken. POST {sessie, moment} -> stand.
 * Alleen het eerstvolgende moment; latere stappen zijn zichtbaar maar nog niet af te vinken. Is een stap daarmee
 * helemaal klaar, dan gaat het gesprek met de tutor bij die stap meteen weg.
 */
define('PB', true);
require __DIR__ . '/lib/kern.php';

pb_eis_eigen_herkomst();
$in = ap_lees_json(1024);
$duo = pb_duo_uit_sessie($in);
$les = pb_eis_soort($duo, 'stappen');
$volgend = pb_volgend_moment($les, pb_afgevinkt((int)$duo['id'], (int)$duo['les']));
$moment = $in['moment'] ?? null;
if ($volgend === null || !is_string($moment) || $moment !== $volgend['id']) {
    ap_fout(409, 'Vink de stappen op volgorde af.', 'volgorde', ['stand' => pb_stand($duo)]);
}
$pdo = pb_db();
$pdo->prepare('INSERT INTO pb_vink (duo_id, les, moment, datum) VALUES (?, ?, ?, ?)')
    ->execute([$duo['id'], $duo['les'], $moment, pb_vandaag()]);
$na = pb_volgend_moment($les, pb_afgevinkt((int)$duo['id'], (int)$duo['les']));
if ($na === null || $na['stap'] !== $volgend['stap']) {
    $pdo->prepare('DELETE FROM pb_gesprek WHERE duo_id = ? AND les = ? AND stap = ?')->execute([$duo['id'], $duo['les'], $volgend['stap']]);
}
ap_json(pb_stand($duo));
