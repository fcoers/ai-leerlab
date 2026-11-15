<?php
/**
 * Grammatica beheren vanaf de Mac (klus 952). Header X-Postvak-Sleutel, dezelfde sleutel als de thema's.
 * GET                                                    ->  per taal: aantal onderdelen en wanneer bijgewerkt
 * POST {actie: opslaan, taal: duits|frans, grammatica: {...}}  ->  het hele bestand van Dide, vervangt wat er stond
 * POST {actie: verwijder, taal}
 * Wat er in grammatica hoort: zie toelichting_velden in Grammatica Duits.json en Grammatica Frans.json.
 */
define('TAALOEFENEN', true);
require dirname(__DIR__) . '/lib/kern.php';

$methode = $_SERVER['REQUEST_METHOD'] ?? '';
if ($methode !== 'GET' && $methode !== 'POST') {
    ap_fout(405, 'Alleen GET of POST.', 'methode');
}
pv_controleer_sleutel();
$pdo = to_db();

function to_gram_stand(PDO $pdo): array
{
    $uit = [];
    foreach ($pdo->query('SELECT taal, inhoud, bijgewerkt FROM to_grammatica ORDER BY taal')->fetchAll() as $r) {
        $g = json_decode((string)$r['inhoud'], true);
        $uit[] = ['taal' => $r['taal'], 'onderdelen' => is_array($g) ? count($g['onderdelen'] ?? []) : 0,
                  'url' => ap_adres() . to_grammatica_pad($r['taal']), 'bijgewerkt' => ap_iso((int)$r['bijgewerkt'])];
    }
    return $uit;
}

if ($methode === 'GET') {
    ap_json(['ok' => true, 'grammatica' => to_gram_stand($pdo)]);
}

$in = ap_lees_json(1024 * 1024);
$actie = $in['actie'] ?? null;
$taal = $in['taal'] ?? null;
if (!is_string($actie)) {
    ap_fout(400, 'Het veld actie ontbreekt.', 'verzoek');
}
if (!is_string($taal) || !isset(TO_TALEN[$taal])) {
    ap_fout(400, 'Kies een taal: frans of duits.', 'verzoek');
}

switch ($actie) {
    case 'opslaan':
        [$g, $fouten] = to_grammatica_uit_verzoek($taal, $in['grammatica'] ?? null);
        if ($fouten || !$g) {
            ap_fout(422, 'De grammatica is niet opgeslagen: ' . implode(' ', array_slice($fouten, 0, 5)) .
                    (count($fouten) > 5 ? ' (en nog ' . (count($fouten) - 5) . ')' : ''), 'ongeldig', ['velden' => $fouten]);
        }
        $json = json_encode($g, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        $pdo->beginTransaction();
        $pdo->prepare('DELETE FROM to_grammatica WHERE taal = ?')->execute([$taal]);
        $pdo->prepare('INSERT INTO to_grammatica (taal, inhoud, bijgewerkt) VALUES (?, ?, ?)')->execute([$taal, $json, time()]);
        $pdo->commit();
        ap_json(['ok' => true, 'grammatica' => to_gram_stand($pdo)]);

    case 'verwijder':
        $st = $pdo->prepare('DELETE FROM to_grammatica WHERE taal = ?');
        $st->execute([$taal]);
        ap_json(['ok' => true, 'verwijderd' => $st->rowCount() > 0]);
}
ap_fout(400, 'Onbekende actie. Kies opslaan of verwijder.', 'verzoek');
