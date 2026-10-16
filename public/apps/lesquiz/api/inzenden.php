<?php
/**
 * POST JSON {code, voornaam, achternaam, antwoorden: [i, i, i], toestel}  ->  opgeslagen of een duidelijke melding.
 * Elke inzending wordt gesplitst: met naam in het postvak (tot de Mac haar ophaalt), en naamloos (les en antwoorden)
 * voor het dashboard. Dubbele namen en toestellen markeert de app op de Mac; de site houdt ze niet tegen.
 */
define('LESQUIZ', true);
require __DIR__ . '/lib/kern.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    ap_fout(405, 'Alleen versturen.', 'methode');
}
if (stripos((string)($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json') !== 0) {
    ap_fout(415, 'Verkeerd soort verzoek.', 'soort');
}
$herkomst = (string)($_SERVER['HTTP_ORIGIN'] ?? '');
if ($herkomst !== '' && parse_url($herkomst, PHP_URL_HOST) !== parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
    ap_fout(403, 'Verzoek van een andere site.', 'herkomst');
}
$in = json_decode((string)file_get_contents('php://input', false, null, 0, 8192), true);
if (!is_array($in)) {
    ap_fout(400, 'Verzoek niet te lezen.', 'verzoek');
}

$les = lq_les_op_code((string)($in['code'] ?? ''));
if (!$les) {
    ap_fout(404, 'Deze lescode kennen we niet.', 'onbekende_les');
}
if (!lq_is_open($les)) {
    ap_fout(409, 'De quiz van deze les is gesloten. Er is niets opgeslagen.', 'gesloten');
}

$toestel = (string)($in['toestel'] ?? '');
if (!preg_match('/^[A-Za-z0-9_-]{16,64}$/', $toestel)) {
    ap_fout(400, 'Verzoek niet te lezen.', 'verzoek');
}
// Rem: per toestel 6 inzendingen per minuut, per les 400 per minuut.
if (!ap_rem('t:' . substr(hash('sha256', $toestel), 0, 40), 6, 60) || !ap_rem('l:' . $les['id'], 400, 60)) {
    ap_fout(429, 'Even te veel tegelijk. Wacht een paar seconden en probeer het opnieuw.', 'rem');
}

$schoon = function ($s, int $max): string {
    $s = trim(preg_replace('/\s+/u', ' ', (string)$s));
    return mb_substr($s, 0, $max, 'UTF-8');
};
$voornaam = $schoon($in['voornaam'] ?? '', 60);
$achternaam = $schoon($in['achternaam'] ?? '', 80);
$geldig = '/^[\p{L}\p{M}][\p{L}\p{M}\' .\x{2019}-]*$/u';
if ($voornaam === '' || $achternaam === '') {
    ap_fout(422, 'Vul je voornaam en achternaam in.', 'ongeldig');
}
if (!preg_match($geldig, $voornaam) || !preg_match($geldig, $achternaam)) {
    ap_fout(422, 'Gebruik in je naam alleen letters, spaties, een apostrof of een streepje.', 'ongeldig');
}

$vragen = lq_vragen($les);
$antwoorden = $in['antwoorden'] ?? null;
if (!is_array($antwoorden) || !array_is_list($antwoorden) || count($antwoorden) !== count($vragen)) {
    ap_fout(422, 'Beantwoord alle vragen.', 'ongeldig');
}
$lijst = [];
foreach ($vragen as $i => $v) {
    $a = $antwoorden[$i];
    if (!is_int($a) || $a < 0 || $a >= count($v['opties'])) {
        ap_fout(422, 'Beantwoord alle vragen.', 'ongeldig');
    }
    $lijst[] = $a;
}

// De inzending klopt op zichzelf: de Mac hoeft later niets bij de server op te zoeken (koppelvlak 3.3).
$goed = lq_goed($vragen, implode(',', $lijst));
$inhoud = [
    'les' => ['uid' => $les['uid'], 'code' => $les['code'], 'vak' => $les['vak'], 'titel' => $les['titel'], 'datum' => $les['datum']],
    'voornaam' => $voornaam,
    'achternaam' => $achternaam,
    'toestel' => substr(hash_hmac('sha256', $les['id'] . '|' . $toestel, lq_geheim()), 0, 32),
    'vragen' => array_map(fn($v, $i) => ['nr' => $i + 1, 'vraag' => $v['vraag'], 'antwoord' => $v['opties'][$lijst[$i]],
                                         'antwoord_index' => $lijst[$i], 'goede_antwoord' => $v['opties'][(int)$v['goed']] ?? '',
                                         'goed' => (bool)$goed[$i]], $vragen, array_keys($vragen)),
    'score' => array_sum($goed),
    'aantal_vragen' => count($vragen),
];

$pdo = lq_db();
$pdo->beginTransaction();
try {
    pv_leg('lesquiz', LQ_INHOUD_VERSIE, lq_groep($les), $inhoud);
    $pdo->prepare('INSERT INTO lq_antwoord (les_id, antwoorden) VALUES (?, ?)')->execute([$les['id'], implode(',', $lijst)]);
    $pdo->commit();
} catch (Throwable $e) {
    $pdo->rollBack();
    error_log('lesquiz inzenden: ' . $e->getMessage());
    ap_fout(500, 'Opslaan lukte niet. Probeer het opnieuw.', 'server');
}
pv_opruimen();
ap_json(['ok' => true]);
