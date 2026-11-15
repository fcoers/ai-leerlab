/* Taaloefenen: luisterknop (klus 952, ontwerp Bram). Spreekt Duitse of Franse tekst uit met de stem van het apparaat
   (Web Speech API). Geen stem voor de taal: geen knoppen. Spraak start nooit vanzelf, alleen na een druk op de knop.
   window.TOSpraak:
     klaar(lang)            Promise met true/false: is er een stem voor 'de' of 'fr'. Wacht op voiceschanged, hooguit 1 s.
     knop(tekst, lang, opt) een nieuwe knop; tekst mag een functie zijn. opt.houdFocus: de focus blijft in het veld.
     zetAan(root)           zet de knoppen uit de HTML (data-spreek) aan als er een stem is; geeft de Promise van klaar.
     stop()                 stopt wat er gesproken wordt.
     schoon(tekst)          wat er uitgesproken wordt: zonder (…), van varianten met / de eerste. */
(function () {
  'use strict';
  var ss = window.speechSynthesis;
  var Utt = window.SpeechSynthesisUtterance;
  var LANG = { de: 'de-DE', fr: 'fr-FR' };
  var stemmen = {};          // lang -> SpeechSynthesisVoice of null
  var wacht = null;
  var huidig = null;         // { knop, beurt }
  var beurt = 0;
  var rustig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ICOON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/>' +
    '<path d="M15.5 9.2a4 4 0 0 1 0 5.6"/><path d="M18.2 6.6a7.6 7.6 0 0 1 0 10.8"/></svg>';

  function kies(lang) {
    var doel = LANG[lang];
    var alle = ss.getVoices() || [];
    function norm(v) { return String(v.lang || '').replace('_', '-').toLowerCase(); }
    var exact = alle.filter(function (v) { return norm(v) === doel.toLowerCase(); });
    var lokaal = exact.filter(function (v) { return v.localService; });
    if (lokaal.length) return lokaal[0];
    if (exact.length) return exact[0];
    var ruim = alle.filter(function (v) { return norm(v).indexOf(lang) === 0; });
    return ruim.filter(function (v) { return v.localService; })[0] || ruim[0] || null;
  }

  /** Wacht tot de stemmen bekend zijn: voiceschanged, of hooguit 1 s. Daarna beslist hij één keer. */
  function laadStemmen() {
    if (wacht) return wacht;
    wacht = new Promise(function (klaar) {
      if (!ss || !Utt) { klaar(); return; }
      var gedaan = false;
      function af() {
        if (gedaan) return;
        gedaan = true;
        ss.removeEventListener && ss.removeEventListener('voiceschanged', af);
        klaar();
      }
      if ((ss.getVoices() || []).length) { af(); return; }
      if (ss.addEventListener) ss.addEventListener('voiceschanged', af);
      setTimeout(af, 1000);
    }).then(function () {
      if (!ss || !Utt) { stemmen = { de: null, fr: null }; return; }
      stemmen = { de: kies('de'), fr: kies('fr') };
    });
    return wacht;
  }
  function klaar(lang) { return laadStemmen().then(function () { return !!stemmen[lang]; }); }
  function heeft(lang) { return !!stemmen[lang]; }

  /** Getoonde vorm zonder wat tussen haakjes staat; bij varianten met / de eerste. */
  function schoon(t) {
    t = String(t || '').replace(/\([^()]*\)/g, ' ');
    t = t.split(/\s+\/\s+|\s*;\s*/)[0];                       // "der Bahnhof / die Bahnhöfe"
    t = t.replace(/(\S+)\/\S+/g, function (m, a) { return a.replace(/\/.*$/, ''); });   // er/sie/es
    return t.replace(/\s+/g, ' ').replace(/\s+([.,!?;:])/g, '$1').trim();
  }

  /* Status van het spreken (ronde 2, na Kurts keuring in echte Safari). Elke druk is een nieuwe beurt; events van
     een oude beurt tellen niet. We zetten niet alle regels tegelijk in de wachtrij, maar spreken ze één voor één:
     Safari geeft na cancel() niet voor elke uiting in de wachtrij een end-event, en zo staat er nooit meer dan één in.
     Vangnet: een wachter kijkt elke 250 ms naar speechSynthesis.speaking/pending; zwijgt de stem al een halve
     seconde zonder end-event, dan telt de regel als klaar. Plus een harde tijdgrens per regel. */
  var WACHT_NA_CANCEL = 60;  // ms: direct speak() na cancel() slikt in Safari soms de eerste uiting in
  var wachter = null;
  var vast = [];             // de uiting die nu speelt; zonder verwijzing ruimt Safari hem soms op en komt er geen onend

  function wachterUit() { if (wachter) { clearInterval(wachter); wachter = null; } }

  function stop() {
    beurt++;
    wachterUit();
    vast = [];
    if (huidig) { huidig.knop.classList.remove('speelt'); huidig = null; }
    var bezig = false;
    if (ss) {
      try { bezig = ss.speaking || ss.pending; } catch (e) { bezig = true; }
      // Alleen afbreken als er iets loopt: cancel() vlak voor speak() kan in Safari de eerste uiting inslikken.
      if (bezig) try { ss.cancel(); } catch (e) {}
    }
    return bezig;
  }

  /** Spreekt één of meer zinnen na elkaar uit; de knop draagt 'speelt' tot de laatste klaar is. */
  function spreek(knop, regels, lang) {
    var wasBezig = stop();
    var stem = stemmen[lang];
    regels = regels.map(schoon).filter(Boolean);
    if (!stem || !regels.length) return;
    var mijn = ++beurt;
    huidig = { knop: knop, beurt: mijn };
    knop.classList.add('speelt');
    var i = 0;

    function af() {
      if (mijn !== beurt) return;
      wachterUit();
      vast = [];
      knop.classList.remove('speelt');
      huidig = null;
    }

    function zeg() {
      if (mijn !== beurt) return;
      if (i >= regels.length) { af(); return; }
      var r = regels[i];
      var u = new Utt(r);
      var klaar = false;
      var begon = Date.now();
      var stil = 0;
      var grens = 4000 + r.length * 180;     // ruim: 0,9 keer normaal tempo, plus opstarttijd van de stem
      u.lang = LANG[lang];
      u.voice = stem;
      u.rate = 0.9;
      function volgende() {
        if (klaar || mijn !== beurt) return;
        klaar = true;
        wachterUit();
        i++;
        zeg();
      }
      u.onend = volgende;
      u.onerror = function () { if (mijn === beurt) { i = regels.length; volgende(); } };
      vast = [u];
      try { ss.speak(u); } catch (e) { af(); return; }
      wachterUit();
      wachter = setInterval(function () {
        if (mijn !== beurt || klaar) { wachterUit(); return; }
        var t = Date.now() - begon;
        var praat = true;
        try { praat = ss.speaking || ss.pending; } catch (e) {}
        stil = praat ? 0 : stil + 1;
        if (t > grens) {                     // hangt: afbreken, en de volgende regel na een korte pauze
          klaar = true;
          wachterUit();
          try { ss.cancel(); } catch (e) {}
          i++;
          setTimeout(zeg, WACHT_NA_CANCEL);
        } else if (t > 1000 && stil >= 2) {
          volgende();                        // stem zwijgt, end-event bleef uit
        }
      }, 250);
    }

    if (wasBezig) setTimeout(zeg, WACHT_NA_CANCEL); else zeg();
  }

  function regelsVan(tekst) {
    var t = typeof tekst === 'function' ? tekst() : tekst;
    return (Array.isArray(t) ? t : String(t || '').split('\n'));
  }

  /** Koppelt een knop. Met houdFocus (overhoren) haalt de knop de focus niet uit het veld, zodat het toetsenbord van
      de iPhone open blijft: zelfde patroon als de tekenrij. Spreken gebeurt op touchend (daar mag iOS geluid starten),
      mousedown of een klik vanaf het toetsenbord (detail 0). */
  function koppel(knop, tekst, lang, houdFocus) {
    function doe() { spreek(knop, regelsVan(tekst), lang); }
    if (!houdFocus) { knop.addEventListener('click', doe); return; }
    var aanraking = false;
    knop.addEventListener('touchstart', function (e) { e.preventDefault(); aanraking = true; }, { passive: false });
    knop.addEventListener('touchend', function (e) {
      e.preventDefault();
      if (!aanraking) return;
      aanraking = false;
      var t = e.changedTouches && e.changedTouches[0];
      var onder = t && document.elementFromPoint(t.clientX, t.clientY);
      if (!t || (onder && knop.contains(onder))) doe();
    }, { passive: false });
    knop.addEventListener('touchcancel', function () { aanraking = false; });
    knop.addEventListener('mousedown', function (e) { e.preventDefault(); if (e.button === 0) doe(); });
    knop.addEventListener('click', function (e) { if (e.detail === 0) doe(); });
  }

  function knop(tekst, lang, opt) {
    opt = opt || {};
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'to-luister' + (opt.klasse ? ' ' + opt.klasse : '');
    var label = opt.label || schoon(regelsVan(tekst).join(', '));
    b.setAttribute('aria-label', 'Luister: ' + label);
    if (opt.houdFocus) b.setAttribute('tabindex', '0');
    b.innerHTML = ICOON;
    koppel(b, tekst, lang, !!opt.houdFocus);
    return b;
  }

  /** Knoppen uit de HTML (grammaticapagina) aanzetten. */
  function zetAan(root) {
    return laadStemmen().then(function () {
      Array.prototype.forEach.call((root || document).querySelectorAll('button[data-spreek]'), function (b) {
        var lang = b.getAttribute('data-spreek-taal');
        if (!heeft(lang) || b.getAttribute('data-gekoppeld')) return;
        b.setAttribute('data-gekoppeld', '1');
        koppel(b, b.getAttribute('data-spreek'), lang, false);
        b.hidden = false;
      });
    });
  }

  // Weg van de pagina of tabblad naar de achtergrond: niet doorpraten.
  window.addEventListener('pagehide', stop);
  document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); });

  window.TOSpraak = { klaar: klaar, heeft: heeft, knop: knop, zetAan: zetAan, stop: stop, schoon: schoon, rustig: rustig };
})();
