<?php
/**
 * Docentoverzicht voor de Productiviteit-app (tab van Wouter). Alleen lezen. Header X-Postvak-Sleutel.
 * GET [?cohort=<id>]  -> {ok, lessen: [{les, titel, stappen: [{id, titel}], controle_totaal}],
 *                         duos: [{id, naam, voornamen, klas, cohort_id, laatst_actief, lessen: [{les, stappen_klaar,
 *                         controle_goed, klaar, hulpvragen}]}], cohorten: [...], kosten: {...}}
 * Geen duocode: die staat alleen als Argon2id-hash in de database. Kwijt? beheer.php {actie: nieuwe_duocode, duo_id}.
 * Geen gesprekken: alleen het aantal hulpvragen.
 */
define('PB', true);
require __DIR__ . '/lib/kern.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    ap_fout(405, 'Alleen GET.', 'methode');
}
pv_controleer_sleutel();
$pdo = pb_db();
pb_opruimen();

$lessen = [];
foreach (pb_lessen() as $n) {
    $l = pb_les($n);
    $lessen[$n] = $l;
}
$cohort_filter = isset($_GET['cohort']) ? (int)$_GET['cohort'] : null;
$cohorten = $pdo->query('SELECT * FROM pb_cohort ORDER BY id')->fetchAll();
$per_cohort = [];
foreach ($cohorten as $c) {
    $per_cohort[(int)$c['id']] = $c;
}

$sql = 'SELECT * FROM pb_duo' . ($cohort_filter !== null ? ' WHERE cohort_id = ?' : '') . ' ORDER BY cohort_id, duonaam';
$st = $pdo->prepare($sql);
$st->execute($cohort_filter !== null ? [$cohort_filter] : []);
$duos = [];
foreach ($st->fetchAll() as $d) {
    $c = $per_cohort[(int)$d['cohort_id']] ?? null;
    $n = $c ? (int)$c['les'] : 0;
    $les = $lessen[$n] ?? null;
    $afgevinkt = pb_afgevinkt((int)$d['id'], $n);
    $stappen_klaar = [];
    if ($les) {
        foreach ($les['stappen'] as $s) {
            if (!array_diff(array_column($s['momenten'], 'id'), $afgevinkt)) {
                $stappen_klaar[] = $s['id'];
            }
        }
    }
    $vragen = pb_vragen((int)$d['id'], $n);
    $goed = count(array_filter($vragen, fn($v) => (int)$v['goed'] === 1));
    $q = $pdo->prepare('SELECT COUNT(*) FROM pb_hulp WHERE duo_id = ? AND les = ?');
    $q->execute([$d['id'], $n]);
    $hulp = (int)$q->fetchColumn();
    $q = $pdo->prepare('SELECT MAX(datum) FROM (SELECT datum FROM pb_vink WHERE duo_id = ? UNION ALL SELECT datum FROM pb_hulp WHERE duo_id = ?
        UNION ALL SELECT datum FROM pb_vraag WHERE duo_id = ?) x');
    $q->execute([$d['id'], $d['id'], $d['id']]);
    $laatst = $q->fetchColumn() ?: $d['gemaakt'];
    $totaal = $les ? (int)$les['controle']['aantal'] : 0;
    $duos[] = [
        'id' => (int)$d['id'],
        'naam' => $d['duonaam'],
        'voornamen' => [$d['voornaam1'], $d['voornaam2']],
        'klas' => $c['naam'] ?? '',
        'cohort_id' => (int)$d['cohort_id'],
        'gemaakt' => $d['gemaakt'],
        'laatst_actief' => $laatst,
        'lessen' => [[
            'les' => $n,
            'stappen_klaar' => $stappen_klaar,
            'controle_goed' => $goed,
            'klaar' => $les !== null && count($stappen_klaar) === count($les['stappen']) && $totaal > 0 && $goed === $totaal,
            'hulpvragen' => $hulp,
        ]],
    ];
}

$uit_lessen = [];
foreach ($lessen as $n => $l) {
    $uit_lessen[] = ['les' => $n, 'titel' => $l['titel'], 'stappen' => array_map(fn($s) => ['id' => $s['id'], 'titel' => $s['titel']], $l['stappen']),
        'controle_totaal' => (int)$l['controle']['aantal']];
}
ap_json([
    'ok' => true,
    'lessen' => $uit_lessen,
    'duos' => $duos,
    'cohorten' => array_map(fn($c) => ['id' => (int)$c['id'], 'naam' => $c['naam'], 'les' => (int)$c['les'], 'status' => $c['status'], 'wis_na' => $c['wis_na']], $cohorten),
    'kosten' => pb_kosten_stand(),
]);
