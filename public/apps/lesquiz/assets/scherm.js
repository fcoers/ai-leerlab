/* Lesquiz, klasweergave en dashboard. Haalt elke 3 seconden de stand op met de geheime schermsleutel (?s=...).
   Toont alleen aantallen. Zonder verbinding blijft de laatste stand staan, met een kleine melding.
   Twee weergaven: de instructie voor studenten (standaard) en de uitslag (?weergave=uitslag, zo opent het
   PowerPoint-kader). Wisselen met de knop, U en I, of pijltjes en PageUp/PageDown van een presenter.
   ?qr=nee verbergt de QR-code op de uitslag; toets F = volledig scherm, Q = QR-code op de uitslag aan/uit. */
(function () {
  'use strict';
  var params = new URLSearchParams(location.search);
  var s = params.get('s') || '';
  var metQR = params.get('qr') !== 'nee';
  var root = document.querySelector('[data-scherm]');
  var lijst = document.querySelector('[data-vragen]');
  var melding = document.querySelector('[data-melding]');
  var qrVoor = '';
  var rijen = [];
  var fouten = 0;
  var laatste = null;

  function $(x) { return document.querySelector(x); }
  var SLOT = { open: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
               dicht: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>' };

  function status(open, sel) {
    var el = $(sel || '[data-status]');
    el.hidden = false;
    el.className = 'sc-status' + (open ? ' is-open' : '');
    el.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (open ? SLOT.open : SLOT.dicht) + '</svg>';
    el.appendChild(document.createTextNode(open ? 'Open' : 'Gesloten'));
  }

  function bouwRijen(vragen) {
    lijst.textContent = '';
    rijen = vragen.map(function (v, i) {
      var li = document.createElement('li'); li.className = 'sc-vraag';
      var kop = document.createElement('p'); kop.className = 'sc-vraagkop';
      var b = document.createElement('b'); b.textContent = 'Vraag ' + (i + 1);
      kop.appendChild(b); kop.appendChild(document.createTextNode(v.vraag));
      var getal = document.createElement('p'); getal.className = 'sc-getal';
      var baan = document.createElement('div'); baan.className = 'sc-baan'; baan.setAttribute('aria-hidden', 'true');
      var balk = document.createElement('div'); balk.className = 'sc-balk';
      baan.appendChild(balk);
      li.appendChild(kop); li.appendChild(getal); li.appendChild(baan);
      lijst.appendChild(li);
      return { getal: getal, balk: balk, tekst: v.vraag };
    });
  }

  function teken(d) {
    $('[data-vak]').textContent = d.vak;
    $('[data-titel]').textContent = d.titel;
    document.title = d.titel + ' · Lesquiz';
    status(d.open);
    tekenKlas(d);
    if (rijen.length !== d.vragen.length || rijen.some(function (r, i) { return r.tekst !== d.vragen[i].vraag; })) bouwRijen(d.vragen);
    $('[data-totaal]').textContent = d.ingezonden;
    $('[data-totaal-woord]').textContent = 'ingezonden';
    d.vragen.forEach(function (v, i) {
      var r = rijen[i];
      var deel = d.ingezonden ? v.goed / d.ingezonden : 0;
      r.getal.innerHTML = '';
      var st = document.createElement('strong'); st.textContent = v.goed;
      r.getal.appendChild(st);
      r.getal.appendChild(document.createTextNode(d.ingezonden ? 'van ' + d.ingezonden + ' goed' : 'goed'));
      // Twee frames wachten bij een nieuwe rij, zodat de balk vanaf nul groeit in plaats van te verschijnen.
      requestAnimationFrame(function () { requestAnimationFrame(function () { r.balk.style.transform = 'scaleX(' + deel.toFixed(4) + ')'; }); });
    });
    var toonQR = metQR && d.open;
    var qrWissel = root.classList.contains('met-qr') !== toonQR;
    root.classList.toggle('met-qr', toonQR);
    $('[data-doe-mee]').hidden = !toonQR;
    if (qrWissel) plaatsKnop();
    if (toonQR && qrVoor !== d.code && window.lqQR) {
      var doos = $('[data-qr]'); doos.textContent = '';
      doos.appendChild(lqQR.svg(location.origin + '/apps/lesquiz/?les=' + d.code));
      $('[data-code]').textContent = d.code;
      qrVoor = d.code;
    }
    if (qrWissel || pasNodig !== tekstSleutel(d)) { pasNodig = tekstSleutel(d); pasAan(); }
  }

  // Laat titel en vragen passen: eerst de titel tot hooguit twee regels, dan de vragen tot er niets meer
  // buiten beeld valt. Stappen van 5 procent, titel nooit onder 60, vragen nooit onder 50 procent. Opnieuw bij een andere tekst of venstermaat.
  var pasNodig = '';
  function tekstSleutel(d) { return d.titel + '|' + d.vragen.map(function (v) { return v.vraag; }).join('|'); }
  function pasAan() {
    var h1 = document.querySelector('[data-titel]'), stand = document.querySelector('.sc-stand');
    var ft = 1, fv = 1;
    root.style.setProperty('--ft', 1); root.style.setProperty('--fv', 1);
    var regel = function () { return parseFloat(getComputedStyle(h1).lineHeight) || h1.clientHeight; };
    while (ft > 0.6 && h1.scrollHeight > regel() * 2 + 2) { ft -= 0.05; root.style.setProperty('--ft', ft.toFixed(2)); }
    while (fv > 0.5 && stand.scrollHeight > stand.clientHeight + 1) { fv -= 0.05; root.style.setProperty('--fv', fv.toFixed(2)); }
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (pasNodig) pasAan(); });
  var wacht;
  window.addEventListener('resize', function () { clearTimeout(wacht); wacht = setTimeout(pasAan, 150); });


  // Klasweergave: instructie, QR-code, kort adres en code, en alleen het aantal inzendingen.
  var GETAL = ['', 'de vraag', 'de twee vragen', 'de drie vragen', 'de vier vragen', 'de vijf vragen'];
  var klasQR = '';
  var instructie = $('[data-instructie]');
  function tekenKlas(d) {
    $('[data-kl-vak]').textContent = '· ' + d.vak;
    status(d.open, '[data-kl-status]');
    $('[data-kl-totaal]').textContent = d.ingezonden;
    var n = d.vragen.length;
    $('[data-kl-aantal]').textContent = GETAL[n] || 'de ' + n + ' vragen';
    instructie.classList.toggle('is-dicht', !d.open);
    $('[data-kl-titel]').textContent = d.open ? 'Vul de lesquiz in' : 'De lesquiz is gesloten';
    $('[data-kl-stappen]').hidden = !d.open;
    $('[data-kl-waarom]').textContent = d.open ? 'Zo weet ik meteen dat je er bent.' : 'Heb je hem niet ingevuld? Meld je dan na de les even bij mij.';
    $('[data-kl-doe-mee]').hidden = !d.open;
    if (d.open && klasQR !== d.code && window.lqQR) {
      var doos = $('[data-kl-qr]'); doos.textContent = '';
      doos.appendChild(lqQR.svg(location.origin + '/apps/lesquiz/?les=' + d.code));
      $('[data-kl-code]').textContent = d.code;
      klasQR = d.code;
    }
    pasKlas();
  }

  // Instructie passend maken: de tekst stap voor stap kleiner tot hij past (nooit onder 60 procent), en de QR-code
  // zo groot als de kolom toelaat naast het adres en de code.
  var smal = window.matchMedia('(max-width: 700px)');
  function pasKlas() {
    if (instructie.hidden) return;
    var tekst = $('.kl-tekst'), kolom = $('[data-kl-doe-mee]'), fk = 1;
    instructie.style.setProperty('--fk', 1);
    while (fk > 0.6 && tekst.scrollHeight > tekst.clientHeight + 1) { fk -= 0.05; instructie.style.setProperty('--fk', fk.toFixed(2)); }
    if (!kolom.hidden && !smal.matches) {
      var onder = $('.kl-adres').offsetHeight + $('.kl-code').offsetHeight + parseFloat(getComputedStyle(kolom).rowGap || 0) * 2 + parseFloat(getComputedStyle($('.kl-adres')).marginTop || 0);
      var maat = Math.max(120, Math.floor(Math.min(kolom.clientWidth, kolom.clientHeight - onder)));
      instructie.style.setProperty('--qr', maat + 'px');
    }
  }
  window.addEventListener('resize', function () { clearTimeout(wachtKlas); wachtKlas = setTimeout(pasKlas, 150); });
  var wachtKlas;
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(pasKlas);

  // Wisselen tussen instructie en uitslag. De oude laag vervaagt (ease-in), daarna komt de nieuwe op (ease-out).
  var weergave = params.get('weergave') === 'uitslag' ? 'uitslag' : 'instructie';
  var knop = $('[data-wissel]');
  var ICOON = { uitslag: '<path d="M5 20V11M12 20V5M19 20v-6"/>', instructie: '<rect x="6" y="3" width="12" height="18" rx="2.5"/><path d="M10.5 17.5h3"/>' };
  var bezig = null;
  function laag(w) { return w === 'uitslag' ? root : instructie; }
  function knopZet() {
    var naar = weergave === 'uitslag' ? 'instructie' : 'uitslag';
    $('[data-wissel-icoon]').innerHTML = ICOON[naar];
    $('[data-wissel-tekst]').textContent = naar === 'uitslag' ? 'Uitslag' : 'Instructie';
    knop.setAttribute('aria-label', naar === 'uitslag' ? 'Toon de uitslag' : 'Toon de instructie');
  }
  // Op de uitslag gaat de knop mee in de opmaak (onder de code, of rechts in de kop zonder QR), zodat hij nooit een
  // vraag afdekt en er geen ruimte voor vrijgehouden hoeft te worden. Op de instructie staat hij vast rechtsonder,
  // behalve in een smal venster: daar scrolt de instructie en staat de knop onderaan in de opmaak, na de teller.
  function plaatsKnop() {
    var doel = weergave === 'uitslag' ? (root.classList.contains('met-qr') ? $('[data-doe-mee]') : $('.sc-kop'))
      : (smal.matches ? instructie : document.body);
    if (knop.parentNode === doel) return;
    var focus = document.activeElement === knop;
    if (doel === document.body) document.body.insertBefore(knop, melding); else doel.appendChild(knop);
    if (focus) knop.focus({ preventScroll: true });
  }
  function stil() { return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function toonLaag(w, anim) {
    var nieuw = laag(w), oud = laag(w === 'uitslag' ? 'instructie' : 'uitslag');
    clearTimeout(bezig);
    oud.classList.remove('kl-op', 'kl-komt');
    nieuw.classList.remove('kl-weg', 'kl-op');
    function op() {
      oud.hidden = true; oud.classList.remove('kl-weg');
      nieuw.hidden = false;
      plaatsKnop();
      if (w === 'uitslag' && laatste) pasAan(); else pasKlas();
      if (!anim) { nieuw.classList.remove('kl-komt'); return; }
      nieuw.classList.add('kl-komt');
      requestAnimationFrame(function () { requestAnimationFrame(function () { nieuw.classList.add('kl-op'); nieuw.classList.remove('kl-komt'); }); });
    }
    if (anim && !oud.hidden) { oud.classList.add('kl-weg'); bezig = setTimeout(op, 200); } else op();
  }
  function wissel(w) {
    if (w === weergave) return;
    weergave = w;
    var u = new URL(location.href);
    if (w === 'uitslag') u.searchParams.set('weergave', 'uitslag'); else u.searchParams.delete('weergave');
    history.replaceState(null, '', u.pathname + u.search);
    knopZet();
    toonLaag(w, !stil());
  }
  if (smal.addEventListener) smal.addEventListener('change', plaatsKnop); else if (smal.addListener) smal.addListener(plaatsKnop);
  knop.addEventListener('click', function () { wissel(weergave === 'uitslag' ? 'instructie' : 'uitslag'); });
  knopZet();
  toonLaag(weergave, false);

  function haal() {
    fetch('/apps/lesquiz/api/stand.php?s=' + encodeURIComponent(s), { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d.ok) { fout(d.fout || 'Deze dashboardlink klopt niet.'); return; }
        fouten = 0; melding.hidden = true;
        laatste = d;
        teken(d);
      })
      .catch(function () {
        fouten++;
        if (fouten >= 2) { melding.textContent = 'Geen verbinding, laatste stand'; melding.hidden = false; }
      })
      .then(function () { setTimeout(haal, document.hidden ? 10000 : 3000); });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'f' || e.key === 'F') {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
      else if (document.exitFullscreen) document.exitFullscreen();
    }
    if (e.key === 'q' || e.key === 'Q') { metQR = !metQR; qrVoor = ''; if (laatste) teken(laatste); }
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (/^(u|U|ArrowRight|ArrowDown|PageDown)$/.test(e.key)) { e.preventDefault(); wissel('uitslag'); }
    if (/^(i|I|ArrowLeft|ArrowUp|PageUp)$/.test(e.key)) { e.preventDefault(); wissel('instructie'); }
  });

  function fout(tekst) {
    $('[data-titel]').textContent = tekst;
    $('[data-kl-titel]').textContent = tekst;
    $('[data-kl-stappen]').hidden = true; $('[data-kl-waarom]').hidden = true;
  }
  if (!/^[A-Za-z0-9]{20,48}$/.test(s)) { fout('Open het dashboard via de link in de Productiviteit-app.'); return; }
  haal();
})();
