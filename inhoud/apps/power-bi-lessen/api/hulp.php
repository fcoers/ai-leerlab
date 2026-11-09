<?php
/**
 * Een hulpvraag aan de tutor, bij de stap waar het duo nu is. POST {sessie, vraag} -> {ok, antwoord, trede, tegoed}.
 * Is de hulp op (duo per dag, per stap, of het maandplafond), dan {ok: false, code: 'op', op: dag|stap|maand}:
 * afvinken en de controlevragen werken gewoon door.
 */
define('PB', true);
require __DIR__ . '/lib/kern.php';
require __DIR__ . '/lib/tutor.php';

pb_eis_eigen_herkomst();
$in = ap_lees_json(4096);
$duo = pb_duo_uit_sessie($in);
$les = pb_les((int)$duo['les']);
$volgend = pb_volgend_moment($les, pb_afgevinkt((int)$duo['id'], (int)$duo['les']));
if ($volgend === null) {
    ap_fout(409, 'Alle stappen zijn klaar.', 'volgorde');
}
$vraag = is_string($in['vraag'] ?? null) ? trim(preg_replace('/[^\P{Cc}\n]/u', '', $in['vraag'])) : '';
if ($vraag === '') {
    ap_fout(422, 'Schrijf eerst wat jullie zien of waar jullie vastlopen.', 'leeg');
}
if (mb_strlen($vraag, 'UTF-8') > PB_MAX_VRAAG) {
    ap_fout(422, 'Houd je vraag korter dan ' . PB_MAX_VRAAG . ' tekens.', 'te_lang');
}
$tegoed = pb_tegoed((int)$duo['id'], (int)$duo['les'], $volgend['stap']);
if ($tegoed['op'] !== null) {
    ap_fout(429, 'De hulp is op.', 'op', ['op' => $tegoed['op'], 'tegoed' => $tegoed]);
}
// Rem voor de hele site, los van de duo's: hooguit 60 hulpvragen per minuut.
if (!ap_rem('pb-hulp', 60, 60)) {
    ap_fout(429, 'Het is even druk bij de tutor. Probeer het over een minuut opnieuw.', 'rem');
}
$stap = pb_stap($les, $volgend['stap']);
$pdo = pb_db();

// Het gesprek tot nu toe in deze stap (hooguit 14 dagen oud), dan de nieuwe vraag.
$st = $pdo->prepare('SELECT rol, tekst FROM pb_gesprek WHERE duo_id = ? AND les = ? AND stap = ? ORDER BY id');
$st->execute([$duo['id'], $duo['les'], $stap['id']]);
$eerder = $st->fetchAll();
$berichten = [];
$antwoorden = 0;
foreach ($eerder as $b) {
    if ($b['rol'] === 't') {
        $antwoorden++;
    }
    $berichten[] = ['role' => $b['rol'] === 'd' ? 'user' : 'assistant', 'content' => $b['rol'] === 'd' ? "<vraag_van_duo>\n{$b['tekst']}\n</vraag_van_duo>" : $b['tekst']];
}
$berichten[] = ['role' => 'user', 'content' => "<vraag_van_duo>\n$vraag\n</vraag_van_duo>"];
$trede = min(3, $antwoorden + 1);

try {
    $hulp = pb_hulp($les, $stap, $volgend, $trede, $berichten);
} catch (PbTutorOp $e) {
    ap_fout(429, 'De hulp is op.', 'op', ['op' => 'maand', 'tegoed' => ['over' => 0, 'op' => 'maand']]);
} catch (RuntimeException $e) {
    ap_fout(503, 'De tutor is even niet bereikbaar. Probeer het straks opnieuw, of kijk in de tabel Klopt er iets niet?', 'tutor');
}

$pdo->beginTransaction();
$pdo->prepare('INSERT INTO pb_hulp (duo_id, les, stap, datum) VALUES (?, ?, ?, ?)')->execute([$duo['id'], $duo['les'], $stap['id'], pb_vandaag()]);
$ins = $pdo->prepare('INSERT INTO pb_gesprek (duo_id, les, stap, rol, tekst, datum) VALUES (?, ?, ?, ?, ?, ?)');
$ins->execute([$duo['id'], $duo['les'], $stap['id'], 'd', $vraag, pb_vandaag()]);
$ins->execute([$duo['id'], $duo['les'], $stap['id'], 't', $hulp['tekst'], pb_vandaag()]);
$pdo->commit();
pb_tel_kosten(0, true);

ap_json(['ok' => true, 'antwoord' => $hulp['tekst'], 'trede' => $trede, 'tegoed' => pb_tegoed((int)$duo['id'], (int)$duo['les'], $stap['id'])]);
