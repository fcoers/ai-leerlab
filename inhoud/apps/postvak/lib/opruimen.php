<?php
/**
 * Vangnet voor het postvak, als geplande taak in Plesk (elk uur): wist inzendingen die langer dan
 * postvak_bewaar_dagen (hooguit 3) niet zijn opgehaald. Alleen vanaf de opdrachtregel; deze map is dicht voor de web.
 * Plesk: Geplande taken, Taak toevoegen, "PHP-script uitvoeren", pad httpdocs/public/apps/postvak/lib/opruimen.php (webroot is httpdocs/public), elk uur.
 */
if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}
define('AI_APPS', true);
require __DIR__ . '/kern.php';

$n = pv_opruimen(true);
echo date('Y-m-d H:i') . " postvak opgeruimd: $n inzending" . ($n === 1 ? '' : 'en') . " ouder dan " . pv_bewaar_dagen() . " dagen gewist.\n";
