<?php
/**
 * Een controlevraag beantwoorden. POST {sessie, nr, antwoord} -> {ok, uitslag, vraag, stand}.
 * uitslag: goed | fout | nieuw (na de derde fout een nieuwe vraag met hint) | geen_getal.
 */
define('PB', true);
require __DIR__ . '/lib/kern.php';

pb_eis_eigen_herkomst();
$in = ap_lees_json(1024);
$duo = pb_duo_uit_sessie($in);
$les = pb_eis_soort($duo, 'stappen');
if (pb_volgend_moment($les, pb_afgevinkt((int)$duo['id'], (int)$duo['les'])) !== null) {
    ap_fout(409, 'Eerst alle stappen afvinken.', 'volgorde');
}
$tabel = pb_controletabel((int)$duo['les']);
if ($tabel === null) {
    ap_fout(503, 'De controlevragen staan nog niet klaar.', 'niet_klaar');
}
$vraag = null;
foreach (pb_vragen((int)$duo['id'], (int)$duo['les']) as $v) {
    if ((int)$v['nr'] === ($in['nr'] ?? null)) {
        $vraag = $v;
    }
}
if (!$vraag) {
    ap_fout(404, 'Deze vraag bestaat niet.', 'onbekend');
}
if ($vraag['goed']) {
    ap_json(['ok' => true, 'uitslag' => 'goed', 'stand' => pb_stand($duo)]);
}
// Rem per duo: hooguit PB_CONTROLE_PER_DAG pogingen per dag over alle vragen samen. Een duo dat zijn rapport gebruikt
// komt daar niet aan (drie vragen, drie pogingen per vraag); wie met een script blijft proberen wel.
$st = pb_db()->prepare('SELECT COALESCE(SUM(pogingen), 0) FROM pb_vraag WHERE duo_id = ? AND les = ? AND datum = ?');
$st->execute([$duo['id'], $duo['les'], pb_vandaag()]);
if ((int)$st->fetchColumn() >= PB_CONTROLE_PER_DAG) {
    ap_fout(429, 'Jullie hebben vandaag vaak geprobeerd. Kijk morgen met frisse blik in jullie rapport, of vraag je docent.', 'rem');
}
$maat = $les['controle']['maten'][$vraag['maat']];
$getal = pb_lees_getal($in['antwoord'] ?? null, (int)$maat['decimalen']);
if ($getal === null) {
    ap_fout(422, $maat['decimalen'] === 0 ? 'Vul een heel getal in, zoals 1.987.' : 'Vul een getal in, zoals 47,8.', 'geen_getal');
}
$sleutel = $vraag['ruimte'] . '|' . $vraag['week'] . '|' . $vraag['maat'];
$waarde = $tabel['waarden'][$sleutel] ?? null;
if ($waarde === null) {
    ap_fout(503, 'Bij deze vraag ontbreekt de controlewaarde. Meld het je docent.', 'tabel');
}
$pdo = pb_db();
$goed = pb_klopt($getal, $waarde, (float)($tabel['tolerantie'][$vraag['maat']] ?? 0));
$pdo->prepare('UPDATE pb_vraag SET pogingen = pogingen + 1, goed = ?, datum = ? WHERE id = ?')
    ->execute([$goed ? 1 : 0, pb_vandaag(), $vraag['id']]);
$pogingen = (int)$vraag['pogingen'] + 1;
$uitslag = $goed ? 'goed' : 'fout';
$terug = null;
if (!$goed) {
    $terug = strtr($les['controle']['terug'], ['{week}' => (string)$vraag['week'], '{ruimte}' => $les['controle']['ruimtes'][$vraag['ruimte']]['naam']]);
    if ($pogingen >= (int)$les['controle']['pogingen']) {
        $vraag['pogingen'] = $pogingen;
        pb_vervang_vraag($vraag, $les);
        $uitslag = 'nieuw';
    }
}
ap_json(['ok' => true, 'uitslag' => $uitslag, 'nr' => (int)$vraag['nr'], 'terug' => $terug, 'stand' => pb_stand($duo)]);
