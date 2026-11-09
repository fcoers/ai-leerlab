<?php
/**
 * Les met vragen (les 1). POST {sessie, les, actie, ...}:
 *   {actie: bewaar, item, velden}       -> velden opslaan (tekst onderweg, keuzes, visuals); geeft {ok, item}
 *   {actie: controleer, item, velden}   -> opslaan en getallen en keuzes nakijken; geeft {ok, item, stand}
 *   {actie: feedback, item, velden}     -> opslaan en feedback op de criteria van het open antwoord; geeft {ok, item, stand}
 *   {actie: controle2, antwoord}        -> de controlevraag van deel 2; geeft {ok, uitslag: goed|een_fout|fout|nieuw, stand}
 * Een veld dat al klopt, blijft staan. Nooit een antwoord of controlewaarde in een antwoord van de server.
 */
define('PB', true);
require __DIR__ . '/lib/kern.php';

pb_eis_eigen_herkomst();
$in = ap_lees_json(16384);
$duo = pb_duo_uit_sessie($in);
$les = pb_eis_soort($duo, 'vragen');
$n = (int)$duo['les'];
$actie = $in['actie'] ?? null;

if ($actie === 'controle2') {
    $vraag = pb_l1_d2($duo, $les);
    $rij = pb_l1_rij((int)$duo['id'], $n, 'd2');
    if ($vraag['goed']) {
        ap_json(['ok' => true, 'uitslag' => 'goed', 'stand' => pb_stand($duo)]);
    }
    $antwoord = $in['antwoord'] ?? null;
    if (!is_string($antwoord) || trim($antwoord) === '' || pb_l1_d2_lees($antwoord)[1] === []) {
        ap_fout(422, 'Vul een getal in, zoals 18,4.', 'geen_getal');
    }
    if (!pb_tel_vandaag((int)$duo['id'], 'l1c', PB_L1_CONTROLES_PER_DAG)) {
        ap_fout(429, 'Jullie hebben vandaag vaak geprobeerd. Kijk morgen met frisse blik, of vraag je docent.', 'rem');
    }
    $comb = pb_l1_d2_combinatie($n, $vraag);
    $soort = pb_l1_d2_uitslag($comb, $antwoord);
    $goed = $soort === 'goed';
    pb_db()->prepare('UPDATE pb_vraag SET pogingen = pogingen + 1, goed = ?, datum = ? WHERE id = ?')->execute([$goed ? 1 : 0, pb_vandaag(), $vraag['id']]);
    $rij['velden'] = ['antwoord' => mb_substr(trim($antwoord), 0, 30, 'UTF-8')];
    $rij['uitslag'] = ['soort' => $soort];
    $rij['status'] = $goed ? 'klaar' : 'bezig';
    $uitslag = $soort;
    if (!$goed && (int)$vraag['pogingen'] + 1 >= (int)$les['deel2']['pogingen']) {
        // Na drie pogingen een andere ruimte en week, zoals bij les 2.
        $pdo = pb_db();
        $st = $pdo->prepare('SELECT ruimte, week FROM pb_vraag WHERE duo_id = ? AND les = ?');
        $st->execute([$duo['id'], $n]);
        $gehad = [];
        foreach ($st->fetchAll() as $r) {
            $gehad[$r['ruimte'] . '|' . $r['week']] = true;
        }
        $opties = pb_l1_d2_opties($n, $gehad) ?: pb_l1_d2_opties($n, []);
        [$r, $w] = $opties[array_rand($opties)];
        $pdo->beginTransaction();
        $pdo->prepare('UPDATE pb_vraag SET vervangen = 1 WHERE id = ?')->execute([$vraag['id']]);
        $pdo->prepare('INSERT INTO pb_vraag (duo_id, les, nr, ruimte, week, maat, met_hint, datum) VALUES (?, ?, 1, ?, ?, ?, 1, ?)')
            ->execute([$duo['id'], $n, $r, $w, 'd2', pb_vandaag()]);
        $pdo->commit();
        $rij['velden'] = [];
        $rij['uitslag'] = ['soort' => $soort, 'nieuw' => true];
        $uitslag = 'nieuw';
    }
    pb_l1_schrijf((int)$duo['id'], $n, 'd2', $rij);
    if ($goed) {
        pb_db()->prepare('DELETE FROM pb_gesprek WHERE duo_id = ? AND les = ? AND stap = ?')->execute([$duo['id'], $n, 'd2']);
    }
    ap_json(['ok' => true, 'uitslag' => $uitslag, 'een_fout' => $soort === 'een_fout', 'stand' => pb_stand($duo)]);
}

$items = pb_l1_items($les);
$item = $in['item'] ?? null;
if (!is_string($item) || !isset($items[$item])) {
    ap_fout(404, 'Deze vraag bestaat niet.', 'onbekend');
}
$def = $items[$item];
$rij = pb_l1_rij((int)$duo['id'], $n, $item);
pb_l1_neem_over($def, $rij, $in['velden'] ?? []);

if ($actie === 'bewaar') {
    pb_l1_bewaar($duo, $def, $rij);
    ap_json(['ok' => true, 'item' => pb_l1_item_openbaar($def, pb_l1_rij((int)$duo['id'], $n, $item), $les)]);
}

if ($actie === 'controleer') {
    if (!empty($def['fout'])) {
        ap_fout(409, 'Bij een fout vragen jullie feedback.', 'soort');
    }
    $te_doen = array_filter($def['velden'], fn($f) => in_array($f['soort'], ['getal', 'keuze', 'keuzes'], true)
        && empty($rij['uitslag']['velden'][$f['id']]['goed']));
    $leeg = array_filter($te_doen, fn($f) => !pb_l1_ingevuld($rij['velden'][$f['id']] ?? ''));
    if ($te_doen && count($leeg) === count($te_doen)) {
        ap_fout(422, 'Vul eerst een antwoord in.', 'leeg', ['veld' => array_values($leeg)[0]['id']]);
    }
    foreach ($te_doen as $f) {
        if ($f['soort'] === 'getal' && pb_l1_ingevuld($rij['velden'][$f['id']] ?? '') && pb_l1_getal($rij['velden'][$f['id']], (int)$f['decimalen']) === null) {
            ap_fout(422, (int)$f['decimalen'] === 0 ? 'Vul een heel getal in, zoals 12.' : 'Vul een getal in, zoals 18,4.', 'geen_getal', ['veld' => $f['id']]);
        }
    }
    if ($te_doen && !pb_tel_vandaag((int)$duo['id'], 'l1c', PB_L1_CONTROLES_PER_DAG)) {
        ap_fout(429, 'Jullie hebben vandaag vaak geprobeerd. Kijk morgen met frisse blik, of vraag je docent.', 'rem');
    }
    $rij = pb_l1_controleer($def, $rij, pb_l1_tabel($n));
    pb_l1_bewaar($duo, $def, $rij);
    $item_uit = pb_l1_item_openbaar($def, pb_l1_rij((int)$duo['id'], $n, $item), $les);
    ap_json(['ok' => true, 'item' => $item_uit, 'stand' => pb_stand($duo)]);
}

if ($actie === 'feedback') {
    require __DIR__ . '/lib/tutor.php';
    if (empty($def['rubric'])) {
        ap_fout(409, 'Bij deze vraag hoort geen feedback.', 'soort');
    }
    $max = !empty($def['fout']) ? (int)$les['feedback_per_fout'] : (int)$les['feedback_per_vraag'];
    if ((int)$rij['feedback'] >= $max) {
        ap_fout(429, 'De feedback bij deze vraag is op. Jullie kunnen het antwoord nog wel aanpassen.', 'op', ['op' => 'vraag']);
    }
    $tekst = '';
    foreach ($def['velden'] as $f) {
        if ($f['soort'] === 'tekst') {
            $tekst .= trim((string)($rij['velden'][$f['id']] ?? '')) . ' ';
        }
    }
    if (count(preg_split('/\s+/u', trim($tekst), -1, PREG_SPLIT_NO_EMPTY)) < 5) {
        pb_l1_bewaar($duo, $def, $rij);
        ap_fout(422, 'Schrijf eerst een paar zinnen. Dan kijkt de feedback mee.', 'leeg');
    }
    if (pb_maand_op()) {
        ap_fout(429, 'De feedback is deze maand even niet beschikbaar.', 'op', ['op' => 'maand']);
    }
    if (!pb_tel_vandaag((int)$duo['id'], 'l1f', PB_L1_FEEDBACK_PER_DAG)) {
        ap_fout(429, 'Jullie hebben vandaag veel feedback gevraagd. Morgen kan het weer.', 'op', ['op' => 'dag']);
    }
    if (!ap_rem('pb-hulp', 60, 60)) {
        ap_fout(429, 'Het is even druk. Probeer het over een minuut opnieuw.', 'rem');
    }
    $ander = null;
    if (!empty($def['fout'])) {
        $ander = pb_l1_rij((int)$duo['id'], $n, $item === 'f1' ? 'f2' : 'f1')['velden'];
    }
    try {
        $fb = pb_feedback($les, $def, $rij['velden'], $ander);
    } catch (PbTutorOp $e) {
        ap_fout(429, 'De feedback is deze maand even niet beschikbaar.', 'op', ['op' => 'maand']);
    } catch (RuntimeException $e) {
        ap_fout(503, 'De feedback is even niet bereikbaar. Probeer het straks opnieuw.', 'tutor');
    }
    $rij['uitslag']['feedback'] = $fb + ['hash' => pb_l1_tekst_hash($def, $rij['velden'])];
    $rij['feedback'] = (int)$rij['feedback'] + 1;
    pb_l1_bewaar($duo, $def, $rij);
    pb_tel_kosten(0, true);
    ap_json(['ok' => true, 'item' => pb_l1_item_openbaar($def, pb_l1_rij((int)$duo['id'], $n, $item), $les), 'stand' => pb_stand($duo)]);
}

ap_fout(400, 'Onbekende actie.', 'verzoek');
