/* Zelftest "Welk Human-AI-label past bij jou?" op ai-leerlab.nl (Roel, 03-10-2026).
   Scoring en uitslagregel: Dide, Leveringen/_bron/Zelftest Human-AI-label.md, deel B.
   Alles gebeurt hier in de browser: er wordt niets verstuurd en niets opgeslagen (geen localStorage, geen cookies).
   Eén vraag per scherm; de vragen staan als gewone fieldsets in de HTML, dit script toont er steeds één.
   Zonder JavaScript blijft het formulier verborgen (hidden) en staat er een melding (noscript). */
(function () {
  'use strict';

  // Volgorde van de bron (1 tot en met 9); ook de laatste beslisser bij gelijke stand.
  var SLEUTELS = ['OFF', 'TRU', 'SC', 'CV', 'PU', 'REF', 'CC', 'CD', 'ED'];

  // Punten per vraag en antwoord (deel B, tabel "Punten per antwoord").
  var PUNTEN = {
    1: { A: { OFF: 2, REF: 1 }, B: { CC: 2, PU: 1 }, C: { CD: 2, SC: 1 }, D: { TRU: 2, CV: 1 }, E: { ED: 3 } },
    2: { A: { OFF: 2 }, B: { REF: 2 }, C: { CC: 2 }, D: { CD: 2, TRU: 1 }, E: { ED: 2, SC: 1 } },
    3: { A: { TRU: 2, OFF: 1 }, B: { SC: 3 }, C: { CV: 3 }, D: { PU: 2, CV: 1 }, E: { ED: 2 } },
    4: { A: {}, B: { PU: 2 }, C: { PU: 2, CV: 1 }, D: { PU: 2, CD: 1 } },
    5: { A: { OFF: 3 }, B: { CD: 2, TRU: 1 }, C: { REF: 3 }, D: { CC: 2 }, E: { ED: 2, SC: 1 } },
    6: { A: { OFF: 1, TRU: 1, ED: 1 }, B: { CC: 3 }, C: { CD: 3 }, D: { PU: 3 }, E: { REF: 3 } },
    7: { A: { OFF: 2, PU: 1 }, B: { CC: 2, CD: 1 }, C: { REF: 2, SC: 1 }, D: { SC: 3, ED: 1 }, E: { CV: 3 }, F: { TRU: 2, OFF: 1 } },
    8: { A: { OFF: 2 }, B: { CV: 2, SC: 1 }, C: { REF: 2, TRU: 1 }, D: { CD: 2, ED: 1 }, E: { CC: 2 }, F: { PU: 2 } },
    9: { A: { TRU: 2, OFF: 1 }, B: { CV: 3 }, C: { SC: 2, CD: 1 }, D: { ED: 2 }, E: { PU: 2, CV: 1 } },
    10: { A: { OFF: 2 }, B: { TRU: 2 }, C: { SC: 2 }, D: { CV: 2 }, E: { PU: 2 }, F: { REF: 2 }, G: { CC: 2 }, H: { CD: 2 }, I: { ED: 2 } }
  };
  var AANTAL = 10;
  var TWEEDE_MARGE = 2;   // een tweede label alleen als de som hooguit zoveel lager is

  function punten(vraag, antwoord) { return (PUNTEN[vraag] && PUNTEN[vraag][antwoord]) || {}; }

  /* antwoorden: tien letters, vraag 1 tot en met 10 (bv. ['A','A',...]).
     Geeft { eerste, tweede, gelijk }: sleutels; tweede is null als die er niet is;
     gelijk = true als de stand niet te beslissen was (dan zijn eerste en tweede de twee gelijke labels). */
  function uitslag(antwoorden) {
    var som = {};
    SLEUTELS.forEach(function (k) { som[k] = 0; });
    for (var v = 1; v <= AANTAL; v++) {
      var p = punten(v, antwoorden[v - 1]);
      for (var k in p) som[k] += p[k];
    }
    var hoogste = Math.max.apply(null, SLEUTELS.map(function (k) { return som[k]; }));
    var kop = SLEUTELS.filter(function (k) { return som[k] === hoogste; });
    var eerste = null, gelijk = false;

    if (kop.length === 1) {
      eerste = kop[0];
    } else {
      // Stap 1: het label dat punten kreeg uit vraag 10 (de eigen omschrijving).
      var p10 = punten(10, antwoorden[9]);
      var uit10 = kop.filter(function (k) { return p10[k]; });
      if (uit10.length === 1) {
        eerste = uit10[0];
      } else {
        // Stap 2: de meeste punten uit vraag 8 (wat je belangrijk vond).
        var p8 = punten(8, antwoorden[7]);
        var best = Math.max.apply(null, kop.map(function (k) { return p8[k] || 0; }));
        var uit8 = best > 0 ? kop.filter(function (k) { return (p8[k] || 0) === best; }) : kop;
        if (uit8.length === 1) {
          eerste = uit8[0];
        } else {
          // Stap 3: niet te beslissen; volgorde van de sleuteltabel.
          gelijk = true;
          return { eerste: uit8[0], tweede: uit8[1], gelijk: true, som: som };
        }
      }
    }
    // Tweede label: hoogste som na het eerste, bij gelijke som de volgorde van de sleuteltabel.
    var rest = SLEUTELS.filter(function (k) { return k !== eerste; });
    var tweede = rest.reduce(function (a, b) { return som[b] > som[a] ? b : a; });
    if (som[eerste] - som[tweede] > TWEEDE_MARGE) tweede = null;
    return { eerste: eerste, tweede: tweede, gelijk: gelijk, som: som };
  }

  // Voor de testgevallen in Node (node zelftest-check.js); in de browser bestaat module niet.
  if (typeof module !== 'undefined' && module.exports) module.exports = { uitslag: uitslag, SLEUTELS: SLEUTELS };
  if (typeof document === 'undefined') return;

  // ------------------------------------------------------------ pagina
  var form = document.getElementById('zelftest');
  if (!form) return;
  var vragen = Array.prototype.slice.call(form.querySelectorAll('.zt-vraag'));
  var taakBlok = document.getElementById('zt-taak-blok');
  var taakVeld = document.getElementById('zt-taak');
  var teller = document.getElementById('zt-teller');
  var balk = document.getElementById('zt-balk-vul');
  var fout = document.getElementById('zt-fout');
  var vorige = document.getElementById('zt-vorige');
  var volgende = document.getElementById('zt-volgende');
  var uitslagBlok = document.getElementById('zt-uitslag');
  var kop = document.getElementById('zt-uitslag-kop');
  var labelNaam = document.getElementById('zt-label');
  var taakTerug = document.getElementById('zt-taak-terug');
  var tweedeZin = document.getElementById('zt-tweede');
  var gelijkZin = document.getElementById('zt-gelijk');
  var teksten = {};
  Array.prototype.forEach.call(document.querySelectorAll('.zt-labeltekst'), function (d) {
    teksten[d.getAttribute('data-sleutel')] = d;
  });
  var huidig = 0;

  function naam(k) { return teksten[k].getAttribute('data-naam'); }
  function anker(k) { return '#' + teksten[k].getAttribute('data-anker'); }
  function gekozen(i) {
    var r = vragen[i].querySelector('input:checked');
    return r ? r.value : null;
  }
  function zetLink(a, k) { a.textContent = naam(k); a.setAttribute('href', anker(k)); }

  function toon(i, focus) {
    huidig = i;
    vragen.forEach(function (f, n) { f.hidden = n !== i; });
    taakBlok.hidden = i !== 0;
    teller.textContent = 'Vraag ' + (i + 1) + ' van ' + AANTAL;
    balk.style.transform = 'scaleX(' + ((i + 1) / AANTAL) + ')';
    vorige.hidden = i === 0;
    volgende.textContent = i === AANTAL - 1 ? 'Bekijk je uitslag' : 'Volgende vraag';
    fout.textContent = '';
    if (focus) {
      // De focus naar het gekozen antwoord, of het eerste: een schermlezer leest dan de vraag (legend) voor.
      var r = vragen[i].querySelector('input:checked') || vragen[i].querySelector('input');
      r.focus();
      form.scrollIntoView({ block: 'start' });
    }
  }

  function verder() {
    if (!gekozen(huidig)) {
      fout.textContent = 'Kies eerst een antwoord.';
      vragen[huidig].querySelector('input').focus();
      return;
    }
    if (huidig < AANTAL - 1) toon(huidig + 1, true);
    else toonUitslag();
  }

  function toonUitslag() {
    var antwoorden = vragen.map(function (f, i) { return gekozen(i); });
    var u = uitslag(antwoorden);
    Object.keys(teksten).forEach(function (k) { teksten[k].hidden = true; });
    var taak = taakVeld.value.trim();
    taakTerug.hidden = !taak;
    taakTerug.textContent = taak ? 'Je taak: ' + taak : '';
    tweedeZin.hidden = true;
    gelijkZin.hidden = true;
    if (u.gelijk) {
      labelNaam.textContent = naam(u.eerste) + ' of ' + naam(u.tweede);
      zetLink(document.getElementById('zt-gelijk-1'), u.eerste);
      zetLink(document.getElementById('zt-gelijk-2'), u.tweede);
      gelijkZin.hidden = false;
      teksten[u.eerste].hidden = false;
      teksten[u.tweede].hidden = false;
    } else {
      labelNaam.textContent = naam(u.eerste);
      teksten[u.eerste].hidden = false;
      if (u.tweede) {
        zetLink(document.getElementById('zt-tweede-label'), u.tweede);
        tweedeZin.hidden = false;
      }
    }
    form.hidden = true;
    uitslagBlok.hidden = false;
    kop.focus();
    uitslagBlok.scrollIntoView({ block: 'start' });
  }

  function opnieuw() {
    form.reset();
    uitslagBlok.hidden = true;
    form.hidden = false;
    toon(0, true);
  }

  volgende.addEventListener('click', verder);
  vorige.addEventListener('click', function () { if (huidig > 0) toon(huidig - 1, true); });
  document.getElementById('zt-opnieuw').addEventListener('click', opnieuw);
  // Enter in het taakveld of op een antwoord: naar de volgende vraag in plaats van het formulier te versturen.
  form.addEventListener('submit', function (e) { e.preventDefault(); verder(); });
  form.addEventListener('change', function () { fout.textContent = ''; });

  form.hidden = false;
  toon(0, false);
})();
