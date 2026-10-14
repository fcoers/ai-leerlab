<?php
/** GET ?code=XXXXXX  ->  vak, les, open of dicht, en de vragen zonder de goede antwoorden. */
define('LESQUIZ', true);
require __DIR__ . '/lib/kern.php';

$les = lq_les_op_code((string)($_GET['code'] ?? ''));
if (!$les) {
    lq_fout(404, 'Deze lescode kennen we niet. Controleer de code op de dia.');
}
$uit = ['ok' => true, 'vak' => $les['vak'], 'titel' => $les['titel'], 'open' => lq_is_open($les),
        'bewaar_dagen' => (int)lq_config()['bewaar_dagen']];
if ($uit['open']) {
    $uit['vragen'] = array_map(fn($v) => ['vraag' => $v['vraag'], 'opties' => $v['opties']], lq_vragen($les));
}
lq_json($uit);
