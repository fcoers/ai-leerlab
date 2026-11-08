/* Taaloefenen: verdienen (klus 771, ontwerp Bram, didactische basis Dide paragraaf 6).
   Een stap is een goed antwoord bij overhoren op een item dat aan de beurt is, ook van bakje 5 naar 5. Hooguit één
   per item en richting per dag (de eerste poging van die dag telt, ook als die fout was) en hooguit 40 per dag.
   Spullen komen bij vaste drempels, een stempel als een thema van minstens tien items helemaal in bakje 5 zit.
   Er gaat nooit iets weg, ook niet met twee tabbladen tegelijk open (samenvoegen). Eigen sleutel taaloefenen.reis.v1; taaloefenen.v1 (de bakjes) blijft onaangeroerd.
   Alleen op dit apparaat, niets naar de server.
   De regels hieronder zijn los te testen in node (module.exports); het tekenen gebruikt alleen de DOM. */
(function (wereld) {
  'use strict';
  var SLEUTEL = 'taaloefenen.reis.v1';
  var MAX_DAG = 40;
  var MIN_ITEMS = 10;
  /* Twaalf spullen voor de eerste versie, per plek, bij Brams drempels. id en plek volgen Anouks lagen
     (assets/reiziger/lagen/<plek>-<id>.svg, iconen/<plek>-<id>.svg, bron: Leveringen/Apps/Taaloefen-app/Reiziger/spullen.json). */
  var SPULLEN = [
    { id: 'sjaal', naam: 'sjaal', plek: 'hals', drempel: 5 },
    { id: 'muts', naam: 'muts', plek: 'hoofd', drempel: 15 },
    { id: 'zonnebril', naam: 'zonnebril', plek: 'ogen', drempel: 30 },
    { id: 'rugzak', naam: 'rugzak', plek: 'rug', drempel: 50 },
    { id: 'groen', naam: 'groene jas', plek: 'jas', drempel: 75 },
    { id: 'koptelefoon', naam: 'koptelefoon', plek: 'hoofd', drempel: 105 },
    { id: 'camera', naam: 'camera', plek: 'hand', drempel: 140 },
    { id: 'pet', naam: 'pet', plek: 'hoofd', drempel: 180 },
    { id: 'kaart', naam: 'kaart', plek: 'hand', drempel: 225 },
    { id: 'regenjas', naam: 'regenjas', plek: 'jas', drempel: 275 },
    { id: 'verrekijker', naam: 'verrekijker', plek: 'hals', drempel: 330 },
    { id: 'gitaar', naam: 'gitaar', plek: 'rug', drempel: 390 }
  ];
  /* Stapelvolgorde van achter naar voor (Anouk). */
  var LAAG_VOLGORDE = ['basis', 'jas', 'rug', 'hals', 'ogen', 'hoofd', 'hand'];
  var MAP = '/apps/taaloefenen/assets/reiziger/';

  /* ------------------------------------------------------------ toestand */
  function leeg() { return { v: 1, stappen: 0, dag: '', dagStappen: 0, beurt: {}, aan: [], stempels: {} }; }
  function geheel(n) { return typeof n === 'number' && isFinite(n) && n >= 0 ? Math.floor(n) : 0; }
  /** Maakt van wat er in de opslag stond een geldige toestand; onbekende of kapotte delen worden leeg, nooit minder. */
  function schoon(d) {
    var s = leeg();
    if (!d || typeof d !== 'object' || d.v !== 1) return s;
    s.stappen = geheel(d.stappen);
    s.dag = typeof d.dag === 'string' ? d.dag : '';
    s.dagStappen = geheel(d.dagStappen);
    s.beurt = d.beurt && typeof d.beurt === 'object' ? d.beurt : {};
    var ids = SPULLEN.map(function (x) { return x.id; });
    s.aan = Array.isArray(d.aan) ? d.aan.filter(function (id) { return ids.indexOf(id) >= 0; }) : [];
    s.stempels = d.stempels && typeof d.stempels === 'object' ? d.stempels : {};
    return s;
  }
  /**
   * Samenvoegen met wat een ander tabblad intussen bewaarde (klus 771, ronde 2). ons: de toestand in dit tabblad,
   * basis: hoe de opslag eruitzag toen dit tabblad hem het laatst las of schreef, schijf: wat er nu in de opslag staat.
   * Er gaat nooit iets weg: stappen tellen op (wat dit tabblad sinds de basis verdiende komt bij die van de opslag),
   * stempels en beurten worden samen genomen. Aan en uit: wat dit tabblad veranderde, wint; anders de opslag.
   */
  function samenvoegen(ons, basis, schijf) {
    ons = schoon(ons); schijf = schoon(schijf); basis = basis ? schoon(basis) : leeg();
    var s = leeg();
    var eigen = Math.max(0, ons.stappen - basis.stappen);
    s.stappen = Math.max(ons.stappen, schijf.stappen, schijf.stappen + eigen);
    if (ons.dag === schijf.dag) {
      var eigenDag = basis.dag === ons.dag ? Math.max(0, ons.dagStappen - basis.dagStappen) : ons.dagStappen;
      s.dag = ons.dag;
      s.dagStappen = Math.max(ons.dagStappen, schijf.dagStappen, schijf.dagStappen + eigenDag);
      s.beurt = Object.assign({}, schijf.beurt, ons.beurt);
    } else {
      var w = ons.dag > schijf.dag ? ons : schijf;
      s.dag = w.dag; s.dagStappen = w.dagStappen; s.beurt = Object.assign({}, w.beurt);
    }
    s.stempels = Object.assign({}, ons.stempels, schijf.stempels);   // de eerste stempel van een thema blijft
    var veranderd = ons.aan.slice().sort().join() !== basis.aan.slice().sort().join();
    s.aan = (veranderd ? ons.aan : schijf.aan).slice();
    return s;
  }
  function nieuweDag(d, dag) {
    if (d.dag !== dag) { d.dag = dag; d.dagStappen = 0; d.beurt = {}; }
  }

  /* ------------------------------------------------------------ stappen */
  function verdiend(stappen) { return SPULLEN.filter(function (x) { return stappen >= x.drempel; }); }
  function volgende(stappen) { return SPULLEN.filter(function (x) { return stappen < x.drempel; })[0] || null; }
  function vorigeDrempel(stappen) { var v = verdiend(stappen); return v.length ? v[v.length - 1].drempel : 0; }

  /**
   * Eén nagekeken antwoord bij overhoren. p: { k: thema|item|richting, dag, aanDeBeurt, eerste, goed }.
   * aanDeBeurt: het item had nog geen stand of stand.v <= vandaag (vóór het nakijken bepaald).
   * eerste: de eerste poging aan dit item in deze sessie.
   * Geeft { stap, nieuw: het ding dat met deze stap vrijkwam of null, vol: dagmaximum bereikt }.
   */
  function poging(d, p) {
    nieuweDag(d, p.dag);
    var alGeweest = !!d.beurt[p.k];
    if (p.aanDeBeurt && p.eerste) d.beurt[p.k] = 1;   // ook bij fout: goed daarna telt vandaag niet meer
    var mag = p.goed && p.aanDeBeurt && p.eerste && !alGeweest && d.dagStappen < MAX_DAG;
    if (!mag) return { stap: false, nieuw: null, vol: d.dagStappen >= MAX_DAG };
    var voor = verdiend(d.stappen).length;
    d.stappen += 1;
    d.dagStappen += 1;
    var na = verdiend(d.stappen);
    return { stap: true, nieuw: na.length > voor ? na[na.length - 1] : null, vol: d.dagStappen >= MAX_DAG };
  }
  function vandaagStappen(d, dag) { return d.dag === dag ? d.dagStappen : 0; }

  /* ------------------------------------------------------------ spullen aan en uit */
  function spul(id) { return SPULLEN.filter(function (x) { return x.id === id; })[0] || null; }
  function heeft(d, id) { var s = spul(id); return !!s && d.stappen >= s.drempel; }
  function draagt(d, id) { return d.aan.indexOf(id) >= 0 && heeft(d, id); }
  /** Aan of uit. Aan doet uit wat op dezelfde plek zat: één ding per plek. */
  function wissel(d, id) {
    var s = spul(id);
    if (!s || !heeft(d, id)) return false;
    if (draagt(d, id)) { d.aan = d.aan.filter(function (x) { return x !== id; }); return false; }
    d.aan = d.aan.filter(function (x) { var o = spul(x); return o && o.plek !== s.plek; });
    d.aan.push(id);
    return true;
  }
  function gedragen(d) { return d.aan.filter(function (id) { return heeft(d, id); }); }

  /* ------------------------------------------------------------ stempels */
  /**
   * Zet een stempel bij elk thema dat nu helemaal in bakje 5 zit en er nog geen heeft.
   * themas: [{ uid, naam, items, url, code }], kent(thema, item) -> bool. Geeft de nieuwe stempels.
   */
  function kijkStempels(d, themas, taal, kent, dag) {
    var nieuw = [];
    themas.forEach(function (t) {
      if (!t || d.stempels[t.uid] || !t.items || t.items.length < MIN_ITEMS) return;
      if (!t.items.every(function (it) { return kent(t, it); })) return;
      var st = { taal: taal, naam: String(t.naam || ''), datum: dag, n: t.items.length, pad: themaPad(t) };
      d.stempels[t.uid] = st;
      nieuw.push(Object.assign({ uid: t.uid }, st));
    });
    return nieuw;
  }
  function themaPad(t) {
    if (t.code) return '/apps/taaloefenen/t/' + t.code + '/';
    return typeof t.url === 'string' && t.url.indexOf('/apps/taaloefenen/') === 0 ? t.url : '/apps/taaloefenen/';
  }
  function stempelLijst(d) {
    return Object.keys(d.stempels).map(function (uid) { var s = d.stempels[uid]; return s && typeof s === 'object' ? Object.assign({ uid: uid }, s) : null; })
      .filter(Boolean).sort(function (a, b) { return a.datum < b.datum ? -1 : a.datum > b.datum ? 1 : 0; });
  }
  /** Elke stempel staat iets scheef, steeds net anders en voor hetzelfde thema altijd gelijk: -6 tot 6 graden, nooit 0. */
  function hoek(uid) {
    var h = 0;
    for (var i = 0; i < uid.length; i++) h = (h * 31 + uid.charCodeAt(i)) | 0;
    var g = (Math.abs(h) % 12) - 6;
    return g >= 0 ? g + 1 : g;
  }
  /** De naam in de stempel: hooguit twee regels, op de punt-scheiding van het thema of op een spatie. */
  function stempelRegels(naam) {
    var delen = String(naam).split(/\s+·\s+/).filter(Boolean);
    if (delen.length < 2) {
      var w = String(naam).trim().split(/\s+/);
      delen = w.length > 1 && naam.length > 11 ? [w[0], w.slice(1).join(' ')] : [String(naam).trim()];
    }
    return delen.slice(0, 2).map(function (r) { return r.length > 13 ? r.slice(0, 12).replace(/\s+\S*$/, '') + '…' : r; });
  }

  var api = {
    SLEUTEL: SLEUTEL, MAX_DAG: MAX_DAG, MIN_ITEMS: MIN_ITEMS, SPULLEN: SPULLEN, LAAG_VOLGORDE: LAAG_VOLGORDE,
    leeg: leeg, schoon: schoon, samenvoegen: samenvoegen, poging: poging, verdiend: verdiend, volgende: volgende, vorigeDrempel: vorigeDrempel,
    vandaagStappen: vandaagStappen, spul: spul, heeft: heeft, draagt: draagt, wissel: wissel, gedragen: gedragen,
    kijkStempels: kijkStempels, stempelLijst: stempelLijst, hoek: hoek, stempelRegels: stempelRegels
  };

  if (typeof module !== 'undefined' && module.exports) { module.exports = api; return; }
  if (!wereld.document) return;

  /* ============================================================ browser */
  var doc = wereld.document;
  var SVG = 'http://www.w3.org/2000/svg';

  /* Eén toestand per tabblad, steeds hetzelfde object (de pagina houdt er verwijzingen naar vast). Vlak voor elke
     schrijfactie en bij het storage-event van een ander tabblad wordt de opslag opnieuw gelezen en samengevoegd. */
  var geheugen = null, basis = null, opslagWerkt = true;
  function leesSchijf() {
    try { return JSON.parse(wereld.localStorage.getItem(SLEUTEL) || 'null'); } catch (e) { opslagWerkt = false; return null; }
  }
  function zetIn(nieuw) {
    Object.keys(geheugen).forEach(function (k) { delete geheugen[k]; });
    Object.assign(geheugen, nieuw);
    basis = JSON.parse(JSON.stringify(geheugen));
  }
  api.lees = function () {
    if (geheugen) return geheugen;
    geheugen = schoon(leesSchijf());
    basis = JSON.parse(JSON.stringify(geheugen));
    return geheugen;
  };
  /** Haalt binnen wat een ander tabblad intussen bewaarde. */
  api.ververs = function () {
    api.lees();
    zetIn(samenvoegen(geheugen, basis, leesSchijf()));
    return geheugen;
  };
  api.bewaar = function () {
    api.ververs();
    try { wereld.localStorage.setItem(SLEUTEL, JSON.stringify(geheugen)); } catch (e) { opslagWerkt = false; }
  };
  wereld.addEventListener('storage', function (e) {
    if (!geheugen || (e.key !== SLEUTEL && e.key !== null)) return;
    api.ververs();
    try { doc.dispatchEvent(new CustomEvent('to-reis-bijgewerkt')); } catch (x) { /* oude browser: alleen het geheugen */ }
  });
  api.opslagWerkt = function () { return opslagWerkt; };

  /* De reiziger: Anouks lagen als gestapelde afbeeldingen. Elke laag houdt zo zijn eigen maskers en zijn eigen
     donkere kleuren, en de pagina hoeft geen inline stijl toe te staan. Een ding komt zacht in beeld via opacity en
     transform (css .to-fig .it). */
  function img(src, klasse) {
    var i = doc.createElement('img');
    i.src = src; i.alt = ''; i.width = 160; i.height = 230; i.decoding = 'async';
    if (klasse) i.className = klasse;
    return i;
  }
  function kleed(fig, aan, direct) {
    var lagen = fig.querySelectorAll('.it');
    for (var i = 0; i < lagen.length; i++) {
      var g = lagen[i];
      if (direct) g.classList.add('direct');
      g.classList.toggle('aan', aan.indexOf(g.getAttribute('data-it')) >= 0);
    }
    if (direct) { fig.getBoundingClientRect(); for (var j = 0; j < lagen.length; j++) lagen[j].classList.remove('direct'); }
  }

  /** De reiziger met wat hij nu draagt. */
  api.figuur = function (aan) {
    var box = doc.createElement('span');
    box.className = 'to-fig';
    box.setAttribute('aria-hidden', 'true');
    box.appendChild(img(MAP + 'lagen/reiziger-basis.svg', 'basis'));
    LAAG_VOLGORDE.slice(1).forEach(function (plek) {
      SPULLEN.filter(function (x) { return x.plek === plek; }).forEach(function (x) {
        var l = img(MAP + 'lagen/' + x.plek + '-' + x.id + '.svg', 'it');
        l.setAttribute('data-it', x.id);
        box.appendChild(l);
      });
    });
    kleed(box, aan || [], true);
    return box;
  };
  api.kleed = function (fig, aan) { kleed(fig, aan, false); };
  api.icoon = function (id) {
    var x = spul(id);
    var i = img(MAP + 'iconen/' + (x ? x.plek + '-' + x.id : 'dicht') + '.svg', 'to-icoon');
    i.width = 48; i.height = 48;
    return i;
  };

  /** Een voetstapje voor de stapregel. */
  api.voetstap = function () {
    var s = doc.createElementNS(SVG, 'svg');
    s.setAttribute('viewBox', '0 0 20 20'); s.setAttribute('class', 'to-voetstap');
    s.setAttribute('aria-hidden', 'true'); s.setAttribute('focusable', 'false');
    [[6.5, 7.5], [13.5, 12.5]].forEach(function (c) {
      var e = doc.createElementNS(SVG, 'ellipse');
      e.setAttribute('cx', c[0]); e.setAttribute('cy', c[1]); e.setAttribute('rx', 3); e.setAttribute('ry', 4.6);
      s.appendChild(e);
    });
    return s;
  };

  var teller = 0;
  /** Een stempel. o: { uid, taal, naam, datum (JJJJ-MM-DD) } of met open: true en deel ("6 / 20"). Rond voor Frans,
      rechthoekig voor Duits; de letters zijn versiering, de naam staat er altijd ook in gewone tekst naast. */
  api.stempel = function (o) {
    teller += 1;
    var de = o.taal === 'duits';
    var s = doc.createElementNS(SVG, 'svg');
    s.setAttribute('viewBox', '0 0 150 150');
    s.setAttribute('class', 'to-st ' + (o.open ? 'to-st-open' : de ? 'to-st-de' : 'to-st-fr'));
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('focusable', 'false');
    var g = doc.createElementNS(SVG, 'g');
    g.setAttribute('transform', 'rotate(' + hoek(String(o.uid || o.naam)) + ' 75 75)');
    function el(tag, attr, tekst) {
      var e = doc.createElementNS(SVG, tag);
      Object.keys(attr).forEach(function (k) { e.setAttribute(k, attr[k]); });
      if (tekst !== undefined) e.textContent = tekst;
      g.appendChild(e);
      return e;
    }
    var stip = o.open ? { 'stroke-dasharray': '6 5' } : {};
    function rand(attr) { return Object.assign(attr, stip); }
    if (!de) {
      el('circle', rand({ cx: 75, cy: 75, r: 68, fill: 'none', stroke: 'currentColor', 'stroke-width': 3 }));
      el('circle', rand({ cx: 75, cy: 75, r: 51, fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }));
      var id = 'to-sp' + teller;
      el('path', { id: id, d: 'M75 75 m-56 0 a56 56 0 1 1 112 0 a56 56 0 1 1 -112 0', fill: 'none' });
      var t = el('text', { 'class': 'to-st-mono', 'font-size': 10.5, 'letter-spacing': 1.5, fill: 'currentColor' });
      var tp = doc.createElementNS(SVG, 'textPath');
      tp.setAttribute('href', '#' + id);
      tp.setAttribute('textLength', '350');
      tp.textContent = 'FRANS · TAALOEFENEN · AI-LEERLAB · ';
      t.appendChild(tp);
    } else {
      el('rect', rand({ x: 7, y: 20, width: 136, height: 110, rx: 10, fill: 'none', stroke: 'currentColor', 'stroke-width': 3 }));
      el('rect', rand({ x: 15, y: 28, width: 120, height: 94, rx: 5, fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5 }));
      el('text', { 'class': 'to-st-mono', x: 75, y: 47, 'text-anchor': 'middle', 'font-size': 10.5, 'letter-spacing': 4, fill: 'currentColor' }, 'DUITS');
      el('path', { d: 'M30 54 H120', stroke: 'currentColor', 'stroke-width': 1 });
    }
    var regels = o.regels || stempelRegels(o.naam);
    regels.forEach(function (r, i) {
      var y = (regels.length === 1 ? 82 : 73 + i * 19) + (de ? 2 : 0);
      el('text', { 'class': 'to-st-sans', x: 75, y: y, 'text-anchor': 'middle', 'font-size': r.length > 9 ? 13.5 : r.length > 7 ? 15 : 17, fill: 'currentColor' }, r);
    });
    var onder = o.open ? (o.deel || '') : kortDatum(o.datum);
    if (onder) el('text', { 'class': 'to-st-mono', x: 75, y: de ? 114 : 110, 'text-anchor': 'middle', 'font-size': 11, 'letter-spacing': 1, fill: 'currentColor' }, onder);
    s.appendChild(g);
    return s;
  };
  function kortDatum(d) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || ''); return m ? m[3] + '.' + m[2] + '.' + m[1].slice(2) : ''; }
  var MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  api.langeDatum = function (d, vandaag) {
    if (d === vandaag) return 'vandaag';
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || '');
    if (!m) return '';
    var t = parseInt(m[3], 10) + ' ' + MAANDEN[parseInt(m[2], 10) - 1];
    return vandaag && vandaag.slice(0, 4) !== m[1] ? t + ' ' + m[1] : t;
  };

  wereld.TOReis = api;
})(this);
