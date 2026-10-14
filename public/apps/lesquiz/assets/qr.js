/* Lesquiz: QR-code als SVG, met qrcode.js (Kazuhiko Arase, MIT). Altijd donker op wit, ook in de donkere stand:
   zo leest elke telefooncamera hem. Foutcorrectie M, met een stille zone van vier modules. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function maak(tekst) {
    var qr = qrcode(0, 'M');
    qr.addData(tekst, 'Byte');
    qr.make();
    return qr;
  }
  window.lqQR = {
    svg: function (tekst) {
      var qr = maak(tekst), n = qr.getModuleCount(), m = 4, d = '';
      for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (qr.isDark(r, c)) d += 'M' + (c + m) + ' ' + (r + m) + 'h1v1h-1z';
      var svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('viewBox', '0 0 ' + (n + 2 * m) + ' ' + (n + 2 * m));
      svg.setAttribute('shape-rendering', 'crispEdges');
      svg.setAttribute('aria-hidden', 'true');
      var bg = document.createElementNS(NS, 'rect');
      bg.setAttribute('width', '100%'); bg.setAttribute('height', '100%'); bg.setAttribute('fill', '#fff');
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('d', d); p.setAttribute('fill', '#17211C');
      svg.appendChild(bg); svg.appendChild(p);
      return svg;
    },
    png: function (tekst, px) {
      var qr = maak(tekst), n = qr.getModuleCount(), m = 4, cel = Math.floor(px / (n + 2 * m)), maat = cel * (n + 2 * m);
      var cv = document.createElement('canvas');
      cv.width = cv.height = maat;
      var x = cv.getContext('2d');
      x.fillStyle = '#fff'; x.fillRect(0, 0, maat, maat);
      x.fillStyle = '#17211C';
      for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (qr.isDark(r, c)) x.fillRect((c + m) * cel, (r + m) * cel, cel, cel);
      return cv.toDataURL('image/png');
    }
  };
})();
