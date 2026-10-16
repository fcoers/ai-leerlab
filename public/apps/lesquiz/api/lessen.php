<?php
/**
 * Lessen beheren vanaf de Mac (koppelvlak hoofdstuk 4). Header X-Postvak-Sleutel, dezelfde sleutel als het postvak.
 * GET                                   ->  alle lessen met hun stand
 * POST {actie: opslaan, les: {...}}     ->  nieuw of bijwerken op uid
 * POST {actie: open, uid, minuten?}     ->  quiz open tot nu + minuten (hooguit open_uren)
 * POST {actie: sluit, uid}
 * POST {actie: wis_antwoorden, uid}     ->  naamloze antwoorden en niet-opgehaalde inzendingen van de les weg
 * POST {actie: verwijder, uid}          ->  les, antwoorden en niet-opgehaalde inzendingen weg
 */
define('LESQUIZ', true);
require __DIR__ . '/lib/kern.php';

const LQ_MAX_VRAGEN = 3;
const LQ_MIN_OPTIES = 2;
const LQ_MAX_OPTIES = 4;

$methode = $_SERVER['REQUEST_METHOD'] ?? '';
if ($methode !== 'GET' && $methode !== 'POST') {
    ap_fout(405, 'Alleen GET of POST.', 'methode');
}
pv_controleer_sleutel();
$pdo = lq_db();
pv_opruimen();

if ($methode === 'GET') {
    $lessen = $pdo->query('SELECT * FROM lq_les ORDER BY datum, uid')->fetchAll();
    ap_json(['ok' => true, 'lessen' => array_map('lq_stand', $lessen)]);
}

$in = ap_lees_json(256 * 1024);
$actie = $in['actie'] ?? null;
if (!is_string($actie)) {
    ap_fout(400, 'Het veld actie ontbreekt.', 'verzoek');
}

function lq_geldige_uid($uid): string
{
    if (!is_string($uid) || !preg_match('/^[A-Za-z0-9_-]{1,64}$/', $uid)) {
        ap_fout(400, 'Het veld uid ontbreekt of klopt niet (letters, cijfers, _ en -, hooguit 64 tekens).', 'verzoek');
    }
    return $uid;
}

function lq_bestaande_les($uid): array
{
    $les = lq_les_op_uid(lq_geldige_uid($uid));
    if (!$les) {
        ap_fout(404, 'Deze les staat niet op de site. Sla hem eerst op.', 'onbekende_les');
    }
    return $les;
}

/** Tekst schoonmaken: spaties aan de randen eraf; bij $een_regel ook meervoudige spaties samen. */
function lq_tekst($s, bool $een_regel): ?string
{
    if (!is_string($s)) {
        return null;
    }
    $s = trim($een_regel ? preg_replace('/\s+/u', ' ', $s) : $s);
    return $s;
}

/** Controleert de les uit het verzoek. Geeft [schone les, fouten per veld]. */
function lq_les_uit_verzoek($les): array
{
    if (!is_array($les)) {
        ap_fout(400, 'Het veld les ontbreekt.', 'verzoek');
    }
    $f = [];
    $uid = lq_geldige_uid($les['uid'] ?? null);
    $vak = lq_tekst($les['vak'] ?? null, true);
    $titel = lq_tekst($les['titel'] ?? null, true);
    $datum = $les['datum'] ?? null;
    if ($vak === null || $vak === '' || mb_strlen($vak) > 80) {
        $f['vak'] = 'Vul het vak in, hooguit 80 tekens.';
    }
    if ($titel === null || $titel === '' || mb_strlen($titel) > 120) {
        $f['titel'] = 'Vul de les in, hooguit 120 tekens.';
    }
    if (!is_string($datum) || !preg_match('/^(\d{4})-(\d{2})-(\d{2})$/', $datum, $m) || !checkdate((int)$m[2], (int)$m[3], (int)$m[1])) {
        $f['datum'] = 'Geef een bestaande datum als JJJJ-MM-DD.';
    }
    $vragen = $les['vragen'] ?? null;
    $schoon = [];
    if (!is_array($vragen) || !array_is_list($vragen) || count($vragen) < 1 || count($vragen) > LQ_MAX_VRAGEN) {
        $f['vragen'] = 'Geef 1 tot ' . LQ_MAX_VRAGEN . ' vragen.';
    } else {
        foreach ($vragen as $i => $v) {
            $k = "vragen.$i";
            $vraag = is_array($v) ? lq_tekst($v['vraag'] ?? null, false) : null;
            $opties = is_array($v) ? ($v['opties'] ?? null) : null;
            $goed = is_array($v) ? ($v['goed'] ?? null) : null;
            if ($vraag === null || $vraag === '' || mb_strlen($vraag) > 300) {
                $f["$k.vraag"] = 'Vul vraag ' . ($i + 1) . ' in, hooguit 300 tekens.';
            }
            $o_schoon = [];
            if (!is_array($opties) || !array_is_list($opties) || count($opties) < LQ_MIN_OPTIES || count($opties) > LQ_MAX_OPTIES) {
                $f["$k.opties"] = 'Geef bij vraag ' . ($i + 1) . ' twee tot vier antwoorden.';
            } else {
                foreach ($opties as $j => $o) {
                    $o = lq_tekst($o, false);
                    if ($o === null || $o === '' || mb_strlen($o) > 150) {
                        $f["$k.opties.$j"] = 'Antwoord ' . chr(65 + $j) . ' bij vraag ' . ($i + 1) . ' is leeg of langer dan 150 tekens.';
                    }
                    $o_schoon[] = (string)$o;
                }
                if (!is_int($goed) || $goed < 0 || $goed >= count($opties)) {
                    $f["$k.goed"] = 'Kies bij vraag ' . ($i + 1) . ' welk antwoord goed is.';
                }
            }
            $schoon[] = ['vraag' => (string)$vraag, 'opties' => $o_schoon, 'goed' => is_int($goed) ? $goed : 0];
        }
    }
    return [['uid' => $uid, 'vak' => (string)$vak, 'titel' => (string)$titel, 'datum' => (string)$datum, 'vragen' => $schoon], $f];
}

/** Zelfde aantal vragen en zelfde aantal opties per vraag? Anders schuiven bestaande antwoorden mee. */
function lq_zelfde_vorm(array $oud, array $nieuw): bool
{
    if (count($oud) !== count($nieuw)) {
        return false;
    }
    foreach ($oud as $i => $v) {
        if (count($v['opties']) !== count($nieuw[$i]['opties'])) {
            return false;
        }
    }
    return true;
}

switch ($actie) {
    case 'opslaan':
        [$les, $fouten] = lq_les_uit_verzoek($in['les'] ?? null);
        if ($fouten) {
            ap_fout(422, 'De les is niet opgeslagen: ' . implode(' ', $fouten), 'ongeldig', ['velden' => $fouten]);
        }
        $json = json_encode($les['vragen'], JSON_UNESCAPED_UNICODE);
        $oud = lq_les_op_uid($les['uid']);
        if ($oud) {
            if (!lq_zelfde_vorm(lq_vragen($oud), $les['vragen']) && lq_aantal_antwoorden($oud) > 0) {
                ap_fout(409, 'Er zijn al antwoorden bij deze les. Het aantal vragen of antwoorden kan pas veranderen als je die eerst wist.',
                        'antwoorden_bestaan');
            }
            $pdo->prepare('UPDATE lq_les SET vak = ?, titel = ?, datum = ?, vragen = ? WHERE id = ?')
                ->execute([$les['vak'], $les['titel'], $les['datum'], $json, $oud['id']]);
        } else {
            $gelukt = false;
            for ($i = 0; $i < 5 && !$gelukt; $i++) {
                try {
                    $pdo->prepare('INSERT INTO lq_les (uid, code, scherm, vak, titel, datum, vragen, open_tot, aangemaakt)
                                   VALUES (?, ?, ?, ?, ?, ?, ?, NULL, ?)')
                        ->execute([$les['uid'], lq_willekeurig(6), lq_willekeurig(32, LQ_SCHERM_ALFABET),
                                   $les['vak'], $les['titel'], $les['datum'], $json, ap_nu()]);
                    $gelukt = true;
                } catch (PDOException $e) {
                    if (lq_les_op_uid($les['uid'])) {
                        // tegelijk door een tweede verzoek aangemaakt: dan bijwerken
                        $pdo->prepare('UPDATE lq_les SET vak = ?, titel = ?, datum = ?, vragen = ? WHERE uid = ?')
                            ->execute([$les['vak'], $les['titel'], $les['datum'], $json, $les['uid']]);
                        $gelukt = true;
                    }
                    // anders bestond de code al: nog een keer
                }
            }
            if (!$gelukt) {
                ap_fout(500, 'Aanmaken lukte niet. Probeer het opnieuw.', 'server');
            }
        }
        ap_json(['ok' => true, 'les' => lq_stand(lq_les_op_uid($les['uid']))]);

    case 'open':
        $les = lq_bestaande_les($in['uid'] ?? null);
        $max = max(1, (int)ap_config()['open_uren']) * 60;
        $minuten = $in['minuten'] ?? $max;
        if (!is_int($minuten) || $minuten < 1) {
            ap_fout(400, 'minuten moet een geheel getal van minstens 1 zijn.', 'verzoek');
        }
        $minuten = min($minuten, $max);
        $pdo->prepare('UPDATE lq_les SET open_tot = ? WHERE id = ?')->execute([ap_nu($minuten * 60), $les['id']]);
        lq_meld_actief();
        ap_json(['ok' => true, 'les' => lq_stand(lq_les_op_uid($les['uid']))]);

    case 'sluit':
        $les = lq_bestaande_les($in['uid'] ?? null);
        $pdo->prepare('UPDATE lq_les SET open_tot = NULL WHERE id = ?')->execute([$les['id']]);
        lq_meld_actief();
        ap_json(['ok' => true, 'les' => lq_stand(lq_les_op_uid($les['uid']))]);

    case 'wis_antwoorden':
        $les = lq_bestaande_les($in['uid'] ?? null);
        $pdo->beginTransaction();
        $pdo->prepare('DELETE FROM lq_antwoord WHERE les_id = ?')->execute([$les['id']]);
        pv_wis_groep('lesquiz', lq_groep($les));
        $pdo->commit();
        ap_json(['ok' => true, 'les' => lq_stand($les)]);

    case 'verwijder':
        $les = lq_les_op_uid(lq_geldige_uid($in['uid'] ?? null));
        if (!$les) {
            ap_json(['ok' => true, 'verwijderd' => false]);
        }
        $pdo->beginTransaction();
        $pdo->prepare('DELETE FROM lq_antwoord WHERE les_id = ?')->execute([$les['id']]);
        pv_wis_groep('lesquiz', lq_groep($les));
        $pdo->prepare('DELETE FROM lq_les WHERE id = ?')->execute([$les['id']]);
        $pdo->commit();
        lq_meld_actief();
        ap_json(['ok' => true, 'verwijderd' => true]);
}
ap_fout(400, 'Onbekende actie. Kies opslaan, open, sluit, wis_antwoorden of verwijder.', 'verzoek');
