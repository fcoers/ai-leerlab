/* Statistieken op ai-leerlab.nl: Google Analytics, alleen na toestemming.
   Google Consent Mode v2: alles staat standaard op denied. Zolang er geen "ja" is, laadt gtag.js niet
   en gaat er geen enkel verzoek naar Google. De keuze staat in localStorage onder SLEUTEL.
   Zonder JavaScript is er geen melding en ook geen meting. */
(function () {
  'use strict';

  var tag = document.currentScript;
  var ID = tag && tag.getAttribute('data-meet-id');
  if (!ID) return;
  var SLEUTEL = 'ai-leerlab:statistieken';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    analytics_storage: 'denied', functionality_storage: 'denied', personalization_storage: 'denied',
    security_storage: 'granted'
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', false);

  function lees() { try { return window.localStorage.getItem(SLEUTEL); } catch (e) { return null; } }
  function bewaar(v) { try { window.localStorage.setItem(SLEUTEL, v); } catch (e) { /* geen geheugen: volgende keer opnieuw vragen */ } }

  var geladen = false;
  function meet() {
    window['ga-disable-' + ID] = false;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    if (geladen) return;
    geladen = true;
    gtag('js', new Date());
    gtag('config', ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
    document.head.appendChild(s);
  }

  function stop() {
    window['ga-disable-' + ID] = true;
    gtag('consent', 'update', { analytics_storage: 'denied' });
    // Cookies van Google Analytics opruimen (_ga, _ga_<id>), op elk domeinniveau waar ze kunnen staan.
    var delen = window.location.hostname.split('.');
    var domeinen = [''];
    for (var i = 0; i < delen.length - 1; i++) domeinen.push('; domain=.' + delen.slice(i).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var naam = c.split('=')[0].trim();
      if (naam.indexOf('_ga') !== 0 && naam.indexOf('_gid') !== 0 && naam.indexOf('_gat') !== 0) return;
      domeinen.forEach(function (d) {
        document.cookie = naam + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
      });
    });
  }

  var melding = null;
  var terugFocus = null;

  function sluit() {
    if (!melding) return;
    // Weggaan is ook een beweging: kort vervagen en zakken (site.css, .gaat), dan pas uit de pagina.
    // Bij minder beweging of zonder animaties meteen weg.
    var weg = melding;
    melding = null;
    var rustig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rustig || !('onanimationend' in weg)) { weg.remove(); }
    else {
      weg.classList.add('gaat');
      weg.setAttribute('aria-hidden', 'true');
      weg.addEventListener('animationend', function () { weg.remove(); });
      setTimeout(function () { weg.remove(); }, 400);   // vangnet als de animatie niet afloopt
    }
    if (terugFocus) { terugFocus.focus(); terugFocus = null; }
  }

  function kies(ja) {
    bewaar(ja ? 'ja' : 'nee');
    if (ja) meet(); else stop();
    sluit();
  }

  function toonMelding(metFocus) {
    if (melding) { melding.querySelector('button').focus(); return; }
    melding = document.createElement('section');
    melding.className = 'toestemming';
    melding.setAttribute('aria-labelledby', 'toestemming-kop');
    melding.innerHTML =
      '<div class="toestemming-binnen">' +
      '<h2 id="toestemming-kop" tabindex="-1">Mag ik meten hoeveel mensen hier komen?</h2>' +
      '<p>Met je toestemming telt Google Analytics de bezoeken. Daarvoor zet het cookies en gaan er gegevens naar Google. ' +
      '<a href="/over/#colofon">Meer hierover</a></p>' +
      '<div class="knoppen">' +
      '<button type="button" class="knop knop-secundair" data-keuze="ja">Accepteren</button>' +
      '<button type="button" class="knop knop-secundair" data-keuze="nee">Weigeren</button>' +
      '</div></div>';
    melding.addEventListener('click', function (e) {
      var knop = e.target.closest('[data-keuze]');
      if (knop) kies(knop.getAttribute('data-keuze') === 'ja');
    });
    var skip = document.querySelector('.skiplink');
    if (skip && skip.nextSibling) skip.parentNode.insertBefore(melding, skip.nextSibling);
    else document.body.insertBefore(melding, document.body.firstChild);
    if (metFocus) melding.querySelector('h2').focus();
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('[data-cookie-instellingen]');
    if (!link) return;
    e.preventDefault();
    terugFocus = link;
    toonMelding(true);
  });

  var keuze = lees();
  if (keuze === 'ja') meet();
  else if (keuze !== 'nee') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { toonMelding(false); });
    else toonMelding(false);
  }
})();
