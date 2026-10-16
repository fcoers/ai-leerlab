<?php
/**
 * Taaloefenen: kern voor pagina's en API. Bouwt op de gedeelde kern van de apps (config, database, rem, sleutel).
 * De Productiviteit-app op de Mac stuurt thema's (items en rijtjes) via api/themas.php; de site bewaart per thema
 * een kopie en toont die. Van leerlingen staat hier niets: hun voortgang blijft in hun eigen browser.
 * Koppelvlak: Projecten/AI-leerlab/Leveringen/_bron/Taaloefen-app/Koppelvlak taaloefenen.md
 */
if (!defined('TAALOEFENEN')) {
    http_response_code(404);
    exit;
}
if (!defined('AI_APPS')) {
    define('AI_APPS', true);
}
require dirname(__DIR__, 2) . '/postvak/lib/kern.php';

/** Pas op true als Frits zegt dat de app in Google, het menu en de sitemap mag. Privé-thema's blijven altijd noindex. */
const TO_INDEXEREN = false;
const TO_SCHEMA = '1';
const TO_CODE_ALFABET = 'abcdefghijkmnpqrstuvwxyz23456789';
const TO_CODE_LENGTE = 24;                     // 24 tekens uit 32 = 120 bits
const TO_MAX_ITEMS = 600;
const TO_MAX_RIJTJES = 80;
const TO_MAX_ALT = 10;

const TO_TALEN = [
    'frans' => ['naam' => 'Frans', 'lang' => 'fr',
                'personen' => ['je', 'tu', 'il/elle/on', 'nous', 'vous', 'ils/elles'],
                'tijden' => ['présent', 'passé composé', 'futur proche', 'imparfait']],
    'duits' => ['naam' => 'Duits', 'lang' => 'de',
                'personen' => ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'],
                'tijden' => ['Präsens', 'Perfekt', 'Präteritum']],
];
const TO_SOORTEN = ['woord', 'zin', 'vervoeging-zin', 'vervoeging-kort'];
/** m mannelijk, v vrouwelijk, o onzijdig (Duits), mv meervoud; zoals het boek het achter een woord zet. */
const TO_GESLACHTEN = ['m', 'v', 'o', 'mv', 'm mv', 'v mv', 'o mv'];

function to_db(): PDO
{
    static $klaar = false;
    $pdo = ap_db();
    if (!$klaar) {
        to_tabellen($pdo);
        $klaar = true;
    }
    return $pdo;
}

/** Eigen tabellen in de gedeelde database `apps`. Gemaakt bij het eerste gebruik. */
function to_tabellen(PDO $pdo): void
{
    try {
        if ($pdo->query("SELECT waarde FROM to_instelling WHERE naam = 'schema'")->fetchColumn() === TO_SCHEMA) {
            return;
        }
    } catch (Throwable $e) {
        // nog geen tabellen
    }
    $sqlite = ap_is_sqlite($pdo);
    $id = $sqlite ? 'INTEGER PRIMARY KEY AUTOINCREMENT' : 'INT NOT NULL AUTO_INCREMENT PRIMARY KEY';
    $eind = $sqlite ? '' : ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';
    $tekst = $sqlite ? 'TEXT' : 'MEDIUMTEXT';
    $pdo->exec("CREATE TABLE IF NOT EXISTS to_instelling (naam VARCHAR(40) NOT NULL PRIMARY KEY, waarde VARCHAR(255) NOT NULL)$eind");
    // inhoud: items en rijtjes zoals de browser ze krijgt (JSON). aantallen: voor de stand naar de Mac.
    $pdo->exec("CREATE TABLE IF NOT EXISTS to_thema (
        id $id,
        uid VARCHAR(64) NOT NULL UNIQUE,
        taal VARCHAR(10) NOT NULL,
        naam VARCHAR(80) NOT NULL,
        slug VARCHAR(90) NOT NULL,
        zichtbaarheid VARCHAR(10) NOT NULL,
        code VARCHAR(32) NULL UNIQUE,
        volgorde INT NOT NULL DEFAULT 0,
        inhoud $tekst NOT NULL,
        aantallen VARCHAR(255) NOT NULL,
        bijgewerkt BIGINT NOT NULL)$eind");
    $pdo->exec('CREATE INDEX to_thema_taal ON to_thema (taal, zichtbaarheid, slug)');
    $pdo->prepare('INSERT INTO to_instelling (naam, waarde) VALUES (?, ?)')->execute(['schema', TO_SCHEMA]);
}

// ---------------------------------------------------------------- tekst

/** Spaties aan de randen eraf, meervoudige spaties één, kromme apostrof recht. Geen string: null. */
function to_tekst($s): ?string
{
    if (!is_string($s)) {
        return null;
    }
    $s = str_replace(["\u{2019}", "\u{2018}", "\u{02BC}"], "'", $s);
    if (class_exists('Normalizer')) {
        $s = Normalizer::normalize($s, Normalizer::FORM_C) ?: $s;
    }
    return trim(preg_replace('/\s+/u', ' ', $s));
}

/** Een lijst (of een tekst met puntkomma's) als schone lijst zonder lege of dubbele. Fout: null. */
function to_lijst($v): ?array
{
    if ($v === null) {
        return [];
    }
    if (is_string($v)) {
        $v = explode(';', $v);
    }
    if (!is_array($v) || !array_is_list($v)) {
        return null;
    }
    $uit = [];
    foreach ($v as $s) {
        $s = to_tekst($s);
        if ($s === null) {
            return null;
        }
        if ($s !== '' && !in_array($s, $uit, true)) {
            $uit[] = $s;
        }
    }
    return $uit;
}

function to_slug(string $naam): string
{
    $s = mb_strtolower($naam);
    $s = strtr($s, ['ä' => 'a', 'ö' => 'o', 'ü' => 'u', 'ß' => 'ss', 'œ' => 'oe', 'æ' => 'ae']);
    if (class_exists('Normalizer')) {
        $s = preg_replace('/\p{Mn}+/u', '', Normalizer::normalize($s, Normalizer::FORM_D));
    }
    $s = trim(preg_replace('/[^a-z0-9]+/', '-', $s), '-');
    $s = substr($s, 0, 80);
    return rtrim($s, '-') ?: 'thema';
}

function to_code(): string
{
    $s = '';
    $max = strlen(TO_CODE_ALFABET) - 1;
    for ($i = 0; $i < TO_CODE_LENGTE; $i++) {
        $s .= TO_CODE_ALFABET[random_int(0, $max)];
    }
    return $s;
}

function to_esc($s): string
{
    return htmlspecialchars((string)$s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

// ---------------------------------------------------------------- lezen

function to_thema_op_uid(string $uid): ?array
{
    $st = to_db()->prepare('SELECT * FROM to_thema WHERE uid = ?');
    $st->execute([$uid]);
    return $st->fetch() ?: null;
}

function to_thema_op_slug(string $taal, string $slug): ?array
{
    $st = to_db()->prepare("SELECT * FROM to_thema WHERE taal = ? AND slug = ? AND zichtbaarheid = 'openbaar'");
    $st->execute([$taal, $slug]);
    return $st->fetch() ?: null;
}

/** Alleen een privé-thema is met een code te openen. */
function to_thema_op_code(string $code): ?array
{
    if (!preg_match('/^[a-z0-9]{' . TO_CODE_LENGTE . '}$/', $code)) {
        return null;
    }
    $st = to_db()->prepare("SELECT * FROM to_thema WHERE code = ? AND zichtbaarheid = 'prive'");
    $st->execute([$code]);
    $t = $st->fetch() ?: null;
    return ($t && hash_equals((string)$t['code'], $code)) ? $t : null;
}

/** Openbare thema's, per taal op volgorde en naam. */
function to_openbare_themas(?string $taal = null): array
{
    $sql = "SELECT * FROM to_thema WHERE zichtbaarheid = 'openbaar'" . ($taal ? ' AND taal = ?' : '') . ' ORDER BY taal, volgorde, naam';
    $st = to_db()->prepare($sql);
    $st->execute($taal ? [$taal] : []);
    return $st->fetchAll();
}

function to_inhoud(array $t): array
{
    $i = json_decode((string)$t['inhoud'], true);
    return is_array($i) ? $i + ['items' => [], 'rijtjes' => []] : ['items' => [], 'rijtjes' => []];
}

function to_aantallen(array $t): array
{
    $a = json_decode((string)$t['aantallen'], true);
    return is_array($a) ? $a : [];
}

function to_pad(array $t): string
{
    return $t['zichtbaarheid'] === 'prive'
        ? '/apps/taaloefenen/t/' . $t['code'] . '/'
        : '/apps/taaloefenen/' . $t['taal'] . '/' . $t['slug'] . '/';
}

/** De stand van een thema voor de Mac (koppelvlak 5). */
function to_stand(array $t): array
{
    return ['uid' => $t['uid'], 'taal' => $t['taal'], 'naam' => $t['naam'], 'slug' => $t['slug'],
            'zichtbaarheid' => $t['zichtbaarheid'], 'code' => $t['code'] ?: null,
            'url' => ap_adres() . to_pad($t), 'volgorde' => (int)$t['volgorde'],
            'aantallen' => to_aantallen($t), 'bijgewerkt' => ap_iso((int)$t['bijgewerkt'])];
}

/** Wat de browser van een thema krijgt (koppelvlak 7): geen code, volgorde of tijden. */
function to_voor_browser(array $t): array
{
    $i = to_inhoud($t);
    $prive = $t['zichtbaarheid'] === 'prive';
    return ['uid' => $t['uid'], 'naam' => $t['naam'], 'url' => $prive ? null : to_pad($t), 'prive' => $prive,
            'items' => $i['items'], 'rijtjes' => $i['rijtjes']];
}

// ---------------------------------------------------------------- controleren bij opslaan

/** Controleert een thema uit het verzoek. Geeft [schoon thema, fouten per veld]. */
function to_thema_uit_verzoek($t): array
{
    if (!is_array($t) || array_is_list($t)) {
        ap_fout(400, 'Het veld thema ontbreekt.', 'verzoek');
    }
    $f = [];
    $uid = $t['uid'] ?? null;
    if (!is_string($uid) || !preg_match('/^[A-Za-z0-9_-]{1,64}$/', $uid)) {
        ap_fout(400, 'Het veld uid ontbreekt of klopt niet (letters, cijfers, _ en -, hooguit 64 tekens).', 'verzoek');
    }
    $taal = $t['taal'] ?? null;
    if (!is_string($taal) || !isset(TO_TALEN[$taal])) {
        $f['taal'] = 'Kies frans of duits.';
        $taal = 'frans';
    }
    $T = TO_TALEN[$taal];
    $naam = to_tekst($t['naam'] ?? null);
    if ($naam === null || $naam === '' || mb_strlen($naam) > 80) {
        $f['naam'] = 'Vul de naam van het thema in, hooguit 80 tekens.';
    }
    $zicht = $t['zichtbaarheid'] ?? 'prive';
    if (!in_array($zicht, ['openbaar', 'prive'], true)) {
        $f['zichtbaarheid'] = 'Kies openbaar of prive.';
        $zicht = 'prive';
    }
    $volgorde = $t['volgorde'] ?? 0;
    if (!is_int($volgorde) || abs($volgorde) > 1000000) {
        $f['volgorde'] = 'Volgorde is een geheel getal.';
        $volgorde = 0;
    }

    $items = $t['items'] ?? null;
    $schoon = [];
    $tel = ['woord' => 0, 'zin' => 0, 'vervoeging-zin' => 0, 'vervoeging-kort' => 0];
    if (!is_array($items) || !array_is_list($items) || count($items) < 1 || count($items) > TO_MAX_ITEMS) {
        $f['items'] = 'Geef 1 tot ' . TO_MAX_ITEMS . ' items.';
        $items = [];
    }
    $ids = [];
    foreach ($items as $n => $it) {
        $k = "items.$n";
        if (!is_array($it) || array_is_list($it)) {
            $f[$k] = 'Item ' . ($n + 1) . ' is geen object.';
            continue;
        }
        $id = $it['id'] ?? null;
        if (!is_string($id) || !preg_match('/^[A-Za-z0-9_.-]{1,64}$/', $id)) {
            $f["$k.id"] = 'Geef een id: letters, cijfers, punt, _ en -, hooguit 64 tekens.';
        } elseif (isset($ids[$id])) {
            $f["$k.id"] = 'Dit id staat al bij item ' . ($ids[$id] + 1) . '.';
        } else {
            $ids[$id] = $n;
        }
        $soort = $it['soort'] ?? null;
        if (!in_array($soort, TO_SOORTEN, true)) {
            $f["$k.soort"] = 'Kies woord, zin, vervoeging-zin of vervoeging-kort.';
            continue;
        }
        $tel[$soort]++;
        $vraag = to_tekst($it['vraag'] ?? null);
        $antw = to_tekst($it['antwoord'] ?? null);
        if ($vraag === null || $vraag === '' || mb_strlen($vraag) > 300) {
            $f["$k.vraag"] = 'Vul de vraag in, hooguit 300 tekens.';
        }
        if ($antw === null || $antw === '' || mb_strlen($antw) > 300) {
            $f["$k.antwoord"] = 'Vul het antwoord in, hooguit 300 tekens.';
        }
        $alt = to_lijst($it['alternatieven'] ?? null);
        $alt_t = to_lijst($it['alternatieven_terug'] ?? null);
        foreach (['alternatieven' => $alt, 'alternatieven_terug' => $alt_t] as $veld => $l) {
            if ($l === null || count($l) > TO_MAX_ALT || array_filter($l, fn($s) => mb_strlen($s) > 300)) {
                $f["$k.$veld"] = 'Hooguit ' . TO_MAX_ALT . ' andere antwoorden, elk hooguit 300 tekens.';
            }
        }
        $uit = ['id' => (string)$id, 'soort' => $soort, 'vraag' => (string)$vraag, 'antwoord' => (string)$antw,
                'alt' => array_values(array_diff($alt ?? [], [(string)$antw]))];
        if ($soort === 'woord') {
            $uit['alt_terug'] = array_values(array_diff($alt_t ?? [], [(string)$vraag]));
            $r = $it['richtingen'] ?? 'beide';
            if (!in_array($r, ['beide', 'heen', 'terug'], true)) {
                $f["$k.richtingen"] = 'Kies beide, heen of terug.';
                $r = 'beide';
            }
            $uit['richtingen'] = $r;
            $g = is_string($it['geslacht'] ?? null) ? to_tekst($it['geslacht']) : ($it['geslacht'] ?? null);
            if ($g !== null && $g !== '' && !in_array($g, TO_GESLACHTEN, true)) {
                $f["$k.geslacht"] = 'Geslacht is ' . implode(', ', TO_GESLACHTEN) . '.';
            } elseif ($g) {
                $uit['geslacht'] = $g;
            }
        } elseif ($alt_t) {
            $f["$k.alternatieven_terug"] = 'Andere antwoorden terug horen alleen bij een woord.';
        }
        if ($soort === 'vervoeging-zin' || $soort === 'vervoeging-kort') {
            $ww = to_tekst($it['werkwoord'] ?? null);
            if (($ww === null || $ww === '') && is_string($vraag) && preg_match('/\(([^()]+)\)/u', $vraag, $m)) {
                $ww = to_tekst($m[1]);
            }
            if ($ww === null || $ww === '' || mb_strlen($ww) > 60) {
                $f["$k.werkwoord"] = 'Vul het hele werkwoord in, hooguit 60 tekens.';
            }
            $tijd = $it['tijd'] ?? null;
            if (!in_array($tijd, $T['tijden'], true)) {
                $f["$k.tijd"] = 'Kies een tijd uit de lijst voor het ' . $T['naam'] . ': ' . implode(', ', $T['tijden']) . '.';
            }
            $uit['werkwoord'] = (string)$ww;
            $uit['tijd'] = (string)$tijd;
            if ($soort === 'vervoeging-zin') {
                if (is_string($vraag) && preg_match_all('/\([^()]+\)/u', $vraag) !== 1) {
                    $f["$k.vraag"] = 'Zet het hele werkwoord precies één keer tussen haakjes op de plek van het gat.';
                }
                // Persoon is hier optioneel; met persoon licht het rijtje precies één regel op (je parle, il parle).
                $p = $it['persoon'] ?? null;
                if ($p !== null && $p !== '' && !in_array($p, $T['personen'], true)) {
                    $f["$k.persoon"] = 'Kies een persoon uit de lijst voor het ' . $T['naam'] . ': ' . implode(', ', $T['personen']) . '.';
                } elseif ($p) {
                    $uit['persoon'] = (string)$p;
                }
            } else {
                $p = $it['persoon'] ?? null;
                if (!in_array($p, $T['personen'], true)) {
                    $f["$k.persoon"] = 'Kies een persoon uit de lijst voor het ' . $T['naam'] . ': ' . implode(', ', $T['personen']) . '.';
                }
                $uit['persoon'] = (string)$p;
            }
        }
        $schoon[] = $uit;
    }

    $rijtjes = $t['rijtjes'] ?? [];
    $r_schoon = [];
    $compleet = 0;
    if (!is_array($rijtjes) || !array_is_list($rijtjes) || count($rijtjes) > TO_MAX_RIJTJES) {
        $f['rijtjes'] = 'Hooguit ' . TO_MAX_RIJTJES . ' rijtjes, als lijst.';
        $rijtjes = [];
    }
    $gezien = [];
    foreach ($rijtjes as $n => $r) {
        $k = "rijtjes.$n";
        if (!is_array($r) || array_is_list($r)) {
            $f[$k] = 'Rijtje ' . ($n + 1) . ' is geen object.';
            continue;
        }
        $ww = to_tekst($r['werkwoord'] ?? null);
        $tijd = $r['tijd'] ?? null;
        if ($ww === null || $ww === '' || mb_strlen($ww) > 60) {
            $f["$k.werkwoord"] = 'Vul het werkwoord in, hooguit 60 tekens.';
        }
        if (!in_array($tijd, $T['tijden'], true)) {
            $f["$k.tijd"] = 'Kies een tijd uit de lijst voor het ' . $T['naam'] . '.';
        }
        $sleutel = mb_strtolower((string)$ww) . '|' . $tijd;
        if (isset($gezien[$sleutel])) {
            $f["$k.werkwoord"] = 'Dit werkwoord in deze tijd staat al bij rijtje ' . ($gezien[$sleutel] + 1) . '.';
        }
        $gezien[$sleutel] = $n;
        $vormen = $r['vormen'] ?? null;
        $v_schoon = [];
        if (!is_array($vormen) || ($vormen !== [] && array_is_list($vormen))) {
            $f["$k.vormen"] = 'vormen is een object met de personen als sleutel.';
        } else {
            foreach ($vormen as $p => $v) {
                if (!in_array($p, $T['personen'], true)) {
                    $f["$k.vormen"] = "Onbekende persoon \"$p\" voor het " . $T['naam'] . '.';
                    continue;
                }
                $v = $v === null ? '' : to_tekst($v);
                if ($v === null || mb_strlen($v) > 60) {
                    $f["$k.vormen.$p"] = 'Een vorm is tekst, hooguit 60 tekens.';
                    continue;
                }
                if ($v !== '') {
                    $v_schoon[$p] = $v;
                }
            }
        }
        // Op de volgorde van de lijst, zodat de browser het rijtje zo kan tonen.
        $geordend = [];
        foreach ($T['personen'] as $p) {
            if (isset($v_schoon[$p])) {
                $geordend[$p] = $v_schoon[$p];
            }
        }
        if (count($geordend) === count($T['personen'])) {
            $compleet++;
        }
        $r_schoon[] = ['werkwoord' => (string)$ww, 'tijd' => (string)$tijd, 'vormen' => (object)$geordend];
    }
    $tel['rijtjes'] = count($r_schoon);
    $tel['rijtjes_compleet'] = $compleet;
    return [['uid' => $uid, 'taal' => $taal, 'naam' => (string)$naam, 'zichtbaarheid' => $zicht, 'volgorde' => $volgorde,
             'inhoud' => ['items' => $schoon, 'rijtjes' => $r_schoon], 'aantallen' => $tel], $f];
}

/** Een slug die binnen de openbare thema's van de taal nog vrij is (behalve bij het thema zelf). */
function to_vrije_slug(string $taal, string $naam, string $uid): string
{
    $basis = to_slug($naam);
    $st = to_db()->prepare("SELECT slug FROM to_thema WHERE taal = ? AND zichtbaarheid = 'openbaar' AND uid <> ?");
    $st->execute([$taal, $uid]);
    $bezet = array_flip($st->fetchAll(PDO::FETCH_COLUMN));
    $slug = $basis;
    for ($i = 2; isset($bezet[$slug]); $i++) {
        $slug = $basis . '-' . $i;
    }
    return $slug;
}
