<?php
/**
 * Taaloefenen: kop en voet van de pagina's. De pagina's zelf zijn index.php (start) en thema.php (een thema).
 * Vindbaarheid: title, description, canonical, Open Graph, Twitter, JSON-LD, favicon. Zolang TO_INDEXEREN false is
 * staat alles op noindex; een privé-thema altijd. Geen meetscripts, geen cookiemelding (gebruikers zijn minderjarig).
 */
if (!defined('TAALOEFENEN')) {
    http_response_code(404);
    exit;
}

const TO_SITE = 'https://ai-leerlab.nl';
const TO_TITEL = 'Franse en Duitse woordjes oefenen en overhoren · AI-leerlab';
const TO_OMSCHRIJVING = 'Oefen Franse en Duitse woordjes, zinnen en werkwoorden. Je typt het antwoord, de app kijkt na en laat terugkomen wat je nog lastig vindt. Gratis.';
const TO_DEELBEELD = TO_SITE . '/assets/img/deel/taaloefenen.png';

/* Titels van de grammaticapagina's (klus 952, gekozen door Frits). Hier aanpassen, nergens anders.
   %1$s is de titel van het onderdeel, %2$s de taal (Duits, Frans). to_gram_titel() kiest per onderdeel de eerste
   vorm die past: nooit twee keer "in het", en hooguit TO_GRAM_TITEL_MAX tekens (Google kort rond de 60 af). */
const TO_GRAM_TITEL_ONDERDEEL = '%1$s in het %2$s: uitleg en rijtjes · AI-leerlab';
const TO_GRAM_TITEL_KORT = '%1$s in het %2$s · AI-leerlab';
const TO_GRAM_TITEL_MET_IN_HET = '%1$s (%2$s) · AI-leerlab';   // onderdeel zegt zelf al "in het"
const TO_GRAM_TITEL_MAX = 65;
const TO_GRAM_TITEL_OVERZICHT = ['duits' => 'Duitse grammatica kort uitgelegd · AI-leerlab',
                                 'frans' => 'Franse grammatica kort uitgelegd · AI-leerlab'];
/* Description (Brams variant a): de korte regel van het onderdeel, dan wat er op de pagina staat. */
const TO_GRAM_OMSCHRIJVING_ONDERDEEL = '%1$s. Met rijtjes, voorbeelden om te beluisteren%2$s. Gratis.';
const TO_GRAM_OMSCHRIJVING_OVERZICHT = '%1$s grammatica kort uitgelegd: %2$s, met rijtjes, voorbeelden om te beluisteren en oefenen. Gratis.';
/* Zonder stem voor de taal: geen luisterknoppen, alleen deze regel op de themapagina (klus 952, Bram). */
const TO_GEEN_STEM = 'Je apparaat heeft geen %s stem, dus voorlezen staat uit. Je kunt een stem toevoegen in de instellingen van je apparaat.';

/** Titel van een grammaticaonderdeel; zie TO_GRAM_TITEL_* hierboven. */
function to_gram_titel(string $onderdeel, string $taal): string
{
    if (preg_match('/\bin het\b/iu', $onderdeel)) {
        return sprintf(TO_GRAM_TITEL_MET_IN_HET, $onderdeel, $taal);
    }
    $t = sprintf(TO_GRAM_TITEL_ONDERDEEL, $onderdeel, $taal);
    return mb_strlen($t) <= TO_GRAM_TITEL_MAX ? $t : sprintf(TO_GRAM_TITEL_KORT, $onderdeel, $taal);
}

/**
 * $p: titel, omschrijving, pad (voor canonical), indexeren (bool), schema (array of null), klasse (body), data (array).
 */
function to_kop(array $p): void
{
    $index = $p['indexeren'] && TO_INDEXEREN;
    if (!headers_sent()) {
        header('Content-Type: text/html; charset=utf-8');
        header('X-Content-Type-Options: nosniff');
        header('Referrer-Policy: same-origin');   // een privé-code lekt zo niet naar een andere site
        header('Cache-Control: ' . ($p['prive'] ?? false ? 'private, no-store' : 'no-cache'));
        if (!$index) {
            header('X-Robots-Tag: noindex, nofollow');
        }
    }
    $url = TO_SITE . $p['pad'];
    $t = to_esc($p['titel']);
    $o = to_esc($p['omschrijving']);
    $data = '';
    foreach (($p['data'] ?? []) as $k => $v) {
        $data .= ' data-' . $k . '="' . to_esc($v) . '"';
    }
    $v = '202611231540';
    ?><!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<?php if (!$index): ?>
  <meta name="robots" content="noindex, nofollow">
<?php endif; ?>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; form-action 'self'">
  <meta name="referrer" content="same-origin">
  <title><?= $t ?></title>
  <meta name="description" content="<?= $o ?>">
<?php if (empty($p['prive'])): ?>
  <link rel="canonical" href="<?= to_esc($url) ?>">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="nl_NL">
  <meta property="og:site_name" content="AI-leerlab">
  <meta property="og:title" content="<?= to_esc($p['ogtitel'] ?? $p['titel']) ?>">
  <meta property="og:description" content="<?= $o ?>">
  <meta property="og:url" content="<?= to_esc($url) ?>">
  <meta property="og:image" content="<?= TO_DEELBEELD ?>">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Frans en Duits oefenen: een kaartje met de keuken en la cuisine">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= to_esc($p['ogtitel'] ?? $p['titel']) ?>">
  <meta name="twitter:description" content="<?= $o ?>">
  <meta name="twitter:image" content="<?= TO_DEELBEELD ?>">
<?php endif; ?>
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon-32.png" sizes="32x32">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#18201C" media="(prefers-color-scheme: dark)">
  <link rel="preload" href="/assets/fonts/roboto-flex-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/site.css?v=<?= $v ?>">
  <link rel="stylesheet" href="/apps/taaloefenen/assets/taaloefenen.css?v=<?= $v ?>">
  <script src="/apps/taaloefenen/assets/nakijken.js?v=<?= $v ?>" defer></script>
  <script src="/apps/taaloefenen/assets/spraak.js?v=<?= $v ?>" defer></script>
  <script src="/apps/taaloefenen/assets/reiziger.js?v=<?= $v ?>" defer></script>
  <script src="/apps/taaloefenen/assets/taaloefenen.js?v=<?= $v ?>" defer></script>
<?php if (!empty($p['schema'])): ?>
  <script type="application/ld+json"><?= json_encode($p['schema'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) ?></script>
<?php endif; ?>
</head>
<body class="to <?= to_esc($p['klasse'] ?? '') ?>"<?= $data ?>>
  <a class="skiplink" href="#inhoud">Naar de inhoud</a>
  <div class="to-pagina" data-pagina>
  <header class="to-kop">
    <div class="to-kolom">
      <a class="merk" href="/" aria-label="AI-leerlab, naar de beginpagina">
        <picture><source media="(prefers-color-scheme: dark)" srcset="/assets/img/logo-op-donker.svg"><img class="logo" src="/assets/img/logo.svg" width="211" height="52" alt=""></picture>
      </a>
      <p class="label">Taaloefenen</p>
    </div>
  </header>
  <main id="inhoud" class="to-kolom" tabindex="-1">
<?php if (($p['data']['scherm'] ?? '') !== 'grammatica'): ?>
    <noscript><p class="to-melding">Deze pagina heeft JavaScript nodig om te oefenen. Zet JavaScript aan in je browser.</p></noscript>
<?php endif; ?>
<?php
}

function to_voet(): void
{
    ?>
  </main>
  </div>
  <div class="to-sessie" data-sessie hidden></div>
  <p class="to-sr" aria-live="polite" data-meldingen></p>
</body>
</html>
<?php
}

/** Schema.org WebApplication (ontwerp, Vindbaarheid). */
function to_schema(string $naam, string $omschrijving, string $pad): array
{
    return ['@context' => 'https://schema.org', '@type' => 'WebApplication', 'name' => $naam,
            'description' => $omschrijving, 'url' => TO_SITE . $pad, 'applicationCategory' => 'EducationalApplication',
            'operatingSystem' => 'Alle, in de browser', 'inLanguage' => 'nl', 'isAccessibleForFree' => true,
            'educationalLevel' => 'havo 3', 'offers' => ['@type' => 'Offer', 'price' => '0', 'priceCurrency' => 'EUR'],
            'publisher' => ['@type' => 'Organization', 'name' => 'AI-leerlab', 'url' => TO_SITE . '/']];
}

/** Schema.org LearningResource voor een grammaticapagina (klus 952). */
function to_schema_les(string $naam, string $omschrijving, string $pad, string $taal, ?array $onderdeel_van = null): array
{
    $s = ['@context' => 'https://schema.org', '@type' => 'LearningResource', 'name' => $naam,
          'description' => $omschrijving, 'url' => TO_SITE . $pad, 'inLanguage' => 'nl',
          'learningResourceType' => 'uitleg', 'educationalLevel' => 'havo 3', 'isAccessibleForFree' => true,
          'about' => ['@type' => 'Language', 'name' => TO_TALEN[$taal]['naam'], 'alternateName' => TO_TALEN[$taal]['lang']],
          'image' => TO_DEELBEELD,
          'publisher' => ['@type' => 'Organization', 'name' => 'AI-leerlab', 'url' => TO_SITE . '/']];
    if ($onderdeel_van) {
        $s['isPartOf'] = ['@type' => 'LearningResource', 'name' => $onderdeel_van[0], 'url' => TO_SITE . $onderdeel_van[1]];
    }
    return $s;
}

/** Luisterknop (klus 952). Staat verborgen in de HTML; spraak.js zet hem aan als het apparaat een stem voor de taal
    heeft. $tekst: wat hij uitspreekt; meer regels (een rijtje) met een regeleinde ertussen, elk als eigen zin. */
function to_luister(string $tekst, string $taal, string $label = ''): string
{
    $lang = TO_TALEN[$taal]['lang'];
    $label = $label !== '' ? $label : $tekst;
    return '<button type="button" class="to-luister" data-spreek="' . to_esc($tekst) . '" data-spreek-taal="' . $lang .
        '" aria-label="' . to_esc('Luister: ' . $label) . '" hidden>' . TO_LUIDSPREKER . '</button>';
}
const TO_LUIDSPREKER = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6"/><path d="M18.2 6.6a7.6 7.6 0 0 1 0 10.8"/></svg>';

/** Regel onder een thema zonder JavaScript: alleen het aantal; de browser vult de stand in. */
function to_aantal_tekst(array $t): string
{
    $a = to_aantallen($t);
    $n = ($a['woord'] ?? 0) + ($a['zin'] ?? 0) + ($a['vervoeging-zin'] ?? 0) + ($a['vervoeging-kort'] ?? 0);
    return $n === 1 ? '1 item' : "$n items";
}
