<?php
/**
 * Het paspoort: een stempel voor elk thema dat je helemaal kent (klus 771, ontwerp Bram).
 * De stempels staan alleen in de browser (localStorage); deze pagina is het kader, taaloefenen.js vult hem.
 * Persoonlijk en zonder eigen inhoud, dus altijd noindex en geen canonical.
 */
define('TAALOEFENEN', true);
require __DIR__ . '/lib/kern.php';
require __DIR__ . '/lib/pagina.php';

to_kop(['titel' => 'Je paspoort · Taaloefenen · AI-leerlab', 'omschrijving' => TO_OMSCHRIJVING, 'pad' => '/apps/taaloefenen/paspoort/',
        'indexeren' => false, 'prive' => true, 'klasse' => 'to-paspoort', 'data' => ['scherm' => 'paspoort']]);
?>
    <a class="to-terug" href="/apps/taaloefenen/">Taaloefenen</a>
    <p class="label">Je paspoort</p>
    <h1 data-pas-kop>Je paspoort</h1>
    <div data-pas></div>
    <p class="to-voetnoot">Een stempel blijft staan, ook als je later iets vergeet. Je paspoort staat alleen op dit apparaat.</p>
<?php
to_voet();
