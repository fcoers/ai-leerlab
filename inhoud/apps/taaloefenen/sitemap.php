<?php
/**
 * Sitemap van taaloefenen (klus 952): start, openbare thema's en de grammatica. robots.txt verwijst ernaar.
 * Zolang TO_INDEXEREN false is, is hij leeg. Privé-thema's staan er nooit in.
 */
define('TAALOEFENEN', true);
require __DIR__ . '/lib/kern.php';

$regels = [];
if (TO_INDEXEREN) {
    try {
        $adres = 'https://ai-leerlab.nl';
        $regels[] = [$adres . '/apps/taaloefenen/', null];
        foreach (to_openbare_themas() as $t) {
            $regels[] = [$adres . to_pad($t), (int)$t['bijgewerkt']];
        }
        foreach (array_keys(TO_TALEN) as $taal) {
            $g = to_grammatica($taal);
            if (!$g) {
                continue;
            }
            $regels[] = [$adres . to_grammatica_pad($taal), $g['bijgewerkt']];
            foreach ($g['onderdelen'] as $o) {
                $regels[] = [$adres . to_grammatica_pad($taal, $o['slug']), $g['bijgewerkt']];
            }
        }
    } catch (Throwable $e) {
        error_log('taaloefenen: ' . $e->getMessage());
    }
}
header('Content-Type: application/xml; charset=utf-8');
header('Cache-Control: public, max-age=3600');
if (!TO_INDEXEREN) {
    header('X-Robots-Tag: noindex');
}
echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n" . '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
foreach ($regels as [$loc, $tijd]) {
    echo '  <url><loc>' . htmlspecialchars($loc, ENT_XML1) . '</loc>' . ($tijd ? '<lastmod>' . gmdate('Y-m-d', $tijd) . '</lastmod>' : '') . "</url>\n";
}
echo "</urlset>\n";
