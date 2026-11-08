<?php
/**
 * De reiziger en zijn spullen (klus 771, ontwerp Bram). Stappen komen uit overhoren.
 * Alles staat alleen in de browser (localStorage); deze pagina is het kader, taaloefenen.js vult hem.
 * Persoonlijk en zonder eigen inhoud, dus altijd noindex en geen canonical.
 */
define('TAALOEFENEN', true);
require __DIR__ . '/lib/kern.php';
require __DIR__ . '/lib/pagina.php';

to_kop(['titel' => 'Je reiziger · Taaloefenen · AI-leerlab', 'omschrijving' => TO_OMSCHRIJVING, 'pad' => '/apps/taaloefenen/reiziger/',
        'indexeren' => false, 'prive' => true, 'klasse' => 'to-reiziger', 'data' => ['scherm' => 'reiziger']]);
?>
    <a class="to-terug" href="/apps/taaloefenen/">Taaloefenen</a>
    <p class="label">Je reiziger</p>
    <h1 data-reis-kop>Je reiziger</h1>
    <div class="to-podium" data-podium></div>
    <h2>Je spullen</h2>
    <ul class="to-kast" data-kast></ul>
    <p class="to-hint">Tik om iets aan of uit te doen. Wat je hebt verdiend, blijft van jou.</p>
    <p class="to-voetnoot">Je reiziger staat alleen op dit apparaat, in deze browser.</p>
<?php
to_voet();
