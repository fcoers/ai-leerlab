/* Spreker: een teamlid stelt zich voor in een tekstballon (ontwerp Bram 05-10-2026, component Spreker in DESIGN.md).
   - De ballon en de zin staan als gewone HTML in de pagina, compleet en open. Dit script voegt alleen beweging toe.
   - Alleen een spreker met data-beweegt speelt, alleen bij het eerste bezoek, ongeveer twee seconden.
   - Nooit bij "minder beweging". Esc zet de beweging meteen stil. Geen knoppen.
   - De browser onthoudt alleen dat de voorstelling gezien is (localStorage, functionele voorkeur, geen meting). */
(function () {
  var DUUR = 2000;
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function minder() { return !!(mq && mq.matches); }
  function gezien(sleutel, zet) {
    try {
      if (zet) { localStorage.setItem(sleutel, '1'); return true; }
      return localStorage.getItem(sleutel) === '1';
    } catch (e) { return true; } // Geen opslag: liever stil dan elke keer opnieuw.
  }

  var fig = document.querySelector('.spreker[data-beweegt]');
  if (!fig) return;
  var sleutel = 'al-spreker-' + (fig.getAttribute('data-spreker') || 'x') + '-gezien';
  if (minder() || gezien(sleutel)) return;

  var timer;
  function klaar() {
    clearTimeout(timer);
    fig.classList.remove('speelt');
    document.removeEventListener('keydown', toets);
    if (mq && mq.removeEventListener) mq.removeEventListener('change', klaar);
  }
  function toets(e) { if (e.key === 'Escape' || e.key === 'Esc') klaar(); }

  fig.classList.add('speelt');
  gezien(sleutel, true);
  timer = setTimeout(klaar, DUUR);
  document.addEventListener('keydown', toets);
  if (mq && mq.addEventListener) mq.addEventListener('change', klaar);
})();
