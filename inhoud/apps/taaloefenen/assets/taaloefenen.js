/* Taaloefenen: start, themapagina en sessies (overhoren, kaartjes, toetsronde).
   Voortgang alleen in localStorage op dit apparaat: per item en richting het bakje, de volgende datum, het aantal
   keer fout en wanneer laatst geoefend. Geen getypte antwoorden, geen namen, niets naar de server.
   Nakijken en bakjes staan in nakijken.js (TONakijken). */
(function () {
  'use strict';
  var N = window.TONakijken;
  if (!N || !document.body.classList.contains('to')) return;

  var TALEN = {
    frans: { naam: 'Frans', lang: 'fr', tekens: ['é', 'è', 'ê', 'à', 'ç', 'ô', 'û', 'î', 'ï', 'ë', 'œ', "'"] },
    duits: { naam: 'Duits', lang: 'de', tekens: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'] }
  };
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
  var opslagWerkt = true;
  var geheugen = null;
  function leesOpslag() {
    if (geheugen) return geheugen;
    var d = null;
    try { d = JSON.parse(localStorage.getItem(SLEUTEL) || 'null'); } catch (e) { opslagWerkt = false; }
    if (!d || d.v !== 1) d = { v: 1, taal: 'frans', stand: {}, prive: {}, laatste: {} };
    d.stand = d.stand || {}; d.prive = d.prive || {}; d.laatste = d.laatste || {};
    geheugen = d;
    return d;
  }
  function bewaar() {
    try { localStorage.setItem(SLEUTEL, JSON.stringify(geheugen)); } catch (e) { opslagWerkt = false; }
  }

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
        if (j.status === 404) { delete d.prive[c]; bewaar(); return null; }
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
    if (!opslagWerkt) {
      var v = $('.to-voetnoot');
      if (v) v.textContent = 'Deze browser kan je voortgang niet bewaren. Je kunt oefenen, maar na het sluiten ben je hem kwijt.';
    }
  }

  function startPagina() {
    var d = leesOpslag();
    P.taal = TALEN[d.taal] ? d.taal : 'frans';
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
    P.taal = taal;
    var d = leesOpslag();
    d.laatste[taal] = uid;
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
          naarVijf: 0, bron: bron, huidige: null, fase: 'vraag', leeg: false };
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
    if (!S.eerste[o.k]) S.eerste[o.k] = r.uitkomst;
    // bakje bijwerken (niet bij oefenen of de toetsronde)
    var d = leesOpslag();
    var oud = d.stand[o.k] ? d.stand[o.k].b : 1;
    var nieuwB = oud;
    if (S.modus === 'overhoren') {
      var s = N.naUitkomst(d.stand[o.k], r.uitkomst, vandaag());
      d.stand[o.k] = s; bewaar();
      nieuwB = s.b;
      if (nieuwB === 5 && oud < 5) S.naarVijf++;
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
    var uitkomst = maak('div', { klasse: 'to-uitkomst', role: 'status' }, [rondje(r.uitkomst),
      maak('div', null, [maak('p', { klasse: 'to-wat', tekst: kop }), maak('p', { klasse: 'to-gevolg', tekst: gevolgTekst(r.uitkomst, oud, nieuwB, terug) })])]);

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

  function rijtjeTabel(rj, o) {
    var T = TALEN[P.taal];
    var tabel = maak('table');
    var tb = maak('tbody');
    Object.keys(rj.vormen).forEach(function (p) {
      var dit = (o.item.persoon && o.item.persoon === p) || (!o.item.persoon && N.gelijkmaken(rj.vormen[p]).toLowerCase() === N.gelijkmaken(o.item.antwoord).toLowerCase());
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
      kinderen.push(maak('ul', { klasse: 'to-telling' }, [
        maak('li', null, [rondje('goed'), maak('span', { tekst: 'Goed' }), maak('b', { tekst: String(tel.goed) })]),
        maak('li', null, [rondje('bijna'), maak('span', { tekst: 'Bijna goed' }), maak('b', { tekst: String(tel.bijna) })]),
        maak('li', null, [rondje('fout'), maak('span', { tekst: 'Nog niet, daarna wel' }), maak('b', { tekst: String(tel.fout) })])]));
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
    });
  }
  /** Nieuwe sessie vanaf het einde van een sessie: de geschiedenis heeft al een sessie-stap. */
  function startSessieZonderGeschiedenis(modus, lijst, themas, bron) {
    S = { modus: modus, rij: lijst.slice(), alle: themas, totaal: lijst.length, gezien: {}, klaar: 0, eerste: {}, keer: {},
          naarVijf: 0, bron: bron, huidige: null, fase: 'vraag', leeg: false };
    E.veld = null;
    volgende(false);
  }

  /* ---------------------------------------------------------------- start */
  var scherm = document.body.getAttribute('data-scherm');
  if (scherm === 'start') startPagina();
  else if (scherm === 'thema') themaPagina();
})();
