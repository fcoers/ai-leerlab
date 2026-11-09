<?php
// Gemaakt door scripts/naar-site.mjs. Niet met de hand bewerken.
if (!defined('PB')) { http_response_code(404); exit; }
return <<<'PBTXT'
Power BI les 1: een dashboard lezen en repareren
Informatiemanagement, module Energietransitie · oefenopdracht 1 van 3 (P2)

## Waar gaat het over
Veltmaar Metaal is een kleine metaalfabriek met vier ruimtes: fabriekshal, kantoor, magazijn en expeditie. In elke ruimte hangt een Raspberry Pi Pico die elke 5 minuten de temperatuur en de luchtvochtigheid meet, net als straks in jullie eigen project. De facilitair manager heeft de metingen van november in een Power BI-dashboard gezet. Jullie lezen het dashboard voor hem en repareren daarna een kopie waarin twee dingen fout zijn gegaan.
Na deze les kun je:
- een dashboard openen en met keuzelijsten en pagina's door de gegevens lopen;
- uit een dashboard een antwoord halen en dat met een getal onderbouwen;
- zien wanneer een getal niet kan kloppen, en dat in Power BI herstellen.

## Wat je nodig hebt
- Power BI Desktop op een Windows-laptop. Je werkt in tweetallen; één laptop per tweetal is genoeg.
- Twee bestanden van Brightspace: bestand A (deel 1) en bestand B (deel 2).
- Dit document, om je antwoorden in te typen.
Tijd: ongeveer een uur voor deel 1 en drie kwartier voor deel 2.
Je kunt je antwoorden checken en hulp vragen in de nakijk- en hulpapp: ai-leerlab.nl/apps/power-bi-lessen. Schrijf je daar eerst als duo in met de code die de docent in de les noemt. De app laat zien of je antwoord klopt en geeft een hint als je vastloopt, maar het oordeel over je opdracht blijft bij de docent.

## Het dashboard in het kort
- Pagina Overzicht: vier kaarten met gemiddelden en het deel van de gebruikstijd binnen de streefwaarden, een staafdiagram per ruimte, een tabel per ruimte en een heatmap van de temperatuur per uur en weekdag.
- Pagina Verloop: de temperatuur en de luchtvochtigheid per uur, een lijn per ruimte, met ernaast de laagste, gemiddelde en hoogste waarde.
- Keuzelijsten voor ruimte en week. Een keuze geldt op beide pagina's. Kies je één ruimte, dan zie je op Verloop de streefwaarden als stippellijnen.
- Gebruikstijd is de tijd dat er in een ruimte gewerkt wordt. Die verschilt per ruimte en staat in de tabel op Overzicht.
Tip: met het gummetje rechtsboven een keuzelijst wis je je keuze. Klik je op een staaf of een vakje, dan filtert Power BI de rest van de pagina mee; klik nog een keer om dat op te heffen.

## Deel 1: het dashboard lezen (bestand A)
Geef bij elk antwoord het getal dat je gebruikt en de visual waar je het vond.
- Wat is de gemiddelde temperatuur van het hele bedrijf in november? Welke ruimte is gemiddeld het warmst?
Antwoord:
- Welke ruimte ligt het kleinste deel van haar gebruikstijd binnen de streefwaarden voor temperatuur? Hoeveel uur ligt ze erbuiten? In welke week was het daar het slechtst?
Antwoord:
- Kies de expeditie en ga naar Verloop. Wat is de laagste temperatuur van de maand, en in welke week viel die? Bedenk een verklaring: wat gebeurt er in een expeditie wat in de andere ruimtes niet gebeurt?
Antwoord:
- Kies de fabriekshal. Op welke dagen ligt de hal boven de streefwaarden, en wat is de hoogste temperatuur? Vergelijk de nachten in die week met de nachten in week 45. Wat zou er in de fabriek aan de hand zijn?
Antwoord:
- Kies het kantoor en kijk op Overzicht naar de heatmap. Vergelijk de werkdagen met zaterdag en zondag. Wat zie je, en past dat bij de gebruikstijd van het kantoor?
Antwoord:
- Wis de keuze voor ruimte en kijk op Verloop naar de luchtvochtigheid. Welke ruimte gedraagt zich in de tweede helft van de maand anders dan de rest, en vanaf ongeveer welke datum? Let vooral op de ruimtes die op werktemperatuur worden gestookt. Is dat een echte verandering in de ruimte, of iets anders? Gebruik de temperatuur van die ruimte bij je antwoord.
Antwoord:
- Kies week 47. Welke twee ruimtes halen de streefwaarden voor temperatuur het slechtst, en hoe ver zakt de luchtvochtigheid in het kantoor en de fabriekshal?
Antwoord:
- Schrijf in drie zinnen een advies aan de facilitair manager over één plek waar Veltmaar Metaal energie verspilt: wat je zag, het getal uit het dashboard en wat hij kan doen.
Antwoord:

## Deel 2: de fouten vinden en herstellen (bestand B)
Bestand B is een kopie van het dashboard waarin een collega twee dingen verkeerd heeft ingesteld. De gegevens zelf zijn goed. Zoek de twee fouten zonder bestand A ernaast: straks heb je bij je eigen dashboard ook geen goed voorbeeld om mee te vergelijken.
Beantwoord per fout:
- a. Waar zit de fout, en waaraan zag je dat er iets niet kon kloppen?
- b. Wat heb je in Power BI veranderd om hem te herstellen?
- c. Welke waarde laat het dashboard na je herstel zien? Noem er één.
Fout 1
Fout 2
a. Waar en waaraan gezien
b. Wat veranderd
c. Waarde na herstel
Loop je vast, dan helpen deze vragen:
- Kan elk getal op de pagina een temperatuur zijn? Welk soort berekening doet Power BI met een getal als je niets instelt?
- Doet elke keuzelijst wat je verwacht? Als de ene keuzelijst wel werkt en de andere niet, waar in Power BI worden tabellen dan aan elkaar gekoppeld?

## Inleveren
Lever per tweetal in op Brightspace:
- dit document met je antwoorden;
- bestand B, hersteld en opgeslagen als .pbix.
Deze opdracht hoort bij P2 (voldaan of niet voldaan). Voor les 1 geldt:
- minstens 6 van de 8 vragen uit deel 1 zijn goed beantwoord;
- beide fouten zijn in bestand B hersteld.
Ontbreekt er iets, dan mag je het herstellen volgens de herkansingsregel in de studiewijzer.
PBTXT;
