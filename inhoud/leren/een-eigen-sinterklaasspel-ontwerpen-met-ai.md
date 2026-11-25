---
cover_soort: figuur
seotitel: Een eigen Sinterklaasspel ontwerpen met AI
beschrijving: Spelregels, kaarten, tokens en een geprinte doos: hoe ik met AI een spel voor pakjesavond heb ontworpen. Met alle bestanden om het na te maken.
kaarttekst: Hoe ik met mijn AI-team spelregels, kaarten, tokens en een doos voor pakjesavond heb ontworpen. Met alle bestanden om het na te maken.
soort: verhaal
categorie: praktijk
tags: agents
voor: docenten, studenten
avatar: james-sint
datum: 2026-11-25
---

# Een eigen Sinterklaasspel ontwerpen met AI

Frits Coers, docent bij Windesheim

Voor pakjesavond thuis wilde ik een spel waarin de pakjes zelf de inzet zijn. Iedereen neemt drie cadeaus mee: een grappig cadeau, een topcadeau en iets wat je graag kwijt wilt. In de eerste ronde bied je op de pakjes, in de tweede ronde bepaalt een dobbelsteen wie wat houdt. Het idee had ik al. Een spel dat ook echt werkt, is alleen iets anders dan een idee. Dat heb ik samen met mijn AI-team uitgewerkt, van de spelregels tot de doos waar alles in zit.

In dit artikel vertel ik hoe dat is gegaan. Onderaan staan alle bestanden, zodat je het spel kunt namaken. Of beter nog: je eigen spel kunt ontwerpen.

## Eerst een spelontwerper erbij

Mijn team werkt in Claude Code en bestaat uit AI-agents met elk een eigen vak. Hoe dat werkt, lees je in [Je eigen agentteam: zo begin je](/leren/je-eigen-agentteam/). Een spelontwerper zat er nog niet bij. Bij mij komt er pas een rol bij als er iets ontbreekt, en dan laat ik eerst uitzoeken wat een echte professional in dat vak weet en kan. Onno, mijn onderzoeker, heeft gekeken naar vacatures bij speluitgevers en naar vakboeken over spelontwerp. Daarna heeft Harriet daar een nieuw teamlid van gemaakt: Ludo, Latijn voor "ik speel".

Wat me opviel is hoeveel er in dat vak zit dat ik zelf niet had bedacht. Een spelontwerper kijkt niet alleen of de regels kloppen, maar ook of er één strategie is die altijd wint, of iemand die achterloopt nog terug kan komen en of je niet te lang zit te wachten tot je weer aan de beurt bent.

## Koehandel als voorbeeld

Ludo heeft mijn idee eerst uitgewerkt tot een opzet die je kunt testen. Voor de veiling hebben we het kaartspel Koehandel als voorbeeld genomen. Daarin mag de veilingmeester het hoogste bod ook zelf betalen en het pakje houden. Zo gaat het geld tussen de spelers rond en niet naar een bank, en krijgt wie achterloopt geld terug door zelf te veilen.

De topcadeaus krijgen een label met een ster, zodat iedereen weet waar het om gaat. Het grappige cadeau en het kwijt-item zien er hetzelfde uit. Alleen wie het pakje heeft meegenomen, weet wat erin zit. Daar zit de bluf van het spel: drijf je de prijs van je eigen kwijt-item op, dan loop je het risico dat je er zelf mee naar huis gaat.

## Duizenden potjes zonder tafel

Voordat ik iemand aan tafel liet spelen, heeft Stef het spel nagespeeld in een simulatie in Python. Computerspelers spelen dan tienduizenden potjes, zodat je ziet wat er gemiddeld gebeurt. Daar kwamen twee dingen uit die ik tijdens het spelen pas veel later had gemerkt.

Het eerste was dat de dobbelsteenronde de veiling helemaal uitwiste. Wat je in ronde 1 had gekocht, zei bijna niets over wat je mee naar huis nam. Het tweede was dat twee spelers in de Koehandel-ronde eindeloos dezelfde ster heen en weer konden kopen.

Bij het eerste heb ik iets gedaan wat ik vooraf niet had verwacht: ik heb het zo gelaten. De veiling verdeelt de pakjes, de dobbelsteen bepaalt wat je houdt. Zolang de veiling leuk is en geld ertoe doet terwijl hij loopt, vind ik dat prima. Dit was voor mij misschien wel de belangrijkste les. Een simulatie laat zien wat er gebeurt, maar niet of je dat erg vindt. De keuze maak ik zelf.

Voor het tweede kwam Ludo met een handelfiche. Iedereen mag één keer per spel handelen in plaats van veilen, en daarmee is het eindeloze heen en weer weg.

## Wat ik zelf heb besloten

Het spel is in een paar versies gegroeid, en bij elke versie lag er een keuze bij mij. Een paar daarvan kwamen uit mijn eigen hoofd. Iedereen mag hooguit één ster hebben, zodat niemand alle topcadeaus kan opkopen. Het geld telt alleen in de veiling. Ludo heeft er wel voor gezorgd dat sparen loont: wie het meeste overhoudt, kiest daarna als eerste een token. Op de dobbelsteen kwam een vlak Uitpakken, zodat je tijdens het spel al ziet wat er in een pakje zit.

![De zes vlakken van de dobbelsteen met hun naam: Afpakken (een hand), Ruilen (twee pijlen heen en terug), Naar links (een ring van pijlen), Geven (een pakje), Token (een zak) en Uitpakken (een open doos).](/assets/img/sinterklaasspel-dobbelsteen.webp)

*De zes vlakken van de dobbelsteen*

Ik had ook wensen die Ludo voor me heeft uitgewerkt. Ik wilde één token dat alles omgooit. Dat is de Roe geworden: wie hem speelt, laat iedereen al zijn tokens inleveren. En ik wilde een token waarmee je een cadeau ingepakt houdt. Dat is de Zegel. Ludo kwam daarbij met twee varianten en legde uit wat elke variant aan tafel doet. Ik heb gekozen voor de variant waarin de Zegel op het pakje blijft liggen, ook als iemand het van je afpakt. Zo wordt verzegelen een gok: een pakje dat je beschermt, valt juist op.

![Zeven ronde houten tokens met een icoon en een naam: Schild, Stop, Sterruil, Nog een keer, Roe, Zegel en Handel.](/assets/img/sinterklaasspel-tokens.webp)

*De tokens en de handelfiche, om te graveren en te snijden*

Het einde van het spel is ook een keuze van mij. Er gaat een kookwekker, maar niet vanaf het begin. De spelleider zet hem pas aan als hij vindt dat het tijd wordt, en niemand weet hoe lang hij nog loopt. Zo duurt het spel precies lang genoeg.

Op een gegeven moment heb ik gezegd dat we stoppen met simuleren. Ludo was het daarmee eens: de nieuwe tokens draaien om bluf en om wie je aan tafel iets gunt, en dat zit in geen enkel model.

## Spelmateriaal dat je blind moet kunnen trekken

Bram heeft het spelmateriaal ontworpen: geldkaarten, spelersvellen, labels, tokens en de dobbelsteen. Daar zaten kleine keuzes in waar ik zelf niet aan had gedacht. Alle tokens hebben dezelfde ronde vorm, omdat je ze blind uit een zak trekt. De achterkant van de geldkaarten heeft een doorlopend patroon tot over de rand, zodat je bij scheef dubbelzijdig printen niet kunt zien welke kaart een nul is.

![Zes geldkaarten van 0, 1, 5, 10, 20 en 50 pepernoten, elk in een eigen kleur met een plaatje van een wortel, pepernoot, chocoladeletter, pakje, mijter en staf, en een rode achterkant met mijters en pepernoten.](/assets/img/sinterklaasspel-geldkaarten.webp)

*Geldkaarten van 0 tot 50 pepernoten, en de achterkant*

De eerste versie was netjes, maar ik vond hem saai. Dat heb ik ook zo gezegd. De tweede versie is helemaal Sinterklaas: het geld is in pepernoten, de sterlabels zijn mijters en elke geldwaarde heeft een eigen kleur en een eigen plaatje, van een wortel tot een staf. De tokens en de dobbelsteenvlakken zijn bestanden om te laten graveren en snijden met een lasersnijder.

Het geld in de zak heb ik zelf nog wat leuker gemaakt. In plaats van briefjes met strooigeld gaan er vier kleine nep-pakjes in de zak. Wie zo'n pakje trekt, zorgt dat iedereen pepernoten krijgt.

![Een rood sterlabel in de vorm van een mijter met het woord Ster, en een blauw strooilabel in de vorm van een envelop. Daarop staat: Strooipakje! Iedereen krijgt geld van de bank: 1e 5, 2e 10, 3e 20, 4e 50 pepernoten. Zet dit pakje bij de bank en trek opnieuw.](/assets/img/sinterklaasspel-labels.webp)

*Een sterlabel en een strooipakje: wie dat trekt, laat iedereen geld van de bank krijgen*

## Een doos die je zelf kunt printen

Mees, die bij mij 3D-printontwerpen maakt, heeft er een bewaardoos bij ontworpen. Voorin liggen twee bakken met vakken voor het geld, daarachter een plek voor de dobbelsteen, het zakje met tokens en de handelfiches, en er gaat een schuifdeksel op. Ik kon elke versie eerst in 3D op mijn scherm bekijken voordat er iets werd geprint. Dat scheelt veel filament. Hoe je zelf met AI een 3D-ontwerp maakt dat je kunt printen, lees je in [Zo maak je met AI een 3D-ontwerp dat je kunt printen](/leren/zo-maak-je-met-ai-een-ontwerp-voor-je-3d-printer/).

![3D-weergave van de bewaardoos: een rode doos met vakken en een half opengeschoven deksel met het woord Sinterklaasspel, en ernaast twee bakken met elk drie vakken voor het geld.](/assets/img/sinterklaasspel-bewaardoos.webp)

*De bewaardoos met schuifdeksel en de twee geldbakken*

## Uitleg op papier en in een filmpje

Ludo heeft de speluitleg geschreven, en Bram heeft er een A4 van gemaakt dat je tot een klein boekje vouwt en in de doos legt. Anouk heeft een korte uitlegvideo gemaakt in de stijl van een pop-upboek. Eerst kwam er een proef van een paar seconden om de stijl te kiezen, en pas daarna is de hele film gemaakt. Hoe je zelf met AI zo'n video maakt, lees je in [Zo maak je met AI een uitlegvideo in 3D](/leren/zo-maak-je-met-ai-een-uitlegvideo-in-3d/).

![Beeld uit de uitlegvideo: een pop-upboek met tokens, twee dobbelsteenvlakken, een kookwekker en de tekst Ronde 2, dobbel tot de wekker.](/assets/img/sinterklaasspel-uitlegvideo.webp)

*Een beeld uit de uitlegvideo*

## Zelf een spel ontwerpen

Je hebt geen team van agents nodig om dit zelf te doen. Begin met je eigen idee, hoe ruw ook, en laat de AI vragen stellen voordat hij iets uitwerkt. Laat hem daarna doorrekenen waar je twijfelt over de balans, in Claude, ChatGPT of een andere assistent die Python kan draaien. En houd de keuzes bij jezelf. De AI kan je laten zien wat een regel doet, maar of het leuk is in jouw situatie, weet alleen jij.

Op pakjesavond spelen we het eerste echte potje, en dan merk ik vanzelf welke regel nog een keer op de schop moet.

## Downloads

Wil je het spel zelf maken? Hier staan [alle bestanden](/downloads/sinterklaasspel/sinterklaasspel.zip). Print de PDF's op A4; de geldkaarten dubbelzijdig over de lange kant.

- [Speluitleg](/downloads/sinterklaasspel/speluitleg.pdf) (PDF, om te vouwen)
- [Spelersvel](/downloads/sinterklaasspel/spelersvel.pdf) (PDF)
- [Geldkaarten](/downloads/sinterklaasspel/geldkaarten.pdf) (PDF)
- [Labels voor de sterren en de strooipakjes](/downloads/sinterklaasspel/labels.pdf) (PDF)
- [Tokens en handelfiches](/downloads/sinterklaasspel/tokens.zip), voor de lasersnijder (SVG)
- [Dobbelsteen](/downloads/sinterklaasspel/dobbelsteen.zip), zes vlakken om te graveren (SVG)
- [Bewaardoos](/downloads/sinterklaasspel/bewaardoos.zip): doos, deksel en geldbak (STL; de geldbak print je twee keer)

Je mag het spel vrij namaken en de bestanden aanpassen, zolang je naar deze pagina verwijst en er niets aan verdient. De bestanden vallen onder de licentie [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.nl).

Zelf erbij: een houten dobbelsteen (Amazon), een stoffen zak, een kookwekker, vier kleine pakjes voor de strooilabels, en van iedere speler drie ingepakte cadeaus.

## Bronnen

- Koltze, R. (1985). *Kuhhandel* [Kaartspel]. Ravensburger.
- Engelstein, G., & Shalev, I. (2022). *Building blocks of tabletop game design*. CRC Press.

---

**Transparantie GenAI.** Het spel heb ik bedacht en alle keuzes heb ik zelf gemaakt. Mijn AI-team (Claude, in Claude Code) heeft de regels uitgewerkt en gesimuleerd, en het spelmateriaal, de doos en de video gemaakt. Een AI-teamlid heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van het logboek en de spelopzetten van het project. Ik heb de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
