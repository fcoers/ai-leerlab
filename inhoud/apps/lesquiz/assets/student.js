/* Lesquiz, studentpagina. Leest ?les=CODE, haalt de vragen op, en verstuurt naam en antwoorden.
   Naam onthouden gebeurt alleen op de telefoon zelf (localStorage), en alleen als het vinkje aan staat.
   Wisselen van scherm: het oude vervaagt (ease-in), het nieuwe komt op (ease-out, in de css). Bij minder
   beweging springt alles direct. */
(function () {
  'use strict';
  var API = '/apps/lesquiz/api/';
  var minder = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var params = new URLSearchParams(location.search);
  var code = (params.get('les') || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  var les = null;
  var huidig = document.querySelector('[data-staat="laden"]');

  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }

  function opslag(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; }
  }
  function toestel() {
    var t = opslag('lesquiz:toestel');
    if (!t || !/^[A-Za-z0-9_-]{16,64}$/.test(t)) {
      var a = new Uint8Array(18); crypto.getRandomValues(a);
      t = Array.prototype.map.call(a, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
      opslag('lesquiz:toestel', t);
    }
    return t;
  }

  function toon(naam, focus) {
    var nieuw = $('[data-staat="' + naam + '"]');
    var oud = huidig;
    huidig = nieuw;
    function wissel() {
      if (oud && oud !== nieuw) { oud.hidden = true; oud.classList.remove('is-weg'); }
      nieuw.hidden = false;
      window.scrollTo(0, 0);
      var f = focus ? $(focus, nieuw) : $('h1', nieuw);
      if (f) f.focus({ preventScroll: true });
    }
    if (oud && oud !== nieuw && !oud.hidden && !minder) {
      // Eerst de lopende binnenkomst-animatie los, dan de stand vastleggen, dan zacht weg (ease-in, 200 ms).
      oud.style.animation = 'none';
      oud.style.opacity = getComputedStyle(oud).opacity;
      void oud.offsetHeight;
      oud.style.animation = ''; oud.style.opacity = '';
      oud.classList.add('is-weg');
      setTimeout(wissel, 210);
    } else wissel();
  }

  function vul(sel, tekst) { $$(sel).forEach(function (el) { el.textContent = tekst; }); }

  function laad() {
    if (!code) { toon('code', '#lescode'); return; }
    fetch(API + 'les.php?code=' + encodeURIComponent(code), { cache: 'no-store' })
      .then(function (r) { return r.json().then(function (j) { return { status: r.status, j: j }; }); })
      .then(function (res) {
        if (res.status === 404) {
          toon('code', '#lescode');
          var f = $('[data-codefout]'); f.textContent = res.j.fout; f.hidden = false;
          $('#lescode').value = code; $('#lescode').setAttribute('aria-invalid', 'true');
          return;
        }
        if (!res.j.ok) throw new Error(res.j.fout);
        les = res.j;
        vul('[data-vak]', les.vak);
        vul('[data-titel]', les.titel);
        document.title = les.titel + ' · Lesquiz';
        if (!les.open) { toon('dicht'); return; }
        bouwQuiz();
        toon('quiz');
      })
      .catch(function () { fout('Geen verbinding. Controleer je internet en probeer het opnieuw.'); });
  }

  function bouwQuiz() {
    var doos = $('[data-vragen]');
    doos.textContent = '';
    les.vragen.forEach(function (v, i) {
      var fs = document.createElement('fieldset');
      fs.className = 'lq-vraag';
      fs.id = 'vraag' + i;
      var lg = document.createElement('legend');
      var lb = document.createElement('span'); lb.className = 'label'; lb.textContent = 'Vraag ' + (i + 1) + ' van ' + les.vragen.length;
      var vt = document.createElement('span'); vt.className = 'lq-vraagtekst'; vt.textContent = v.vraag;
      lg.appendChild(lb); lg.appendChild(vt); fs.appendChild(lg);
      var lijst = document.createElement('div'); lijst.className = 'lq-keuzes';
      v.opties.forEach(function (o, j) {
        var l = document.createElement('label'); l.className = 'lq-keuze';
        var inp = document.createElement('input'); inp.type = 'radio'; inp.name = 'v' + i; inp.value = String(j);
        var rond = document.createElement('span'); rond.className = 'lq-rond'; rond.setAttribute('aria-hidden', 'true');
        var t = document.createElement('span'); t.textContent = o;
        l.appendChild(inp); l.appendChild(rond); l.appendChild(t);
        lijst.appendChild(l);
      });
      fs.appendChild(lijst);
      doos.appendChild(fs);
    });
    $('[data-privacy]').textContent = 'Wat er wordt bewaard: je naam, je antwoorden en het tijdstip. Alleen je docent ziet ze, '
      + 'het dashboard in de les toont alleen aantallen. Na ' + les.bewaar_dagen + ' dagen worden ze gewist.';
    var vv = opslag('lesquiz:voornaam'), an = opslag('lesquiz:achternaam');
    if (vv) $('#voornaam').value = vv;
    if (an) $('#achternaam').value = an;
  }

  function veldFout(id, tekst) {
    var inp = $('#' + id), p = $('#' + id + '-fout');
    if (tekst) { inp.setAttribute('aria-invalid', 'true'); inp.setAttribute('aria-describedby', id + '-fout'); p.textContent = tekst; p.hidden = false; }
    else { inp.removeAttribute('aria-invalid'); inp.removeAttribute('aria-describedby'); p.hidden = true; }
  }

  $('[data-quiz]').addEventListener('submit', function (e) {
    e.preventDefault();
    var formfout = $('[data-formfout]');
    formfout.hidden = true;
    var eerste = null;
    var vn = $('#voornaam').value.trim(), an = $('#achternaam').value.trim();
    veldFout('voornaam', vn ? '' : 'Vul je voornaam in.');
    veldFout('achternaam', an ? '' : 'Vul je achternaam in.');
    if (!vn) eerste = $('#voornaam'); else if (!an) eerste = $('#achternaam');
    var antwoorden = les.vragen.map(function (v, i) {
      var c = $('input[name="v' + i + '"]:checked');
      var fs = $('#vraag' + i);
      if (!c) { fs.setAttribute('aria-invalid', 'true'); if (!eerste) eerste = $('input', fs); }
      else fs.removeAttribute('aria-invalid');
      return c ? parseInt(c.value, 10) : null;
    });
    if (eerste) {
      var open = antwoorden.filter(function (a) { return a === null; }).length;
      formfout.textContent = (!vn || !an ? 'Vul je naam in' + (open ? ' en beantwoord alle vragen.' : '.') : 'Beantwoord nog ' + (open === 1 ? 'één vraag.' : open + ' vragen.'));
      formfout.hidden = false;
      eerste.focus();
      eerste.scrollIntoView({ behavior: minder ? 'auto' : 'smooth', block: 'center' });
      return;
    }
    if ($('input[name="onthoud"]').checked) { opslag('lesquiz:voornaam', vn); opslag('lesquiz:achternaam', an); }
    else { opslag('lesquiz:voornaam', null); opslag('lesquiz:achternaam', null); }
    var knop = $('[data-verstuur]');
    knop.disabled = true; knop.textContent = 'Versturen…';
    fetch(API + 'inzenden.php', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, cache: 'no-store',
      body: JSON.stringify({ code: code, voornaam: vn, achternaam: an, antwoorden: antwoorden, toestel: toestel() })
    }).then(function (r) { return r.json().then(function (j) { return { status: r.status, j: j }; }); })
      .then(function (res) {
        knop.disabled = false; knop.textContent = 'Versturen';
        if (res.j.ok) { $('[data-gelukt-titel]').textContent = 'Gelukt, ' + vn; toon('gelukt'); return; }
        if (res.status === 409 && /gesloten/.test(res.j.fout)) { toon('dicht'); return; }
        formfout.textContent = res.j.fout || 'Versturen lukte niet. Probeer het opnieuw.';
        formfout.hidden = false;
        formfout.scrollIntoView({ behavior: minder ? 'auto' : 'smooth', block: 'center' });
      })
      .catch(function () {
        knop.disabled = false; knop.textContent = 'Versturen';
        formfout.textContent = 'Geen verbinding. Je antwoorden staan er nog; probeer het opnieuw.';
        formfout.hidden = false;
      });
  });

  $('[data-codeformulier]').addEventListener('submit', function (e) {
    e.preventDefault();
    var c = $('#lescode').value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!c) { var f = $('[data-codefout]'); f.textContent = 'Typ de code van de dia.'; f.hidden = false; return; }
    code = c;
    history.replaceState(null, '', '?les=' + c);
    $('[data-codefout]').hidden = true;
    laad();
  });

  ['voornaam', 'achternaam'].forEach(function (id) {
    $('#' + id).addEventListener('input', function () { if (this.value.trim()) { veldFout(id, ''); misschienKlaar(); } });
  });
  $('[data-vragen]').addEventListener('change', function (e) {
    var fs = e.target.closest('fieldset'); if (fs) fs.removeAttribute('aria-invalid');
    misschienKlaar();
  });
  function misschienKlaar() {
    if (!$$('fieldset.lq-vraag[aria-invalid]').length && !$$('.lq-namen [aria-invalid]').length) $('[data-formfout]').hidden = true;
  }

  $$('[data-opnieuw]').forEach(function (k) { k.addEventListener('click', function () { toon('laden'); laad(); }); });

  function fout(t) { $('[data-foutmelding]').textContent = t; toon('fout'); }

  laad();
})();
