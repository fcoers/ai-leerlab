---
seotitel: 3D-ontwerp maken met AI en printen: zo doe je het
beschrijving: Van vraag tot print: welke tools je nodig hebt om met Claude Code een 3D-ontwerp op maat te maken, met bekijkmodel en printbestanden erbij.
kaarttekst: Hoe ik met AI een bewaardoos op maat heb ontworpen: wat je installeert, welke stappen je zet en waar je tegenaan loopt.
soort: tutorial
categorie: techniek
voor: docenten, studenten
avatar: mees-bouwen
datum: 2026-11-25
---

# Zo maak je met AI een ontwerp voor je 3D printer

Frits Coers, docent bij Windesheim

Voor ons Sinterklaasspel wilde ik een doos waar alles in past: het geld, de dobbelsteen, de tokens en de handelfiches. Getekend heb ik hem niet. Ik heb verteld wat erin moest, en mijn AI-team heeft het ontwerp in code gemaakt, met de printbestanden erbij. Hoe het spel zelf is ontstaan, lees je in [Een eigen Sinterklaasspel ontwerpen met AI](/leren/een-eigen-sinterklaasspel-ontwerpen-met-ai/).

![3D-weergave van de bewaardoos: een rode doos met vakken en een half opengeschoven deksel met het woord Sinterklaasspel, en ernaast twee bakken met elk drie vakken voor het geld.](/assets/img/sinterklaasspel-bewaardoos.webp)

*Het 3D model van de bewaardoos*

## Een ontwerp in code

In mijn team doet Mees dit, een agent in Claude Code met 3D-printen als vak. Hij tekent niet met de muis, maar schrijft een Python-script dat de doos opbouwt uit blokken en uitsparingen. Alle maten staan bovenaan het script: de maat van de geldkaarten, de dikte van de wand en de ruimte tussen het deksel en de doos. Wil je iets anders, dan verander je één getal en draai je het script opnieuw.

Een AI-tool die van een plaatje een 3D-model maakt, werkt hier niet: zo'n model is niet op maat.

## Wat je nodig hebt

- [Claude Code](https://code.claude.com/docs/en/setup), dat de scripts schrijft en de programma's hieronder start.
- [Python](https://www.python.org/downloads/) met een paar gratis bibliotheken voor 3D-modellen, zoals [manifold3d](https://pypi.org/project/manifold3d/), [trimesh](https://pypi.org/project/trimesh/) en [build123d](https://build123d.readthedocs.io/en/latest/getting_started/installation.html).
- [Blender](https://www.blender.org/download/), om een 3D-bestand te maken dat je kunt bekijken.
- [Bambu Studio](https://bambulab.com/en/download/studio), de gratis slicer van Bambu Lab. Ik print op een Bambu Lab X1 Carbon.

Blender en Bambu Studio installeer je zelf. De Python-bibliotheken laat je Claude Code installeren in een eigen omgeving. Zet die buiten je OneDrive- of iCloud-map, want hij is ruim 600 MB. Een aparte koppeling met Blender of de slicer heb je niet nodig: Claude Code start beide programma's op de achtergrond vanaf de opdrachtregel.

## Van vraag tot print

Begin met wat erin moet en hoe groot het is. Bij mij waren dat geldkaarten van 63 bij 88 mm, een dobbelsteen van 6 cm, ronde fiches en een zakje met tokens, onder een schuifdeksel. Laat de AI vragen stellen over wat hij nog niet weet.

![3D-weergave van de rode doos zonder deksel, schuin van boven: een groot vak voor de twee geldbakken, daarachter vakken voor de dobbelsteen, het zakje met tokens en de handelfiches.](/assets/img/3d-ontwerp-doos-zonder-deksel.webp)

*De doos zonder deksel, uit het printbestand*

Laat daarna eerst een bekijkmodel maken. Mees maakt bij elk ontwerp een USDZ-bestand, dat je op de Mac met de spatiebalk opent en in 3D kunt draaien. Zo heb ik elke versie van de doos beoordeeld voordat er iets naar de printer ging.

Vraag ook om controles in het script. Het script van de doos controleert of elk onderdeel een dichte vorm is, of alles op het bed past en of de bakken, de kaarten en het deksel elkaar niet raken.

Laat de AI ontwerpen zonder support. Mees bepaalt eerst hoe een onderdeel op het bed ligt en laat niets verder overhangen dan 45 graden. De holtes in de doos krijgen daarom een dak van 45 graden, en alleen een korte brug van 2 mm in het deksel hangt vrij. Daardoor print de doos zonder support.

Als laatste maakt de AI de printbestanden. Bambu Studio heeft een opdrachtregel, dus Claude Code kan zelf slicen. Per printplaat krijg je een project dat je nog kunt aanpassen en een bestand dat klaar is om te printen. Dat open je in Bambu Studio en stuur je naar de printer.

![Drie voorbeelden van printplaten uit Bambu Studio: de rode doos, het gele deksel plat met de tekst Sinterklaasspel in spiegelbeeld, en de twee gele geldbakken naast elkaar.](/assets/img/3d-ontwerp-printplaten.webp)

*De drie printplaten in Bambu Studio: doos, deksel en geldbakken*

## Wat het kost

Op Claude Code na is alle software gratis, en er gaan geen credits op. De doos, de twee geldbakken en het deksel kosten samen een halve kilo filament en ruim negen uur printen.

## Waar je tegenaan loopt

De eerste print is een passingstest. Of het deksel soepel schuift en de kaarten goed in de bakken passen, zie je pas als het geprint is. Daarom staat de ruimte rond het deksel als getal bovenaan het script. Die ruimte zit in de gleuf van de doos. Schuift het deksel te stroef, dan maak je dat getal iets groter en print je de doos opnieuw; het deksel kun je houden.

![3D-weergave van de rode doos met het gele schuifdeksel half naar voren uit de gleuf geschoven.](/assets/img/3d-ontwerp-schuifdeksel.webp)

*Het schuifdeksel loopt in een gleuf boven in de doos*

Printen vanuit de AI kan, maar mijn team doet het niet. Een printopdracht vanuit een script naar de X1 Carbon sturen kan alleen in LAN-modus met Developer Mode aan, en dan werken de cloud en de app Bambu Handy niet meer.

## Zelf beginnen

Je hebt geen agentteam nodig. Met deze vraag aan Claude Code kom je een heel eind:

```
Ik wil een doos 3D-printen voor de onderdelen van een spel: geldkaarten van 63 x 88 mm, een dobbelsteen van 6 cm en een zakje met tokens, met een schuifdeksel. Ik print in PLA op een Bambu Lab X1 Carbon. Stel eerst vragen over wat je nog niet weet. Schrijf een Python-script met alle maten bovenaan, ontwerp zonder support en laat het script controleren of elk onderdeel dicht is en op het bed past. Maak eerst een USDZ-bestand om te bekijken, en pas na mijn akkoord de printbestanden.
```

Vervang de onderdelen en de printer door die van jou. De bestanden van onze doos staan bij de downloads in het artikel over het spel.

---

**Transparantie GenAI.** De doos heb ik samen met mijn AI-team (Claude, in Claude Code) ontworpen: ik heb bepaald wat erin moest en de versies beoordeeld, een AI-teamlid heeft het script en de printbestanden gemaakt. Een AI-teamlid heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van het logboek en de scripts van het project. Ik heb de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Co-Creator.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
