<?php
/** De stand van het duo. POST {sessie} -> stand. */
define('PB', true);
require __DIR__ . '/lib/kern.php';

pb_eis_eigen_herkomst();
$in = ap_lees_json(1024);
ap_json(pb_stand(pb_duo_uit_sessie($in)));
