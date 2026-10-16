/* Lesquiz-dashboard als PowerPoint-invoegtoepassing. De dashboardlink wordt in de presentatie zelf bewaard
   (Office-instellingen), zodat elke les-presentatie zijn eigen dashboard houdt. Zonder Office: in localStorage. */
(function () {
  'use strict';
  var form = document.querySelector('[data-instellen]');
  var frame = document.querySelector('[data-scherm]');
  var wijzig = document.querySelector('[data-wijzig]');
  var input = document.getElementById('link');
  var office = false;

  function geldig(url) {
    try {
      var u = new URL(url);
      return u.origin === location.origin && u.pathname === '/apps/lesquiz/scherm/' && /^[A-Za-z0-9]{20,48}$/.test(u.searchParams.get('s') || '');
    } catch (e) { return false; }
  }
  function lees() {
    if (office) return Office.context.document.settings.get('lesquizDashboard');
    try { return localStorage.getItem('lesquiz:dashboard'); } catch (e) { return null; }
  }
  function bewaar(url) {
    if (office) { Office.context.document.settings.set('lesquizDashboard', url); Office.context.document.settings.saveAsync(); }
    try { localStorage.setItem('lesquiz:dashboard', url); } catch (e) { /* niets */ }
  }
  // Het kader opent op de uitslag, zoals voor de klasweergave (16-10-2026); de knop in het dashboard wisselt naar de instructie.
  function toon(url) {
    form.hidden = true; frame.hidden = false; wijzig.hidden = false;
    var u = new URL(url); if (!u.searchParams.get('weergave')) u.searchParams.set('weergave', 'uitslag'); url = u.href;
    if (frame.getAttribute('src') !== url) frame.src = url;
  }
  function instellen() {
    frame.hidden = true; wijzig.hidden = true; form.hidden = false;
    input.value = lees() || '';
    input.focus();
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var url = input.value.trim();
    var ok = geldig(url);
    document.querySelector('[data-fout]').hidden = ok;
    if (!ok) return;
    bewaar(url); toon(url);
  });
  wijzig.addEventListener('click', instellen);

  function start() { var url = lees(); if (url && geldig(url)) toon(url); else instellen(); }
  if (window.Office && Office.onReady) {
    Office.onReady(function (info) { office = !!(info && info.host); start(); });
  } else start();
})();
