/* Plank: de pijlknoppen bij een horizontale rij kaarten op de beginpagina (Roel, 08-10-2026, ontwerp Bram).
   - De plank zelf werkt zonder dit script: trackpad, touch, Shift + muiswiel en Tab scrollen hem gewoon.
   - De css toont de pijlen alleen met JavaScript en met een muis (hover: hover), en niet op de telefoon.
   - Past alles, dan verdwijnen de pijlen (.overbodig). Aan het begin is terug uit, aan het eind verder.
   - Een stap is wat er zichtbaar is min één kaart: de half zichtbare kaart rechts wordt na de stap de eerste.
   - Bij "minder beweging" springt de plank zonder animatie: scroll-behavior staat alleen in de css als er geen
     voorkeur voor minder beweging is, en scrollBy volgt die. */
(function () {
  if (!('querySelectorAll' in document)) return;

  document.querySelectorAll('.plank-baan').forEach(function (baan) {
    var sectie = baan.closest('section');
    var pijlen = sectie && sectie.querySelector('.pijlen');
    if (!pijlen || baan.closest('.weinig')) return;
    var terug = pijlen.querySelector('.terug');
    var verder = pijlen.querySelector('.verder');

    function kaartBreedte() {
      var li = baan.querySelector('li');
      var gap = parseFloat(getComputedStyle(baan).columnGap) || 20;
      return li ? li.getBoundingClientRect().width + gap : 320;
    }
    function stap() {
      var k = kaartBreedte();
      var links = parseFloat(getComputedStyle(baan).paddingLeft) || 0;
      // Alleen de kaarten die helemaal in beeld staan: de half zichtbare telt niet mee en komt dus vooraan.
      var passen = Math.floor((baan.clientWidth - links) / k);
      return Math.max(1, passen) * k;
    }
    function bij() {
      var max = baan.scrollWidth - baan.clientWidth;
      pijlen.classList.toggle('overbodig', max <= 2);
      terug.setAttribute('aria-disabled', String(baan.scrollLeft <= 2));
      verder.setAttribute('aria-disabled', String(baan.scrollLeft >= max - 2));
    }
    function schuif(richting, knop) {
      if (knop.getAttribute('aria-disabled') === 'true') return;
      baan.scrollBy({ left: richting * stap() });
    }
    terug.addEventListener('click', function () { schuif(-1, terug); });
    verder.addEventListener('click', function () { schuif(1, verder); });

    var wacht = 0;
    baan.addEventListener('scroll', function () {
      if (wacht) return;
      wacht = requestAnimationFrame(function () { wacht = 0; bij(); });
    }, { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(bij).observe(baan);
    else window.addEventListener('resize', bij);
    bij();
  });
})();
