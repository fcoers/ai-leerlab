/* Tutorial "Bouw je eigen AI-team" op ai-leerlab.nl: één stap per scherm, voortgang onthouden, kopieerknoppen.
   Overgenomen uit de proefversie van de CoP-tutorial. Zonder JavaScript staat alles onder elkaar (zie site.css, .no-js). */
(function () {
  'use strict';

  var OPSLAG = 'agentteam-tutorial:stap';
  var schermen = Array.prototype.slice.call(document.querySelectorAll('.scherm'));
  var LAATSTE = schermen.length - 1;
  var ids = schermen.map(function (s) { return s.id; });
  var vorige = document.getElementById('vorige');
  var volgende = document.getElementById('volgende');
  var volgendeTekst = document.getElementById('volgende-tekst');
  var voortgangTekst = document.getElementById('voortgang-tekst');
  var balkLinks = Array.prototype.slice.call(document.querySelectorAll('.voortgang-balk a'));
  var melding = document.getElementById('meldingen');
  var huidig = -1;
  var BASISTITEL = document.title;
  var wortel = document.documentElement;

  /* localStorage kan ontbreken of geblokkeerd zijn (privévenster, strenge instellingen). Dan werkt alles gewoon, alleen zonder geheugen. */
  function lees() { try { return window.localStorage.getItem(OPSLAG); } catch (e) { return null; } }
  function bewaar(v) { try { window.localStorage.setItem(OPSLAG, String(v)); } catch (e) { /* geen geheugen, geen probleem */ } }
  function wis() { try { window.localStorage.removeItem(OPSLAG); } catch (e) { /* idem */ } }

  function indexUitHash() {
    var h = (window.location.hash || '').replace('#', '');
    var i = ids.indexOf(h);
    return i;
  }

  function toon(i, opties) {
    opties = opties || {};
    if (i < 0 || i > LAATSTE) i = 0;
    var eerder = huidig;
    huidig = i;
    if (eerder !== -1 && eerder !== i) document.getElementById('terug-melding').hidden = true;

    schermen.forEach(function (s, n) {
      var actief = n === i;
      s.classList.toggle('actief', actief);
      s.classList.remove('komt-binnen');
      if (actief && eerder !== -1 && eerder !== i) {
        void s.offsetWidth; // animatie opnieuw starten
        s.classList.add('komt-binnen');
      }
    });

    // Voortgang
    voortgangTekst.textContent = i === 0 ? 'Vier stappen' : (i <= 4 ? 'Stap ' + i + ' van 4' : 'Vier stappen klaar');
    balkLinks.forEach(function (a, n) {
      var stap = n + 1;
      a.classList.toggle('gedaan', stap < i);
      if (stap === i) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current');
    });

    // Knoppen
    vorige.hidden = i === 0;
    volgende.hidden = i === LAATSTE;
    volgendeTekst.textContent = i === 0 ? 'Begin met stap 1' : 'Volgende';

    // Titel van het tabblad volgt de stap
    var kop = schermen[i].querySelector('h1, h2');
    document.title = (i === 0 ? '' : (i <= 4 ? 'Stap ' + i + ': ' : '') + kop.textContent + ' · ') + BASISTITEL;
    // Vanaf stap 1 wijkt de paginakop, zodat de stap zelf bovenaan staat.
    wortel.classList.toggle('tut-bezig', i > 0);

    if (opties.geschiedenis !== false) {
      var hash = '#' + ids[i];
      if (window.location.hash !== hash) {
        try { window.history.pushState({ stap: i }, '', hash); } catch (e) { /* bv. file:// in oudere browsers */ }
      }
    }
    bewaar(i);

    if (opties.focus !== false) {
      window.scrollTo(0, 0);
      kop.focus({ preventScroll: true });
    }
  }

  // Vorige / Volgende
  vorige.addEventListener('click', function () { toon(huidig - 1); });
  volgende.addEventListener('click', function () { toon(huidig + 1); });

  // Links naar een stap (voortgangsbalk, titel)
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-ga]');
    if (!a) return;
    e.preventDefault();
    toon(parseInt(a.getAttribute('data-ga'), 10));
  });

  // Terug-knop van de browser
  window.addEventListener('popstate', function () {
    var i = indexUitHash();
    toon(i < 0 ? 0 : i, { geschiedenis: false });
  });
  window.addEventListener('hashchange', function () {
    var i = indexUitHash();
    if (i >= 0 && i !== huidig) toon(i, { geschiedenis: false });
    requestAnimationFrame(function () { window.scrollTo(0, 0); });
  });

  // Pijltjestoetsen links/rechts, niet als je in een veld of tekstblok zit
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var t = e.target.tagName;
    if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT' || t === 'SUMMARY' || t === 'BUTTON') return;
    if (e.key === 'ArrowRight' && huidig < LAATSTE) toon(huidig + 1);
    if (e.key === 'ArrowLeft' && huidig > 0) toon(huidig - 1);
  });

  // ---------- Kopieerknoppen ----------
  function kopieer(tekst) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(tekst).catch(function () { return oudeManier(tekst); });
    }
    return oudeManier(tekst);
  }
  function oudeManier(tekst) {
    return new Promise(function (ok, fout) {
      var ta = document.createElement('textarea');
      ta.value = tekst; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var gelukt = false;
      try { gelukt = document.execCommand('copy'); } catch (e) { gelukt = false; }
      document.body.removeChild(ta);
      gelukt ? ok() : fout();
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('.kopieer'), function (blok) {
    var code = blok.querySelector('code');
    var cap = blok.querySelector('figcaption');
    var knop = document.createElement('button');
    knop.type = 'button';
    knop.className = 'knop knop-spook kopieer-knop';
    knop.innerHTML =
      '<svg class="kopieer-icoon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" fill="none" stroke="currentColor" stroke-width="2"/></svg>' +
      '<svg class="vink" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '<span class="label">Kopieer</span>';
    var label = knop.querySelector('.label');
    var timer;
    knop.addEventListener('click', function () {
      kopieer(code.textContent).then(function () {
        knop.classList.add('gekopieerd');
        label.textContent = 'Gekopieerd';
        melding.textContent = 'De tekst is gekopieerd. Plak hem met Cmd+V of Ctrl+V.';
        clearTimeout(timer);
        timer = setTimeout(function () {
          knop.classList.remove('gekopieerd');
          label.textContent = 'Kopieer';
          melding.textContent = '';
        }, 3000);
      }, function () {
        label.textContent = 'Selecteer en kopieer zelf';
        var r = document.createRange(); r.selectNodeContents(code);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      });
    });
    cap.appendChild(knop);
  });

  // ---------- Opnieuw beginnen ----------
  var terug = document.getElementById('terug-melding');
  document.getElementById('opnieuw').addEventListener('click', function () {
    wis();
    terug.hidden = true;
    toon(0);
  });

  // ---------- Start ----------
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  var vanHash = indexUitHash();
  var bewaard = parseInt(lees(), 10);
  if (vanHash >= 0) {
    toon(vanHash, { geschiedenis: false, focus: false });
  } else if (bewaard > 0 && bewaard <= LAATSTE) {
    document.getElementById('terug-tekst').textContent = (bewaard <= 4 ? 'Welkom terug. Je gaat verder bij stap ' + bewaard + '.' : 'Welkom terug. Je gaat verder bij het laatste scherm.');
    terug.hidden = false;
    toon(bewaard, { focus: false });
  } else {
    toon(0, { geschiedenis: false, focus: false });
  }
  // Een #stap-adres laat de browser naar het anker springen; begin altijd bovenaan, met kop en voortgang in beeld.
  window.scrollTo(0, 0);
  window.addEventListener('load', function () { setTimeout(function () { window.scrollTo(0, 0); }, 0); });
})();
