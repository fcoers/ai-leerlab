/* Taaloefenen: start, themapagina en sessies (overhoren, kaartjes, toetsronde).
   Voortgang alleen in localStorage op dit apparaat: per item en richting het bakje, de volgende datum, het aantal
   keer fout en wanneer laatst geoefend. Geen getypte antwoorden, geen namen, niets naar de server.
   Nakijken en bakjes staan in nakijken.js (TONakijken). */
(function () {
  'use strict';
  var N = window.TONakijken;
  if (!N || !document.body.classList.contains('to')) return;
  var R = window.TOReis || null;   // verdienen (reiziger.js); zonder dat bestand werkt alles zoals vóór klus 771

  var TALEN = {
    frans: { naam: 'Frans', lang: 'fr', tekens: ['é', 'è', 'ê', 'à', 'ç', 'ô', 'û', 'î', 'ï', 'ë', 'œ', "'"] },
    duits: { naam: 'Duits', lang: 'de', tekens: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'] }
  };
  /* Alleen eigen sleutels tellen: TALEN['constructor'] of TALEN['toString'] is geërfd en geen taal (klus 771, ronde 4). */
  function isTaal(t) { return typeof t === 'string' && Object.prototype.hasOwnProperty.call(TALEN, t); }
  var MAX_NIEUW = 10;
  var MAX_HERHALEN = 3;      // zo vaak komt een item hooguit terug in één sessie
  var MAX_SESSIE = 40;       // herhalingen per sessie; de rest komt de volgende keer
  var SLEUTEL = 'taaloefenen.v1';
  var rustig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var UIT = 'cubic-bezier(0.22, 1, 0.36, 1)', IN = 'cubic-bezier(0.55, 0, 0.85, 0.35)', IN_UIT = 'cubic-bezier(0.45, 0, 0.25, 1)';

  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function maak(tag, attr, kinderen) {
    var el = document.createElement(tag);
    if (attr) Object.keys(attr).forEach(function (k) {
      if (k === 'tekst') el.textContent = attr[k];
      else if (k === 'klasse') el.className = attr[k];
      else if (attr[k] !== null && attr[k] !== undefined && attr[k] !== false) el.setAttribute(k, attr[k] === true ? '' : attr[k]);
    });
    (kinderen || []).forEach(function (k) { if (k) el.appendChild(typeof k === 'string' ? document.createTextNode(k) : k); });
    return el;
  }
  function vandaag() { return N.datum(new Date()); }
  function meld(t) { var m = $('[data-meldingen]'); if (m) { m.textContent = ''; setTimeout(function () { m.textContent = t; }, 50); } }

  /* ---------------------------------------------------------------- opslag */
  /* Twee tabbladen tegelijk (klus 771, ronde 2): elk tabblad houdt één toestand in het geheugen, steeds hetzelfde
     object. Vlak voor elke schrijfactie en bij het storage-event van een ander tabblad wordt de opslag opnieuw gelezen
     en samengevoegd, zodat er nooit iets weggaat. Per item en richting wint de stand met het laatste antwoord. */
  var opslagWerkt = true;
  var geheugen = null, basis = null;
  var vervallen = {};   // privé-thema's die de server niet meer kent; die komen bij het samenvoegen niet terug
  function leegOpslag() { return { v: 1, taal: 'frans', stand: {}, prive: {}, laatste: {} }; }
  function heel(d) {
    if (!d || typeof d !== 'object' || d.v !== 1) d = leegOpslag();
    if (!d.stand || typeof d.stand !== 'object') d.stand = {};
    if (!d.prive || typeof d.prive !== 'object') d.prive = {};
    if (!d.laatste || typeof d.laatste !== 'object') d.laatste = {};
    if (!isTaal(d.taal)) d.taal = 'frans';   // een eerder opgeslagen ongeldige taal valt terug op Frans
    return d;
  }
  function leesSchijf() {
    try { return JSON.parse(localStorage.getItem(SLEUTEL) || 'null'); } catch (e) { opslagWerkt = false; return null; }
  }
  /** Tijd van het laatste antwoord: t (ms) bij nieuwe standen, anders het begin van de dag in l. */
  function tijd(st) {
    if (st && typeof st.t === 'number') return st.t;
    var m = st && /^(\d{4})-(\d{2})-(\d{2})$/.exec(st.l || '');
    return m ? new Date(+m[1], +m[2] - 1, +m[3]).getTime() : 0;
  }
  /** ons: dit tabblad, oud: de opslag zoals dit tabblad hem het laatst zag, schijf: de opslag nu. */
  function samenvoegen(ons, oud, schijf) {
    ons = heel(ons); oud = heel(oud); schijf = heel(schijf);
    var r = Object.assign({}, schijf, ons);   // onbekende velden van beide blijven staan
    r.v = 1;
    r.taal = ons.taal !== oud.taal ? ons.taal : (schijf.taal || ons.taal);
    r.stand = Object.assign({}, schijf.stand);
    Object.keys(ons.stand).forEach(function (k) {
      var a = ons.stand[k], b = schijf.stand[k];
      if (!b || tijd(a) > tijd(b)) r.stand[k] = a;
    });
    r.prive = Object.assign({}, schijf.prive, ons.prive);
    Object.keys(vervallen).forEach(function (c) { delete r.prive[c]; });
    r.laatste = Object.assign({}, schijf.laatste);
    Object.keys(ons.laatste).forEach(function (t) {
      if (ons.laatste[t] !== oud.laatste[t] || !(t in r.laatste)) r.laatste[t] = ons.laatste[t];
    });
    return r;
  }
  function leesOpslag() {
    if (geheugen) return geheugen;
    geheugen = heel(leesSchijf());
    basis = JSON.parse(JSON.stringify(geheugen));
    return geheugen;
  }
  /** Haalt binnen wat een ander tabblad intussen bewaarde; geeft hetzelfde object terug. */
  function verversOpslag() {
    leesOpslag();
    var nieuw = samenvoegen(geheugen, basis, leesSchijf());
    Object.keys(geheugen).forEach(function (k) { delete geheugen[k]; });
    Object.assign(geheugen, nieuw);
    basis = JSON.parse(JSON.stringify(geheugen));
    return geheugen;
  }
  function bewaar() {
    verversOpslag();
    try { localStorage.setItem(SLEUTEL, JSON.stringify(geheugen)); } catch (e) { opslagWerkt = false; }
  }
  /* Een ander tabblad schreef: geheugen bijwerken en, buiten een sessie, opnieuw tekenen. */
  function bijgewerkt() {
    if (S) return;
    var scherm = document.body.getAttribute('data-scherm');
    if (scherm === 'start' && P.themas.length) tekenStart();
    else if (scherm === 'thema' && P.thema) tekenThema();
  }
  window.addEventListener('storage', function (e) {
    if (!geheugen || (e.key !== SLEUTEL && e.key !== null)) return;
    verversOpslag();
    bijgewerkt();
  });
  if (R) document.addEventListener('to-reis-bijgewerkt', function () { bijgewerkt(); if (reisBijgewerkt) reisBijgewerkt(); });
  var reisBijgewerkt = null;

  /* ---------------------------------------------------------------- inhoud */
  function haal(url) {
    return fetch(url, { credentials: 'same-origin' }).then(function (r) {
      return r.json().catch(function () { return { ok: false }; }).then(function (j) { j.status = r.status; return j; });
    });
  }
  /** Alle thema's die deze leerling in een taal heeft: de openbare en de privé-thema's die hij via een link opende. */
  function laadTaal(taal) {
    var d = leesOpslag();
    var codes = Object.keys(d.prive).filter(function (c) { return d.prive[c].taal === taal; });
    return Promise.all([haal('/apps/taaloefenen/api/inhoud.php?taal=' + taal)].concat(codes.map(function (c) {
      return haal('/apps/taaloefenen/api/inhoud.php?code=' + encodeURIComponent(c)).then(function (j) {
        if (j.status === 404) { vervallen[c] = 1; delete d.prive[c]; bewaar(); return null; }
        if (j.ok && j.themas[0]) { j.themas[0].code = c; d.prive[c].naam = j.themas[0].naam; }
        return j;
      });
    }))).then(function (lijst) {
      var themas = [];
      lijst.forEach(function (j) { if (j && j.ok) themas = themas.concat(j.themas); });
      return themas;
    });
  }

  /* ---------------------------------------------------------------- oefeningen */
  /** Richtingen die meetellen bij overhoren. Een zin terug is alleen oefenen. */
  function richtingenOverhoren(item) {
    if (item.soort === 'woord') return item.richtingen === 'heen' ? ['heen'] : item.richtingen === 'terug' ? ['terug'] : ['heen', 'terug'];
    return ['heen'];
  }
  function richtingenKaartjes(item) {
    if (item.soort === 'zin') return ['heen', 'terug'];
    return richtingenOverhoren(item);
  }
  function groep(item) { return item.soort.indexOf('vervoeging') === 0 ? 'vervoeging' : item.soort; }
  function sleutel(thema, item, r) { return thema.uid + '|' + item.id + '|' + r; }
  function oefeningen(themas, kaartjes, soorten) {
    var uit = [];
    themas.forEach(function (t) {
      t.items.forEach(function (it) {
        if (soorten && soorten.indexOf(groep(it)) < 0) return;
        (kaartjes ? richtingenKaartjes(it) : richtingenOverhoren(it)).forEach(function (r) {
          uit.push({ thema: t, item: it, r: r, k: sleutel(t, it, r) });
        });
      });
    });
    return uit;
  }
  function stand(o) { return leesOpslag().stand[o.k] || null; }
  function isKlaar(o, dag) { var s = stand(o); return !!s && s.v <= dag; }
  function isNieuw(o) { return !stand(o); }
  /** Wat vandaag klaarstaat: herhalingen (oudste eerst) en hooguit tien nieuwe uit één thema. */
  function klaarstaand(themas, nieuwUit, soorten) {
    var dag = vandaag();
    var her = oefeningen(themas, false, soorten).filter(function (o) { return isKlaar(o, dag); });
    her.sort(function (a, b) { return stand(a).v < stand(b).v ? -1 : stand(a).v > stand(b).v ? 1 : 0; });
    her = her.slice(0, MAX_SESSIE);
    var nieuw = nieuwUit ? oefeningen([nieuwUit], false, soorten).filter(isNieuw).slice(0, MAX_NIEUW) : [];
    return { her: her, nieuw: nieuw };
  }
  /** Een item ken je als alle richtingen die meetellen in bakje 5 zitten. */
  function kentItem(t, it) {
    return richtingenOverhoren(it).every(function (r) { var s = leesOpslag().stand[sleutel(t, it, r)]; return s && s.b === 5; });
  }
  function telThema(t) {
    var dag = vandaag();
    var ken = t.items.filter(function (it) { return kentItem(t, it); }).length;
    var klaar = oefeningen([t], false).filter(function (o) { return isKlaar(o, dag); }).length;
    return { ken: ken, totaal: t.items.length, klaar: klaar };
  }
  function goedeAntwoorden(o) {
    var it = o.item;
    if (o.r === 'terug') return [it.vraag].concat(it.alt_terug || []);
    return [it.antwoord].concat(it.alt || []);
  }
  function taalVan(o, taal) { return o.r === 'terug' ? 'nl' : TALEN[taal].lang; }
  function rijtjeBij(o, themas) {
    var it = o.item;
    if (it.soort.indexOf('vervoeging') !== 0) return null;
    var lijst = [o.thema].concat(themas.filter(function (t) { return t !== o.thema; }));
    for (var i = 0; i < lijst.length; i++) {
      var rs = lijst[i].rijtjes || [];
      for (var j = 0; j < rs.length; j++) {
        if (rs[j].tijd === it.tijd && rs[j].werkwoord.toLowerCase() === it.werkwoord.toLowerCase() && Object.keys(rs[j].vormen).length === 6) return rs[j];
      }
    }
    return null;
  }
  function geslacht(it, taal) {
    if (it.soort !== 'woord') return '';
    var g = it.geslacht;
    if (!g) {
      var s = N.splitsLidwoord(it.antwoord, TALEN[taal].lang);
      var l = s ? s.lidwoord.toLowerCase() : '';
      g = { le: 'm', un: 'm', la: 'v', une: 'v', der: 'm', das: 'o' }[l] || '';
    }
    if (!g) return '';
    var woorden = { m: 'mannelijk', v: 'vrouwelijk', o: 'onzijdig', mv: 'meervoud' };
    return 'zelfstandig naamwoord, ' + g.split(' ').map(function (x) { return woorden[x] || x; }).join(' ');
  }

  /* ---------------------------------------------------------------- beweging */
  function beweeg(el, frames, duur, curve) {
    if (rustig || !el || !el.animate) return Promise.resolve();
    var a = el.animate(frames, { duration: duur, easing: curve });
    return a.finished ? a.finished.catch(function () {}) : new Promise(function (r) { a.onfinish = r; });
  }
  function weg(el) { return beweeg(el, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-24px)' }], 200, IN); }
  function binnen(el) { return beweeg(el, [{ opacity: 0, transform: 'translateX(24px)' }, { opacity: 1, transform: 'none' }], 280, UIT); }
  function omhoog(el) { return beweeg(el, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], 280, UIT); }
  function vervaag(el, uit) { return beweeg(el, uit ? [{ opacity: 1 }, { opacity: 0 }] : [{ opacity: 0 }, { opacity: 1 }], 200, IN_UIT); }

  /* ---------------------------------------------------------------- rondjes */
  var SVG = 'http://www.w3.org/2000/svg';
  function rondje(soort) {
    var s = document.createElementNS(SVG, 'svg');
    s.setAttribute('viewBox', '0 0 32 32'); s.setAttribute('aria-hidden', 'true'); s.setAttribute('focusable', 'false');
    function el(tag, attr) { var e = document.createElementNS(SVG, tag); Object.keys(attr).forEach(function (k) { e.setAttribute(k, attr[k]); }); s.appendChild(e); }
    if (soort === 'goed') {
      el('circle', { cx: 16, cy: 16, r: 14, 'class': 'to-rond-vol' });
      el('circle', { cx: 16, cy: 16, r: 14, 'class': 'to-rond-lijn' });
      el('path', { d: 'M10 16.5l4 4 8-9', 'class': 'to-rond-vink' });
    } else if (soort === 'bijna') {
      el('circle', { cx: 16, cy: 16, r: 14, 'class': 'to-rond-leeg' });
      el('path', { d: 'M16 2 A14 14 0 0 0 16 30 Z', 'class': 'to-rond-vol' });
      el('circle', { cx: 16, cy: 16, r: 14, 'class': 'to-rond-lijn' });
      el('path', { d: 'M16 2v28', 'class': 'to-rond-deel' });
    } else {
      el('circle', { cx: 16, cy: 16, r: 14, 'class': 'to-rond-leeg' });
      el('circle', { cx: 16, cy: 16, r: 14, 'class': 'to-rond-lijn' });
    }
    return s;
  }

  /* ---------------------------------------------------------------- tekens */
  /** Rij met tekens. De knop voegt in op de cursor zonder dat het veld de focus verliest (anders klapt het toetsenbord in). */
  function tekenrij(taal, veld) {
    var T = TALEN[taal];
    var rij = maak('div', { klasse: 'to-tekens' + (taal === 'duits' ? ' de' : ''), role: 'group', 'aria-label': 'Speciale tekens' });
    T.tekens.forEach(function (c) {
      var b = maak('button', { type: 'button', tekst: c, 'aria-label': c === "'" ? 'apostrof' : 'teken ' + c, tabindex: '-1' });
      function voegIn(e) {
        e.preventDefault();
        if (veld.readOnly) return;
        var s = veld.selectionStart == null ? veld.value.length : veld.selectionStart;
        var t = veld.selectionEnd == null ? veld.value.length : veld.selectionEnd;
        veld.value = veld.value.slice(0, s) + c + veld.value.slice(t);
        if (document.activeElement !== veld) veld.focus();
        try { veld.setSelectionRange(s + c.length, s + c.length); } catch (x) {}
        veld.dispatchEvent(new Event('input', { bubbles: true }));
        b.classList.add('druk'); setTimeout(function () { b.classList.remove('druk'); }, 150);
      }
      b.addEventListener('touchstart', voegIn, { passive: false });
      b.addEventListener('mousedown', voegIn);
      b.addEventListener('click', function (e) { if (e.detail === 0) voegIn(e); });   // toetsenbord
      rij.appendChild(b);
    });
    return rij;
  }
  function veldAttributen(veld, lang) {
    veld.setAttribute('autocapitalize', 'off');
    veld.setAttribute('autocorrect', 'off');
    veld.setAttribute('autocomplete', 'off');
    veld.setAttribute('spellcheck', 'false');
    veld.setAttribute('enterkeyhint', 'go');
    veld.setAttribute('lang', lang);
  }

  /* ---------------------------------------------------------------- pagina's */
  var P = { taal: 'frans', themas: [], thema: null, soorten: null };

  function getalWoord(n) {
    return ['Geen', 'Eén', 'Twee', 'Drie', 'Vier', 'Vijf', 'Zes', 'Zeven', 'Acht', 'Negen', 'Tien', 'Elf', 'Twaalf'][n] || String(n);
  }

  function themaRegel(c) {
    return 'Je kent ' + c.ken + ' van ' + c.totaal + (c.klaar ? ' · ' + c.klaar + ' vandaag' : '');
  }
  function zetBalk(i, deel) { if (i) i.style.transform = 'scaleX(' + Math.max(0, Math.min(1, deel)) + ')'; }

  function nieuwThemaVoorStart() {
    var d = leesOpslag();
    var uid = d.laatste[P.taal];
    var t = P.themas.filter(function (x) { return x.uid === uid; })[0];
    if (t && oefeningen([t], false).some(isNieuw)) return t;
    return P.themas.filter(function (x) { return oefeningen([x], false).some(isNieuw); })[0] || t || P.themas[0] || null;
  }

  function tekenStart() {
    var d = leesOpslag();
    var lijstEl = $('[data-themas="' + P.taal + '"]');
    // openbare thema's: regel en balk invullen
    P.themas.forEach(function (t) {
      var a = lijstEl && $('[data-thema="' + CSS.escape(t.uid) + '"]', lijstEl);
      if (!a) return;
      var c = telThema(t);
      $('[data-regel]', a).textContent = themaRegel(c);
      zetBalk($('[data-balk]', a), c.totaal ? c.ken / c.totaal : 0);
    });
    // privé-thema's die deze leerling via een link opende
    var eigen = lijstEl && $('[data-eigen-themas]', lijstEl);
    if (eigen) {
      eigen.textContent = '';
      P.themas.filter(function (t) { return t.prive && t.code; }).forEach(function (t) {
        var c = telThema(t);
        var i = maak('i');
        var a = maak('a', { klasse: 'to-thema', href: '/apps/taaloefenen/t/' + t.code + '/' }, [
          maak('div', { klasse: 'to-thema-tekst' }, [maak('h3', { tekst: t.naam }),
            maak('span', { klasse: 'to-regel', tekst: themaRegel(c) + ' · via een link' }),
            maak('span', { klasse: 'to-balk', 'aria-hidden': 'true' }, [i])]),
          maak('span', { klasse: 'to-chev', 'aria-hidden': 'true' })]);
        eigen.appendChild(maak('li', null, [a]));
        requestAnimationFrame(function () { zetBalk(i, c.totaal ? c.ken / c.totaal : 0); });
      });
      eigen.hidden = !eigen.children.length;
      var geen = $('[data-geen-themas]', lijstEl);
      if (geen) geen.hidden = !!eigen.children.length;
    }
    // vandaag
    var nt = nieuwThemaVoorStart();
    var k = klaarstaand(P.themas, nt);
    var n = k.her.length + k.nieuw.length;
    var getal = $('[data-vandaag-getal]'), tekst = $('[data-vandaag-tekst]'), knoppen = $('[data-vandaag-knoppen]');
    if (!P.themas.length) {
      getal.textContent = ' ';
      tekst.textContent = 'Nog geen thema\'s in het ' + TALEN[P.taal].naam + '.';
      knoppen.hidden = true;
    } else if (!n) {
      getal.textContent = '0 klaar';
      var morgen = oefeningen(P.themas, false).filter(function (o) { return isKlaar(o, N.plusDagen(vandaag(), 1)); }).length;
      tekst.textContent = 'Alles van vandaag is gedaan.' + (morgen ? ' Morgen staan er ' + morgen + ' klaar.' : '');
      knoppen.hidden = true;
    } else {
      getal.textContent = n + ' klaar';
      var delen = [];
      if (k.her.length) delen.push(k.her.length + ' om te herhalen');
      if (k.nieuw.length) delen.push(k.nieuw.length + (k.nieuw.length === 1 ? ' nieuwe' : ' nieuwe') + ' uit ' + nt.naam);
      tekst.textContent = delen.join(' en ') + '.';
      knoppen.hidden = false;
    }
    stilleStempels(P.themas, P.taal);
    tekenTegels();
    if (!opslagWerkt) {
      var v = $('.to-voetnoot');
      if (v) v.textContent = 'Deze browser kan je voortgang niet bewaren. Je kunt oefenen, maar na het sluiten ben je hem kwijt.';
    }
  }

  function startPagina() {
    var d = leesOpslag();
    /* Taal: die uit de terugweg van een thema (?taal=), anders de laatst gekozen, anders Frans. */
    var uitAdres = (/[?&]taal=([^&#]*)/.exec(location.search) || [])[1];   // elke waarde: ongeldig wordt genegeerd
    P.taal = isTaal(uitAdres) ? uitAdres : isTaal(d.taal) ? d.taal : 'frans';
    if (uitAdres !== undefined && history.replaceState) history.replaceState(null, '', location.pathname + location.hash);
    var wissel = $('[data-wissel]');
    function toonTaal(taal, eerst) {
      P.taal = taal; d.taal = taal; bewaar();
      $$('[data-kies-taal]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-kies-taal') === taal ? 'true' : 'false'); });
      var klaar = (eerst ? Promise.resolve() : vervaag(wissel, true)).then(function () {
        wissel.style.opacity = eerst ? '' : '0';
        $$('[data-themas]').forEach(function (el) { el.hidden = el.getAttribute('data-themas') !== taal; });
        return laadTaal(taal);
      });
      klaar.then(function (themas) {
        if (P.taal !== taal) return;
        P.themas = themas;
        tekenStart();
        wissel.style.opacity = '';
        if (!eerst) vervaag(wissel, false);
      }).catch(function () {
        wissel.style.opacity = '';
        $('[data-vandaag-tekst]').textContent = 'De thema\'s laden niet. Controleer je internet en probeer het opnieuw.';
      });
    }
    $$('[data-kies-taal]').forEach(function (b) {
      b.addEventListener('click', function () { var t = b.getAttribute('data-kies-taal'); if (t !== P.taal) toonTaal(t, false); });
    });
    $$('[data-start]').forEach(function (b) {
      b.addEventListener('click', function () {
        var nt = nieuwThemaVoorStart();
        var k = klaarstaand(P.themas, nt);
        var lijst = k.her.concat(k.nieuw);
        if (!lijst.length) return;
        startSessie(b.getAttribute('data-start'), lijst, P.themas, b);
      });
    });
    toonTaal(P.taal, true);
  }

  function themaPagina() {
    var body = document.body;
    var taal = body.getAttribute('data-taal'), uid = body.getAttribute('data-thema'), code = body.getAttribute('data-code');
    if (!isTaal(taal)) taal = 'frans';
    P.taal = taal;
    var d = leesOpslag();
    d.laatste[taal] = uid;
    d.taal = taal;   // terug naar de start toont de taal van dit thema
    if (code) d.prive[code] = { taal: taal, naam: body.getAttribute('data-naam') || '' };
    bewaar();
    var knoppen = $$('[data-soort]');
    P.soorten = knoppen.length ? knoppen.map(function (b) { return b.getAttribute('data-soort'); }) : null;
    knoppen.forEach(function (b) {
      b.addEventListener('click', function () {
        var aan = b.getAttribute('aria-pressed') === 'true';
        var aantalAan = knoppen.filter(function (x) { return x.getAttribute('aria-pressed') === 'true'; }).length;
        if (aan && aantalAan === 1) { meld('Er moet minstens één soort aan staan.'); return; }
        b.setAttribute('aria-pressed', aan ? 'false' : 'true');
        P.soorten = knoppen.filter(function (x) { return x.getAttribute('aria-pressed') === 'true'; }).map(function (x) { return x.getAttribute('data-soort'); });
        tekenThema();
      });
    });
    $$('[data-start]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!P.thema) return;
        var modus = b.getAttribute('data-start'), lijst;
        if (modus === 'overhoren') { var k = klaarstaand([P.thema], P.thema, P.soorten); lijst = k.her.concat(k.nieuw); }
        else lijst = schud(oefeningen([P.thema], modus === 'kaartjes', P.soorten));
        if (modus === 'kaartjes') lijst = lijst.slice(0, 20);
        if (!lijst.length) return;
        startSessie(modus, lijst, P.themas, b);
      });
    });
    var laden = code
      ? Promise.all([haal('/apps/taaloefenen/api/inhoud.php?code=' + encodeURIComponent(code)), laadTaal(taal)]).then(function (r) {
          if (!r[0].ok) throw new Error('weg');
          var t = r[0].themas[0]; t.code = code;
          return [t].concat(r[1].filter(function (x) { return x.uid !== t.uid; }));
        })
      : laadTaal(taal);
    laden.then(function (themas) {
      P.themas = themas;
      P.thema = themas.filter(function (t) { return t.uid === uid; })[0] || null;
      if (!P.thema) throw new Error('weg');
      stilleStempels(P.themas, taal);
      tekenThema();
    }).catch(function () {
      $('[data-stand-tekst]').textContent = 'Dit thema laadt niet. Controleer je internet, of vraag om een nieuwe link.';
    });
  }

  function tekenThema() {
    var t = P.thema;
    var c = telThema(t);
    $('[data-ken]').textContent = c.ken;
    $('[data-van]').textContent = 'van ' + c.totaal + ' ken je';
    $('[data-stand-tekst]').textContent = (c.klaar === 0 ? 'Vandaag hoef je hier niets te herhalen.' : c.klaar === 1 ? '1 staat vandaag klaar.' : c.klaar + ' staan vandaag klaar.') +
      ' Je kent een item als het vier keer op rij goed ging, met dagen ertussen.';
    var k = klaarstaand([t], t, P.soorten);
    var n = k.her.length + k.nieuw.length;
    var knop = $('[data-start="overhoren"]');
    $('[data-klaar-aantal]', knop).textContent = '(' + n + ')';
    knop.disabled = !n;
    // lastig: vaakst fout, hooguit vijf
    var lastig = oefeningen([t], false).filter(function (o) { var s = stand(o); return s && s.f > 0; })
      .sort(function (a, b) { return stand(b).f - stand(a).f; }).slice(0, 5);
    var ul = $('[data-lastig]');
    ul.textContent = '';
    lastig.forEach(function (o) { ul.appendChild(lastigRegel(o)); });
    $('[data-lastig-blok]').hidden = !lastig.length;
  }
  function lastigRegel(o) {
    var v = o.r === 'terug' ? o.item.antwoord : o.item.vraag;
    var a = o.r === 'terug' ? o.item.vraag : o.item.antwoord;
    var l = TALEN[P.taal].lang;
    return maak('li', null, [maak('span', { tekst: v, lang: o.r === 'terug' ? l : null }), maak('span', { tekst: a, lang: o.r === 'terug' ? null : l })]);
  }
  function schud(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }

  /* ---------------------------------------------------------------- sessie */
  var S = null;

  function startSessie(modus, lijst, themas, bron) {
    S = { modus: modus, rij: lijst.slice(), alle: themas, totaal: lijst.length, gezien: {}, klaar: 0, eerste: {}, keer: {},
          naarVijf: 0, stappen: 0, nieuweSpullen: [], bron: bron, huidige: null, fase: 'vraag', leeg: false };
    var pagina = $('[data-pagina]'), sessie = $('[data-sessie]');
    sessie.textContent = '';
    bouwSessie(sessie);
    pagina.hidden = true;
    sessie.hidden = false;
    window.scrollTo(0, 0);
    try { history.pushState({ toSessie: true }, ''); } catch (e) {}
    volgende(true);
  }

  function stopSessie(viaTerug) {
    if (!S) return;
    var bron = S.bron;
    S = null;
    $('[data-sessie]').hidden = true;
    $('[data-sessie]').textContent = '';
    $('[data-pagina]').hidden = false;
    if (!viaTerug) { try { if (history.state && history.state.toSessie) history.back(); } catch (e) {} }
    if (document.body.getAttribute('data-scherm') === 'thema') tekenThema(); else tekenStart();
    if (bron && !bron.disabled && !bron.closest('[hidden]')) bron.focus(); else { var m = $('main'); if (m) m.focus(); }
  }
  window.addEventListener('popstate', function () { if (S) stopSessie(true); });

  var E = {};   // vaste elementen van de sessie
  function bouwSessie(sessie) {
    var stop = maak('button', { type: 'button', klasse: 'to-stop', 'aria-label': 'Stoppen' });
    stop.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    stop.addEventListener('click', function () { stopSessie(false); });
    E.balk = maak('i');
    E.teller = maak('span', { klasse: 'to-teller', 'aria-live': 'off' });
    var balk = maak('div', { klasse: 'to-sessiebalk' }, [maak('div', { klasse: 'to-kolom' }, [stop,
      maak('span', { klasse: 'to-balk', role: 'progressbar', 'aria-label': 'Voortgang', 'aria-valuemin': '0', 'aria-valuemax': '100' }, [E.balk]), E.teller])]);
    E.inh = maak('div', { klasse: 'to-kolom to-sessie-inh', role: 'main' });
    sessie.appendChild(balk);
    sessie.appendChild(E.inh);
  }
  function zetVoortgang() {
    var deel = S.totaal ? S.klaar / S.totaal : 0;
    zetBalk(E.balk, deel);
    E.balk.parentNode.setAttribute('aria-valuenow', String(Math.round(deel * 100)));
    var n = Object.keys(S.gezien).length;
    E.teller.textContent = Math.min(n, S.totaal) + ' / ' + S.totaal;
  }

  function etiket(o) {
    var T = TALEN[P.taal];
    var wat = S.modus === 'kaartjes' ? 'Oefenen' : S.modus === 'toets' ? 'Toetsronde' : 'Overhoren';
    var hoe = o.item.soort.indexOf('vervoeging') === 0 ? 'Vervoegen' : o.r === 'terug' ? T.naam + ' → NL' : 'NL → ' + T.naam;
    return wat + ' · ' + hoe;
  }

  /** De vraag zoals de leerling hem ziet. Bij een zin met een gat: het gat als streep, dat meevult met het typen. */
  function vraagBlok(o) {
    var it = o.item, T = TALEN[P.taal];
    var blok = maak('div', { klasse: 'to-vraagblok' });
    if (it.soort.indexOf('vervoeging') === 0) blok.appendChild(maak('span', { klasse: 'to-tijd', tekst: it.tijd, lang: T.lang }));
    if (it.soort === 'vervoeging-zin') {
      var m = it.vraag.match(/^(.*?)\(([^()]+)\)(.*)$/);
      var p = maak('p', { klasse: 'to-zin', lang: T.lang });
      if (m) {
        S.gatTekst = '(' + m[2] + ')';
        S.gat = maak('span', { klasse: 'to-gat', tekst: S.gatTekst });
        p.appendChild(document.createTextNode(m[1])); p.appendChild(S.gat); p.appendChild(document.createTextNode(m[3]));
      } else p.textContent = it.vraag;
      blok.appendChild(p);
    } else if (it.soort === 'vervoeging-kort') {
      var k = it.vraag.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
      var q = maak('p', { klasse: 'to-vraag', lang: T.lang });
      if (k) { q.appendChild(document.createTextNode(k[1] + ' ')); q.appendChild(maak('span', { klasse: 'to-zacht', tekst: '(' + k[2] + ')' })); }
      else q.textContent = it.vraag;
      blok.appendChild(q);
    } else {
      var tekst = o.r === 'terug' ? it.antwoord : it.vraag;
      blok.appendChild(maak('p', { klasse: it.soort === 'zin' ? 'to-zin' : 'to-vraag', tekst: tekst, lang: o.r === 'terug' ? T.lang : 'nl' }));
      if (it.soort === 'woord' && o.r === 'heen' && N.splitsLidwoord(it.antwoord, T.lang)) blok.appendChild(maak('p', { klasse: 'to-hint', tekst: 'met lidwoord' }));
    }
    return blok;
  }

  function volgende(eerst) {
    if (!S) return;
    if (!S.rij.length) { einde(); return; }
    var o = S.rij.shift();
    S.huidige = o;
    S.gezien[o.k] = true;
    S.fase = 'vraag';
    S.leeg = false;
    S.gat = null;
    zetVoortgang();
    var oud = E.inh.firstChild ? E.inh : null;
    if (S.modus === 'kaartjes') { wissel(oud, eerst, function () { tekenKaartje(o); }); return; }
    // Bij overhoren blijft het veld staan, zodat het toetsenbord van de telefoon niet in- en uitklapt.
    if (!E.veld || !E.inh.contains(E.veld)) {
      tekenOverhoorRaam();
    }
    var T = TALEN[P.taal];
    var lang = taalVan(o, P.taal);
    E.veld.value = '';
    E.veld.readOnly = false;
    E.veld.classList.remove('af');
    E.veld.placeholder = o.item.soort.indexOf('vervoeging') === 0 ? 'Typ de vorm' : o.item.soort === 'zin' ? 'Typ de zin' : 'Typ je antwoord';
    E.veld.setAttribute('aria-label', 'Je antwoord');
    E.veld.removeAttribute('aria-describedby');
    veldAttributen(E.veld, lang === 'nl' ? 'nl' : lang);
    E.tekens.textContent = '';
    if (lang !== 'nl') { var rij = tekenrij(P.taal, E.veld); while (rij.firstChild) E.tekens.appendChild(rij.firstChild); E.tekens.className = rij.className; }
    E.tekens.hidden = lang === 'nl';
    E.voor.textContent = ''; E.na.textContent = ''; E.over.hidden = true;
    zetKnop('Nakijken', true);
    E.veld.focus();
    var nieuwBlok = vraagBlok(o);
    var etiketEl = maak('p', { klasse: 'to-etiket', tekst: etiket(o) });
    var houder = E.vraag;
    var wissen = (eerst || !houder.firstChild) ? Promise.resolve() : weg(houder);
    wissen.then(function () {
      houder.textContent = '';
      houder.appendChild(etiketEl);
      houder.appendChild(nieuwBlok);
      if (!eerst) binnen(houder);
    });
  }

  function wissel(oud, eerst, teken) {
    var klaar = (eerst || !oud) ? Promise.resolve() : weg(E.inh);
    klaar.then(function () { E.inh.textContent = ''; E.veld = null; teken(); if (!eerst) binnen(E.inh); });
  }

  function tekenOverhoorRaam() {
    E.inh.textContent = '';
    E.vraag = maak('div', { klasse: 'to-vraagraam' });
    E.voor = maak('div', { klasse: 'to-voor' });
    E.over = maak('p', { klasse: 'to-over', id: 'to-over', tekst: 'Typ het goede antwoord over', hidden: true });
    E.veld = maak('input', { klasse: 'to-veld', type: 'text', id: 'to-veld' });
    E.tekens = maak('div', { klasse: 'to-tekens' });
    E.na = maak('div', { klasse: 'to-na' });
    E.hint = maak('p', { klasse: 'to-hint', hidden: true, 'aria-live': 'polite' });
    E.knop = maak('button', { type: 'button', klasse: 'knop knop-primair' });
    var knopRij = maak('div', { klasse: 'to-knop' }, [E.knop]);
    [E.vraag, E.voor, E.over, E.veld, E.tekens, E.hint, E.na, knopRij].forEach(function (x) { E.inh.appendChild(x); });
    E.knop.addEventListener('click', knopGedrukt);
    E.veld.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); knopGedrukt(); }
    });
    E.veld.addEventListener('input', function () {
      E.hint.hidden = true;
      if (S && S.fase === 'vraag' && S.gat) {
        var v = E.veld.value;
        S.gat.textContent = v || S.gatTekst;
        S.gat.classList.toggle('vol', !!v);
      }
      if (S && S.fase === 'overtypen') {
        var gelijk = overgetypt();
        E.knop.disabled = !gelijk;
        E.knop.className = 'knop ' + (gelijk ? 'knop-primair' : '');
      }
    });
    // iOS: houd veld, tekens en knop boven het toetsenbord.
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', function () {
        if (S && document.activeElement === E.veld) knopRij.scrollIntoView({ block: 'nearest' });
      });
    }
  }
  function zetKnop(tekst, aan) {
    E.knop.textContent = tekst;
    E.knop.disabled = !aan;
    E.knop.className = 'knop' + (aan ? ' knop-primair' : '');
  }
  function overgetypt() {
    var o = S.huidige;
    return N.vergelijk(E.veld.value, S.getoond, taalVan(o, P.taal), o.item.soort).uitkomst === 'goed';
  }

  function knopGedrukt() {
    if (!S) return;
    if (S.fase === 'vraag') nakijken();
    else if (S.fase === 'overtypen') {
      if (overgetypt()) { volgende(false); }
      else { E.hint.textContent = 'Nog niet helemaal gelijk. Kijk naar de onderstreepte letters.'; E.hint.hidden = false; }
    } else if (S.fase === 'klaar') volgende(false);
  }

  function gevolgTekst(uitkomst, oud, nieuw, terug) {
    if (S.modus === 'toets') return 'Telt niet mee voor je bakjes.' + (terug ? ' Komt in deze ronde nog een keer.' : '');
    var wanneer = { 2: 'Komt morgen terug.', 3: 'Komt over 3 dagen terug.', 4: 'Komt over een week terug.', 5: 'Komt over twee weken terug.' };
    var b1 = terug ? 'Komt in deze ronde nog een keer.' : 'Komt de volgende keer terug.';
    if (uitkomst === 'goed') {
      if (oud === 5) return 'Blijft in bakje 5. ' + wanneer[5];
      return 'Naar bakje ' + nieuw + '. ' + (nieuw === 5 ? 'Die ken je nu. ' : '') + wanneer[nieuw];
    }
    if (uitkomst === 'bijna') return 'Blijft in bakje ' + nieuw + '. ' + (nieuw === 1 ? b1 : wanneer[nieuw]);
    return 'Terug naar bakje 1. ' + b1;
  }

  function nakijken() {
    var o = S.huidige;
    if (!N.gelijkmaken(E.veld.value) && !S.leeg) {
      S.leeg = true;
      E.hint.textContent = 'Typ je antwoord. Weet je het niet, druk dan nog een keer op Nakijken.';
      E.hint.hidden = false;
      E.veld.focus();
      return;
    }
    E.hint.hidden = true;
    var lang = taalVan(o, P.taal);
    var r = N.kijkNa(E.veld.value, goedeAntwoorden(o), lang, o.item.soort);
    var eerstePoging = !S.eerste[o.k];
    if (!S.eerste[o.k]) S.eerste[o.k] = r.uitkomst;
    // bakje bijwerken (niet bij oefenen of de toetsronde)
    var d = verversOpslag();   // wat een ander tabblad intussen deed, telt mee
    var oud = d.stand[o.k] ? d.stand[o.k].b : 1;
    var nieuwB = oud;
    var verdien = null;
    if (S.modus === 'overhoren') {
      var dag = vandaag();
      var aanDeBeurt = !d.stand[o.k] || d.stand[o.k].v <= dag;
      var s = N.naUitkomst(d.stand[o.k], r.uitkomst, dag);
      s.t = Date.now();   // tijd van dit antwoord: bij samenvoegen wint de nieuwste stand
      d.stand[o.k] = s; bewaar();
      nieuwB = s.b;
      if (nieuwB === 5 && oud < 5) S.naarVijf++;
      if (R) {
        verdien = R.poging(R.ververs(), { k: o.k, dag: dag, aanDeBeurt: aanDeBeurt, eerste: eerstePoging, goed: r.uitkomst === 'goed' });
        R.bewaar();
        if (verdien.stap) S.stappen++;
        if (verdien.nieuw) S.nieuweSpullen.push(verdien.nieuw);
      }
    }
    var keer = S.keer[o.k] || 0;
    var moetTerug = r.uitkomst === 'fout' || (r.uitkomst === 'bijna' && (S.modus !== 'overhoren' ? false : nieuwB === 1));
    var terug = moetTerug && keer < MAX_HERHALEN;
    if (terug) {
      S.keer[o.k] = keer + 1;
      S.rij.splice(Math.min(S.rij.length, 3), 0, o);   // na een paar andere vragen nog een keer
    } else S.klaar++;
    zetVoortgang();

    var kop = r.uitkomst === 'goed' ? 'Goed' : r.uitkomst === 'bijna' ? 'Bijna goed: ' + N.redenZin(r.redenen) : 'Nog niet';
    // Een stap staat onder de bakjesregel, niet groter; bij bijna goed en fout staat er niets.
    var stapRegel = verdien && verdien.stap
      ? maak('p', { klasse: 'to-stap' + (verdien.nieuw ? ' nieuw' : '') }, [R.voetstap(), verdien.nieuw ? 'Je reiziger heeft iets nieuws' : 'Een stap voor je reiziger'])
      : null;
    var uitkomst = maak('div', { klasse: 'to-uitkomst', role: 'status' }, [rondje(r.uitkomst),
      maak('div', null, [maak('p', { klasse: 'to-wat', tekst: kop }), maak('p', { klasse: 'to-gevolg', tekst: gevolgTekst(r.uitkomst, oud, nieuwB, terug) }), stapRegel])]);

    if (r.uitkomst === 'goed') {
      S.fase = 'klaar';
      E.veld.readOnly = true;
      E.veld.classList.add('af');
      E.tekens.hidden = true;
      E.na.appendChild(uitkomst);
      zetKnop('Volgende', true);
      E.knop.focus();
      omhoog(uitkomst);
      return;
    }
    // Bijna goed of fout: beide antwoorden onder elkaar, eventueel het rijtje, dan overtypen.
    S.fase = 'overtypen';
    S.getoond = r.goed;
    var v = N.verschil(E.veld.value, r.goed);
    function dd(stukken) {
      var el = maak('dd', { lang: lang });
      stukken.forEach(function (s) { el.appendChild(s.af ? maak('u', { tekst: s.t }) : document.createTextNode(s.t)); });
      return el;
    }
    var dl = maak('dl', { klasse: 'to-vergelijk' }, [
      maak('div', { klasse: 'jij' }, [maak('dt', { tekst: 'Jij' }), dd(v.jij)]),
      maak('div', null, [maak('dt', { tekst: 'Goed' }), dd(v.goed)])]);
    var voor = maak('div', null, [uitkomst, dl]);
    var rj = rijtjeBij(o, S.alle);
    if (rj) voor.appendChild(rijtjeTabel(rj, o));
    E.voor.appendChild(voor);
    E.over.hidden = false;
    E.veld.value = '';
    E.veld.placeholder = '';
    E.veld.setAttribute('aria-label', 'Typ het goede antwoord over');
    E.veld.setAttribute('aria-describedby', 'to-over');
    if (S.gat) { S.gat.textContent = S.gatTekst; S.gat.classList.remove('vol'); }
    zetKnop('Volgende', false);
    E.veld.focus();
    omhoog(voor);
  }

  /** Welke regel van het rijtje bij dit item hoort: de persoon als die er is, anders de vorm, en als die bij meer
      personen past (je parle, il parle) het voornaamwoord vlak voor het gat. Nooit meer dan één regel. */
  function regelInRijtje(rj, it) {
    if (it.persoon && rj.vormen[it.persoon] !== undefined) return it.persoon;
    var gelijk = function (a) { return N.gelijkmaken(a).toLowerCase(); };
    var kandidaten = Object.keys(rj.vormen).filter(function (p) { return gelijk(rj.vormen[p]) === gelijk(it.antwoord); });
    if (kandidaten.length <= 1) return kandidaten[0] || null;
    var m = it.vraag.match(/([A-Za-zÀ-ÿ']+)\s*\([^()]+\)/);
    var vnw = m ? m[1].toLowerCase().replace(/'$/, '') : '';
    if (vnw === 'j') vnw = 'je';
    for (var i = 0; i < kandidaten.length; i++) {
      var delen = kandidaten[i].toLowerCase().split('/');
      if (delen.indexOf(vnw) >= 0) return kandidaten[i];
    }
    return null;
  }

  function rijtjeTabel(rj, o) {
    var T = TALEN[P.taal];
    var tabel = maak('table');
    var tb = maak('tbody');
    var regel = regelInRijtje(rj, o.item);
    Object.keys(rj.vormen).forEach(function (p) {
      var dit = p === regel;
      tb.appendChild(maak('tr', { klasse: dit ? 'dit' : null }, [maak('td', { tekst: p.replace(/\//g, ' / ') }), maak('td', { tekst: rj.vormen[p] })]));
    });
    tabel.appendChild(tb);
    var kop = rj.werkwoord.charAt(0).toUpperCase() + rj.werkwoord.slice(1) + ' · ' + rj.tijd;
    return maak('div', { klasse: 'to-rijtje', lang: T.lang }, [maak('p', { klasse: 'to-etiket', tekst: kop }), tabel]);
  }

  /* kaartjes: lezen, nadenken, omdraaien, zelf zeggen of je het wist. Telt niet mee. */
  function tekenKaartje(o) {
    var it = o.item, T = TALEN[P.taal];
    var terug = o.r === 'terug';
    var vraag = it.soort.indexOf('vervoeging') === 0 ? it.vraag : terug ? it.antwoord : it.vraag;
    var antw = it.soort.indexOf('vervoeging') === 0 ? it.antwoord : terug ? it.vraag : it.antwoord;
    var vLang = terug || it.soort.indexOf('vervoeging') === 0 ? T.lang : 'nl', aLang = terug ? 'nl' : T.lang;
    var lang = vraag.length > 24 || antw.length > 24;
    var voor = maak('div', { klasse: 'to-kaartje to-kant-voor' }, [
      it.soort.indexOf('vervoeging') === 0 ? maak('p', { klasse: 'boven', tekst: it.tijd, lang: T.lang }) : null,
      maak('p', { klasse: 'to-woord' + (lang ? ' to-lang' : ''), tekst: vraag, lang: vLang }),
      maak('p', { klasse: 'onder', tekst: 'Weet je het? Draai het kaartje om.' })]);
    var g = geslacht(it, P.taal);
    var achter = maak('div', { klasse: 'to-kaartje to-kant-achter', 'aria-hidden': 'true' }, [
      maak('p', { klasse: 'boven', tekst: vraag, lang: vLang }),
      maak('p', { klasse: 'to-woord' + (lang ? ' to-lang' : ''), tekst: antw, lang: aLang }),
      g && !terug ? maak('p', { klasse: 'onder', tekst: g }) : null]);
    var flip = maak('div', { klasse: 'to-flip', role: 'button', tabindex: '0', 'aria-label': 'Kaartje omdraaien: ' + vraag }, [maak('div', { klasse: 'to-flip-in' }, [voor, achter])]);
    var draaiKnop = maak('button', { type: 'button', klasse: 'knop knop-primair', tekst: 'Draai om' });
    var voorKnop = maak('div', { klasse: 'to-knop' }, [draaiKnop]);
    var nogNiet = maak('button', { type: 'button', klasse: 'knop knop-secundair', tekst: 'Nog niet' });
    var wistIk = maak('button', { type: 'button', klasse: 'knop knop-secundair', tekst: 'Wist ik' });
    var achterKnop = maak('div', { klasse: 'to-duo', hidden: true }, [nogNiet, wistIk]);
    var draait = false;
    function draai() {
      if (flip.classList.contains('om') || draait) return;
      draait = true;
      var binnenkant = flip.firstChild;
      beweeg(binnenkant, [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(90deg)' }], 210, IN).then(function () {
        flip.classList.add('om');
        return beweeg(binnenkant, [{ transform: 'rotateY(-90deg)' }, { transform: 'rotateY(0deg)' }], 210, UIT);
      }).then(function () { draait = false; });
      if (rustig) flip.classList.add('om');
      voor.setAttribute('aria-hidden', 'true'); achter.removeAttribute('aria-hidden');
      flip.setAttribute('aria-label', vraag + ': ' + antw);
      voorKnop.hidden = true; achterKnop.hidden = false;
      wistIk.focus();
      meld(antw);
    }
    flip.addEventListener('click', draai);
    flip.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); draai(); } });
    draaiKnop.addEventListener('click', draai);
    nogNiet.addEventListener('click', function () {
      if (!S.eerste[o.k]) S.eerste[o.k] = 'nog';
      var keer = S.keer[o.k] || 0;
      if (keer < MAX_HERHALEN) { S.keer[o.k] = keer + 1; S.rij.push(o); } else S.klaar++;
      volgende(false);
    });
    wistIk.addEventListener('click', function () { if (!S.eerste[o.k]) S.eerste[o.k] = 'wist'; S.klaar++; volgende(false); });
    E.inh.appendChild(maak('p', { klasse: 'to-etiket', tekst: etiket(o) }));
    E.inh.appendChild(flip);
    E.inh.appendChild(voorKnop);
    E.inh.appendChild(achterKnop);
    draaiKnop.focus();
  }

  function einde() {
    var s = S;
    zetBalk(E.balk, 1);
    var oefen = s.modus === 'kaartjes';
    var opDeze = document.body.getAttribute('data-scherm') === 'thema';
    var keys = Object.keys(s.eerste);
    var tel = { goed: 0, bijna: 0, fout: 0 };
    keys.forEach(function (k) { if (tel[s.eerste[k]] !== undefined) tel[s.eerste[k]]++; });
    var allen = {};
    s.alle.forEach(function (t) { t.items.forEach(function (it) { ['heen', 'terug'].forEach(function (r) { allen[sleutel(t, it, r)] = { thema: t, item: it, r: r }; }); }); });
    var lastig = keys.filter(function (k) { return s.eerste[k] === 'bijna' || s.eerste[k] === 'fout' || s.eerste[k] === 'nog'; })
      .map(function (k) { var x = allen[k]; return x ? { thema: x.thema, item: x.item, r: x.r, k: k } : null; }).filter(Boolean).slice(0, 5);

    var kinderen = [];
    var T = TALEN[P.taal];
    kinderen.push(maak('p', { klasse: 'to-etiket', tekst: T.naam + ' · ' + (oefen ? 'oefenen' : s.modus === 'toets' ? 'toetsronde' : 'overhoren') }));
    var h = maak('h1', { tekst: oefen ? 'Klaar met oefenen' : s.modus === 'toets' ? 'Klaar met de toetsronde' : 'Klaar voor vandaag', tabindex: '-1' });
    kinderen.push(h);
    if (oefen) {
      kinderen.push(maak('p', { klasse: 'lede', tekst: 'Je hebt ' + keys.length + (keys.length === 1 ? ' kaartje' : ' kaartjes') + ' bekeken. Oefenen telt niet mee voor je bakjes; overhoren wel.' }));
    } else {
      var zin = s.modus === 'toets' ? 'Deze ronde telt niet mee voor je bakjes.'
        : s.naarVijf ? getalWoord(s.naarVijf) + (s.naarVijf === 1 ? ' item zit nu in bakje 5. Die ken je.' : ' items zitten nu in bakje 5. Die ken je.')
        : 'Wat goed ging, komt over een paar dagen terug.';
      kinderen.push(maak('p', { klasse: 'lede', tekst: zin }));
      var verdiend = s.modus === 'overhoren' && R ? eindeVerdiend(s) : null;
      if (verdiend) verdiend.kaarten.forEach(function (k) { kinderen.push(k); });
      kinderen.push(maak('ul', { klasse: 'to-telling' }, [
        maak('li', null, [rondje('goed'), maak('span', { tekst: 'Goed' }), maak('b', { tekst: String(tel.goed) })]),
        maak('li', null, [rondje('bijna'), maak('span', { tekst: 'Bijna goed' }), maak('b', { tekst: String(tel.bijna) })]),
        maak('li', null, [rondje('fout'), maak('span', { tekst: 'Nog niet, daarna wel' }), maak('b', { tekst: String(tel.fout) })])]));
      if (verdiend) kinderen.push(verdiend.route);
    }
    if (lastig.length) {
      kinderen.push(maak('h2', { tekst: 'Vandaag lastig' }));
      kinderen.push(maak('ul', { klasse: 'to-lastig' }, lastig.map(lastigRegel)));
    }
    var knoppen = [];
    if (lastig.length) {
      var opnieuw = maak('button', { type: 'button', klasse: 'knop knop-primair', tekst: (lastig.length === 1 ? 'Deze nog een keer oefenen' : 'Deze ' + getalWoord(lastig.length).toLowerCase() + ' nog een keer oefenen') });
      opnieuw.addEventListener('click', function () {
        var lijst = lastig.map(function (x) { return { thema: x.thema, item: x.item, r: x.r, k: x.k }; });
        var bron = s.bron, alle = s.alle;
        S = null;
        startSessieZonderGeschiedenis('kaartjes', lijst, alle, bron);
      });
      knoppen.push(opnieuw);
    }
    var terug = maak('button', { type: 'button', klasse: 'knop ' + (lastig.length ? 'knop-secundair' : 'knop-primair'), tekst: opDeze ? 'Terug naar het thema' : 'Terug naar de start' });
    terug.addEventListener('click', function () { stopSessie(false); });
    knoppen.push(terug);
    kinderen.push(maak('div', { klasse: 'to-stapel' }, knoppen));
    if (s.modus === 'overhoren') {
      var morgen = oefeningen(s.alle, false).filter(function (o) { return isKlaar(o, N.plusDagen(vandaag(), 1)); }).length;
      if (morgen) kinderen.push(maak('p', { klasse: 'to-hint', tekst: 'Morgen staan er ' + morgen + ' klaar.' }));
    }
    var blok = maak('div', { klasse: 'to-einde' }, kinderen);
    weg(E.inh).then(function () {
      E.inh.textContent = '';
      E.veld = null;
      E.inh.appendChild(blok);
      E.teller.textContent = s.totaal + ' / ' + s.totaal;
      binnen(E.inh);
      h.focus();
      if (verdiendNa) verdiendNa();
    });
  }

  /* ---------------------------------------------------------------- verdienen op het eindscherm */
  var verdiendNa = null;   // na het tonen: balk vullen en de stempel laten landen
  function stappenTekst(n) { return n === 1 ? '1 stap' : n + ' stappen'; }
  function hoofdletter(t) { return t.charAt(0).toUpperCase() + t.slice(1); }
  var DOE = { hoofd: 'Zet hem op', ogen: 'Zet hem op', hals: 'Doe hem om', rug: 'Doe hem om', jas: 'Trek hem aan', hand: 'Neem hem mee' };

  /** De weg naar het volgende ding: één regel en een dunne balk. Wat het is, blijft een verrassing. */
  function routeBlok(rd, metVandaag) {
    function tekst() {
      var dag = vandaag();
      var vlg = R.volgende(rd.stappen);
      var vorige = R.vorigeDrempel(rd.stappen);
      if (metVandaag && R.vandaagStappen(rd, dag) >= R.MAX_DAG) return 'Je reiziger heeft vandaag genoeg gelopen. Je bakjes tellen wel door.';
      if (!vlg) return (metVandaag ? 'Vandaag ' + stappenTekst(R.vandaagStappen(rd, dag)) + '. ' : '') + 'Je reiziger heeft alles wat er nu is.';
      if (metVandaag) return 'Vandaag ' + stappenTekst(R.vandaagStappen(rd, dag)) + '. Nog ' + (vlg.drempel - rd.stappen) + ' tot het volgende ding.';
      return 'Nog ' + stappenTekst(vlg.drempel - rd.stappen) + ' tot ' + (vorige ? 'het volgende ding.' : 'het eerste ding.');
    }
    var i = maak('i');
    var p = maak('p', { tekst: tekst() });
    var blok = maak('div', { klasse: 'to-route' }, [p, maak('span', { klasse: 'to-balk', 'aria-hidden': 'true' }, [i])]);
    blok.vul = function () {
      var vlg = R.volgende(rd.stappen), vorige = R.vorigeDrempel(rd.stappen);
      zetBalk(i, vlg ? (rd.stappen - vorige) / (vlg.drempel - vorige) : 1);
    };
    /* Een ander tabblad verdiende stappen: tekst en balk op hun plek bijwerken, de balk loopt zacht door. */
    blok.werkBij = function () { p.textContent = tekst(); blok.vul(); };
    return blok;
  }

  function eindeVerdiend(s) {
    var rd = R.lees();
    var dag = vandaag();
    var stempels = R.kijkStempels(rd, s.alle, P.taal, kentItem, dag);
    R.bewaar();
    var kaarten = [];
    var landen = null;
    if (stempels.length) {
      var st = stempels[0];
      var beeld = R.stempel(st);
      var ook = stempels.slice(1).map(function (x) { return x.naam; });
      kaarten.push(maak('div', { klasse: 'to-kaart to-stempelmoment' }, [
        maak('p', { klasse: 'to-etiket', tekst: stempels.length > 1 ? 'Nieuwe stempels' : 'Nieuwe stempel' }),
        maak('div', { klasse: 'to-stempelbeeld' }, [beeld]),
        maak('h2', { tekst: st.naam + ' ken je helemaal' }),
        maak('p', { tekst: 'Alle ' + st.n + ' items zitten in bakje 5. De stempel blijft in je paspoort, ook als je later iets vergeet.' }),
        ook.length ? maak('p', { tekst: 'Ook ' + ook.join(' en ') + ' ken je helemaal.' }) : null,
        maak('a', { klasse: 'to-tekstlink', href: '/apps/taaloefenen/paspoort/', tekst: 'Naar je paspoort' })]));
      landen = beeld;
    }
    if (s.nieuweSpullen.length) {
      var ding = s.nieuweSpullen[s.nieuweSpullen.length - 1];
      var fig = R.figuur(R.gedragen(rd));
      var knop = maak('button', { type: 'button', klasse: 'knop knop-secundair', 'aria-pressed': R.draagt(rd, ding.id) ? 'true' : 'false' });
      var zetKnopTekst = function () { knop.textContent = R.draagt(rd, ding.id) ? 'Doe hem weer af' : DOE[ding.plek]; };
      zetKnopTekst();
      knop.addEventListener('click', function () {
        var aan = R.wissel(rd, ding.id);
        R.bewaar();
        knop.setAttribute('aria-pressed', aan ? 'true' : 'false');
        zetKnopTekst();
        R.kleed(fig, R.gedragen(rd));
      });
      kaarten.push(maak('div', { klasse: 'to-kaart to-verdiend' }, [
        maak('div', { klasse: 'to-onderweg' }, [fig, maak('div', null, [
          maak('p', { klasse: 'to-etiket', tekst: 'Nieuw verdiend' }),
          maak('h2', { tekst: 'Een ' + ding.naam }),
          maak('p', { klasse: 'to-zacht', tekst: 'Verdiend met ' + ding.drempel + ' stappen.' + (s.nieuweSpullen.length > 1 ? ' Er ligt nog meer in je kast.' : '') })])]),
        knop]));
    }
    var route = routeBlok(rd, true);
    verdiendNa = function () {
      verdiendNa = null;
      requestAnimationFrame(function () { requestAnimationFrame(route.vul); });
      if (landen) landen.classList.add('to-land');
    };
    return { kaarten: kaarten, route: route };
  }
  /** Nieuwe sessie vanaf het einde van een sessie: de geschiedenis heeft al een sessie-stap. */
  function startSessieZonderGeschiedenis(modus, lijst, themas, bron) {
    S = { modus: modus, rij: lijst.slice(), alle: themas, totaal: lijst.length, gezien: {}, klaar: 0, eerste: {}, keer: {},
          naarVijf: 0, stappen: 0, nieuweSpullen: [], bron: bron, huidige: null, fase: 'vraag', leeg: false };
    E.veld = null;
    volgende(false);
  }

  /* ---------------------------------------------------------------- paspoort en reiziger */
  /** Een thema dat al helemaal in bakje 5 zat (ook van vóór het verdienen) krijgt zijn stempel zonder moment. */
  function stilleStempels(themas, taal) {
    if (!R || !themas.length) return;
    if (R.kijkStempels(R.lees(), themas, taal, kentItem, vandaag()).length) R.bewaar();
  }
  function stempelAantal(n) { return n === 1 ? '1 stempel' : n + ' stempels'; }

  /** Twee tegels onder Vandaag; ze tellen beide talen samen. */
  function tekenTegels() {
    var tegels = $('[data-tegels]');
    if (!R || !tegels) return;
    var rd = R.lees();
    var lijst = R.stempelLijst(rd);
    var plek = $('[data-tegel-stempel]', tegels);
    plek.textContent = '';
    var laatste = lijst[lijst.length - 1];
    plek.appendChild(laatste ? R.stempel({ uid: laatste.uid, taal: laatste.taal, naam: laatste.naam, regels: [R.stempelRegels(laatste.naam)[0]], datum: '' })
      : R.stempel({ uid: 'leeg', taal: 'frans', naam: '', regels: [], open: true }));
    $('[data-tegel-paspoort]', tegels).textContent = lijst.length ? stempelAantal(lijst.length) : 'Nog leeg';
    var fig = $('[data-tegel-reiziger]', tegels);
    fig.textContent = '';
    fig.appendChild(R.figuur(R.gedragen(rd)));
    var vlg = R.volgende(rd.stappen);
    $('[data-tegel-stappen]', tegels).textContent = !vlg ? 'alles verdiend'
      : R.verdiend(rd.stappen).length ? 'nog ' + stappenTekst(vlg.drempel - rd.stappen) : 'Nog ' + stappenTekst(vlg.drempel - rd.stappen) + ' tot de eerste';
    tegels.hidden = false;
  }

  function themaLink(t) { return t.code ? '/apps/taaloefenen/t/' + t.code + '/' : (t.url || '/apps/taaloefenen/'); }

  /** Eén vak in het paspoort: de stempel, de naam in gewone tekst en wanneer, of hoe ver je bent. */
  function pasVak(o) {
    var kinderen = [R.stempel(o), maak('b', { tekst: o.naam }),
      maak('small', { tekst: o.open ? o.ken + ' van ' + o.totaal + ' ken je' : 'sinds ' + R.langeDatum(o.datum, vandaag()) })];
    var i = null;
    if (o.open) { i = maak('i'); kinderen.push(maak('span', { klasse: 'to-balk', 'aria-hidden': 'true' }, [i])); }
    var a = maak('a', { klasse: 'to-pasvak' + (o.open ? ' open' : ''), href: o.pad }, kinderen);
    if (i) requestAnimationFrame(function () { requestAnimationFrame(function () { zetBalk(i, o.ken / o.totaal); }); });
    return a;
  }

  function paspoortPagina() {
    var rd = R.lees();
    var houder = $('[data-pas]'), kop = $('[data-pas-kop]');
    function teken(perTaal) {
      var lijst = R.stempelLijst(rd);
      houder.textContent = '';
      // thema's waar je mee bezig bent: minstens tien items, al iets geoefend, nog geen stempel
      var bezig = [];
      Object.keys(perTaal).forEach(function (taal) {
        perTaal[taal].forEach(function (t) {
          if (rd.stempels[t.uid] || t.items.length < R.MIN_ITEMS) return;
          var gestart = oefeningen([t], false).some(function (o) { return !!stand(o); });
          var c = telThema(t);
          bezig.push({ uid: t.uid, taal: taal, naam: t.naam, open: true, ken: c.ken, totaal: c.totaal, gestart: gestart,
                       deel: c.ken + ' / ' + c.totaal, pad: themaLink(t) });
        });
      });
      bezig.sort(function (a, b) { return b.ken / b.totaal - a.ken / a.totaal; });
      if (!lijst.length) {
        kop.textContent = 'Nog leeg';
        houder.appendChild(maak('div', { klasse: 'to-kaart to-pasleeg' }, [
          R.stempel({ uid: 'leeg', taal: 'frans', naam: 'Jouw eerste · thema', open: true, deel: '' }),
          maak('p', { tekst: 'Een stempel krijg je als je een heel thema kent. Dat duurt minstens elf dagen, want elk woord moet een paar keer terugkomen.' })]));
        var dichtbij = bezig.filter(function (x) { return x.gestart; })[0] || bezig[0];
        if (dichtbij) {
          houder.appendChild(maak('h2', { tekst: 'Het dichtstbij' }));
          houder.appendChild(maak('div', { klasse: 'to-pas' }, [pasVak(dichtbij)]));
        }
        houder.appendChild(maak('div', { klasse: 'to-stapel to-pas-knop' }, [maak('a', { klasse: 'knop knop-primair', href: '/apps/taaloefenen/', tekst: 'Overhoor wat klaarstaat' })]));
        return;
      }
      kop.textContent = stempelAantal(lijst.length);
      houder.appendChild(maak('p', { klasse: 'lede', tekst: 'Een stempel krijg je als je een heel thema kent: alles in bakje 5.' }));
      ['frans', 'duits'].forEach(function (taal) {
        var mijn = lijst.filter(function (x) { return x.taal === taal; });
        var open = bezig.filter(function (x) { return x.taal === taal && x.gestart; });
        if (!mijn.length && !open.length) return;
        houder.appendChild(maak('h2', { tekst: TALEN[taal].naam }));
        houder.appendChild(maak('div', { klasse: 'to-pas' }, mijn.map(pasVak).concat(open.map(pasVak))));
      });
    }
    teken({});
    Promise.all([laadTaal('frans'), laadTaal('duits')]).then(function (r) {
      var perTaal = { frans: r[0], duits: r[1] };
      stilleStempels(r[0], 'frans');
      stilleStempels(r[1], 'duits');
      teken(perTaal);
    }).catch(function () { /* zonder internet: alleen de stempels die er al zijn */ });
  }

  function reizigerPagina() {
    var rd = R.lees();
    kop();
    var podium = $('[data-podium]');
    var groot = R.figuur(R.gedragen(rd));
    groot.setAttribute('role', 'img');
    groot.removeAttribute('aria-hidden');
    groot.setAttribute('aria-label', 'Je reiziger');
    var route = routeBlok(rd, false);
    podium.appendChild(groot);
    podium.appendChild(route);
    podium.appendChild(maak('p', { tekst: 'Stappen komen uit overhoren.' }));
    requestAnimationFrame(function () { requestAnimationFrame(route.vul); });
    var kast = $('[data-kast]');
    var knoppen = [];
    function zetKnoppen() {
      knoppen.forEach(function (b) { b.setAttribute('aria-pressed', R.draagt(rd, b.getAttribute('data-spul')) ? 'true' : 'false'); });
    }
    function kop() { $('[data-reis-kop]').textContent = rd.stappen ? stappenTekst(rd.stappen) + ' onderweg' : 'Nog geen stappen'; }
    /* Eén plek per ding. Een verdiend ding wordt een knop; die blijft staan (stappen gaan nooit omlaag), zodat de
       focus niet verspringt als een ander tabblad iets verdient. Dichte plekken krijgen hun tekst opnieuw. */
    var plekken = R.SPULLEN.map(function (x) {
      var li = maak('li');
      kast.appendChild(li);
      return { x: x, li: li, knop: null };
    });
    function vulKast() {
      var vlg = R.volgende(rd.stappen);
      plekken.forEach(function (pl) {
        var x = pl.x;
        if (pl.knop) return;
        while (pl.li.firstChild) pl.li.removeChild(pl.li.firstChild);
        if (R.heeft(rd, x.id)) {
          var b = maak('button', { type: 'button', 'data-spul': x.id }, [R.icoon(x.id), hoofdletter(x.naam)]);
          b.addEventListener('click', function () {
            R.wissel(rd, x.id);
            R.bewaar();
            zetKnoppen();
            R.kleed(groot, R.gedragen(rd));
          });
          pl.knop = b;
          knoppen.push(b);
          pl.li.appendChild(b);
        } else {
          var volgende = vlg && vlg.id === x.id;
          pl.li.appendChild(maak('div', { klasse: 'to-dicht' + (volgende ? ' volgende' : '') }, [R.icoon('dicht'), maak('span', { klasse: 'to-sr', tekst: 'Nog geheim, ' }),
            maak('small', { tekst: volgende ? 'nog ' + stappenTekst(x.drempel - rd.stappen) : 'vanaf ' + x.drempel })]));
        }
      });
    }
    vulKast();
    zetKnoppen();
    reisBijgewerkt = function () {
      kop();
      route.werkBij();
      vulKast();
      zetKnoppen();
      R.kleed(groot, R.gedragen(rd));
    };
    if (!R.opslagWerkt()) { var v = $('.to-voetnoot'); if (v) v.textContent = 'Deze browser kan je reiziger niet bewaren.'; }
  }

  /* ---------------------------------------------------------------- start */
  var scherm = document.body.getAttribute('data-scherm');
  if (scherm === 'start') startPagina();
  else if (scherm === 'thema') themaPagina();
  else if (scherm === 'paspoort' && R) paspoortPagina();
  else if (scherm === 'reiziger' && R) reizigerPagina();
})();
