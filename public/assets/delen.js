/* Link kopiëren onder een artikel, tutorial of seriedeel (03-10-2026).
   De knop staat in de HTML op hidden; zonder JavaScript is hij er dus niet en blijven LinkedIn en mail over.
   Na een klik verschijnt "Gekopieerd" naast de knop, ook voor schermlezers (role="status"). */
(function () {
  function oudeManier(tekst) {
    var veld = document.createElement("textarea");
    veld.value = tekst;
    veld.setAttribute("readonly", "");
    veld.style.position = "fixed";
    veld.style.opacity = "0";
    document.body.appendChild(veld);
    veld.select();
    var gelukt = false;
    try { gelukt = document.execCommand("copy"); } catch (e) { gelukt = false; }
    document.body.removeChild(veld);
    return gelukt;
  }

  document.querySelectorAll("[data-kopieer]").forEach(function (knop) {
    var melding = knop.parentNode.querySelector(".gekopieerd");
    var klok;
    knop.hidden = false;

    function meld(tekst) {
      if (!melding) return;
      melding.textContent = tekst;
      clearTimeout(klok);
      klok = setTimeout(function () { melding.textContent = ""; }, 3000);
    }

    knop.addEventListener("click", function () {
      var adres = knop.getAttribute("data-kopieer");
      var mislukt = function () { meld(oudeManier(adres) ? "Gekopieerd" : "Kopiëren lukte niet"); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(adres).then(function () { meld("Gekopieerd"); }, mislukt);
      } else {
        mislukt();
      }
    });
  });
})();
