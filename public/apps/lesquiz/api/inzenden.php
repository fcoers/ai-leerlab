<?php
/** POST JSON {code, voornaam, achternaam, antwoorden: [i, i, i], toestel}  ->  opgeslagen of een duidelijke melding. */
define('LESQUIZ', true);
require __DIR__ . '/lib/kern.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    lq_fout(405, 'Alleen versturen.');
}
if (stripos((string)($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json') !== 0) {
    lq_fout(415, 'Verkeerd soort verzoek.');
}
$herkomst = (string)($_SERVER['HTTP_ORIGIN'] ?? '');
if ($herkomst !== '' && parse_url($herkomst, PHP_URL_HOST) !== parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
    lq_fout(403, 'Verzoek van een andere site.');
}
$in = json_decode((string)file_get_contents('php://input', false, null, 0, 8192), true);
if (!is_array($in)) {
    lq_fout(400, 'Verzoek niet te lezen.');
}

$les = lq_les_op_code((string)($in['code'] ?? ''));
if (!$les) {
    lq_fout(404, 'Deze lescode kennen we niet.');
}
if (!lq_is_open($les)) {
    lq_fout(409, 'De quiz van deze les is gesloten. Er is niets opgeslagen.');
}

$toestel = (string)($in['toestel'] ?? '');
if (!preg_match('/^[A-Za-z0-9_-]{16,64}$/', $toestel)) {
    lq_fout(400, 'Verzoek niet te lezen.');
}
// Rem: per toestel 6 inzendingen per minuut, per les 400 per minuut.
if (!lq_rem('t:' . substr(hash('sha256', $toestel), 0, 40), 6, 60) || !lq_rem('l:' . $les['id'], 400, 60)) {
    lq_fout(429, 'Even te veel tegelijk. Wacht een paar seconden en probeer het opnieuw.');
}

$schoon = function ($s, int $max): string {
    $s = trim(preg_replace('/\s+/u', ' ', (string)$s));
    return mb_substr($s, 0, $max, 'UTF-8');
};
$voornaam = $schoon($in['voornaam'] ?? '', 60);
$achternaam = $schoon($in['achternaam'] ?? '', 80);
$geldig = '/^[\p{L}\p{M}][\p{L}\p{M}\' .\x{2019}-]*$/u';
if ($voornaam === '' || $achternaam === '') {
    lq_fout(422, 'Vul je voornaam en achternaam in.');
}
if (!preg_match($geldig, $voornaam) || !preg_match($geldig, $achternaam)) {
    lq_fout(422, 'Gebruik in je naam alleen letters, spaties, een apostrof of een streepje.');
}

$vragen = lq_vragen($les);
$antwoorden = $in['antwoorden'] ?? null;
if (!is_array($antwoorden) || count($antwoorden) !== count($vragen)) {
    lq_fout(422, 'Beantwoord alle vragen.');
}
$lijst = [];
foreach ($vragen as $i => $v) {
    $a = $antwoorden[$i];
    if (!is_int($a) || $a < 0 || $a >= count($v['opties'])) {
        lq_fout(422, 'Beantwoord alle vragen.');
    }
    $lijst[] = $a;
}

$pdo = lq_db();
$toestel_hash = substr(hash_hmac('sha256', $les['id'] . '|' . $toestel, lq_geheim()), 0, 32);
try {
    $pdo->prepare('INSERT INTO lq_inzending (les_id, voornaam, achternaam, naam_sleutel, toestel, antwoorden, tijd)
                   VALUES (?, ?, ?, ?, ?, ?, ?)')
        ->execute([$les['id'], $voornaam, $achternaam, lq_naam_sleutel($voornaam, $achternaam), $toestel_hash,
                   implode(',', $lijst), lq_nu()]);
} catch (PDOException $e) {
    if ($e->getCode() === '23000' || stripos($e->getMessage(), 'UNIQUE') !== false) {
        lq_fout(409, 'Met deze naam is al ingezonden voor deze les. Je aanwezigheid staat al genoteerd.');
    }
    lq_fout(500, 'Opslaan lukte niet. Probeer het opnieuw.');
}
lq_opruimen();
lq_json(['ok' => true]);
