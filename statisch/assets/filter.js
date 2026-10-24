/* Filter op soort en voor wie, op Leren en de categoriepagina's (Roel, klus 559, ontwerp Bram).
   Alle items staan in de HTML; dit script verbergt alleen wat niet past. De categorie is een gewone link
   naar de categoriepagina en zit dus niet in dit script. Zonder JavaScript blijft de rij knoppen verborgen
   en staat alles er. Geen beweging: een lijst die verspringt bij een klik helpt niemand. */
(function () {
  var balk = document.querySelector('[data-filter]');
  if (!balk) return;
  var stand = document.querySelector('.filter-stand');
  var leeg = document.querySelector('.filter-leeg');
  var keuze = { soort: '', voor: '' };

  function pastVoor(el) {
    var v = (el.getAttribute('data-voor') || '').split(' ');
    return !keuze.voor || !el.getAttribute('data-voor') || v.indexOf(keuze.voor) > -1;
  }

  function past(el) {
    return (!keuze.soort || el.getAttribute('data-soort') === keuze.soort) && pastVoor(el);
  }

  /* De aantallen bij Soort tellen mee met de keuze bij Voor wie (Kurt, klus 559): wat er onder een knop staat,
     is wat je ziet als je erop klikt. */
  function telSoorten() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.archief-pagina .uitgelicht, .maand .rij-li'));
    balk.querySelectorAll('button[data-soort]').forEach(function (b) {
      var soort = b.getAttribute('data-soort');
      var a = b.querySelector('.aantal');
      if (!soort || !a) return;
      a.textContent = items.filter(function (el) {
        return el.getAttribute('data-soort') === soort && pastVoor(el);
      }).length;
    });
  }

  function toepassen() {
    var totaal = 0;
    var groot = document.querySelector('.archief-pagina .uitgelicht');
    if (groot) { var g = past(groot); groot.hidden = !g; if (g) totaal++; }
    document.querySelectorAll('.maand').forEach(function (maand) {
      var n = 0;
      maand.querySelectorAll('.rij-li').forEach(function (li) {
        var p = past(li); li.hidden = !p; if (p) n++;
      });
      maand.hidden = n === 0;
      var a = maand.querySelector('[data-aantal]');
      if (a) a.textContent = n + (n === 1 ? ' artikel' : ' artikelen');
      totaal += n;
    });
    if (leeg) leeg.hidden = totaal > 0;
    if (stand) stand.textContent = totaal + (totaal === 1 ? ' artikel' : ' artikelen');
    telSoorten();
  }

  function kies(veld, waarde) {
    keuze[veld] = waarde;
    balk.querySelectorAll('button[data-' + veld + ']').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-' + veld) === waarde));
    });
    toepassen();
  }

  balk.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.hasAttribute('data-soort')) kies('soort', b.getAttribute('data-soort'));
    else if (b.hasAttribute('data-voor')) kies('voor', b.getAttribute('data-voor'));
  });
  if (leeg) leeg.addEventListener('click', function (e) {
    if (e.target.closest('[data-wis]')) { kies('soort', ''); kies('voor', ''); }
  });
  balk.hidden = false;
})();
