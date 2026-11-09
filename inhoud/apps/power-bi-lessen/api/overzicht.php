<?php
/**
 * Docentoverzicht voor de Productiviteit-app (tab van Wouter). Alleen lezen. Header X-Postvak-Sleutel.
 * GET [?cohort=<id>]  -> {ok, lessen: [{les, titel, soort, stappen: [{id, titel}], controle_totaal, groepen?}],
 *                         duos: [{id, naam, voornamen, klas, cohort_id, laatst_actief, lessen: [{les, stappen_klaar,
 *                         controle_goed, klaar, hulpvragen}]}], cohorten: [{id, naam, les, lessen, status, wis_na}], kosten: {...}}
 * Per duo een rij per les waar het aan begonnen is, plus altijd de les van zijn cohort. Les 1 (soort vragen): de stappen
 * zijn de acht vragen (id 1 tot 8) en de twee fouten (F1, F2), een stap is klaar als de vraag of fout klaar is; de
 * controle is de controlevraag van deel 2 (totaal 1). `groepen` (alleen bij een les met vragen) zegt hoe de app telt:
 * [{naam: vragen, ids: [1..8]}, {naam: fouten, ids: [F1, F2]}], zodat de tab "x van 8 vragen" en de fouten apart kan tonen.
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
    // Een rij per les waar het duo aan begonnen is; de les van het cohort altijd (zoals voorheen).
    $rijen = [];
    foreach ($lessen as $n => $les) {
        $v = pb_voortgang((int)$d['id'], $les);
        if (!$v['begonnen'] && !($c && (int)$c['les'] === $n)) {
            continue;
        }
        $q = $pdo->prepare('SELECT COUNT(*) FROM pb_hulp WHERE duo_id = ? AND les = ?');
        $q->execute([$d['id'], $n]);
        $rijen[] = ['les' => $n, 'stappen_klaar' => $v['stappen_klaar'], 'controle_goed' => $v['controle_goed'], 'klaar' => $v['klaar'],
            'hulpvragen' => (int)$q->fetchColumn()];
    }
    $q = $pdo->prepare('SELECT MAX(datum) FROM (SELECT datum FROM pb_vink WHERE duo_id = ? UNION ALL SELECT datum FROM pb_hulp WHERE duo_id = ?
        UNION ALL SELECT datum FROM pb_vraag WHERE duo_id = ? UNION ALL SELECT datum FROM pb_antwoord WHERE duo_id = ?) x');
    $q->execute([$d['id'], $d['id'], $d['id'], $d['id']]);
    $laatst = $q->fetchColumn() ?: $d['gemaakt'];
    $duos[] = [
        'id' => (int)$d['id'],
        'naam' => $d['duonaam'],
        'voornamen' => [$d['voornaam1'], $d['voornaam2']],
        'klas' => $c['naam'] ?? '',
        'cohort_id' => (int)$d['cohort_id'],
        'gemaakt' => $d['gemaakt'],
        'laatst_actief' => $laatst,
        'lessen' => $rijen,
    ];
}

$uit_lessen = [];
foreach ($lessen as $n => $l) {
    // De "stappen" van een les met vragen zijn de acht vragen en de twee fouten; de controle is de vraag van deel 2.
    $v = pb_voortgang(0, $l);
    $uit_lessen[] = ['les' => $n, 'titel' => $l['titel'], 'soort' => $l['soort'] ?? 'stappen', 'stappen' => $v['stappen'], 'controle_totaal' => $v['controle_totaal']]
        + (isset($v['groepen']) ? ['groepen' => $v['groepen']] : []);
}
ap_json([
    'ok' => true,
    'lessen' => $uit_lessen,
    'duos' => $duos,
    'cohorten' => array_map(fn($c) => ['id' => (int)$c['id'], 'naam' => $c['naam'], 'les' => (int)$c['les'], 'lessen' => pb_cohort_lessen((int)$c['id']),
        'status' => $c['status'], 'wis_na' => $c['wis_na']], $cohorten),
    'kosten' => pb_kosten_stand(),
]);
