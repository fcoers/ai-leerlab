---
cover: /assets/img/nakijkapp-power-bi.webp
cover_soort: vol
cover_focus: 55% 50%
cover_alt: Een scherm van de nakijkapp, schuin in beeld: een duo heeft bij een vraag over de heatmap uitgelegd wat het ziet, en de AI-tutor geeft per criterium aan wat erin zit, wat nog mist en wat deels klopt, met een vraag terug.
seotitel: Je eigen onderwijsapp bouwen met AI: mijn nakijkapp
beschrijving: Zo heb ik met AI een nakijkapp voor mijn Power BI-lessen laten bouwen: wat hij oplevert, hoe de tutor helpt zonder voor te zeggen en hoe je zelf begint.
kaarttekst: Een app die getallen nakijkt en hints geeft zonder het antwoord voor te zeggen. Wat hij me in de les oplevert en hoe je er zelf een maakt.
soort: uitleg
categorie: techniek
tags: feedback, agents, privacy
voor: docenten
avatar: roel-bouwen
datum: 2026-11-11
---

# Een eigen onderwijsapp bouwen: mijn nakijkapp voor Power BI

In het vak Informatiemanagement leren mijn studenten van Technische Bedrijfskunde in duo's werken met Power BI. Tijdens zo'n les loop ik van tafel naar tafel. Vaak zitten meerdere duo's op dezelfde plek vast, en wie denkt dat hij klaar is, weet niet zeker of zijn getallen kloppen. Ik kan niet bij iedereen tegelijk zijn. Daarom heb ik met mijn AI-team een kleine app laten bouwen die naast Power BI openstaat. Hij kijkt de getallen na, helpt als een duo vastzit en laat mij zien hoe ver iedereen is.

Hieronder lees je wat dat oplevert, hoe het werkt en hoe je het zelf maakt. Programmeren hoef je daarvoor niet, maar je moet wel precies weten wat je wilt.

## Wat het oplevert

Het grootste voordeel merk ik in de les zelf. Duo's weten meteen of hun dashboard klopt, en ze hoeven niet op mij te wachten om verder te kunnen. Daardoor heb ik meer tijd voor de duo's die echt vastzitten, en voor het gesprek over wat hun dashboard laat zien. Daar gaat het mij om.

Na de les zie ik per duo hoe ver ze zijn gekomen en welke vragen nog openstaan. Bij mij staat dat in [mijn eigen productiviteitsapp](/leren/waarom-ik-mijn-eigen-productiviteitsapp-bouwde-en-wat-jij-nodig-hebt/), maar een docentpagina in de app zelf kan ook.

## Hoe het werkt

Duo's schrijven zich in met een code die ik in de les noem en krijgen een eigen duocode, waarmee ze in de volgende les verdergaan. Bij een vraag met een getal kijkt de app hard na: het getal uit hun dashboard moet binnen een kleine marge van het goede antwoord liggen. Die antwoorden heeft het team vooraf uitgerekend uit dezelfde dataset die de studenten krijgen.

Wat me hierbij opviel, is dat de controlegetallen in mijn eigen instructie niets bewijzen, want die staan gewoon op papier. Daarom krijgt elk duo aan het eind een eigen controlevraag, over een andere ruimte en een andere week. Overschrijven van het buurduo heeft dan geen zin.

Bij open vragen leggen duo's in eigen woorden uit wat hun dashboard laat zien en wat ze zouden doen. Daar geeft een AI-tutor feedback, met Claude Sonnet van Anthropic. Die zegt per criterium uit mijn antwoordmodel of het erin zit, deels of nog mist, en stelt er een vraag bij terug. Het antwoord geeft hij nooit. Een tweede, kleiner model (Claude Haiku) kijkt vooraf of er niet per ongeluk een antwoord in staat; dan krijgt het duo een vaste hint.

Dan de twee vragen die je vast hebt: wat kost het, en wat gebeurt er met de gegevens? Een antwoord van de tutor kost ongeveer een cent. Tot nu toe zit ik onder een euro, en er staat een plafond van 40 euro per maand op. Op privacy en beveiliging is goed gelet. De app bewaart alleen de duonaam, de voornamen en wat een duo invult: de antwoorden op de oefenvragen en de vragen aan de tutor. Achternamen, studentnummers of e-mailadressen vraagt hij niet, en de codes worden niet leesbaar bewaard. Naar de AI gaan alleen die antwoorden en vragen, zonder namen, en uiterlijk de dag na het einde van het blok is alles van de duo's gewist. De app staat op mijn eigen website, is verborgen voor zoekmachines en alleen bedoeld voor mijn studenten.

## De didactiek erachter

De feedback volgt het model van Hattie en Timperley (2007): een duo ziet per onderdeel wat er al staat, wat nog mist en met welke vraag het verder kan. De hints werken zoals een goede docent helpt, eerst met een klein duwtje en pas meer als dat niet genoeg is, en het antwoord blijft bij de studenten zelf. Dit heet scaffolding (van de Pol e.a., 2010), en daar hoort ook bij dat je de hulp weer afbouwt. Zo is de reeks ook opgebouwd: in les één verkennen duo's een dashboard, in les twee bouwen ze er stap voor stap een na en in les drie maken ze er zelf een.

In het tweede deel van les één zoeken duo's twee fouten die ik er bewust in heb gezet. Wie een fout moet verklaren, moet snappen hoe het wel werkt. Volgens Große en Renkl (2007) leer je daar meer van dan van alleen goede voorbeelden, vooral als je al wat voorkennis hebt. Daarom komt dat deel pas na de eerste vragen. Ook het werken in duo's met een tutor die terugvraagt, is een bewuste keuze. Volgens het ICAP-model van Chi en Wylie (2014) leert wie samen iets in eigen woorden moet uitleggen meer dan wie alleen een antwoord leest.

## Wat niet meteen goed is gegaan

In de les bleek de tutor te streng. Mijn antwoordmodel bevat precieze getallen, en de feedback rekende duo's af op een getal dat net iets anders was, terwijl ze het idee wel goed hadden. Ik heb het team daarom gevraagd de feedback losser te maken: is het begrip er, dan zit het erin, en bij twijfel kiest de tutor het mildere oordeel. Ook de getallen krijgen iets meer ruimte. Daarnaast had ik er niet aan gedacht dat ik twee klassen tegelijk les geef. Elke klas heeft nu een eigen inschrijfcode, een eigen overzicht en een eigen datum waarop alles wordt gewist. Reken er dus op dat de eerste les ook een proef is.

## Zo maak je het zelf

Begin bij je les en niet bij de app. Schrijf per les op wat een student inlevert, wat je hard kunt nakijken en waar je echt hulp of feedback wilt.

Laat je daarna eerst bevragen. Ik werk met Claude Code en [een team van AI-agents](/leren/je-eigen-agentteam/). De ontwerper in dat team heeft niet meteen een scherm gemaakt, maar mij eerst vragen gesteld. Werk je zonder team, met ChatGPT of Claude, dan kun je hetzelfde vragen:

> Ik wil een kleine webapp voor mijn les [vak en onderwerp]. Studenten werken in duo's aan [opdracht]. Bouw nog niets. Stel me eerst vragen over wat studenten inleveren, wat de app hard kan nakijken, waar AI wel en niet mag helpen, hoe studenten binnenkomen zonder account en wat ik als docent wil zien. Maak daarna een klikbare schets van de schermen.

Pas toen ik ja had gezegd op die schets, is het team gaan bouwen. Begin met één les. Bij mij was dat de les met de meeste harde controles, en de les met open vragen is er later bij gekomen. Een nieuwe les is nu een nieuw bestand met de vragen, de hints en het antwoordmodel, zonder nieuwe code.

Leg vooraf de regels voor de tutor vast: nooit het antwoord, hints van klein naar groot en een controle op elk antwoord. Het antwoordmodel staat alleen op de server, nooit in de browser van de student.

Regel ook vooraf de praktische kant. Je hebt een eigen API-account nodig, bijvoorbeeld bij Anthropic of OpenAI, met tegoed dat niet vanzelf wordt bijgevuld en een limiet per maand. De app moet ergens draaien; bij mij is dat gewone webhosting met PHP. En spreek met jezelf af dat er geen namen naar de AI gaan en dat alles na het blok wordt gewist.

Test daarna met verzonnen studenten en probeer de tutor bewust het antwoord te ontfutselen. In mijn team doet een aparte tester dat. Hij heeft de app meerdere keren afgekeurd voordat mijn studenten ermee mochten werken.

De derde les staat nog niet in de app. Daarin kiezen studenten zelf hun KPI's en schrijven ze een advies, dus er valt weinig hard na te kijken. Daar ga ik merken of feedback per criterium genoeg is. Wil je zelf beginnen, kies dan één les waarin je steeds dezelfde vraag beantwoordt, en schrijf op wat je daar hard kunt nakijken. Dat lijstje is je eerste opdracht aan je AI-assistent.

## Bronnen

- Chi, M. T. H., & Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. *Educational Psychologist, 49*(4), 219–243. https://doi.org/10.1080/00461520.2014.965823
- Große, C. S., & Renkl, A. (2007). Finding and fixing errors in worked examples: Can this foster learning outcomes? *Learning and Instruction, 17*(6), 612–634. https://doi.org/10.1016/j.learninstruc.2007.09.008
- Hattie, J., & Timperley, H. (2007). The power of feedback. *Review of Educational Research, 77*(1), 81–112. https://doi.org/10.3102/003465430298487
- van de Pol, J., Volman, M., & Beishuizen, J. (2010). Scaffolding in teacher–student interaction: A decade of research. *Educational Psychology Review, 22*(3), 271–296. https://doi.org/10.1007/s10648-010-9127-6

---

**Transparantie GenAI.** Een AI-teamlid heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van mijn opdracht en het werk van mijn team aan de nakijkapp. Ik heb onderwerp en lijn bepaald en de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
