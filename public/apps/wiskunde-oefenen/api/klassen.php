<?php
/**
 * Klassen beheren vanaf de Mac. Header X-Postvak-Sleutel, dezelfde sleutel als het postvak.
 * GET                                        ->  alle klassen met hun stand (zonder codes van docenten)
 * POST {actie: nieuw, naam}                  ->  nieuwe klas; geeft klascode en docentcode (die laatste maar één keer)
 * POST {actie: docentcode, id}               ->  nieuwe docentcode; de oude werkt direct niet meer
 * POST {actie: intrekken, id}                ->  docentcode vervalt en de klas neemt geen pogingen meer aan
 * POST {actie: heractiveren, id}             ->  klas neemt weer pogingen aan (een docentcode maak je opnieuw)
 * POST {actie: verwijder, id}                ->  klas en al haar pogingen weg
 * POST {actie: overzicht, id, periode}       ->  klasoverzicht, precies als overzicht.php maar zonder docentcode;
 *                                                werkt ook voor een ingetrokken klas of een klas zonder docentcode
 */
define('WISKUNDE', true);
require __DIR__ . '/lib/kern.php';

$methode = $_SERVER['REQUEST_METHOD'] ?? '';
if ($methode !== 'GET' && $methode !== 'POST') {
    ap_fout(405, 'Alleen GET of POST.', 'methode');
}
pv_controleer_sleutel();
$pdo = wo_db();
wo_opruimen();

function wo_stand(array $k): array
{
    $st = wo_db()->prepare('SELECT COUNT(*) FROM wo_poging WHERE klas_id = ?');
    $st->execute([$k['id']]);
    return ['id' => (int)$k['id'], 'naam' => $k['naam'], 'klascode' => $k['klascode'], 'status' => $k['status'],
            'docentcode' => $k['docent_sha256'] !== null, 'aanmeldingen' => (int)$k['aanmeldingen'],
            'pogingen' => (int)$st->fetchColumn(), 'gemaakt' => $k['gemaakt']];
}

function wo_klas_op_id($id): array
{
    if (!is_int($id)) {
        ap_fout(400, 'Het veld id ontbreekt.', 'verzoek');
    }
    $st = wo_db()->prepare('SELECT * FROM wo_klas WHERE id = ?');
    $st->execute([$id]);
    $k = $st->fetch();
    if (!$k) {
        ap_fout(404, 'Deze klas bestaat niet.', 'onbekend');
    }
    return $k;
}

function wo_nieuwe_docentcode(int $id): string
{
    $code = wo_code(WO_DOCENTCODE_LENGTE);
    wo_db()->prepare("UPDATE wo_klas SET docent_sha256 = ? WHERE id = ?")->execute([hash('sha256', $code), $id]);
    return $code;
}

if ($methode === 'GET') {
    $klassen = $pdo->query('SELECT * FROM wo_klas ORDER BY id')->fetchAll();
    ap_json(['ok' => true, 'klassen' => array_map('wo_stand', $klassen)]);
}

$in = ap_lees_json(4096);
$actie = $in['actie'] ?? null;

if ($actie === 'nieuw') {
    $naam = trim(preg_replace('/\s+/u', ' ', (string)($in['naam'] ?? '')));
    if ($naam === '' || mb_strlen($naam, 'UTF-8') > 80) {
        ap_fout(422, 'Geef de klas een naam van hooguit 80 tekens.', 'ongeldig');
    }
    for ($i = 0; $i < 20; $i++) {
        $klascode = wo_code(WO_KLASCODE_LENGTE);
        if (!wo_klas_op_code($klascode)) {
            break;
        }
    }
    $pdo->prepare("INSERT INTO wo_klas (naam, klascode, status, aanmeldingen, gemaakt) VALUES (?, ?, 'actief', 0, ?)")
        ->execute([$naam, $klascode, wo_vandaag()]);
    $id = (int)$pdo->lastInsertId();
    $code = wo_nieuwe_docentcode($id);
    $k = wo_klas_op_id($id);
    ap_json(['ok' => true, 'klas' => wo_stand($k), 'docentcode' => wo_groepjes($code)]);
}
if ($actie === 'docentcode') {
    $k = wo_klas_op_id($in['id'] ?? null);
    $code = wo_nieuwe_docentcode((int)$k['id']);
    ap_json(['ok' => true, 'klas' => wo_stand(wo_klas_op_id((int)$k['id'])), 'docentcode' => wo_groepjes($code)]);
}
if ($actie === 'intrekken') {
    $k = wo_klas_op_id($in['id'] ?? null);
    $pdo->prepare("UPDATE wo_klas SET docent_sha256 = NULL, status = 'gestopt' WHERE id = ?")->execute([$k['id']]);
    ap_json(['ok' => true, 'klas' => wo_stand(wo_klas_op_id((int)$k['id']))]);
}
if ($actie === 'heractiveren') {
    $k = wo_klas_op_id($in['id'] ?? null);
    $pdo->prepare("UPDATE wo_klas SET status = 'actief' WHERE id = ?")->execute([$k['id']]);
    ap_json(['ok' => true, 'klas' => wo_stand(wo_klas_op_id((int)$k['id']))]);
}
if ($actie === 'verwijder') {
    $k = wo_klas_op_id($in['id'] ?? null);
    $pdo->beginTransaction();
    $pdo->prepare('DELETE FROM wo_poging WHERE klas_id = ?')->execute([$k['id']]);
    $pdo->prepare('DELETE FROM wo_klas WHERE id = ?')->execute([$k['id']]);
    $pdo->commit();
    ap_json(['ok' => true]);
}
if ($actie === 'overzicht') {
    ap_json(wo_klasoverzicht(wo_klas_op_id($in['id'] ?? null), $in['periode'] ?? null));
}
ap_fout(400, 'Onbekende actie.', 'verzoek');
