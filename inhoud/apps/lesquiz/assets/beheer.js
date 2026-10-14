/* Lesquiz, beheer: QR-code tekenen en downloaden, links kopiëren, bevestigen vóór wissen. Zonder dit script
   werkt het beheer ook; alleen de QR-code en de kopieerknoppen ontbreken dan. */
(function () {
  'use strict';
  document.querySelectorAll('[data-qr]').forEach(function (el) {
    if (!window.lqQR) return;
    var url = el.getAttribute('data-qr');
    el.appendChild(lqQR.svg(url));
    var knop = document.querySelector('[data-qr-download]');
    if (knop) {
      knop.hidden = false;
      knop.addEventListener('click', function () {
        var a = document.createElement('a');
        a.href = lqQR.png(url, 1200);
        a.download = knop.getAttribute('data-qr-download');
        document.body.appendChild(a); a.click(); a.remove();
      });
    }
  });

  document.querySelectorAll('[data-kopieer]').forEach(function (knop) {
    if (!navigator.clipboard) return;
    knop.hidden = false;
    var tekst = knop.lastChild.textContent;
    var status = document.createElement('span');
    status.className = 'sr'; status.setAttribute('role', 'status');
    knop.after(status);
    knop.addEventListener('click', function () {
      navigator.clipboard.writeText(knop.getAttribute('data-kopieer')).then(function () {
        knop.lastChild.textContent = 'Gekopieerd';
        status.textContent = 'Gekopieerd';
        setTimeout(function () { knop.lastChild.textContent = tekst; status.textContent = ''; }, 2000);
      });
    });
  });

  document.querySelectorAll('[data-bevestig]').forEach(function (knop) {
    knop.addEventListener('click', function (e) {
      if (!window.confirm(knop.getAttribute('data-bevestig'))) e.preventDefault();
    });
  });

  var fouten = document.getElementById('fouten');
  if (fouten) fouten.focus();
})();
