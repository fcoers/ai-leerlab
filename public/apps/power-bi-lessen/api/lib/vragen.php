<?php
/**
 * Lessen met vragen (les 1): het duo typt zijn antwoorden in de app. Getallen en keuzes kijkt de server hard na met de
 * controletabel (scripts/controletabel_les1.py); open antwoorden krijgen feedback op de criteria (tutor.php); deel 2 heeft
 * een controlevraag per duo die alleen klopt als beide fouten in bestand B hersteld zijn.
 *
 * Per duo en item (v1 tot v8, f1, f2, d2) één rij in pb_antwoord: de velden zoals het duo ze invulde (JSON), de laatste
 * uitslag en feedback (JSON), de status en hoeveel feedback er al gevraagd is. Een veld dat klopt, blijft vast staan.
 */
if (!defined('PB')) {
    http_response_code(404);
    exit;
}

const PB_L1_CONTROLES_PER_DAG = 80;   // keer Controleer per duo per dag, alle vragen samen
const PB_L1_FEEDBACK_PER_DAG = 30;    // keer feedback per duo per dag
const PB_L1_MAX_TEKST = 1500;         // tekens per open antwoord
const PB_L1_MAX_KORT = 40;            // tekens per getal
const PB_L1_D2_TOLERANTIE = 0.1;
const PB_L1_SOM_TOLERANTIE = 1.0;
const PB_L1_KLEIN_MIN = 20;           // tekens die na de laatste feedback mogen veranderen als het tegoed op is ...
const PB_L1_KLEIN_DEEL = 0.1;         // ... of 10 % van de bekeken tekst, als dat meer is

/** Alle items van een les met vragen: de vragen, fout 1 en fout 2. */
function pb_l1_items(array $les): array
{
    $uit = [];
    foreach ($les['vragen'] as $v) {
        $uit[$v['id']] = $v + ['feedback_max' => (int)$les['feedback_per_vraag']];
    }
    foreach (['f1' => 1, 'f2' => 2] as $id => $nr) {
        $uit[$id] = ['id' => $id, 'nr' => $nr, 'titel' => "Fout $nr", 'fout' => true, 'feedback_max' => (int)$les['feedback_per_fout'],
            'velden' => array_map(fn($f) => $f + ['soort' => $f['id'] === 'c' ? 'kort' : 'tekst'], $les['deel2']['fout_velden']),
            'rubric' => $les['deel2']['rubric'], 'referentie' => $les['deel2']['referentie'],
            'vaste_terugvraag' => $les['deel2']['vaste_terugvraag'], 'geheim' => $les['deel2']['geheim'],
            'vaste_hints' => $les['deel2']['vaste_hints']];
    }
    return $uit;
}

function pb_l1_tabel(int $les): array
{
    static $cache = [];
    if (isset($cache[$les])) {
        return $cache[$les];
    }
    $pad = __DIR__ . "/lessen/les-$les-controletabel.php";
    if (!is_file($pad)) {
        ap_fout(503, 'De controlewaarden van deze les staan nog niet klaar. Meld het je docent.', 'tabel');
    }
    return $cache[$les] = require $pad;
}

/** Wat de browser van de les mag zien: zonder sleutels, toleranties, terugvragen, referenties en verbodenlijst. */
function pb_les_openbaar_vragen(array $les): array
{
    $open_veld = fn($f) => array_intersect_key($f, array_flip(['id', 'soort', 'label', 'kort', 'eenheid', 'decimalen', 'hulp', 'opties']));
    $vragen = [];
    foreach ($les['vragen'] as $v) {
        $vragen[] = ['id' => $v['id'], 'nr' => $v['nr'], 'titel' => $v['titel'], 'meta' => $v['meta'], 'vraag' => $v['vraag'],
            'velden' => array_map($open_veld, $v['velden']), 'rubric' => $v['rubric'] ?? []];
    }
    $d2 = $les['deel2'];
    return [
        'les' => $les['les'], 'vak' => $les['vak'], 'titel' => $les['titel'], 'sub' => $les['sub'] ?? '', 'inleverplek' => $les['inleverplek'],
        'lever' => $les['lever'], 'deel1_intro' => $les['deel1_intro'], 'vragen' => $vragen,
        'feedback_per_vraag' => (int)$les['feedback_per_vraag'], 'feedback_per_fout' => (int)$les['feedback_per_fout'],
        'deel2' => ['intro' => $d2['intro'], 'hulp' => $d2['hulp'], 'eenheid' => $d2['eenheid'], 'vast' => $d2['vast'],
            'fout_velden' => $d2['fout_velden'], 'rubric' => $d2['rubric']],
    ];
}

// ---------------------------------------------------------------- opslag

function pb_l1_rij(int $duo_id, int $les, string $item): array
{
    $st = pb_db()->prepare('SELECT * FROM pb_antwoord WHERE duo_id = ? AND les = ? AND item = ?');
    $st->execute([$duo_id, $les, $item]);
    $r = $st->fetch();
    return [
        'velden' => $r ? (json_decode((string)$r['velden'], true) ?: []) : [],
        'uitslag' => $r && $r['uitslag'] ? (json_decode((string)$r['uitslag'], true) ?: []) : [],
        'status' => $r ? $r['status'] : 'leeg',
        'feedback' => $r ? (int)$r['feedback'] : 0,
        'bestaat' => (bool)$r,
    ];
}

function pb_l1_schrijf(int $duo_id, int $les, string $item, array $rij): void
{
    $pdo = pb_db();
    $velden = json_encode($rij['velden'], JSON_UNESCAPED_UNICODE);
    $uitslag = $rij['uitslag'] ? json_encode($rij['uitslag'], JSON_UNESCAPED_UNICODE) : null;
    if ($rij['bestaat']) {
        $pdo->prepare('UPDATE pb_antwoord SET velden = ?, uitslag = ?, status = ?, feedback = ?, datum = ? WHERE duo_id = ? AND les = ? AND item = ?')
            ->execute([$velden, $uitslag, $rij['status'], $rij['feedback'], pb_vandaag(), $duo_id, $les, $item]);
        return;
    }
    try {
        $pdo->prepare('INSERT INTO pb_antwoord (duo_id, les, item, velden, uitslag, status, feedback, datum) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
            ->execute([$duo_id, $les, $item, $velden, $uitslag, $rij['status'], $rij['feedback'], pb_vandaag()]);
    } catch (Throwable $e) {
        // tegelijk aangemaakt (tweede tabblad): dan bijwerken
        $pdo->prepare('UPDATE pb_antwoord SET velden = ?, uitslag = ?, status = ?, feedback = ?, datum = ? WHERE duo_id = ? AND les = ? AND item = ?')
            ->execute([$velden, $uitslag, $rij['status'], $rij['feedback'], pb_vandaag(), $duo_id, $les, $item]);
    }
}

/**
 * Neemt de velden uit het verzoek over in de rij. Alleen bekende velden met een geldige waarde; een veld dat al klopt,
 * blijft staan. Stopt met 422 bij een ongeldige waarde.
 */
function pb_l1_neem_over(array $def, array &$rij, $in): void
{
    if (!is_array($in)) {
        ap_fout(422, 'Geen antwoorden meegestuurd.', 'verzoek');
    }
    foreach ($def['velden'] as $f) {
        if (!array_key_exists($f['id'], $in)) {
            continue;
        }
        if (!empty($rij['uitslag']['velden'][$f['id']]['goed'])) {
            continue;
        }
        $w = $in[$f['id']];
        switch ($f['soort']) {
            case 'getal':
            case 'kort':
                if (!is_string($w) || mb_strlen($w, 'UTF-8') > PB_L1_MAX_KORT || preg_match('/[\p{C}<>]/u', $w)) {
                    ap_fout(422, 'Vul een kort getal in.', 'ongeldig', ['veld' => $f['id']]);
                }
                $w = trim($w);
                break;
            case 'tekst':
                if (!is_string($w) || mb_strlen($w, 'UTF-8') > PB_L1_MAX_TEKST) {
                    ap_fout(422, 'Houd jullie antwoord korter dan ' . PB_L1_MAX_TEKST . ' tekens.', 'te_lang', ['veld' => $f['id']]);
                }
                $w = (string)preg_replace('/[^\P{Cc}\n\t]/u', '', $w);
                break;
            case 'keuze':
                if ($w !== '' && (!is_string($w) || !in_array($w, $f['opties'], true))) {
                    ap_fout(422, 'Kies een van de mogelijkheden.', 'ongeldig', ['veld' => $f['id']]);
                }
                break;
            case 'keuzes':
            case 'visuals':
                if (!is_array($w) || array_diff($w, $f['opties']) || count($w) !== count(array_unique($w))) {
                    ap_fout(422, 'Kies uit de mogelijkheden.', 'ongeldig', ['veld' => $f['id']]);
                }
                $w = array_values(array_filter($f['opties'], fn($o) => in_array($o, $w, true)));
                break;
        }
        $rij['velden'][$f['id']] = $w;
    }
}

// ---------------------------------------------------------------- nakijken

/** Een getal uit een veld: letters, eenheden en spaties eraf, dan zoals bij les 2. */
function pb_l1_getal($invoer, int $decimalen): ?float
{
    if (!is_string($invoer)) {
        return null;
    }
    $s = (string)preg_replace('/[\p{L}°%\s\x{00A0}]+/u', '', $invoer);
    // Een heel getal met een komma of punt die geen duizendtallen scheidt ("73,8", "12.50"): geen getal, zodat het duo
    // een hint krijgt en de poging niet telt (anders zou 73,8 als 738 gelezen worden).
    if ($decimalen === 0 && preg_match('/[.,](\d{1,2}|\d{4,})$/', $s)) {
        return null;
    }
    return $s === '' ? null : pb_lees_getal($s, $decimalen);
}

/** Klopt één veld (getal, keuze of keuzes) met de controletabel? */
function pb_l1_veld_goed(array $f, $waarde, array $tabel): bool
{
    $t = $tabel['deel1'];
    if ($f['soort'] === 'getal') {
        $g = pb_l1_getal($waarde, (int)$f['decimalen']);
        if ($g === null) {
            return false;
        }
        if (isset($f['min_sleutel'])) {
            return $g >= (float)$t[$f['min_sleutel']] - 1e-9 && $g <= (float)$t[$f['max_sleutel']] + 1e-9;
        }
        return pb_klopt($g, (float)$t[$f['sleutel']], (float)$f['tolerantie']);
    }
    if ($f['soort'] === 'keuze') {
        return is_string($waarde) && $waarde !== '' && (string)$t[$f['sleutel']] === $waarde;
    }
    if ($f['soort'] === 'keuzes') {
        $goed = (array)$t[$f['sleutel']];
        sort($goed);
        $w = is_array($waarde) ? $waarde : [];
        sort($w);
        return $w === $goed;
    }
    return true;
}

function pb_l1_ingevuld($w): bool
{
    return is_array($w) ? $w !== [] : trim((string)$w) !== '';
}

/** De open tekst van een item, met witruimte gelijkgetrokken: zo wordt hij bekeken en vergeleken. */
function pb_l1_tekst(array $def, array $velden): string
{
    $t = '';
    foreach ($def['velden'] as $f) {
        if ($f['soort'] === 'tekst') {
            $t .= trim((string)preg_replace('/\s+/u', ' ', (string)($velden[$f['id']] ?? ''))) . "\n";
        }
    }
    return $t;
}

/** Vingerafdruk van de open tekst van een item: feedback hoort alleen bij de tekst waarop hij gegeven is. */
function pb_l1_tekst_hash(array $def, array $velden): string
{
    return substr(hash('sha256', pb_l1_tekst($def, $velden)), 0, 16);
}

/**
 * Bij welke tekst hoort de laatste feedback nog? actueel (precies deze tekst), klein (het tegoed is op en er is daarna
 * weinig veranderd: de beoordeling blijft gelden), anders (veranderd; met tegoed kan het duo opnieuw vragen, zonder tegoed
 * is deze versie niet meer bekeken), of null zonder feedback.
 *
 * Regel bij een leeg tegoed: een tikfout of een extra woord laat een klare vraag niet terugvallen, want opnieuw laten
 * beoordelen kan niet meer. Vergeleken wordt met de bekeken tekst, niet met de vorige versie, zodat vele kleine
 * wijzigingen samen nooit verder gaan dan één kleine.
 */
function pb_l1_fb_geldt(array $def, array $rij): ?string
{
    $fb = $rij['uitslag']['feedback'] ?? null;
    if (!$fb) {
        return null;
    }
    if (($fb['hash'] ?? '') === pb_l1_tekst_hash($def, $rij['velden'])) {
        return 'actueel';
    }
    $op = (int)$rij['feedback'] >= (int)($def['feedback_max'] ?? 0);
    if (!$op || !isset($fb['tekst']) || !is_string($fb['tekst'])) {
        return 'anders';
    }
    $nu = pb_l1_tekst($def, $rij['velden']);
    $grens = max(PB_L1_KLEIN_MIN, (int)floor(strlen($fb['tekst']) * PB_L1_KLEIN_DEEL));   // bytes, net als levenshtein
    if (abs(strlen($nu) - strlen($fb['tekst'])) > $grens) {
        return 'anders';
    }
    return levenshtein($fb['tekst'], $nu) <= $grens ? 'klein' : 'anders';
}

/**
 * Status van een item: leeg, bezig, uitleg (getallen klopten, de uitleg nog niet), klaar.
 * Klaar: alle getallen en keuzes kloppen, minstens één visual (als de vraag erom vraagt), en de laatste feedback op de
 * huidige tekst zegt bij elk criterium "zit erin" (of, als het tegoed op is, op een tekst die daarna maar weinig is
 * veranderd: pb_l1_fb_geldt). Fout 1 en 2: a en b beschreven met die feedback, en c ingevuld.
 */
function pb_l1_status(array $def, array $rij): string
{
    $v = $rij['velden'];
    if (!array_filter($v, 'pb_l1_ingevuld')) {
        return 'leeg';
    }
    $getallen_goed = true;
    $heeft_tekst = false;
    foreach ($def['velden'] as $f) {
        if (in_array($f['soort'], ['getal', 'keuze', 'keuzes'], true) && empty($rij['uitslag']['velden'][$f['id']]['goed'])) {
            $getallen_goed = false;
        }
        if (in_array($f['soort'], ['visuals', 'kort'], true) && !pb_l1_ingevuld($v[$f['id']] ?? '')) {
            $getallen_goed = false;
        }
        if ($f['soort'] === 'tekst') {
            $heeft_tekst = true;
        }
    }
    $fb = $rij['uitslag']['feedback'] ?? null;
    $tekst_klaar = !$heeft_tekst || ($fb && in_array(pb_l1_fb_geldt($def, $rij), ['actueel', 'klein'], true)
        && !array_filter($fb['criteria'] ?? [], fn($c) => $c['oordeel'] !== 'zit'));
    if ($getallen_goed && $tekst_klaar) {
        return 'klaar';
    }
    return $getallen_goed && !empty($def['rubric']) && empty($def['fout']) ? 'uitleg' : 'bezig';
}

/** De getallen en keuzes van een vraag nakijken. Geeft de bijgewerkte rij. */
function pb_l1_controleer(array $def, array $rij, array $tabel): array
{
    foreach ($def['velden'] as $f) {
        if (!in_array($f['soort'], ['getal', 'keuze', 'keuzes'], true)) {
            continue;
        }
        $u = $rij['uitslag']['velden'][$f['id']] ?? ['goed' => false, 'pogingen' => 0];
        if ($u['goed'] || !pb_l1_ingevuld($rij['velden'][$f['id']] ?? '')) {
            $rij['uitslag']['velden'][$f['id']] = $u;
            continue;
        }
        $u['goed'] = pb_l1_veld_goed($f, $rij['velden'][$f['id']], $tabel);
        if (!$u['goed']) {
            $u['pogingen'] = (int)$u['pogingen'] + 1;
        }
        $rij['uitslag']['velden'][$f['id']] = $u;
    }
    return $rij;
}

/** Het item zoals de browser het ziet: velden, uitslag per veld met terugvraag, feedback en tegoed. */
function pb_l1_item_openbaar(array $def, array $rij, array $les): array
{
    $uitslag = [];
    foreach ($def['velden'] as $f) {
        $u = $rij['uitslag']['velden'][$f['id']] ?? null;
        if (!$u || (!$u['goed'] && (int)$u['pogingen'] === 0)) {
            continue;
        }
        $uitslag[$f['id']] = ['goed' => (bool)$u['goed'], 'pogingen' => (int)$u['pogingen'],
            'terug' => $u['goed'] ? null : ((int)$u['pogingen'] >= 2 && !empty($f['terug2']) ? $f['terug2'] : $f['terug'])];
    }
    $fb = $rij['uitslag']['feedback'] ?? null;
    $max = (int)$def['feedback_max'];
    $geldt = pb_l1_fb_geldt($def, $rij);
    return [
        'velden' => (object)$rij['velden'],
        'uitslag' => (object)$uitslag,
        'status' => pb_l1_status($def, $rij),
        'feedback' => $fb ? ['criteria' => $fb['criteria'], 'terugvraag' => $fb['terugvraag'],
            'actueel' => $geldt === 'actueel', 'geldt' => $geldt] : null,
        'feedback_over' => max(0, $max - (int)$rij['feedback']),
    ];
}

// ---------------------------------------------------------------- deel 2

/** De controlevraag van deel 2 voor dit duo (pb_vraag, maat d2). Maakt hem bij het eerste bezoek. */
function pb_l1_d2(array $duo, array $les): array
{
    $n = (int)$les['les'];
    $v = pb_vragen((int)$duo['id'], $n);
    if ($v) {
        return $v[0];
    }
    $opties = pb_l1_d2_opties($n, []);
    [$r, $w] = $opties[array_rand($opties)];
    pb_db()->prepare('INSERT INTO pb_vraag (duo_id, les, nr, ruimte, week, maat, datum) VALUES (?, ?, 1, ?, ?, ?, ?)')
        ->execute([$duo['id'], $n, $r, $w, 'd2', pb_vandaag()]);
    return pb_vragen((int)$duo['id'], $n)[0];
}

function pb_l1_d2_opties(int $les, array $gehad): array
{
    $uit = [];
    foreach (pb_l1_tabel($les)['deel2']['combinaties'] as $c) {
        if ($c['bruikbaar'] && !isset($gehad[$c['ruimte_id'] . '|' . $c['week']])) {
            $uit[] = [$c['ruimte_id'], (int)$c['week']];
        }
    }
    return $uit;
}

function pb_l1_d2_combinatie(int $les, array $vraag): array
{
    foreach (pb_l1_tabel($les)['deel2']['combinaties'] as $c) {
        if ($c['ruimte_id'] === $vraag['ruimte'] && (int)$c['week'] === (int)$vraag['week']) {
            return $c;
        }
    }
    ap_fout(503, 'Bij deze vraag ontbreekt de controlewaarde. Meld het je docent.', 'tabel');
}

/**
 * Leest het antwoord op de controlevraag. Geeft [als decimaal getal, alle lezingen]: "38.402,8", "38402,8" en "38.402"
 * kunnen ook een som zijn die Power BI met punten voor de duizendtallen laat zien.
 */
function pb_l1_d2_lees($invoer): array
{
    if (!is_string($invoer) || strlen($invoer) > 30) {
        return [null, []];
    }
    $s = (string)preg_replace('/[\p{L}°%\s\x{00A0}]+/u', '', str_replace("\u{2212}", '-', $invoer));
    if (!preg_match('/^-?[\d.,]+$/', $s)) {
        return [null, []];
    }
    $lezingen = [];
    $dec = pb_lees_getal($s, 1);
    if ($dec !== null) {
        $lezingen[] = $dec;
    }
    // laatste scheidingsteken is het decimaalteken, de andere zijn duizendtallen
    if (preg_match('/^(-?[\d.,]*?)([.,](\d+))?$/', $s, $m)) {
        $heel = str_replace(['.', ','], '', $m[1]);
        if ($heel !== '' && is_numeric($heel)) {
            $lezingen[] = (float)($heel . (isset($m[3]) ? '.' . $m[3] : ''));
        }
    }
    $zonder = str_replace(['.', ','], '', $s);
    if (is_numeric($zonder)) {
        $lezingen[] = (float)$zonder;
    }
    return [$dec, array_values(array_unique($lezingen, SORT_REGULAR))];
}

/** goed | een_fout | fout. "een_fout" alleen als het getal precies past bij bestand B met nog één van de twee fouten. */
function pb_l1_d2_uitslag(array $comb, $antwoord): string
{
    [$dec, $lezingen] = pb_l1_d2_lees($antwoord);
    if ($dec !== null && pb_klopt($dec, (float)$comb['goed'], PB_L1_D2_TOLERANTIE)) {
        return 'goed';
    }
    foreach ($lezingen as $g) {
        if (pb_klopt($g, (float)$comb['zonder_relatie'], PB_L1_D2_TOLERANTIE) || pb_klopt($g, (float)$comb['met_som'], PB_L1_SOM_TOLERANTIE)) {
            return 'een_fout';
        }
    }
    return 'fout';
}

function pb_l1_d2_openbaar(array $v, array $les, array $rij): array
{
    $d2 = $les['deel2'];
    $ruimtes = ['R01' => 'de fabriekshal', 'R02' => 'het kantoor', 'R03' => 'het magazijn', 'R04' => 'de expeditie'];
    return [
        'vraag' => strtr($d2['vraag'], ['{ruimte}' => $ruimtes[$v['ruimte']] ?? $v['ruimte'], '{week}' => (string)$v['week']]),
        'eenheid' => $d2['eenheid'], 'decimalen' => (int)$d2['decimalen'],
        'pogingen' => (int)$v['pogingen'], 'max' => (int)$d2['pogingen'], 'goed' => (bool)$v['goed'], 'nieuw' => (bool)$v['met_hint'],
        'antwoord' => (string)($rij['velden']['antwoord'] ?? ''),
        'uitslag' => $rij['uitslag']['soort'] ?? null,
    ];
}

// ---------------------------------------------------------------- stand

function pb_stand_vragen(array $duo, array $les): array
{
    $n = (int)$les['les'];
    $items = [];
    foreach (pb_l1_items($les) as $id => $def) {
        $items[$id] = pb_l1_item_openbaar($def, pb_l1_rij((int)$duo['id'], $n, $id), $les) + ['tegoed' => pb_tegoed((int)$duo['id'], $n, $id)];
    }
    $d2v = pb_l1_d2($duo, $les);
    $d2 = pb_l1_d2_openbaar($d2v, $les, pb_l1_rij((int)$duo['id'], $n, 'd2')) + ['tegoed' => pb_tegoed((int)$duo['id'], $n, 'd2')];
    $vragen_klaar = count(array_filter($les['vragen'], fn($v) => $items[$v['id']]['status'] === 'klaar'));
    $fouten_klaar = count(array_filter(['f1', 'f2'], fn($f) => $items[$f]['status'] === 'klaar'));
    return [
        'ok' => true,
        'soort' => 'vragen',
        'duo' => ['naam' => $duo['duonaam'], 'voornaam1' => $duo['voornaam1'], 'voornaam2' => $duo['voornaam2']],
        'les' => pb_les_openbaar_vragen($les),
        'tutor' => pb_tutor_modus(),
        'items' => $items,
        'd2' => $d2,
        'samenvatting' => ['vragen_klaar' => $vragen_klaar, 'vragen_totaal' => count($les['vragen']), 'controle_goed' => $d2['goed'], 'fouten_klaar' => $fouten_klaar],
        'klaar' => $vragen_klaar === count($les['vragen']) && $d2['goed'] && $fouten_klaar === 2,
    ];
}

/** Zet de opgeslagen status gelijk met wat pb_l1_status zegt (voor het docentoverzicht). */
function pb_l1_bewaar(array $duo, array $def, array $rij): void
{
    $rij['status'] = pb_l1_status($def, $rij);
    pb_l1_schrijf((int)$duo['id'], (int)$duo['les'], $def['id'], $rij);
    if ($rij['status'] === 'klaar') {
        // net als bij een klare stap: het gesprek met de tutor bij dit item gaat weg
        pb_db()->prepare('DELETE FROM pb_gesprek WHERE duo_id = ? AND les = ? AND stap = ?')->execute([$duo['id'], $duo['les'], $def['id']]);
    }
}
