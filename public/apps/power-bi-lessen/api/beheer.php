<?php
/**
 * Cohorten en duo's beheren vanaf de Mac. Header X-Postvak-Sleutel, dezelfde sleutel als het postvak.
 * GET                                              -> cohorten met aantallen, de lessen en de kosten van deze maand
 * POST {actie: nieuw, naam, les, code?, wis_na?}   -> nieuw cohort; de inschrijfcode staat alleen in dit antwoord.
 *                                                     Zonder code kiest de server een woord; wis_na (JJJJ-MM-DD) is het
 *                                                     einde van het blok, standaard over 120 dagen.
 * POST {actie: inschrijfcode, id, code?}           -> nieuwe inschrijfcode; de oude werkt direct niet meer
 * POST {actie: sluiten, id}                        -> geen nieuwe inschrijvingen en duo's kunnen niet meer verder
 * POST {actie: openen, id}                         -> weer open
 * POST {actie: wis_na, id, wis_na}                 -> andere wisdatum
 * POST {actie: verwijder, id}                      -> cohort en alle gegevens van zijn duo's weg
 * POST {actie: nieuwe_duocode, duo_id}             -> nieuwe duocode voor een duo dat hem kwijt is (alleen in dit antwoord)
 * POST {actie: wis_duo, duo_id}                    -> één duo en al zijn gegevens weg
 */
define('PB', true);
require __DIR__ . '/lib/kern.php';

$methode = $_SERVER['REQUEST_METHOD'] ?? '';
if ($methode !== 'GET' && $methode !== 'POST') {
    ap_fout(405, 'Alleen GET of POST.', 'methode');
}
pv_controleer_sleutel();
$pdo = pb_db();
pb_opruimen();

function pb_cohort_stand(array $c): array
{
    $st = pb_db()->prepare('SELECT COUNT(*) FROM pb_duo WHERE cohort_id = ?');
    $st->execute([$c['id']]);
    return ['id' => (int)$c['id'], 'naam' => $c['naam'], 'les' => (int)$c['les'], 'status' => $c['status'],
            'inschrijfcode' => $c['code_hash'] !== null, 'duos' => (int)$st->fetchColumn(), 'gemaakt' => $c['gemaakt'], 'wis_na' => $c['wis_na']];
}

function pb_cohort_op_id($id): array
{
    if (!is_int($id)) {
        ap_fout(400, 'Het veld id ontbreekt.', 'verzoek');
    }
    $st = pb_db()->prepare('SELECT * FROM pb_cohort WHERE id = ?');
    $st->execute([$id]);
    return $st->fetch() ?: ap_fout(404, 'Dit cohort bestaat niet.', 'onbekend');
}

function pb_duo_op_id($id): array
{
    if (!is_int($id)) {
        ap_fout(400, 'Het veld duo_id ontbreekt.', 'verzoek');
    }
    $st = pb_db()->prepare('SELECT * FROM pb_duo WHERE id = ?');
    $st->execute([$id]);
    return $st->fetch() ?: ap_fout(404, 'Dit duo bestaat niet.', 'onbekend');
}

function pb_datum_of_standaard($in): string
{
    if ($in === null) {
        return pb_vandaag(PB_STANDAARD_WIS_DAGEN);
    }
    if (!is_string($in) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $in) || $in < pb_vandaag()) {
        ap_fout(422, 'wis_na moet een datum zijn (JJJJ-MM-DD), vandaag of later.', 'ongeldig');
    }
    return $in;
}

/** Inschrijfcode uit het verzoek of een nieuwe, die niet al bij een ander open cohort hoort. */
function pb_kies_inschrijfcode($gewenst, ?int $behalve = null): string
{
    $open = pb_db()->query("SELECT id, code_hash FROM pb_cohort WHERE code_hash IS NOT NULL")->fetchAll();
    $bezet = function (string $code) use ($open, $behalve): bool {
        foreach ($open as $c) {
            if ((int)$c['id'] !== $behalve && pb_controleer_hash($code, $c['code_hash'])) {
                return true;
            }
        }
        return false;
    };
    if ($gewenst !== null) {
        $code = pb_schone_inschrijfcode($gewenst);
        if ($code === '' || strlen($code) < 6) {
            ap_fout(422, 'Een inschrijfcode is één woord van 6 tot 24 letters.', 'ongeldig');
        }
        if ($bezet($code)) {
            ap_fout(409, 'Deze inschrijfcode is al in gebruik.', 'bezet');
        }
        return $code;
    }
    for ($i = 0; $i < 20; $i++) {
        $code = pb_nieuwe_inschrijfcode();
        if (!$bezet($code)) {
            return $code;
        }
    }
    ap_fout(500, 'Geen vrije inschrijfcode gevonden.', 'server');
}

if ($methode === 'GET') {
    $cohorten = $pdo->query('SELECT * FROM pb_cohort ORDER BY id')->fetchAll();
    ap_json(['ok' => true, 'cohorten' => array_map('pb_cohort_stand', $cohorten), 'lessen' => pb_lessen(), 'kosten' => pb_kosten_stand()]);
}

$in = ap_lees_json(4096);
$actie = $in['actie'] ?? null;

if ($actie === 'nieuw') {
    $naam = pb_schone_naam($in['naam'] ?? null, 80);
    if ($naam === '') {
        ap_fout(422, 'Geef het cohort een naam van hooguit 80 tekens.', 'ongeldig');
    }
    $les = $in['les'] ?? null;
    if (!is_int($les) || !pb_les($les)) {
        ap_fout(422, 'Kies een les die bestaat: ' . implode(', ', pb_lessen()) . '.', 'ongeldig');
    }
    $wis = pb_datum_of_standaard($in['wis_na'] ?? null);
    $code = pb_kies_inschrijfcode($in['code'] ?? null);
    $pdo->prepare("INSERT INTO pb_cohort (naam, les, code_hash, status, gemaakt, wis_na) VALUES (?, ?, ?, 'open', ?, ?)")
        ->execute([$naam, $les, pb_hash($code), pb_vandaag(), $wis]);
    $c = pb_cohort_op_id((int)$pdo->lastInsertId());
    ap_json(['ok' => true, 'cohort' => pb_cohort_stand($c), 'inschrijfcode' => $code]);
}
if ($actie === 'inschrijfcode') {
    $c = pb_cohort_op_id($in['id'] ?? null);
    $code = pb_kies_inschrijfcode($in['code'] ?? null, (int)$c['id']);
    $pdo->prepare('UPDATE pb_cohort SET code_hash = ? WHERE id = ?')->execute([pb_hash($code), $c['id']]);
    ap_json(['ok' => true, 'cohort' => pb_cohort_stand(pb_cohort_op_id((int)$c['id'])), 'inschrijfcode' => $code]);
}
if ($actie === 'sluiten' || $actie === 'openen') {
    $c = pb_cohort_op_id($in['id'] ?? null);
    $pdo->prepare('UPDATE pb_cohort SET status = ? WHERE id = ?')->execute([$actie === 'sluiten' ? 'gesloten' : 'open', $c['id']]);
    ap_json(['ok' => true, 'cohort' => pb_cohort_stand(pb_cohort_op_id((int)$c['id']))]);
}
if ($actie === 'wis_na') {
    $c = pb_cohort_op_id($in['id'] ?? null);
    $pdo->prepare('UPDATE pb_cohort SET wis_na = ? WHERE id = ?')->execute([pb_datum_of_standaard($in['wis_na'] ?? ''), $c['id']]);
    ap_json(['ok' => true, 'cohort' => pb_cohort_stand(pb_cohort_op_id((int)$c['id']))]);
}
if ($actie === 'verwijder') {
    $c = pb_cohort_op_id($in['id'] ?? null);
    pb_wis_cohort((int)$c['id']);
    ap_json(['ok' => true]);
}
if ($actie === 'nieuwe_duocode') {
    $d = pb_duo_op_id($in['duo_id'] ?? null);
    for ($i = 0; $i < 30; $i++) {
        $code = pb_nieuwe_duocode();
        if (pb_duocode_vrij($code)) {
            break;
        }
    }
    $pdo->beginTransaction();
    $pdo->prepare('UPDATE pb_duo SET code_hash = ?, code_zoek = ? WHERE id = ?')->execute([pb_hash($code), pb_zoek($code), $d['id']]);
    $pdo->prepare('DELETE FROM pb_sessie WHERE duo_id = ?')->execute([$d['id']]);
    $pdo->commit();
    ap_json(['ok' => true, 'duo_id' => (int)$d['id'], 'duocode' => $code]);
}
if ($actie === 'wis_duo') {
    $d = pb_duo_op_id($in['duo_id'] ?? null);
    pb_wis_duo((int)$d['id']);
    ap_json(['ok' => true]);
}
ap_fout(400, 'Onbekende actie.', 'verzoek');
