/* Cursus: waar ben je, wat is de volgende stap (Leerpad, klus 402; DESIGN.md Cursuspagina, Cursusrij, Kop van een stap).
   - Alle tekst staat als gewone HTML in de pagina. Zonder JavaScript staat er "Begin bij stap 1" met een gewone link.
   - De voortgang staat alleen in de browser van de lezer: localStorage, één sleutel per cursus ("ail-cursus:<naam>")
     met de stappen die je zelf hebt afgevinkt. Een functionele voorkeur, net als spreker.js: geen account, niets
     wordt gemeten of verstuurd.
   - Dit script staat onderaan zonder defer, zodat de stand er bij de eerste weergave al staat. Het attribuut
     data-cursus-terug op <html> (gezet in de head) houdt de juiste zinnen zichtbaar tot dit script draait.
   - Beweging: een halte die klaar wordt, vult in 280 ms; bij "minder beweging" staat alles direct in de eindstand
     (site.css). Bij het eerste invullen staat de beweging uit, zodat er bij het laden niets beweegt. */
(function () {
  var SLEUTEL = 'ail-cursus:';
  var html = document.documentElement;
  var gegevens = {};
  document.querySelectorAll('script[data-cursus-gegevens]').forEach(function (el) {
    try { gegevens[el.getAttribute('data-cursus-gegevens')] = JSON.parse(el.textContent).stappen || []; } catch (e) {}
  });

  function lees(slug) {
    try {
      var s = JSON.parse(localStorage.getItem(SLEUTEL + slug));
      return s && s.klaar && s.klaar.length !== undefined ? s.klaar.map(Number) : [];
    } catch (e) { return []; }
  }
  function bewaar(slug, klaar) {
    try {
      if (klaar.length) localStorage.setItem(SLEUTEL + slug, JSON.stringify({ klaar: klaar }));
      else localStorage.removeItem(SLEUTEL + slug);
    } catch (e) {}
  }

  // De volgende stap is de eerste open stap van de hoofdlijn; het zijpad komt pas als de hoofdlijn klaar is.
  function volgende(stappen, klaar) {
    var open = stappen.filter(function (s) { return s.url && klaar.indexOf(s.nr) < 0; });
    var hoofd = open.filter(function (s) { return !s.zijpad; });
    return hoofd[0] || open[0] || null;
  }

  function zet(el, aan) { if (el) el.hidden = !aan; }

  function toon(slug) {
    var stappen = gegevens[slug];
    if (!stappen) return;
    var klaar = lees(slug);
    var bezig = klaar.length > 0;
    var v = volgende(stappen, klaar);
    var af = bezig && !v;
    document.querySelectorAll('[data-cursus="' + slug + '"]').forEach(function (doos) {
      doos.querySelectorAll('[data-stap]').forEach(function (el) {
        var n = +el.getAttribute('data-stap');
        var isKlaar = klaar.indexOf(n) >= 0;
        var isHier = !!v && n === v.nr;
        el.classList.toggle('is-klaar', isKlaar);
        el.classList.toggle('is-hier', isHier);
        zet(el.querySelector('.c-klaarwoord'), isKlaar);
        zet(el.querySelector('.c-hier'), isHier);
      });
      doos.querySelectorAll('[data-als-nieuw]').forEach(function (el) { zet(el, !bezig); });
      doos.querySelectorAll('[data-als-terug]').forEach(function (el) { zet(el, bezig && !af); });
      doos.querySelectorAll('[data-als-af]').forEach(function (el) { zet(el, af); });
      doos.querySelectorAll('[data-als-bezig]').forEach(function (el) { zet(el, bezig); });
      if (v) {
        doos.querySelectorAll('[data-volgende-nr]').forEach(function (el) { el.textContent = v.nr; });
        doos.querySelectorAll('[data-volgende-titel]').forEach(function (el) { el.textContent = v.titel; });
      }
      var doel = v && bezig ? v.url : (stappen[0] && stappen[0].url);
      doos.querySelectorAll('[data-volgende-link]').forEach(function (el) { if (doel) el.href = doel; });
      doos.querySelectorAll('[data-werkt]').forEach(function (b) {
        var aan = klaar.indexOf(+b.getAttribute('data-werkt')) >= 0;
        b.setAttribute('aria-pressed', aan ? 'true' : 'false');
        var t = b.querySelector('[data-werkt-tekst]');
        if (t) t.textContent = aan ? 'Klaar, dit werkt' : 'Dit werkt bij mij';
      });
    });
  }

  function alles() { Object.keys(gegevens).forEach(toon); }

  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-werkt], [data-opnieuw]') : null;
    if (!b) return;
    var doos = b.closest('[data-cursus]');
    if (!doos) return;
    var slug = doos.getAttribute('data-cursus');
    if (b.hasAttribute('data-opnieuw')) {
      bewaar(slug, []);
      toon(slug);
      var knop = doos.querySelector('[data-volgende-link]');
      if (knop) knop.focus();   // de tekstknop verdwijnt; de focus gaat naar de knop die er nu staat
      return;
    }
    var n = +b.getAttribute('data-werkt'), klaar = lees(slug), i = klaar.indexOf(n);
    if (i >= 0) klaar.splice(i, 1); else klaar.push(n);
    klaar.sort(function (a, c) { return a - c; });
    bewaar(slug, klaar);
    toon(slug);
  });

  // Een ander tabblad vinkte iets af: hier dezelfde stand.
  window.addEventListener('storage', function (e) {
    if (e.key && e.key.indexOf(SLEUTEL) === 0) toon(e.key.slice(SLEUTEL.length));
  });
  // Terug in de browsergeschiedenis (bfcache): de stand kan intussen veranderd zijn.
  window.addEventListener('pageshow', function (e) { if (e.persisted) alles(); });

  html.classList.add('cursus-stil');
  alles();
  html.classList.add('cursus-gezet');
  requestAnimationFrame(function () { requestAnimationFrame(function () { html.classList.remove('cursus-stil'); }); });
})();
