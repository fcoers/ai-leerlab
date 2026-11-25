---
seotitel: Uitlegvideo in 3D maken met AI: zo doe je het
beschrijving: Van stijl tot MP4: hoe je met de 3D Style Atlas en Claude Code een 3D-animatie maakt, wat je nodig hebt en wat het kost.
kaarttekst: Hoe de pop-upvideo bij ons Sinterklaasspel is gemaakt: stijl, draaiboek, proef en render, zonder animatieprogramma.
soort: tutorial
categorie: techniek
voor: docenten, studenten
avatar: anouk-bouwen
datum: 2026-11-25
---

# Zo maak je met AI een uitlegvideo in 3D

Frits Coers, docent bij Windesheim

Bij ons Sinterklaasspel hoort een uitlegvideo van anderhalve minuut in de stijl van een pop-upboek. De pagina's slaan om, de pakjes en het geld komen uit het papier omhoog en zakken weer weg. Er is geen animatieprogramma aan te pas gekomen: de hele film is code. Hoe het spel zelf is ontstaan, lees je in [Een eigen Sinterklaasspel ontwerpen met AI](/leren/een-eigen-sinterklaasspel-ontwerpen-met-ai/).

![Beeld uit de uitlegvideo: een pop-upboek met tokens, twee dobbelsteenvlakken, een kookwekker en de tekst Ronde 2, dobbel tot de wekker.](/assets/img/sinterklaasspel-uitlegvideo.webp)

*Een beeld uit de uitlegvideo*

## Een stijl uit de 3D Style Atlas

Futurepedia heeft de [3D Style Atlas](https://www.futurepedia.io/resources/3d-style-atlas) gemaakt: 37 stijlen voor korte 3D-animaties, van klei tot een pop-upboek. Alles wordt gebouwd in [three.js](https://threejs.org/), een gratis bibliotheek voor 3D in de browser, zonder 3D-modellen, foto's of texturen. Per stijl is er een prompt die je met je eigen onderwerp in Claude plakt. Je krijgt dan één HTML-bestand met de animatie. Voor de atlas heb je een gratis account bij Futurepedia nodig.

In mijn team staat de atlas als skill in Claude Code. Zo gebruikt Anouk, de animator in mijn team, de stijlen direct, zonder dat ik prompts hoef te plakken.

## Wat je nodig hebt

- [Claude Code](https://code.claude.com/docs/en/setup) met de 3D Style Atlas als [skill](https://code.claude.com/docs/en/skills), of alleen [Claude](https://claude.ai/) als je de prompt uit de atlas plakt.
- [Node.js](https://nodejs.org/en/download) met het pakket [Puppeteer](https://pptr.dev/guides/installation), [Google Chrome](https://www.google.com/chrome/) en [ffmpeg](https://ffmpeg.org/download.html), om van de animatie een MP4 met geluid te maken.

## Van idee tot filmpje

Begin met een stijl en een draaiboek. Anouk stelde Paper Pop-Up voor, met Soft Clay als alternatief, en maakte van beide een beeld met ons spel erin. Daarbij hoorde een draaiboek: per scène wat je ziet, de tekst in beeld en hoe lang het duurt. Ons draaiboek had acht scènes, van de pakjes die in de zak gaan tot het uitpakken aan het eind.

![Twee stijlbeelden naast elkaar. Links Paper Pop-Up: een opengeklapt pop-upboek met tokens, dobbelsteenvlakken, een kookwekker en de tekst Ronde 2, dobbel tot de wekker. Rechts Soft Clay: een dobbelsteen, pakjes, tokens en een kookwekker van klei, met de tekst Dobbel tot de wekker gaat.](/assets/img/uitlegvideo-stijlen.webp)

*De twee stijlbeelden: Paper Pop-Up en Soft Clay*

Laat tegelijk een proef maken. Anouk maakte een proef van tien seconden met de echte iconen van de dobbelsteen en de tokens, en de kleuren van het spelmateriaal. Stijlbeelden, draaiboek en proef kreeg ik in één keer. Op de proef heb ik de stijl gekozen en het draaiboek goedgekeurd, met één aanpassing: aan het eind gaan alleen de pakjes open die nog dicht zijn. Pas daarna is de hele film gemaakt.

![Beeld uit de proef van tien seconden: een pop-upboek met Ronde 1 bovenaan, de zak met pakjes, twee geldkaarten van 10 en 5 en de tekst Bied met pepernoten.](/assets/img/uitlegvideo-proef.webp)

*Een beeld uit de proef van tien seconden*

Als laatste wordt de film gerenderd. Chrome rekent onzichtbaar elk beeld apart uit, 25 per seconde, en ffmpeg maakt er een MP4 van. Ook het geluid is code: het geluid van papier en het ratelen van de kookwekker, zonder muziek.

## Wat het kost

Op Claude Code na is alles gratis, en er gaan geen credits op. Op mijn MacBook Pro was de hele film in ongeveer vijf minuten gerenderd.

## Waar je tegenaan loopt

Houd de AI aan het draaiboek. De eerste hele film week af van het draaiboek dat ik had goedgekeurd: de scènes over de zak en het strooipakje ontbraken, er zat een scène in die er niet in hoorde en de teksten in beeld waren anders. Het draaiboek stond alleen in een eerder bericht en was niet meegegeven met de opdracht voor de hele film, dus is het opnieuw bedacht. Daarna is de film opnieuw gemaakt, precies volgens het draaiboek. Geef het goedgekeurde draaiboek dus letterlijk mee met de opdracht, en laat na het renderen een rij beelden uit de film naast het draaiboek leggen, dan zie je het meteen.

![Acht beelden uit de film, één per scène van het draaiboek: Pakjesavond, drie pakjes per persoon; De zak, alles in de zak; Ronde 1, bied met pepernoten; Ronde 1, strooipakje: iedereen geld; Ronde 1, één keer handelen; Tokens kiezen, meeste geld kiest eerst; Ronde 2, dobbel tot de wekker; Einde, rest uitpakken.](/assets/img/uitlegvideo-draaiboek-scenes.webp)

*De acht scènes uit het draaiboek, als beelden uit de film*

Laat je laptop niet slapen tijdens het renderen. Het renderen van de tweede film duurde bijna zes uur in plaats van vijf minuten, omdat mijn laptop tussendoor in slaap viel. Op een Mac houdt het commando caffeinate in de Terminal hem wakker.

## Zelf beginnen

Open de 3D Style Atlas, kies een stijl die bij je onderwerp past en plak de prompt in Claude met je eigen verhaal. De prompt vraagt eerst om een storyboard en bouwt pas na jouw akkoord de animatie, net zoals bij ons.

---

**Transparantie GenAI.** De uitlegvideo heeft mijn AI-team (Claude, in Claude Code) gemaakt met de 3D Style Atlas. Ik heb de stijl gekozen, het draaiboek goedgekeurd en de film beoordeeld. Een AI-teamlid heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van het logboek en de bronbestanden van de video. Ik heb de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Co-Creator.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
