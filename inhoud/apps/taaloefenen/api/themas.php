<?php
/**
 * Thema's beheren vanaf de Mac (koppelvlak taaloefenen, hoofdstuk 4 tot 6). Header X-Postvak-Sleutel, dezelfde
 * sleutel als het postvak en de lesquiz.
 * GET                                  ->  alle thema's met hun stand
 * POST {actie: opslaan, thema: {...}}  ->  nieuw of vervangen op uid
 * POST {actie: verwijder, uid}
 * POST {actie: nieuwe_code, uid}       ->  nieuwe code, thema wordt privé
 */
define('TAALOEFENEN', true);
require dirname(__DIR__) . '/lib/kern.php';

$methode = $_SERVER['REQUEST_METHOD'] ?? '';
if ($methode !== 'GET' && $methode !== 'POST') {
    ap_fout(405, 'Alleen GET of POST.', 'methode');
}
pv_controleer_sleutel();
$pdo = to_db();

if ($methode === 'GET') {
    $themas = $pdo->query('SELECT * FROM to_thema ORDER BY taal, volgorde, naam')->fetchAll();
    ap_json(['ok' => true, 'themas' => array_map('to_stand', $themas)]);
}

$in = ap_lees_json(1024 * 1024);
$actie = $in['actie'] ?? null;
if (!is_string($actie)) {
    ap_fout(400, 'Het veld actie ontbreekt.', 'verzoek');
}

function to_geldige_uid($uid): string
{
    if (!is_string($uid) || !preg_match('/^[A-Za-z0-9_-]{1,64}$/', $uid)) {
        ap_fout(400, 'Het veld uid ontbreekt of klopt niet (letters, cijfers, _ en -, hooguit 64 tekens).', 'verzoek');
    }
    return $uid;
}

/** Een nieuwe, nog niet gebruikte code. */
function to_nieuwe_code(PDO $pdo): string
{
    $st = $pdo->prepare('SELECT 1 FROM to_thema WHERE code = ?');
    do {
        $code = to_code();
        $st->execute([$code]);
    } while ($st->fetchColumn());
    return $code;
}

switch ($actie) {
    case 'opslaan':
        [$t, $fouten] = to_thema_uit_verzoek($in['thema'] ?? null);
        if ($fouten) {
            ap_fout(422, 'Het thema is niet opgeslagen: ' . implode(' ', array_slice($fouten, 0, 5)) .
                    (count($fouten) > 5 ? ' (en nog ' . (count($fouten) - 5) . ')' : ''), 'ongeldig', ['velden' => $fouten]);
        }
        $pdo->beginTransaction();
        $oud = to_thema_op_uid($t['uid']);
        $code = $oud['code'] ?? null;
        if ($t['zichtbaarheid'] === 'prive' && !$code) {
            $code = to_nieuwe_code($pdo);
        }
        $slug = to_vrije_slug($t['taal'], $t['naam'], $t['uid']);
        $inhoud = json_encode($t['inhoud'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        $aantallen = json_encode($t['aantallen']);
        $waarden = [$t['taal'], $t['naam'], $slug, $t['zichtbaarheid'], $code, $t['volgorde'], $inhoud, $aantallen, time()];
        if ($oud) {
            $pdo->prepare('UPDATE to_thema SET taal = ?, naam = ?, slug = ?, zichtbaarheid = ?, code = ?, volgorde = ?,
                           inhoud = ?, aantallen = ?, bijgewerkt = ? WHERE uid = ?')
                ->execute([...$waarden, $t['uid']]);
        } else {
            $pdo->prepare('INSERT INTO to_thema (taal, naam, slug, zichtbaarheid, code, volgorde, inhoud, aantallen, bijgewerkt, uid)
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
                ->execute([...$waarden, $t['uid']]);
        }
        $pdo->commit();
        ap_json(['ok' => true, 'thema' => to_stand(to_thema_op_uid($t['uid']))]);

    case 'verwijder':
        $uid = to_geldige_uid($in['uid'] ?? null);
        $st = $pdo->prepare('DELETE FROM to_thema WHERE uid = ?');
        $st->execute([$uid]);
        ap_json(['ok' => true, 'verwijderd' => $st->rowCount() > 0]);

    case 'nieuwe_code':
        $uid = to_geldige_uid($in['uid'] ?? null);
        if (!to_thema_op_uid($uid)) {
            ap_fout(404, 'Dit thema staat niet op de site. Sla het eerst op.', 'onbekend_thema');
        }
        $pdo->prepare("UPDATE to_thema SET code = ?, zichtbaarheid = 'prive', bijgewerkt = ? WHERE uid = ?")
            ->execute([to_nieuwe_code($pdo), time(), $uid]);
        ap_json(['ok' => true, 'thema' => to_stand(to_thema_op_uid($uid))]);
}
ap_fout(400, 'Onbekende actie. Kies opslaan, verwijder of nieuwe_code.', 'verzoek');
