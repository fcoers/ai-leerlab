/* Lesquiz, dashboard. Haalt elke 3 seconden de stand op met de geheime schermsleutel (?s=...).
   Toont alleen aantallen. Zonder verbinding blijft de laatste stand staan, met een kleine melding.
   ?qr=nee verbergt de QR-code; toets F = volledig scherm, Q = QR-code aan/uit. */
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

  function status(open) {
    var el = $('[data-status]');
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
    document.title = d.titel + ' · Dashboard';
    status(d.open);
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
    root.classList.toggle('met-qr', toonQR);
    $('[data-doe-mee]').hidden = !toonQR;
    if (toonQR && qrVoor !== d.code && window.lqQR) {
      var doos = $('[data-qr]'); doos.textContent = '';
      doos.appendChild(lqQR.svg(location.origin + '/apps/lesquiz/?les=' + d.code));
      $('[data-code]').textContent = d.code;
      qrVoor = d.code;
    }
  }

  function haal() {
    fetch('/apps/lesquiz/api/stand.php?s=' + encodeURIComponent(s), { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d.ok) { $('[data-titel]').textContent = d.fout || 'Deze dashboardlink klopt niet.'; return; }
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
  });

  if (!/^[A-Za-z0-9]{20,48}$/.test(s)) { $('[data-titel]').textContent = 'Open het dashboard via de link in het beheer.'; return; }
  haal();
})();
