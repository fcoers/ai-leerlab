/* Plank: de pijlknoppen bij een horizontale rij kaarten op de beginpagina (Roel, 08-10-2026, ontwerp Bram).
   - De plank zelf werkt zonder dit script: trackpad, touch, Shift + muiswiel en Tab scrollen hem gewoon (native).
   - De css toont de pijlen alleen met JavaScript en met een muis (hover: hover), en niet op de telefoon.
   - Past alles, dan vervagen de pijlen (.overbodig). Aan het begin is terug uit, aan het eind verder.
   - Eén klik is één kaart: naar het volgende snappunt (Frits, 08-10-2026). Snel achter elkaar klikken telt op
     vanaf het doel van de lopende beweging, niet vanaf waar de plank nu toevallig staat.
   - De beweging is van ons, niet de harde smooth-scroll van de browser: slow in, slow out (Disney). Een kubische
     Hermite-curve: zonder lopende beweging is dat precies smoothstep (3t² − 2t³); klik je tijdens een beweging,
     dan begint de nieuwe met de snelheid van de oude, zodat er geen hapering in zit. Duur naar afstand:
     360 ms + 0,45 ms per pixel, tussen 450 en 900 ms (één kaart van 372 px: ruim 525 ms).
   - Tijdens de beweging staan scroll-snap en scroll-behavior uit (anders schiet hij terug of wordt elke stap
     opnieuw gladgestreken); daarna gaan ze terug. Trackpad, wiel of touch tijdens de beweging: die wint meteen.
   - Bij "minder beweging" springt de plank zonder animatie naar de volgende kaart. */
(function () {
  if (!('querySelectorAll' in document) || !window.requestAnimationFrame) return;
  var minder = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var nu = window.performance && performance.now ? function () { return performance.now(); } : Date.now;

  document.querySelectorAll('.plank-baan').forEach(function (baan) {
    var sectie = baan.closest('section');
    var pijlen = sectie && sectie.querySelector('.pijlen');
    if (!pijlen || baan.closest('.weinig')) return;
    var terug = pijlen.querySelector('.terug');
    var verder = pijlen.querySelector('.verder');

    var anim = null;   // { van, naar, v0, start, duur, frame }

    function max() { return Math.max(0, baan.scrollWidth - baan.clientWidth); }

    // De snappunten zoals de css ze bedoelt: kaart op de linkerkant (scroll-padding) of, op smal, in het midden.
    function snappunten() {
      var stijl = getComputedStyle(baan);
      var pad = parseFloat(stijl.scrollPaddingLeft) || 0;
      var m = max();
      var punten = [0, m];
      // Plek van de kaart in de baan zelf (offsetLeft telt vanaf .plank, en de baan loopt tot de schermrand).
      var nul = baan.getBoundingClientRect().left + baan.clientLeft - baan.scrollLeft;
      baan.querySelectorAll(':scope > li').forEach(function (li) {
        var r = li.getBoundingClientRect();
        var links = r.left - nul;
        var uitlijning = getComputedStyle(li).scrollSnapAlign || 'start';
        var x = uitlijning.indexOf('center') !== -1 ? links + r.width / 2 - baan.clientWidth / 2 : links - pad;
        punten.push(Math.min(m, Math.max(0, Math.round(x))));
      });
      return punten.sort(function (a, b) { return a - b; })
        .filter(function (p, i, lijst) { return i === 0 || p - lijst[i - 1] > 2; });
    }

    function volgende(vanaf, richting) {
      var punten = snappunten();
      if (richting > 0) {
        for (var i = 0; i < punten.length; i++) if (punten[i] > vanaf + 2) return punten[i];
      } else {
        for (var j = punten.length - 1; j >= 0; j--) if (punten[j] < vanaf - 2) return punten[j];
      }
      return null;
    }

    // Kubische Hermite van p0 naar p1, beginsnelheid v0 (px/ms), eindsnelheid 0.
    function plek(a, t) {
      var t2 = t * t, t3 = t2 * t;
      return (2 * t3 - 3 * t2 + 1) * a.van + (t3 - 2 * t2 + t) * a.duur * a.v0 + (-2 * t3 + 3 * t2) * a.naar;
    }
    function snelheid(a, t) {
      var t2 = t * t;
      return ((6 * t2 - 6 * t) * a.van + (3 * t2 - 4 * t + 1) * a.duur * a.v0 + (-6 * t2 + 6 * t) * a.naar) / a.duur;
    }

    function zetVrij() {
      baan.style.scrollSnapType = 'none';
      baan.style.scrollBehavior = 'auto';
    }
    function zetTerug() {
      baan.style.scrollSnapType = '';
      baan.style.scrollBehavior = '';
    }
    function stop() {
      if (!anim) return;
      cancelAnimationFrame(anim.frame);
      anim = null;
      zetTerug();
      bij();
    }

    function beweeg(naar) {
      var van = baan.scrollLeft;
      var v0 = 0;
      if (anim) {
        var t = Math.min(1, (nu() - anim.start) / anim.duur);
        v0 = snelheid(anim, t);
        cancelAnimationFrame(anim.frame);
      }
      var afstand = Math.abs(naar - van);
      if (afstand < 1) { anim = null; zetTerug(); return; }
      var duur = Math.min(900, Math.max(450, 360 + 0.45 * afstand));
      // Nooit voorbij het doel schieten: de meegenomen snelheid blijft binnen wat de afstand toelaat.
      var grens = 2 * afstand / duur;
      v0 = Math.max(-grens, Math.min(grens, v0));
      anim = { van: van, naar: naar, v0: v0, start: nu(), duur: duur, frame: 0 };
      zetVrij();
      var a = anim;
      function tik() {
        if (anim !== a) return;
        var t = Math.min(1, (nu() - a.start) / a.duur);
        baan.scrollLeft = t < 1 ? plek(a, t) : a.naar;
        if (t < 1) a.frame = requestAnimationFrame(tik);
        else { anim = null; requestAnimationFrame(function () { if (!anim) zetTerug(); }); bij(); }
      }
      a.frame = requestAnimationFrame(tik);
    }

    function bij() {
      var m = max();
      var stand = anim ? anim.naar : baan.scrollLeft;
      pijlen.classList.toggle('overbodig', m <= 2);
      terug.setAttribute('aria-disabled', String(stand <= 2));
      verder.setAttribute('aria-disabled', String(stand >= m - 2));
    }

    function schuif(richting) {
      var vanaf = anim ? anim.naar : baan.scrollLeft;
      var naar = volgende(vanaf, richting);
      if (naar === null) return;
      if (minder && minder.matches) {
        stop();
        baan.style.scrollBehavior = 'auto';
        baan.scrollLeft = naar;
        baan.style.scrollBehavior = '';
        bij();
        return;
      }
      beweeg(naar);
      bij();
    }
    terug.addEventListener('click', function () { if (terug.getAttribute('aria-disabled') !== 'true') schuif(-1); });
    verder.addEventListener('click', function () { if (verder.getAttribute('aria-disabled') !== 'true') schuif(1); });

    // Zelf scrollen wint altijd van de knoppen.
    ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(function (soort) {
      baan.addEventListener(soort, stop, { passive: true });
    });

    var wacht = 0;
    baan.addEventListener('scroll', function () {
      if (wacht) return;
      wacht = requestAnimationFrame(function () { wacht = 0; bij(); });
    }, { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(function () { stop(); bij(); }).observe(baan);
    else window.addEventListener('resize', function () { stop(); bij(); });
    bij();
    // Pas na de eerste stand mogen de pijlen vervagen; anders zie je ze bij het laden wegfaden.
    requestAnimationFrame(function () { requestAnimationFrame(function () { pijlen.classList.add('gezet'); }); });
  });
})();
