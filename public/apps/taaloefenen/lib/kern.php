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
const TO_SCHEMA = '2';                // 2: tabel to_grammatica (klus 952)
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
    try {
        $pdo->exec('CREATE INDEX to_thema_taal ON to_thema (taal, zichtbaarheid, slug)');
    } catch (Throwable $e) {
        // bestaat al (schema 1)
    }
    // Grammatica per taal (klus 952): het hele bestand van Dide, gecontroleerd, als JSON. De Mac stuurt het.
    $pdo->exec("CREATE TABLE IF NOT EXISTS to_grammatica (
        taal VARCHAR(10) NOT NULL PRIMARY KEY,
        inhoud $tekst NOT NULL,
        bijgewerkt BIGINT NOT NULL)$eind");
    $pdo->prepare('DELETE FROM to_instelling WHERE naam = ?')->execute(['schema']);
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
    // Eén zin onder de titel van het thema (klus 952), optioneel.
    $opmerking = $t['opmerking'] ?? null;
    $opmerking = $opmerking === null ? '' : to_tekst($opmerking);
    if ($opmerking === null || mb_strlen($opmerking) > 300) {
        $f['opmerking'] = 'De opmerking is tekst, hooguit 300 tekens.';
        $opmerking = '';
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
    $inhoud = ['items' => $schoon, 'rijtjes' => $r_schoon];
    if ($opmerking !== '') {
        $inhoud['opmerking'] = $opmerking;
    }
    return [['uid' => $uid, 'taal' => $taal, 'naam' => (string)$naam, 'zichtbaarheid' => $zicht, 'volgorde' => $volgorde,
             'inhoud' => $inhoud, 'aantallen' => $tel], $f];
}

/** Een slug die binnen de openbare thema's van de taal nog vrij is (behalve bij het thema zelf). */
function to_vrije_slug(string $taal, string $naam, string $uid): string
{
    $basis = to_slug($naam);
    $st = to_db()->prepare("SELECT slug FROM to_thema WHERE taal = ? AND zichtbaarheid = 'openbaar' AND uid <> ?");
    $st->execute([$taal, $uid]);
    $bezet = array_flip($st->fetchAll(PDO::FETCH_COLUMN));
    $bezet['grammatica'] = true;   // /<taal>/grammatica/ is de grammatica (klus 952)
    $slug = $basis;
    for ($i = 2; isset($bezet[$slug]); $i++) {
        $slug = $basis . '-' . $i;
    }
    return $slug;
}

// ---------------------------------------------------------------- grammatica (klus 952)

/** De groepen op het overzicht, in deze volgorde. Elk onderdeel hoort bij een ervan (veld groep in het bestand). */
const TO_GRAM_GROEPEN = ['Werkwoorden', 'Naamwoorden', 'Zinsbouw'];
const TO_GRAM_MAX = 40;

/** Een korte tekst uit het verzoek: schoon, niet leeg (tenzij $mag_leeg), hooguit $max tekens. Fout: null. */
function to_gram_tekst($v, int $max, bool $mag_leeg = false): ?string
{
    $s = to_tekst($v);
    if ($s === null || ($s === '' && !$mag_leeg) || mb_strlen($s) > $max) {
        return null;
    }
    return $s;
}

/** Controleert de grammatica van één taal (het bestand van Dide). Geeft [schoon, fouten per veld]. */
function to_grammatica_uit_verzoek(string $taal, $g): array
{
    $f = [];
    if (!is_array($g) || array_is_list($g)) {
        return [null, ['grammatica' => 'Het veld grammatica is geen object.']];
    }
    $T = TO_TALEN[$taal];
    $titel = to_gram_tekst($g['titel'] ?? 'Grammatica ' . $T['naam'], 120) ?? 'Grammatica ' . $T['naam'];
    $onderdelen = $g['onderdelen'] ?? null;
    if (!is_array($onderdelen) || !array_is_list($onderdelen) || count($onderdelen) < 1 || count($onderdelen) > TO_GRAM_MAX) {
        return [null, ['onderdelen' => 'Geef 1 tot ' . TO_GRAM_MAX . ' onderdelen, als lijst.']];
    }
    $schoon = [];
    $slugs = [];
    foreach ($onderdelen as $n => $o) {
        $k = "onderdelen.$n";
        if (!is_array($o) || array_is_list($o)) {
            $f[$k] = 'Onderdeel ' . ($n + 1) . ' is geen object.';
            continue;
        }
        $id = $o['id'] ?? null;
        if (!is_string($id) || !preg_match('/^[a-z0-9-]{1,80}$/', $id)) {
            $f["$k.id"] = 'Geef een id: kleine letters, cijfers en -, hooguit 80 tekens.';
            continue;
        }
        $slug = preg_replace('/^(de|fr)-/', '', $id);
        if ($slug === '' || isset($slugs[$slug])) {
            $f["$k.id"] = 'Dit id (zonder taal ervoor) staat al bij een ander onderdeel.';
            continue;
        }
        $slugs[$slug] = true;
        $uit = ['id' => $id, 'slug' => $slug];
        foreach (['titel' => 120, 'kort' => 200] as $veld => $max) {
            $v = to_gram_tekst($o[$veld] ?? null, $max);
            if ($v === null) {
                $f["$k.$veld"] = "Vul $veld in, hooguit $max tekens.";
            }
            $uit[$veld] = (string)$v;
        }
        $groep = to_gram_tekst($o['groep'] ?? null, 40);
        if ($groep === null || !in_array($groep, TO_GRAM_GROEPEN, true)) {
            $f["$k.groep"] = 'Geef een groep: ' . implode(', ', TO_GRAM_GROEPEN) . '.';
        }
        $uit['groep'] = (string)$groep;
        $hb = to_lijst($o['hoort_bij'] ?? []);
        if ($hb === null || count($hb) > 10) {
            $f["$k.hoort_bij"] = 'hoort_bij is een lijst met hooguit 10 themanamen.';
            $hb = [];
        }
        $uit['hoort_bij'] = $hb;
        $uitleg = $o['uitleg'] ?? null;
        $uit['uitleg'] = [];
        if (!is_array($uitleg) || !array_is_list($uitleg) || count($uitleg) < 1 || count($uitleg) > 3) {
            $f["$k.uitleg"] = 'De uitleg is een lijst met 1 tot 3 alinea\'s.';
        } else {
            foreach ($uitleg as $a) {
                $a = to_gram_tekst($a, 1500);
                if ($a === null) {
                    $f["$k.uitleg"] = 'Een alinea is tekst, hooguit 1500 tekens.';
                    break;
                }
                $uit['uitleg'][] = $a;
            }
        }
        // tabel: één object of een lijst van hooguit drie
        $tabellen = $o['tabel'] ?? [];
        if (is_array($tabellen) && $tabellen && !array_is_list($tabellen)) {
            $tabellen = [$tabellen];
        }
        $uit['tabellen'] = [];
        if (!is_array($tabellen) || count($tabellen) > 3) {
            $f["$k.tabel"] = 'Hooguit drie tabellen.';
            $tabellen = [];
        }
        foreach ($tabellen as $tb) {
            // kolommen mogen leeg zijn (een lege linkerbovenhoek), dus niet via to_lijst
            $kol = is_array($tb['kolommen'] ?? null) && array_is_list($tb['kolommen'])
                ? array_map(fn($c) => to_gram_tekst($c, 120, true), $tb['kolommen']) : null;
            if ($kol && in_array(null, $kol, true)) {
                $kol = null;
            }
            $rijen = $tb['rijen'] ?? null;
            if (!$kol || count($kol) > 5 || !is_array($rijen) || !array_is_list($rijen) || count($rijen) < 1 || count($rijen) > 20) {
                $f["$k.tabel"] = 'Een tabel heeft 1 tot 5 kolommen en 1 tot 20 rijen.';
                continue;
            }
            $rs = [];
            foreach ($rijen as $r) {
                if (!is_array($r) || !array_is_list($r) || count($r) !== count($kol)) {
                    $f["$k.tabel"] = 'Elke rij heeft evenveel cellen als er kolommen zijn.';
                    continue 2;
                }
                $cellen = array_map(fn($c) => to_gram_tekst($c, 300, true), $r);
                if (in_array(null, $cellen, true)) {
                    $f["$k.tabel"] = 'Een cel is tekst, hooguit 300 tekens.';
                    continue 2;
                }
                $rs[] = $cellen;
            }
            $uit['tabellen'][] = ['kolommen' => $kol, 'rijen' => $rs];
        }
        $uit['rijtjes'] = [];
        $rijtjes = $o['rijtjes'] ?? [];
        if (!is_array($rijtjes) || !array_is_list($rijtjes) || count($rijtjes) > 6) {
            $f["$k.rijtjes"] = 'Hooguit zes rijtjes, als lijst.';
            $rijtjes = [];
        }
        foreach ($rijtjes as $r) {
            $ww = to_gram_tekst($r['werkwoord'] ?? null, 60);
            $tijd = to_gram_tekst($r['tijd'] ?? null, 40);
            $vormen = $r['vormen'] ?? null;
            if ($ww === null || $tijd === null || !is_array($vormen) || array_is_list($vormen)) {
                $f["$k.rijtjes"] = 'Een rijtje heeft werkwoord, tijd en vormen.';
                continue;
            }
            $v = [];
            foreach ($T['personen'] as $p) {
                if (isset($vormen[$p])) {
                    $x = to_gram_tekst($vormen[$p], 60);
                    if ($x === null) {
                        $f["$k.rijtjes"] = 'Een vorm is tekst, hooguit 60 tekens.';
                        continue 2;
                    }
                    $v[$p] = $x;
                }
            }
            if (!$v) {
                $f["$k.rijtjes"] = 'Een rijtje heeft vormen voor de personen van het ' . $T['naam'] . '.';
                continue;
            }
            $nadruk = array_values(array_filter(to_lijst($r['nadruk'] ?? []) ?? [], fn($p) => isset($v[$p])));
            // nadruk_letters: {persoon: [[begin, eind], ...]}, tekens vanaf 0, eind exclusief (gelijk aan slice in JS)
            $letters = [];
            $nl = $r['nadruk_letters'] ?? [];
            if (!is_array($nl) || ($nl && array_is_list($nl))) {
                $f["$k.rijtjes"] = 'nadruk_letters is een object met per persoon een lijst [begin, eind].';
                $nl = [];
            }
            foreach ($nl as $p => $stukken) {
                if (!isset($v[$p])) {
                    $f["$k.rijtjes"] = "nadruk_letters noemt $p, maar dat rijtje heeft geen vorm voor $p.";
                    continue;
                }
                $len = mb_strlen($v[$p], 'UTF-8');
                $pos = [];
                foreach (is_array($stukken) && array_is_list($stukken) ? $stukken : [null] as $st) {
                    if (!is_array($st) || count($st) !== 2 || !is_int($st[0] ?? null) || !is_int($st[1] ?? null)
                        || $st[0] < 0 || $st[1] <= $st[0] || $st[1] > $len) {
                        $f["$k.rijtjes"] = "nadruk_letters bij $p: elk stuk is [begin, eind] binnen de vorm.";
                        $pos = [];
                        break;
                    }
                    $pos = array_merge($pos, range($st[0], $st[1] - 1));
                }
                if ($pos) {
                    $letters[$p] = array_values(array_unique($pos));
                }
            }
            $uit['rijtjes'][] = ['werkwoord' => $ww, 'tijd' => $tijd, 'vormen' => $v, 'nadruk' => $nadruk, 'letters' => $letters];
        }
        $uit['voorbeelden'] = [];
        foreach ((is_array($o['voorbeelden'] ?? null) ? $o['voorbeelden'] : []) as $vb) {
            $zin = to_gram_tekst($vb['zin'] ?? null, 300);
            $nl = to_gram_tekst($vb['nl'] ?? '', 300, true);
            if ($zin === null || $nl === null) {
                $f["$k.voorbeelden"] = 'Een voorbeeld heeft een zin en de Nederlandse betekenis, elk hooguit 300 tekens.';
                continue;
            }
            $uit['voorbeelden'][] = ['zin' => $zin, 'nl' => $nl];
        }
        if (count($uit['voorbeelden']) > 8) {
            $f["$k.voorbeelden"] = 'Hooguit acht voorbeelden.';
        }
        $lo = $o['let_op'] ?? null;
        if (is_array($lo) && !array_is_list($lo)) {
            $tekst = to_gram_tekst($lo['tekst'] ?? null, 600);
            if ($tekst === null) {
                $f["$k.let_op"] = 'Let op heeft een tekst, hooguit 600 tekens.';
            } else {
                $uit['let_op'] = ['tekst' => $tekst, 'fout' => to_gram_tekst($lo['fout'] ?? '', 200, true) ?? '',
                                  'goed' => to_gram_tekst($lo['goed'] ?? '', 200, true) ?? ''];
            }
        }
        $schoon[] = $uit;
    }
    return [['titel' => $titel, 'onderdelen' => $schoon], $f];
}

/** De grammatica van een taal, in de volgorde van het overzicht (groep, dan bestand). Geen: null. */
function to_grammatica(string $taal): ?array
{
    static $cache = [];
    if (array_key_exists($taal, $cache)) {
        return $cache[$taal];
    }
    $st = to_db()->prepare('SELECT inhoud, bijgewerkt FROM to_grammatica WHERE taal = ?');
    $st->execute([$taal]);
    $r = $st->fetch();
    $g = $r ? json_decode((string)$r['inhoud'], true) : null;
    if (!is_array($g) || empty($g['onderdelen'])) {
        return $cache[$taal] = null;
    }
    $rang = array_flip(TO_GRAM_GROEPEN);
    $onderdelen = $g['onderdelen'];
    foreach ($onderdelen as $i => &$o) {
        $o['_rang'] = [$rang[$o['groep']] ?? count($rang), $i];
    }
    unset($o);
    usort($onderdelen, fn($a, $b) => $a['_rang'] <=> $b['_rang']);
    $g['onderdelen'] = $onderdelen;
    $g['bijgewerkt'] = (int)$r['bijgewerkt'];
    return $cache[$taal] = $g;
}

function to_grammatica_pad(string $taal, ?string $slug = null): string
{
    return '/apps/taaloefenen/' . $taal . '/grammatica/' . ($slug !== null ? $slug . '/' : '');
}

/** Het eerste openbare thema met een van deze namen (hoort_bij), voor de oefenknop. */
function to_thema_op_namen(string $taal, array $namen): ?array
{
    if (!$namen) {
        return null;
    }
    $st = to_db()->prepare("SELECT * FROM to_thema WHERE taal = ? AND naam = ? AND zichtbaarheid = 'openbaar'");
    foreach ($namen as $naam) {
        $st->execute([$taal, $naam]);
        if ($t = $st->fetch()) {
            return $t;
        }
    }
    return null;
}
