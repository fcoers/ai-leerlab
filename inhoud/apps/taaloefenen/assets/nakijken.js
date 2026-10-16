/* Taaloefenen: nakijken en bakjes, zonder DOM. Didactische basis (Dide), hoofdstuk 2 en 3.
   Goed: precies gelijk aan het antwoord of een alternatief, na gelijkmaken (spaties, apostrof, leesteken aan het eind).
   Bijna goed: alleen fout in accent, hoofdletter (alleen Duitse zelfstandige naamwoorden), umlaut of ß, of lidwoord vergeten.
   Fout: al het andere. Ook in node te laden voor de tests (module.exports). */
(function (wereld) {
  'use strict';

  var LIDWOORDEN = {
    fr: ['le', 'la', 'les', "l'", 'un', 'une', 'des'],
    de: ['der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'einer'],
    nl: ['de', 'het', 'een', "'t"]
  };
  var REDEN_TEKST = { accent: 'het accent', umlaut: 'de umlaut', ss: 'de ß', hoofdletter: 'de hoofdletter', lidwoord: 'het lidwoord' };

  /** Beide antwoorden gelijkmaken: NFC, rechte apostrof, enkele spaties, geen spatie na een apostrof, geen leesteken aan het eind. */
  function gelijkmaken(s) {
    s = String(s == null ? '' : s);
    if (s.normalize) s = s.normalize('NFC');
    s = s.replace(/[’‘ʼ`´]/g, "'").replace(/[\s ]+/g, ' ').trim();
    s = s.replace(/' /g, "'");
    s = s.replace(/[\s.!?,;:…]+$/, '');
    return s;
  }

  function klein(s, taal) {
    try { return s.toLocaleLowerCase(taal); } catch (e) { return s.toLowerCase(); }
  }

  /* Vouwen: elk maakt één soort verschil onzichtbaar. Op kleine letters. */
  function zonderAccent(s, taal) {
    // accenten weg, behalve ä ö ü in het Duits (dat is de umlaut-vouw) en ß
    s = s.replace(/œ/g, 'oe').replace(/æ/g, 'ae');
    if (!s.normalize) return s;
    var uit = '';
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (taal === 'de' && /[äöü]/.test(c)) { uit += c; continue; }
      uit += c.normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    return uit;
  }
  function umlautA(s) { return s.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u'); }
  function umlautAe(s) { return s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue'); }
  function zonderSz(s) { return s.replace(/ß/g, 'ss'); }

  /** Kleinste set vouwen waarmee twee (kleine) teksten gelijk worden. null als dat niet lukt. */
  function redenenVouw(u, e, taal) {
    if (u === e) return [];
    var sets = taal === 'de'
      ? [['ss'], ['umlaut'], ['accent'], ['umlaut', 'ss'], ['accent', 'ss'], ['accent', 'umlaut'], ['accent', 'umlaut', 'ss']]
      : [['accent']];
    for (var i = 0; i < sets.length; i++) {
      var set = sets[i];
      var varianten = set.indexOf('umlaut') >= 0 ? [umlautA, umlautAe] : [null];
      for (var j = 0; j < varianten.length; j++) {
        var f = function (s) {
          if (set.indexOf('accent') >= 0) s = zonderAccent(s, taal);
          if (varianten[j]) s = varianten[j](s);
          if (set.indexOf('ss') >= 0) s = zonderSz(s);
          return s;
        };
        // Het antwoord van de leerling krijgt bij de umlaut beide vormen (hij kan ä, a of ae typen).
        var uu = f(u), ee = f(e);
        if (uu === ee) return set.slice();
        if (varianten[j] === umlautAe && umlautA(uu) === umlautA(ee)) return set.slice();
      }
    }
    return null;
  }

  /** Duits: woorden die in het antwoord met een hoofdletter beginnen, moeten dat ook bij de leerling (behalve het eerste woord van een zin). */
  function hoofdletterFout(u, e, taal, soort) {
    if (taal !== 'de') return false;
    if (soort !== 'woord' && soort !== 'zin') return false;
    var uw = u.split(' '), ew = e.split(' ');
    if (uw.length !== ew.length) return false;
    for (var i = 0; i < ew.length; i++) {
      if (soort === 'zin' && i === 0) continue;
      var a = ew[i].charAt(0), b = uw[i].charAt(0);
      // het antwoord begint met een hoofdletter, de leerling typte een kleine letter (Ä tegenover Ae telt hier niet)
      if (a !== a.toLowerCase() && b !== b.toUpperCase()) return true;
    }
    return false;
  }

  /** Splitst een lidwoord af: { lidwoord, rest } of null. */
  function splitsLidwoord(s, taal) {
    var lijst = LIDWOORDEN[taal] || [];
    var k = klein(s, taal);
    for (var i = 0; i < lijst.length; i++) {
      var l = lijst[i];
      if (l.slice(-1) === "'") {
        if (k.indexOf(l) === 0 && k.length > l.length) return { lidwoord: s.slice(0, l.length), rest: s.slice(l.length) };
      } else if (k.indexOf(l + ' ') === 0 && k.length > l.length + 1) {
        return { lidwoord: s.slice(0, l.length), rest: s.slice(l.length + 1) };
      }
    }
    return null;
  }

  /** Vergelijkt zonder het lidwoord-geval: { uitkomst, redenen }. */
  function vergelijkKaal(u, e, taal, soort) {
    var ku = klein(u, taal), ke = klein(e, taal);
    var r = redenenVouw(ku, ke, taal);
    if (!r) return { uitkomst: 'fout', redenen: [] };
    if (hoofdletterFout(u, e, taal, soort)) r.push('hoofdletter');
    return { uitkomst: r.length ? 'bijna' : 'goed', redenen: r };
  }

  /**
   * Vergelijkt het antwoord van de leerling met één goed antwoord.
   * taal: 'fr', 'de' of 'nl' (de taal van het antwoord). soort: woord, zin, vervoeging-zin, vervoeging-kort.
   */
  function vergelijk(invoer, goed, taal, soort) {
    var u = gelijkmaken(invoer), e = gelijkmaken(goed);
    if (!u) return { uitkomst: 'fout', redenen: [] };
    var uit = vergelijkKaal(u, e, taal, soort);
    if (uit.uitkomst !== 'fout' || soort !== 'woord') return uit;
    // Lidwoord vergeten: het antwoord heeft er een, de leerling niet, en de rest klopt (bijna).
    var se = splitsLidwoord(e, taal);
    if (se && !splitsLidwoord(u, taal)) {
      var rest = vergelijkKaal(u, gelijkmaken(se.rest), taal, soort);
      if (rest.uitkomst !== 'fout') return { uitkomst: 'bijna', redenen: ['lidwoord'].concat(rest.redenen) };
    }
    return uit;
  }

  var RANG = { goed: 2, bijna: 1, fout: 0 };

  /**
   * Kijkt na tegen alle goede antwoorden. Geeft { uitkomst, redenen, goed } met in goed het antwoord dat
   * de leerling te zien krijgt: het dichtstbijzijnde bij bijna goed, anders het eerste.
   */
  function kijkNa(invoer, goedeAntwoorden, taal, soort) {
    var best = null;
    for (var i = 0; i < goedeAntwoorden.length; i++) {
      var r = vergelijk(invoer, goedeAntwoorden[i], taal, soort);
      r.goed = goedeAntwoorden[i];
      if (!best || RANG[r.uitkomst] > RANG[best.uitkomst]) best = r;
      if (best.uitkomst === 'goed') break;
    }
    return best || { uitkomst: 'fout', redenen: [], goed: '' };
  }

  /** "let op het accent en de hoofdletter" */
  function redenZin(redenen) {
    var t = redenen.map(function (r) { return REDEN_TEKST[r]; });
    if (!t.length) return '';
    if (t.length === 1) return 'let op ' + t[0];
    return 'let op ' + t.slice(0, -1).join(', ') + ' en ' + t[t.length - 1];
  }

  /**
   * Welke letters wijken af: langste gemeenschappelijke deelreeks per teken.
   * Geeft { jij: [{t, af}], goed: [{t, af}] }. Is minder dan de helft gelijk, dan is alles afwijkend.
   */
  function verschil(a, b) {
    a = Array.from(gelijkmaken(a)); b = Array.from(gelijkmaken(b));
    var n = a.length, m = b.length, i, j;
    var L = [];
    for (i = 0; i <= n; i++) { L.push(new Array(m + 1).fill(0)); }
    for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--) {
      L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    }
    var ja = new Array(n).fill(true), jb = new Array(m).fill(true);
    i = 0; j = 0;
    while (i < n && j < m) {
      if (a[i] === b[j]) { ja[i] = false; jb[j] = false; i++; j++; }
      else if (L[i + 1][j] >= L[i][j + 1]) i++;
      else j++;
    }
    var heel = L[0][0] < Math.max(n, m) / 2;
    function stukken(t, af) {
      var uit = [];
      t.forEach(function (c, k) {
        var x = heel || af[k];
        if (uit.length && uit[uit.length - 1].af === x) uit[uit.length - 1].t += c;
        else uit.push({ t: c, af: x });
      });
      return uit;
    }
    return { jij: stukken(a, ja), goed: stukken(b, jb) };
  }

  /* ---------------------------------------------------------------- bakjes (Leitner) */
  var INTERVAL = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14 };

  function datum(d) {
    var p = function (x) { return (x < 10 ? '0' : '') + x; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }
  function plusDagen(dag, n) {
    var d = new Date(dag + 'T12:00:00');
    d.setDate(d.getDate() + n);
    return datum(d);
  }

  /**
   * Nieuwe stand na een uitkomst. stand: { b, v, f, l } of null (nieuw item, bakje 1).
   * Goed: een bakje verder. Bijna goed: blijft staan. Fout: terug naar 1, aantal fout erbij.
   */
  function naUitkomst(stand, uitkomst, vandaag) {
    var s = stand ? { b: stand.b, v: stand.v, f: stand.f || 0, l: stand.l } : { b: 1, v: vandaag, f: 0, l: vandaag };
    if (uitkomst === 'goed') s.b = Math.min(5, s.b + 1);
    else if (uitkomst === 'fout') { s.b = 1; s.f += 1; }
    s.v = plusDagen(vandaag, INTERVAL[s.b]);
    s.l = vandaag;
    return s;
  }

  var api = {
    gelijkmaken: gelijkmaken, vergelijk: vergelijk, kijkNa: kijkNa, verschil: verschil, redenZin: redenZin,
    splitsLidwoord: splitsLidwoord, naUitkomst: naUitkomst, plusDagen: plusDagen, datum: datum, INTERVAL: INTERVAL
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else wereld.TONakijken = api;
})(this);
