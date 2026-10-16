<?php
/** GET ?max=200, header X-Postvak-Sleutel  ->  inzendingen die klaarliggen, oudste eerst. Wist nooit. Zie het koppelvlak. */
define('AI_APPS', true);
require __DIR__ . '/lib/kern.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    ap_fout(405, 'Alleen GET.', 'methode');
}
pv_controleer_sleutel();
pv_opruimen();

$max = (int)($_GET['max'] ?? 200);
$max = max(1, min(500, $max ?: 200));
$st = ap_db()->prepare('SELECT id, app, versie, ontvangen, inhoud FROM pv_inzending ORDER BY id LIMIT ' . ($max + 1));
$st->execute();
$rijen = $st->fetchAll();
$meer = count($rijen) > $max;
$uit = [];
foreach (array_slice($rijen, 0, $max) as $r) {
    $uit[] = ['id' => (int)$r['id'], 'app' => $r['app'], 'versie' => (int)$r['versie'],
              'ontvangen' => ap_iso((int)$r['ontvangen']), 'inhoud' => json_decode($r['inhoud'], true)];
}
pv_zet_instelling('laatst_opgehaald', (string)time());
$actief = pv_actief();
ap_json(['ok' => true, 'server_tijd' => ap_iso(time()), 'bewaar_dagen' => pv_bewaar_dagen(), 'actief' => $actief,
         'wacht_seconden' => $actief ? 30 : 120, 'meer' => $meer, 'inzendingen' => $uit]);
