<?php
// Gemaakt door scripts/naar-site.mjs. Niet met de hand bewerken.
if (!defined('PB')) { http_response_code(404); exit; }
return <<<'PBTXT'
Power BI les 2: ruwe sensordata klaarzetten
Informatiemanagement, module Energietransitie · oefenopdracht 2 van 3 (P2)

## Waar gaat het over
In les 1 las je het dashboard van Veltmaar Metaal. Dat dashboard stond op schone gegevens. Vandaag maak je die schone gegevens zelf, uit de bestanden zoals de vier Pico's ze hebben weggeschreven. Daar zit rommel in: leesfouten van de sensor, een klok die na een herstart op 2021 stond, regels die twee keer in het bestand staan, een bestand met puntkomma's en decimale komma's. Precies wat je straks ook tegenkomt in het bestand van je eigen Pico.
Je werkt stap voor stap met deze instructie. De fabriekshal doen we samen helemaal uit; bij het kantoor en het magazijn krijg je minder hulp, en de expeditie schoon je zelf op. Daarna leg je het model aan, maak je een datumtabel en vier metingen, en reken je je werk na tegen de controlewaarden.
Na deze les kun je:
- een CSV-bestand van een sensor inlezen en opschonen in Power Query;
- meerdere tabellen samenvoegen en aan elkaar koppelen in een model;
- een datumtabel maken en eigen metingen schrijven in DAX;
- met controlewaarden laten zien dat je gegevens kloppen.

## Wat je nodig hebt
- Power BI Desktop op een Windows-laptop, in tweetallen. Eén laptop per tweetal is genoeg; wissel na elke ruimte wie er typt.
- De vijf bestanden van les 2 op Brightspace: R01_fabriekshal.csv, R02_kantoor.csv, R03_magazijn.csv, R04_expeditie.csv en ruimtes.csv. Zet ze samen in één map op je laptop, bijvoorbeeld C:\PBI\Les 2\.
- Dit document, om de controletabel aan het eind in te vullen.
Tijd: 90 minuten. Een richtlijn: na een half uur heb je de fabriekshal en het kantoor klaar, na een uur staan alle vier de ruimtes in één tabel. Ben je eerder klaar, ga dan door met de verdieping aan het eind.
In de stappen staat telkens een regel "Je ziet nu …". Klopt dat niet, ga dan niet verder maar kijk eerst wat er anders is. Een fout die je nu vindt, kost je straks bij het narekenen geen half uur.

## Stap 0: Power BI instellen (3 minuten)
1.Open Power BI Desktop en kies Leeg rapport.
2.Ga naar Bestand, Opties en instellingen, Opties. Kies onder Huidig bestand de pagina Gegevens laden en zet Automatische datum/tijd uit. Je maakt straks zelf een datumtabel, en dan zit deze alleen in de weg.
3.Sla het bestand meteen op als Les 2 - <jullie namen>.pbix.
Je ziet nu een leeg rapport met je eigen bestandsnaam in de titelbalk.

## Stap 1: de fabriekshal, helemaal uitgewerkt (15 minuten)
### 1a. Het bestand inlezen
1.Kies Start, Gegevens ophalen, Tekst/CSV en open R01_fabriekshal.csv.
2.Je krijgt een voorbeeldvenster. Kies niet Laden, maar Gegevens transformeren. Power Query opent.
3.Hernoem de query rechts onder Eigenschappen naar hal.
4.Zet onder Beeld het vinkje bij Kolomprofiel aan. Klik onderaan in de statusbalk op "Kolomprofilering op basis van de bovenste 1000 rijen" en kies op basis van de volledige gegevensset. Zo zie je straks bij elke kolom het echte minimum en maximum.
Je ziet nu drie kolommen: tijd, temperatuur en luchtvochtigheid. Rechts onder Toegepaste stappen staan Bron, Headers met verhoogd niveau en Type gewijzigd.
### 1b. Kolomtypen goed zetten
Power BI raadt de kolomtypen zelf, met de Nederlandse landinstelling. Daarin is de punt het teken voor duizendtallen en niet voor decimalen. De Pico schrijft 13.2, en dat kan dan als 132 binnenkomen. Je zet de typen daarom zelf, en je zegt erbij in welke notatie het bestand is geschreven.
1.Verwijder de stap Type gewijzigd met het kruisje ervoor.
2.Klik met de rechtermuisknop op de kop van tijd, kies Type wijzigen, Landinstelling gebruiken. Kies Gegevenstype Datum/tijd en Landinstelling Engels (Verenigde Staten).
3.Doe hetzelfde voor temperatuur en luchtvochtigheid, met Gegevenstype Decimaal getal en weer Engels (Verenigde Staten).
Je ziet nu bij temperatuur waarden als 13,2 en niet 132. In het kolomprofiel staat bij het minimum −999. Dat is een leesfout van de sensor; die haal je zo weg.
### 1c. Foutwaarden weghalen
Een sensor die niet kan lezen, schrijft hier -999. Een temperatuur onder −40 °C komt in een fabriek niet voor, dus alles daaronder is een fout. Bij de luchtvochtigheid is 0 % of minder onmogelijk.
1.Klik op het pijltje in de kop van temperatuur, kies Getalfilters, Groter dan, en vul −40 in.
2.Klik op het pijltje in de kop van luchtvochtigheid, kies Getalfilters, Groter dan, en vul 0 in.
Waarom niet "temperatuur groter dan 0"? Omdat een echte meting ook onder nul kan liggen. In de expeditie meet de sensor op de koudste ochtend 1,9 °C, en in een strenge winter wordt het daar kouder. Een filter moet de fout raken, niet de echte waarde.
Je ziet nu in het kolomprofiel bij temperatuur een minimum van 13 en een maximum van 26,7.
### 1d. Dubbele regels weghalen
Bij het kopiëren van het bestand is een blok regels twee keer geplakt.
1.Selecteer alle kolommen: klik in de tabel en druk op Ctrl+A.
2.Kies Start, Rijen verwijderen, Duplicaten verwijderen.
Je ziet nu in het kolomprofiel bij tijd dat het aantal waarden gelijk is aan het aantal unieke waarden: 8.058.
### 1e. Zeggen welke ruimte dit is
Straks zet je de vier ruimtes onder elkaar in één tabel. Dan moet elke regel zeggen uit welke ruimte hij komt.
1.Kies Kolom toevoegen, Aangepaste kolom. Naam ruimte_id, formule "R01".
2.Zet het type van de nieuwe kolom op Tekst (klik op het symbool links in de kolomkop).
Je ziet nu vier kolommen, en in ruimte_id staat op elke regel R01.
### 1f. Wat je net hebt gebouwd
Kies Start, Geavanceerde editor. Dit is wat Power Query van je klikken heeft gemaakt. De namen van de stappen kunnen bij jou iets anders zijn; de rest hoort zo te zijn.
let
    Bron = Csv.Document(File.Contents("C:\PBI\Les 2\R01_fabriekshal.csv"), [Delimiter = ",", Columns = 3, Encoding = 65001, QuoteStyle = QuoteStyle.None]),
    Koppen = Table.PromoteHeaders(Bron, [PromoteAllScalars = true]),
    Typen = Table.TransformColumnTypes(Koppen, {{"tijd", type datetime}, {"temperatuur", type number}, {"luchtvochtigheid", type number}}, "en-US"),
    GeenFoutwaarden = Table.SelectRows(Typen, each [temperatuur] > -40 and [luchtvochtigheid] > 0),
    GeenDubbele = Table.Distinct(GeenFoutwaarden),
    Ruimte = Table.AddColumn(GeenDubbele, "ruimte_id", each "R01", type text)
in
    Ruimte
Lees hem één keer van boven naar beneden: elke regel neemt de tabel van de regel erboven en doet er één ding mee. Zo zien al je opschoonstappen eruit, ook die bij je eigen Pico-bestand.

## Stap 2: het kantoor, half uitgewerkt (10 minuten)
Het kantoor heeft dezelfde opbouw als de hal, maar andere rommel:
- De Pico is een keer herstart. Daarna stond de kopregel tijd,temperatuur,luchtvochtigheid opnieuw in het bestand, midden tussen de metingen.
- Na een van die herstarts begon de klok op 1 januari 2021. Die regels hebben dus een verkeerde tijd.
- Een paar keer meldt de sensor een luchtvochtigheid van 0,0 bij een gewone temperatuur.
Snelle weg: klik met de rechtermuisknop op de query hal en kies Dupliceren. Hernoem de kopie naar kantoor. Klik in Toegepaste stappen op het tandwieltje naast Bron en kies R02_kantoor.csv.
1.Klik in Toegepaste stappen op Headers met verhoogd niveau. Filter de kolom tijd met Tekstfilters, Is niet gelijk aan, tijd. Power Query vraagt of je een stap wilt invoegen; kies Invoegen. Dit moet vóór het wijzigen van de typen, want als datum/tijd is de tekst "tijd" een fout.
2.Klik op de laatste stap. Filter tijd zo dat alleen tijden vanaf 1 januari 2026 overblijven: Datum/tijd-filters, Na, en kies in het venster "is na of gelijk aan".
3.Het filter op de luchtvochtigheid uit de hal pakt de 0,0 al mee. Controleer dat in het kolomprofiel.
4.Klik op de stap waarin je ruimte_id toevoegde en pas in de formulebalk "R01" aan naar "R02".
Lukt stap 2 niet via het menu, klik dan op het fx-teken naast de formulebalk en typ de regel hieronder. Aangepaste kolom toegevoegd is de naam van de stap erboven; heet die bij jou anders, gebruik dan die naam.
= Table.SelectRows(#"Aangepaste kolom toegevoegd", each [tijd] >= #datetime(2026, 1, 1, 0, 0, 0))
Je ziet nu bij tijd als vroegste tijd 2 november 2026, bij luchtvochtigheid een minimum van 19,2, en 7.817 regels.

## Stap 3: het magazijn, half uitgewerkt (7 minuten)
Iemand wilde dit bestand in een Nederlandse Excel openen en heeft de code aangepast. Daardoor staat er een puntkomma tussen de kolommen en een komma als decimaalteken: 2026-11-02 00:00:56;10,3;87,0.
1.Lees R03_magazijn.csv in als nieuwe query met de naam magazijn. Controleer in het voorbeeldvenster dat het scheidingsteken Puntkomma is.
2.Zet de typen zelf, net als bij de hal. Welke landinstelling kies je nu voor temperatuur en luchtvochtigheid? Denk aan wat de komma in dit bestand betekent.
3.Neem de filters op foutwaarden en dubbele regels over, ook als je denkt dat ze hier niet nodig zijn. Je eigen Pico-bestand vraagt straks ook om alle stappen.
4.Voeg ruimte_id toe met "R03".
Je ziet nu bij temperatuur een minimum van 7,9 en een maximum van 16,3, en 8.055 regels. Zie je waarden boven de 70 °C of fouten? Dan is de komma verkeerd gelezen; kijk de landinstelling na.

## Stap 4: de expeditie, zelf (10 minuten)
Schoon R04_expeditie.csv zelf op tot een query expeditie met ruimte_id R04. Er zitten drie soorten rommel in, waarvan je er twee al kent. Gebruik het kolomprofiel om ze te vinden: kijk naar het minimum, het maximum en de lege waarden van elke kolom.
Je ziet nu bij temperatuur een minimum van 1,9 en een maximum van 18, geen lege waarden, en 8.059 regels.

## Stap 5: de vier ruimtes in één tabel (8 minuten)
1.Kies Start, Query's toevoegen, Query's toevoegen als nieuw. Kies Drie of meer tabellen en zet hal, kantoor, magazijn en expeditie rechts. Hernoem de nieuwe query naar metingen.
2.Selecteer in metingen de kolom tijd en kies Kolom toevoegen, Datum, Alleen datum. Hernoem de nieuwe kolom naar datum.
3.Klik met de rechtermuisknop op elk van de vier ruimtequery's en zet Laden inschakelen uit. Ze blijven bestaan als bouwsteen, maar komen niet los in je model.
4.Lees ruimtes.csv in als query ruimtes. Controleer dat temp_min, temp_max, rv_min en rv_max het type Geheel getal hebben.
5.Kies Start, Sluiten en toepassen.
Je ziet nu in de Tabelweergave links onderaan bij metingen 31.989 rijen en bij ruimtes 4 rijen. Rechts in het deelvenster Gegevens staan alleen metingen en ruimtes.

## Stap 6: het model (7 minuten)
1.Ga naar de Modelweergave. Power BI heeft misschien al zelf een lijn getrokken tussen metingen en ruimtes.
2.Staat er geen lijn, sleep dan ruimte_id uit ruimtes naar ruimte_id in metingen.
3.Dubbelklik op de lijn en controleer: Kardinaliteit Veel-op-een, filterrichting Enkel, en de tabel met de 1 is ruimtes.
Je ziet nu een lijn met een 1 bij ruimtes en een sterretje bij metingen, met een pijltje van ruimtes naar metingen.
Waarom dit ertoe doet: in les 1 werkte de keuzelijst voor ruimte in bestand B niet. Een keuze in ruimtes bereikt de metingen alleen via deze lijn, in de richting van het pijltje.

## Stap 7: de datumtabel (10 minuten)
Een datumtabel heeft voor elke dag één regel, ook voor dagen waarop er niets gemeten is. Daaraan hang je weekdagen en weeknummers, zodat je per week kunt kiezen.
### 7a. De tabel, uitgewerkt
Kies Modellering, Nieuwe tabel en typ:
kalender = SELECTCOLUMNS ( CALENDAR ( MIN ( metingen[datum] ), MAX ( metingen[datum] ) ), "Datum", [Date] )
Selecteer de tabel kalender en kies Tabelhulpmiddelen, Markeren als datumtabel, met de kolom Datum.
Je ziet nu in de Tabelweergave een tabel kalender met 28 rijen, van 2 november tot en met 29 november 2026.
### 7b. Het weekdagnummer, uitgewerkt
Kies Modellering, Nieuwe kolom in kalender:
Weekdagnummer = WEEKDAY ( kalender[Datum], 2 )
Het getal 2 zegt dat de week op maandag begint: maandag is 1, zondag is 7.
Je ziet nu bij 2 november een 1 en bij 8 november een 7.
### 7c. De weekdag, half
Maak een kolom Weekdag met de naam van de dag. Gebruik FORMAT ( kalender[Datum], "dddd" ). Zet daarna onder Kolomhulpmiddelen, Sorteren op kolom, de kolom Weekdag op Weekdagnummer, anders staat vrijdag straks vóór maandag.
Je ziet nu bij 2 november maandag (of Monday, afhankelijk van je Windows).
### 7d. Het weeknummer, zelf
Maak een kolom Weeknummer. Gebruik de functie WEEKNUM met de telling die in Nederland gebruikelijk is (ISO, de week begint op maandag). Zoek in de uitleg bij de functie op welk getal je dan als tweede argument meegeeft.
Je ziet nu bij 2 november week 45 en bij 29 november week 48.
### 7e. De relatie
Leg in de Modelweergave een relatie van kalender[Datum] naar metingen[datum], Veel-op-een, filterrichting Enkel.
Je ziet nu drie tabellen met twee lijnen: ruimtes en kalender elk met een 1, metingen in het midden met twee sterretjes.

## Stap 8: vier metingen (10 minuten)
Een meting is een berekening die Power BI opnieuw doet bij elke keuze die je maakt. Je zet ze in de tabel metingen: selecteer die tabel en kies Modellering, Nieuwe meting.
### 8a. Aantal metingen, uitgewerkt
Aantal metingen = COUNTROWS ( metingen )
Zet de notatie op Geheel getal met scheidingsteken voor duizendtallen.
### 8b. Gemiddelde temperatuur, uitgewerkt
Gemiddelde temperatuur = AVERAGE ( metingen[temperatuur] )
Zet de notatie op Decimaal getal met 1 decimaal. In les 1 zag je wat er gebeurt als Power BI zelf kiest: een som van temperaturen, en die zegt niets.
### 8c. Laagste temperatuur, half
Maak Laagste temperatuur op dezelfde manier. Je hebt alleen een andere functie nodig, met een naam van drie letters.
### 8d. Gemiddelde luchtvochtigheid, zelf
Maak Gemiddelde luchtvochtigheid, met 1 decimaal.
Je ziet nu in het deelvenster Gegevens bij metingen vier regels met een rekenmachinetje ervoor.

## Stap 9: narekenen (7 minuten)
1.Ga naar de Rapportweergave. Zet een Tabel op het canvas met ruimtes[ruimte] en je vier metingen.
2.Vergelijk elke cel met de controlewaarden hieronder en vul de laatste kolom in: klopt of klopt niet.
3.Zet daarnaast een Slicer met kalender[Weeknummer] en kies week 47.
Controlewaarden, hele maand:
| Ruimte | Aantal metingen | Gem. temperatuur | Laagste temperatuur | Gem. luchtvochtigheid | Klopt bij jullie? |
| Expeditie | 8.059 | 13,9 | 1,9 | 59,6 |  |
| Fabriekshal | 8.058 | 19,0 | 13,0 | 46,1 |  |
| Kantoor | 7.817 | 18,8 | 15,4 | 49,0 |  |
| Magazijn | 8.055 | 13,8 | 7,9 | 61,4 |  |
| Totaal | 31.989 | 16,4 | 1,9 | 54,1 |  |
Controlewaarde week 47, totaal: 7.811 metingen en een gemiddelde temperatuur van 14,9 °C.
Klopt er iets niet? Dan helpt deze tabel je op weg.
| Wat je ziet | Waar het waarschijnlijk zit |
| Kantoor heeft 7.878 metingen | De regels met de klok op 2021 staan er nog in |
| Fabriekshal heeft 8.094 metingen | De dubbele regels staan er nog in |
| Laagste temperatuur is −999 of 0,0 | Een filter op foutwaarden ontbreekt in een van de ruimtes |
| Een gemiddelde is ongeveer tien keer te groot | De landinstelling bij Type wijzigen klopt niet |
| Elke ruimte geeft hetzelfde getal | De relatie tussen ruimtes en metingen ontbreekt |
| Week 47 verandert niets | De relatie tussen kalender en metingen ontbreekt |

## Klaar? Verdieping
Kies er een of meer. Ze tellen niet mee voor P2, maar je hebt ze in les 3 en in je project goed nodig.
### A. Binnen de streefband
Elke ruimte heeft in ruimtes een eigen streefband voor de temperatuur. Maak in metingen een berekende kolom die zegt of een meting binnen de band van haar eigen ruimte ligt:
temp_in_band = metingen[temperatuur] >= RELATED ( ruimtes[temp_min] ) && metingen[temperatuur] <= RELATED ( ruimtes[temp_max] )
Maak daarna zelf een meting Deel binnen streefband die het aandeel metingen met temp_in_band gelijk aan TRUE geeft, als percentage. Controle, over alle uren van de maand: fabriekshal 70,7 %, kantoor 47,1 %, magazijn 49,1 %, expeditie 41,9 %. Het kantoor scoort laag omdat de nachten meetellen. In les 3 kijk je alleen naar de uren dat er gewerkt wordt.
### B. Een heatmap per uur
Voeg in Power Query aan metingen een kolom uur toe (Kolom toevoegen, Tijd, Uur). Bouw een Matrix met kalender[Weekdag] in de rijen, uur in de kolommen en Gemiddelde temperatuur als waarde, met voorwaardelijke opmaak op de achtergrond. Kies het kantoor. Wat zie je op zaterdag en zondag? Je kent dit beeld uit les 1; nu heb je het zelf gemaakt.
### C. Denkvraag over je eigen Pico
Welke van de stappen van vandaag heb je bij je eigen Pico-bestand zeker nodig, en welke misschien niet? Kijk naar hoe jullie Pico de tijd vastlegt en hoe hij wordt gestart. Schrijf het in drie regels op; je gebruikt het in week 1 bij de coaching.

## Inleveren
Lever per tweetal in op Brightspace:
- je bestand Les 2 - <jullie namen>.pbix;
- dit document met de ingevulde controletabel.
Deze opdracht hoort bij P2 (voldaan of niet voldaan). Voor les 2 geldt:
- in Power Query staan de stappen voor kolomtypen, decimaalteken, foutwaarden en dubbele regels;
- in de Modelweergave staan de relatie tussen metingen en ruimtes en een datumtabel met relatie;
- de vier metingen geven de controlewaarden.
Ontbreekt er iets, dan mag je het herstellen volgens de herkansingsregel in de studiewijzer. Je hebt dit bestand in les 3 weer nodig; bewaar het goed.
PBTXT;
