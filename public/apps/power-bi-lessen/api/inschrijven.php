<?php
/**
 * Inschrijven met de code van de les. POST {inschrijfcode, duonaam, voornaam1, voornaam2}
 * -> {ok, duocode, sessie, stand}. De duocode staat alleen in dit antwoord; de server bewaart er een Argon2id-hash van.
 */
define('PB', true);
require __DIR__ . '/lib/kern.php';

pb_eis_eigen_herkomst();
$in = ap_lees_json(2048);
// Rem zonder IP: alle inschrijvingen samen.
if (!ap_rem('pb-inschrijven', 60, 60)) {
    ap_fout(429, 'Even te veel tegelijk. Probeer het over een minuut opnieuw.', 'rem');
}
$code = pb_schone_inschrijfcode($in['inschrijfcode'] ?? null);
$duonaam = pb_schone_naam($in['duonaam'] ?? null, 60);
$n1 = pb_schone_naam($in['voornaam1'] ?? null, 40);
$n2 = pb_schone_naam($in['voornaam2'] ?? null, 40);
if ($code === '') {
    ap_fout(422, 'Vul de code van de les in. Je docent noemt hem in de les.', 'code', ['veld' => 'inschrijfcode']);
}
if ($duonaam === '') {
    ap_fout(422, 'Geef jullie duo een naam van hooguit 60 tekens.', 'ongeldig', ['veld' => 'duonaam']);
}
if ($n1 === '' || $n2 === '') {
    ap_fout(422, 'Vul van allebei de voornaam in.', 'ongeldig', ['veld' => $n1 === '' ? 'voornaam1' : 'voornaam2']);
}
pb_opruimen();
$cohort = null;
foreach (pb_db()->query("SELECT * FROM pb_cohort WHERE status = 'open' AND code_hash IS NOT NULL")->fetchAll() as $c) {
    if (pb_controleer_hash($code, $c['code_hash'])) {
        $cohort = $c;
        break;
    }
}
if (!$cohort) {
    ap_fout(404, 'Deze code kennen we niet. Kijk de spelling na, of vraag je docent.', 'onbekend', ['veld' => 'inschrijfcode']);
}
if (!pb_les((int)$cohort['les'])) {
    ap_fout(503, 'Deze les staat nog niet klaar.', 'les');
}
for ($i = 0; $i < 30; $i++) {
    $duocode = pb_nieuwe_duocode();
    if (pb_duocode_vrij($duocode)) {
        break;
    }
}
$pdo = pb_db();
$pdo->prepare('INSERT INTO pb_duo (cohort_id, duonaam, voornaam1, voornaam2, code_hash, code_zoek, gemaakt) VALUES (?, ?, ?, ?, ?, ?, ?)')
    ->execute([$cohort['id'], $duonaam, $n1, $n2, pb_hash($duocode), pb_zoek($duocode), pb_vandaag()]);
$id = (int)$pdo->lastInsertId();
$sessie = pb_nieuwe_sessie($id);
$duo = pb_duo_uit_sessie(['sessie' => $sessie]);
ap_json(['ok' => true, 'duocode' => $duocode, 'sessie' => $sessie, 'stand' => pb_stand($duo)]);
