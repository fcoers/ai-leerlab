<?php
/**
 * Inhoud voor de oefenpagina in de browser (koppelvlak taaloefenen, hoofdstuk 7). Geen sleutel.
 * GET ?taal=frans|duits  ->  de openbare thema's van die taal
 * GET ?code=<24 tekens>  ->  alleen dat privé-thema
 * Er gaat nooit een privé-thema mee zonder zijn code, en geen code, volgorde of tijd.
 */
define('TAALOEFENEN', true);
require dirname(__DIR__) . '/lib/kern.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    ap_fout(405, 'Alleen GET.', 'methode');
}

$code = $_GET['code'] ?? null;
$taal = $_GET['taal'] ?? null;

if (is_string($code)) {
    $t = to_thema_op_code($code);
    if (!$t) {
        ap_fout(404, 'Deze link werkt niet (meer). Vraag je docent om de goede link.', 'onbekend_thema');
    }
    ap_json(['ok' => true, 'taal' => $t['taal'], 'themas' => [to_voor_browser($t)]]);
}

if (!is_string($taal) || !isset(TO_TALEN[$taal])) {
    ap_fout(400, 'Kies een taal: frans of duits.', 'verzoek');
}
$uit = ['ok' => true, 'taal' => $taal, 'themas' => array_map('to_voor_browser', to_openbare_themas($taal))];
// Openbare inhoud mag kort in de browser blijven; ap_json zet no-store, dat overschrijven we hier.
if (!headers_sent()) {
    http_response_code(200);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: public, max-age=300');
    header('X-Content-Type-Options: nosniff');
    header('X-Robots-Tag: noindex, nofollow');
}
echo json_encode($uit, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
