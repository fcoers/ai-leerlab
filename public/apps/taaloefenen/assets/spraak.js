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
      // iOS: de lijst kan later komen dan 1 s. Ontbreekt een stem, dan bij een latere voiceschanged opnieuw kiezen.
      if ((!stemmen.de || !stemmen.fr) && ss.addEventListener) {
        ss.addEventListener('voiceschanged', function () {
          var nu = { de: stemmen.de || kies('de'), fr: stemmen.fr || kies('fr') };
          var nieuw = (nu.de && !stemmen.de) || (nu.fr && !stemmen.fr);
          stemmen = nu;
          if (nieuw && laatsteRoot) zetAan(laatsteRoot);
        });
      }
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

  /* Status van het spreken. Elke druk is een nieuwe beurt; events van een oude beurt tellen niet. Regels gaan één voor
     één (de volgende pas na end), zodat er nooit meer dan één uiting in de wachtrij staat.

     iOS (ronde 3, klus 952, live kapot op iPhone/iPad): Safari op iOS laat speak() alleen toe tijdens een gebaar van de
     gebruiker (tik, klik, toets). Een speak() daarbuiten wordt stil genegeerd, zonder event. Is er één keer binnen een
     gebaar gesproken, dan is de pagina ontgrendeld en mogen volgende regels ook vanuit end-events of timers. Daarom:
     - de eerste speak() van elke druk gebeurt altijd synchroon in de handler, ook na een cancel() (geen uitstel meer);
     - bij elk gebaar op de pagina spreken we, tot dat gelukt is, een lege, stille uiting (ontgrendelen);
     - komt er binnen 1,2 s geen start-event, dan een herkansing: na een cancel() eerst met dezelfde stem (macOS-Safari
       slikt dan soms een uiting in), daarna zonder vaste stem, alleen de taal (op iOS speelt een gekozen stem soms
       niet). Lukt het zonder stem wel, dan spreekt de pagina voortaan zonder vaste stem voor die taal;
     - op iOS mag het geluid ook met de stille modus aan (audioSession 'playback') en wordt een pauze opgeheven.
     - ronde 4: direct na een cancel() geeft macOS-Safari de nieuwe uiting soms een end-event zonder start-event (ingeslikt,
       zonder geluid). Een end zonder start telt daarom als ingeslikt: dezelfde regel nog één keer, 120 ms later (zo ver na
       de cancel slikt Safari niet meer in), en pas daarna door. Dat gaat buiten het gebaar en mag dus alleen als de pagina
       al ontgrendeld is (open); anders gewoon door, zoals voorheen.
     Vangnet zoals in ronde 2: een wachter op speechSynthesis.speaking/pending en een harde tijdgrens per regel. */
  var wachter = null;
  var vast = [];             // uitingen die nu lopen; zonder verwijzing ruimt Safari ze soms op en komt er geen onend
  var stemSpeeltNiet = {};  // lang -> true als de gekozen stem niet speelde en alleen de taal wel
  var open = false;          // true zodra er ergens een uiting echt gestart of geëindigd is: de pagina is ontgrendeld

  function wachterUit() { if (wachter) { clearInterval(wachter); wachter = null; } }

  /** Op iOS speelt spraak dan ook met de stille modus aan (Safari 16.4+); elders bestaat dit niet en doet het niets. */
  function geluidAan() {
    try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch (e) {}
  }

  /** Lege, stille uiting binnen een gebaar: ontgrendelt de spraak op iOS. Herhaalt bij elk gebaar tot het gelukt is. */
  function ontgrendel(e) {
    if (open || !ss || !Utt) return;
    var doel = e && e.target;
    if (doel && doel.closest && doel.closest('.to-luister')) return;   // die knop spreekt zelf, synchroon

    var bezig = false;
    try { bezig = ss.speaking || ss.pending; } catch (e) {}
    if (bezig) return;                       // er loopt al iets: dan was er al een gebaar
    try {
      var u = new Utt(' ');
      u.volume = 0;
      u.onstart = u.onend = function () { open = true; };
      vast.push(u);
      ss.speak(u);
    } catch (e) {}
  }
  ['touchend', 'click', 'keydown', 'mousedown'].forEach(function (t) {
    document.addEventListener(t, ontgrendel, true);
  });

  function stop() {
    beurt++;
    wachterUit();
    vast = [];
    if (huidig) { huidig.knop.classList.remove('speelt'); huidig = null; }
    var bezig = false;
    if (ss) {
      try { bezig = ss.speaking || ss.pending; } catch (e) { bezig = true; }
      if (bezig) try { ss.cancel(); } catch (e) {}   // alleen afbreken als er iets loopt
    }
    return bezig;
  }

  /** Spreekt één of meer zinnen na elkaar uit; de knop draagt 'speelt' tot de laatste klaar is.
      Wordt synchroon aangeroepen vanuit de handler van de druk (zie koppel). */
  function spreek(knop, regels, lang) {
    var wasBezig = stop();
    var stem = stemmen[lang];
    regels = regels.map(schoon).filter(Boolean);
    if (!stem || !regels.length) return;
    geluidAan();
    try { if (ss.paused) ss.resume(); } catch (e) {}   // iOS blijft na een onderbreking soms op pauze staan
    var mijn = ++beurt;
    huidig = { knop: knop, beurt: mijn };
    knop.classList.add('speelt');
    var i = 0;
    var nogEensBij = -1;                     // regel die al één keer opnieuw is gezegd na een end zonder start

    function af() {
      if (mijn !== beurt) return;
      wachterUit();
      vast = [];
      knop.classList.remove('speelt');
      huidig = null;
    }

    /** Spreekt regel i. zonderStem: alleen de taal, geen vaste stem. poging: 0 de eerste, daarna herkansingen. */
    function zeg(zonderStem, poging) {
      if (mijn !== beurt) return;
      if (stemSpeeltNiet[lang]) zonderStem = true;
      var herkans = poging >= 2 || (poging === 1 && zonderStem);
      if (i >= regels.length) { af(); return; }
      var r = regels[i];
      var u = new Utt(r);
      var klaar = false, gestart = false;
      var begon = Date.now();
      var stil = 0;
      var grens = 4000 + r.length * 180;     // ruim: 0,9 keer normaal tempo, plus opstarttijd van de stem
      u.lang = LANG[lang];
      if (!zonderStem) u.voice = stem;
      u.rate = 0.9;
      function stopDeze() { klaar = true; wachterUit(); }
      function volgende() {
        if (klaar || mijn !== beurt) return;
        stopDeze();
        i++;
        zeg(zonderStem, 0);
      }
      function herkansing() {                // na cancel eerst dezelfde stem (ingeslikt), daarna zonder vaste stem
        stopDeze();
        zeg(!(poging === 0 && wasBezig && i === 0 && !zonderStem), poging + 1);
      }
      u.onstart = function () {
        gestart = true; open = true;
        if (zonderStem && poging > 0) stemSpeeltNiet[lang] = true;   // zonder stem lukte het wel: rest ook zonder
      };
      u.onend = function () {
        var wasOpen = open;
        open = true;
        if (klaar || mijn !== beurt) return;
        if (!gestart && wasOpen && nogEensBij !== i && r.trim()) {   // ingeslikt: zelfde regel, zelfde stem, één keer
          nogEensBij = i;
          stopDeze();
          setTimeout(function () { zeg(zonderStem, poging + 1); }, 120);
          return;
        }
        volgende();
      };
      u.onerror = function (e) {
        if (mijn !== beurt || klaar) return;
        var w = e && e.error;
        if (w === 'interrupted' || w === 'canceled') return;     // door onszelf afgebroken
        if (!gestart && !herkans) { herkansing(); return; }
        i = regels.length; volgende();
      };
      vast = [u];
      try { ss.speak(u); } catch (e) { af(); return; }
      wachterUit();
      wachter = setInterval(function () {
        if (mijn !== beurt || klaar) { wachterUit(); return; }
        var t = Date.now() - begon;
        var praat = true;
        try { praat = ss.speaking || ss.pending; } catch (e) {}
        stil = praat ? 0 : stil + 1;
        if (!gestart && !herkans && !praat && t > 1200) {
          herkansing();                      // ingeslikt of geweigerd: nog één poging
        } else if (t > grens) {              // hangt: afbreken en door naar de volgende regel
          stopDeze();
          try { ss.cancel(); } catch (e) {}
          i++;
          zeg(zonderStem, 0);
        } else if ((gestart || herkans) && t > 1000 && stil >= 2) {
          volgende();                        // stem zwijgt, end-event bleef uit
        }
      }, 250);
    }

    zeg(false, 0);                           // synchroon: binnen het gebaar van de gebruiker
  }

  function regelsVan(tekst) {
    var t = typeof tekst === 'function' ? tekst() : tekst;
    return (Array.isArray(t) ? t : String(t || '').split('\n'));
  }

  /** Koppelt een knop. Met houdFocus (overhoren) haalt de knop de focus niet uit het veld, zodat het toetsenbord van
      de iPhone open blijft: zelfde patroon als de tekenrij. Op een aanraakscherm spreken we op touchend (een gebaar
      waarin iOS geluid toestaat) als de vinger niet verschoof; geen elementFromPoint meer, want met het toetsenbord
      open klopt dat op iOS niet altijd. Met de muis op mousedown, vanaf het toetsenbord op de klik (detail 0). */
  function koppel(knop, tekst, lang, houdFocus) {
    function doe() { spreek(knop, regelsVan(tekst), lang); }
    if (!houdFocus) { knop.addEventListener('click', doe); return; }
    var start = null;
    knop.addEventListener('touchstart', function (e) {
      e.preventDefault();
      var t = e.touches && e.touches[0];
      start = t ? { x: t.clientX, y: t.clientY } : { x: 0, y: 0 };
    }, { passive: false });
    knop.addEventListener('touchend', function (e) {
      e.preventDefault();
      if (!start) return;
      var t = e.changedTouches && e.changedTouches[0];
      var schoof = t && (Math.abs(t.clientX - start.x) > 15 || Math.abs(t.clientY - start.y) > 15);
      start = null;
      if (!schoof) doe();
    }, { passive: false });
    knop.addEventListener('touchcancel', function () { start = null; });
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
  var laatsteRoot = null;
  function zetAan(root) {
    laatsteRoot = root || document;
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
