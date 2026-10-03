/* Tutorial "Bouw je eigen AI-team" met toolkeuze (ChatGPT Work of Claude) op ai-leerlab.nl.
   Opvolger van tutorial.js. Bovenaan kies je je tool; daarna toont de pagina alleen de route voor die tool,
   één stap per scherm. Tool en stap worden onthouden (localStorage, met try/catch: zonder geheugen werkt alles gewoon).
   Adres per tool: ?tool=chatgpt of ?tool=claude, met #stap-1 tot #stap-4 of #verder erachter.
   Zonder JavaScript staan de keuze en beide routes onder elkaar (site.css, .no-js). */
(function () {
  'use strict';

  var OPSLAG_TOOL = 'agentteam-tutorial:tool';
  var OPSLAG_STAP = 'agentteam-tutorial:stap-per-tool';
  var NAMEN = { chatgpt: 'ChatGPT Work', claude: 'Claude' };
  var TOOLS = Object.keys(NAMEN);

  var start = document.getElementById('start');
  var routes = {};
  TOOLS.forEach(function (t) { routes[t] = document.getElementById('route-' + t); });
  var opties = Array.prototype.slice.call(document.querySelectorAll('.tool-optie'));
  var perTool = Array.prototype.slice.call(document.querySelectorAll('.per-tool'));
  var keuzeMelding = document.getElementById('keuze-melding');
  var vorige = document.getElementById('vorige');
  var volgende = document.getElementById('volgende');
  var volgendeTekst = document.getElementById('volgende-tekst');
  var voortgang = document.querySelector('.voortgang');
  var voortgangTekst = document.getElementById('voortgang-tekst');
  var balkLinks = Array.prototype.slice.call(document.querySelectorAll('.voortgang-balk a'));
  var toolStand = document.getElementById('tool-stand');
  var toolStandNaam = document.getElementById('tool-stand-naam');
  var melding = document.getElementById('meldingen');
  var terug = document.getElementById('terug-melding');
  var BASISTITEL = document.title;
  var wortel = document.documentElement;

  var tool = null;      // gekozen tool of null
  var schermen = [start];
  var huidig = -1;

  function lees(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function bewaar(k, v) { try { window.localStorage.setItem(k, String(v)); } catch (e) { /* geen geheugen, geen probleem */ } }
  function wis(k) { try { window.localStorage.removeItem(k); } catch (e) { /* idem */ } }

  function toolUitAdres() {
    var m = /[?&]tool=([a-z-]+)/.exec(window.location.search);
    return m && NAMEN[m[1]] ? m[1] : null;
  }
  function naamUitHash() { return (window.location.hash || '').replace('#', ''); }
  function indexVanNaam(naam) {
    for (var n = 0; n < schermen.length; n++) if (schermen[n].getAttribute('data-naam') === naam) return n;
    return -1;
  }
  function adres(i) {
    return window.location.pathname + (tool ? '?tool=' + tool : '') + (i > 0 ? '#' + schermen[i].getAttribute('data-naam') : '');
  }

  function kiesTool(t) {
    tool = t;
    schermen = [start].concat(t ? Array.prototype.slice.call(routes[t].querySelectorAll('.scherm')) : []);
    TOOLS.forEach(function (x) { routes[x].hidden = x !== t; });
    perTool.forEach(function (d) { d.hidden = d.getAttribute('data-tool') !== t; });
    opties.forEach(function (a) {
      if (a.getAttribute('data-tool') === t) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
    keuzeMelding.hidden = true;
    voortgang.hidden = !t;
    toolStand.hidden = !t;
    toolStandNaam.textContent = t ? NAMEN[t] : '';
    // De stappen in de voortgang krijgen de koppen van deze route (voor schermlezers).
    balkLinks.forEach(function (a, n) {
      var s = schermen[n + 1];
      var kop = s && s.querySelector('h2');
      a.querySelector('.sr').textContent = 'Stap ' + (n + 1) + (kop ? ': ' + kop.textContent : '');
    });
    if (t) bewaar(OPSLAG_TOOL, t);
  }

  function toon(i, o) {
    o = o || {};
    if (!tool || i < 0 || i >= schermen.length) i = 0;
    var eerder = huidig;
    huidig = i;
    if (eerder !== -1 && eerder !== i) terug.hidden = true;

    Array.prototype.forEach.call(document.querySelectorAll('.scherm'), function (s) {
      var actief = s === schermen[i];
      s.classList.toggle('actief', actief);
      s.classList.remove('komt-binnen');
      if (actief && eerder !== -1 && eerder !== i) { void s.offsetWidth; s.classList.add('komt-binnen'); }
    });

    voortgangTekst.textContent = i === 0 ? 'Vier stappen' : (i <= 4 ? 'Stap ' + i + ' van 4' : 'Vier stappen klaar');
    balkLinks.forEach(function (a, n) {
      var stap = n + 1;
      a.classList.toggle('gedaan', stap < i);
      if (stap === i) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current');
    });

    vorige.hidden = i === 0;
    toolStand.hidden = !tool || i === 0;   // op het keuzescherm zie je de keuze al
    volgende.hidden = !!tool && i === schermen.length - 1;  // zonder tool blijft 'Begin met stap 1' staan en vraagt om een keuze
    volgendeTekst.textContent = i === 0 ? 'Begin met stap 1' : 'Volgende';

    var kop = schermen[i].querySelector('h2');
    document.title = (i === 0 ? '' : (i <= 4 ? 'Stap ' + i + ': ' : '') + kop.textContent + ' · ') + BASISTITEL;
    wortel.classList.toggle('tut-bezig', i > 0);

    if (o.geschiedenis !== false) {
      var nieuw = adres(i);
      if (window.location.pathname + window.location.search + window.location.hash !== nieuw) {
        try { window.history[o.vervang ? 'replaceState' : 'pushState']({ stap: i, tool: tool }, '', nieuw); } catch (e) { /* bv. file:// */ }
      }
    }
    if (tool) bewaar(OPSLAG_STAP, tool + ':' + i);

    if (o.focus !== false) {
      window.scrollTo(0, 0);
      kop.focus({ preventScroll: true });
    }
  }

  function vraagEerstTool() {
    keuzeMelding.hidden = false;
    melding.textContent = 'Kies eerst je tool.';
    opties[0].focus();
  }

  // Toolkeuze
  opties.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var t = a.getAttribute('data-tool');
      var anders = t !== tool;
      kiesTool(t);
      if (anders) wis(OPSLAG_STAP);
      toon(0, { focus: false, vervang: true });
      melding.textContent = 'Je hebt ' + NAMEN[t] + ' gekozen. De stappen hieronder horen bij deze tool.';
    });
  });

  document.getElementById('andere-tool').addEventListener('click', function () {
    toon(0, { focus: false });
    window.scrollTo(0, 0);
    var a = document.querySelector('.tool-optie[aria-current="true"]') || opties[0];
    a.focus({ preventScroll: true });
  });

  vorige.addEventListener('click', function () { toon(huidig - 1); });
  volgende.addEventListener('click', function () {
    if (huidig === 0 && !tool) { vraagEerstTool(); return; }
    toon(huidig + 1);
  });

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-ga]');
    if (!a) return;
    e.preventDefault();
    toon(parseInt(a.getAttribute('data-ga'), 10));
  });

  window.addEventListener('popstate', function () {
    var t = toolUitAdres();
    if (t && t !== tool) kiesTool(t);
    var i = indexVanNaam(naamUitHash());
    toon(i < 0 ? 0 : i, { geschiedenis: false });
  });
  window.addEventListener('hashchange', function () {
    var i = indexVanNaam(naamUitHash());
    if (i >= 0 && i !== huidig) toon(i, { geschiedenis: false });
    requestAnimationFrame(function () { window.scrollTo(0, 0); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var t = e.target.tagName;
    if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT' || t === 'SUMMARY' || t === 'BUTTON' || t === 'A') return;
    if (!tool) return;
    if (e.key === 'ArrowRight' && huidig < schermen.length - 1) toon(huidig + 1);
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
    if (!code || !cap) return;
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

  document.getElementById('opnieuw').addEventListener('click', function () {
    wis(OPSLAG_STAP);
    terug.hidden = true;
    toon(0);
  });

  // ---------- Start ----------
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  var vanAdres = toolUitAdres();
  var bewaardeTool = NAMEN[lees(OPSLAG_TOOL)] ? lees(OPSLAG_TOOL) : null;
  kiesTool(vanAdres || bewaardeTool);

  var opgeslagen = (lees(OPSLAG_STAP) || '').split(':');
  var bewaardeStap = opgeslagen[0] === tool ? parseInt(opgeslagen[1], 10) : 0;
  var vanHash = indexVanNaam(naamUitHash());

  if (tool && vanHash >= 0) {
    toon(vanHash, { focus: false, vervang: true });
  } else if (tool && bewaardeStap > 0 && bewaardeStap < schermen.length) {
    document.getElementById('terug-tekst').textContent = bewaardeStap <= 4
      ? 'Welkom terug. Je gaat verder bij stap ' + bewaardeStap + ' voor ' + NAMEN[tool] + '.'
      : 'Welkom terug. Je gaat verder bij het laatste scherm.';
    terug.hidden = false;
    toon(bewaardeStap, { focus: false, vervang: true });
  } else {
    toon(0, { focus: false, vervang: !!tool });
  }
  window.scrollTo(0, 0);
  window.addEventListener('load', function () { setTimeout(function () { window.scrollTo(0, 0); }, 0); });
})();
