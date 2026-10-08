/* Opkomen bij scrollen (proef, Roel 08-10-2026). Zie beweging.css.
   - Alleen hele blokken, nooit lopende tekst. Eén keer per bezoek aan de pagina; terugscrollen speelt niet opnieuw.
   - Wat bij het laden al in beeld staat, krijgt geen beweging. Alleen blokken onder de vouw wachten.
   - Bij "minder beweging", zonder IntersectionObserver of zonder JavaScript: alles staat er meteen.
   - Tab, zoeken of een link naar een blok onder de vouw: het blok komt dan meteen tevoorschijn. */
(function () {
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  if ((mq && mq.matches) || !('IntersectionObserver' in window)) return;

  var BLOKKEN = '.uitgelicht, .cat-blok, .van-frits, .artikel .verwijs';
  var wachtend = [];
  var vouw = window.innerHeight * 0.92;
  document.querySelectorAll(BLOKKEN).forEach(function (el) {
    if (el.getBoundingClientRect().top > vouw) { el.classList.add('wacht'); wachtend.push(el); }
  });
  if (!wachtend.length) return;

  function toon(el) {
    if (!el.classList.contains('wacht')) return;
    el.classList.add('komt');
    // Eén beeld later, zodat de overgang vanaf de wachtstand begint.
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.remove('wacht'); }); });
    el.addEventListener('transitionend', function klaar(e) {
      if (e.target === el && e.propertyName === 'transform') { el.classList.remove('komt'); el.removeEventListener('transitionend', klaar); }
    });
    io.unobserve(el);
  }
  function allesMeteen() {
    wachtend.forEach(function (el) { el.classList.remove('wacht', 'komt'); io.unobserve(el); });
  }

  var io = new IntersectionObserver(function (regels) {
    regels.forEach(function (r) { if (r.isIntersecting) toon(r.target); });
  }, { rootMargin: '0px 0px -8% 0px' });
  wachtend.forEach(function (el) { io.observe(el); });

  // Focus via het toetsenbord: nooit iets onzichtbaars met focus.
  document.addEventListener('focusin', function (e) {
    var el = e.target.closest && e.target.closest('.wacht');
    if (el) { el.classList.remove('wacht', 'komt'); io.unobserve(el); }
  });
  if (mq && mq.addEventListener) mq.addEventListener('change', function () { if (mq.matches) allesMeteen(); });
  window.addEventListener('beforeprint', allesMeteen);
})();
