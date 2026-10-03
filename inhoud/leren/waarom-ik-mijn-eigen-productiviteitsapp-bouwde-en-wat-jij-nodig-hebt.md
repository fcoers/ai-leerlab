---
seotitel: Eigen productiviteitsapp bouwen: waarom en wat je nodig hebt
beschrijving: Waarom ik mijn eigen productiviteitsapp bouwde met AI-agents, en wat je nodig hebt om zelf te beginnen: kosten, voordelen en valkuilen, op Mac of Windows.
kaarttekst: Waarom ik een eigen app bouwde voor mijn taken en kennis, wat het kost en wat je nodig hebt om zelf te beginnen.
soort: uitleg
categorie: techniek
tags: agents, privacy
voor: studenten, docenten
avatar: job-nadenken
serie: bouw-je-eigen-productiviteitsapp
deel: 1
uitgelicht: categorie
datum: 2026-10-01
---

# Waarom ik mijn eigen productiviteitsapp bouwde, en wat je hiervoor nodig hebt

Frits Coers, docent bij Windesheim

Tot dit voorjaar stonden mijn taken op een bord in Notion en mijn aantekeningen in een Notion-wiki. Dat werkte prima, maar het voelde nooit echt van mij. Ik paste mijn werk aan het programma aan, in plaats van andersom. Op een dag in mei heb ik het bord geëxporteerd en mijn AI-team gevraagd er een eigen app van te maken. Aan het eind van die dag stonden mijn taken in een app die ik zelf had bedacht. Dat was een heel leuk moment! Kort daarna kwam de kennisbank erbij en heb ik Notion helemaal losgelaten.

Vijf maanden later open ik die app elke werkdag. In deze serie vertel ik hoe hij is ontstaan, welke keuzes ik maakte en wat er misging, zodat je zelf kunt beginnen, op een Mac of op Windows. Dit eerste deel gaat over de vraag of een eigen app iets voor jou is.

## Wat de app nu is

Het is een website die alleen op mijn eigen laptop draait en die ik in de browser open. Alles wat ik op een werkdag nodig heb, staat erin bij elkaar.

![Mijn productiviteitsapp in de browser: het menu en het taakbord, met voorbeeldgegevens](/assets/img/productiviteitsapp-overzicht.webp)

Wat ik er het meest aan heb, is dat alles aan elkaar vastzit. Na een overleg schrijf ik mijn aantekeningen in de journal en hang ik ze aan het project waar ze over gaan. Een artikel uit de kennisbank koppel ik aan de taak waarvoor ik het nodig heb. Zoek ik iets terug, dan is er één zoekveld voor alles. In Notion kon dat voor een deel ook, maar nu bepaal ik zelf wat bij elkaar hoort. Ook dit artikel begon als concept in de app.

## Ik heb hem niet zelf geprogrammeerd

Ik ben docent, geen programmeur. De app is gebouwd door het team van AI-agents waarover ik schreef in [Je eigen agentteam](/leren/je-eigen-agentteam/). Dat team werkt in Claude Code. Ik vertel wat ik wil, een agent bouwt het en ik probeer het uit. Werkt iets niet zoals ik bedoelde, dan zeg ik dat en gaat het nog een ronde.

Dat was in het begin best wennen. Ik hoef niet te begrijpen hoe de code werkt, maar ik moet wel heel goed kijken. Een agent meldt dat iets af is, en dan blijkt het op het ene scherm te werken en op het andere niet. De keuzes blijven van mij: wat erin komt, hoe het eruitziet en wat er bewaard wordt. In deze serie leer je dus geen programmeertaal, maar wel hoe je een AI-assistent zo'n app laat bouwen en waar je zelf op let.

## Op maat

Het voordeel dat ik het vaakst merk, is dat de app past bij hoe ik werk. Mijn bord heeft kolommen voor lesvoorbereiding en nakijken, omdat mijn week zo loopt en niet omdat een softwarebedrijf dat zo bedacht heeft.

Wat me daarnaast opvalt, is dat de app met me meegroeit. Transcriberen, nakijken en de contentkalender stonden niet op mijn lijst toen ik begon. Ze kwamen erbij op het moment dat ik merkte dat ik ze miste. Bij een bestaand pakket zet je zo'n wens op een forum en wacht je af. Hier is het een gesprek met mijn team, en meestal kan ik het snel daarna uitproberen.

## Gratis, met één kanttekening

De bouwstenen kosten niets. De app draait op Python, met Flask als basis, htmx voor de schermen en SQLite als database. Voor transcriberen gebruik ik whisper.cpp en voor samenvatten Ollama, twee gratis programma's die op je eigen laptop draaien. In de volgende delen lees je wat ze doen en hoe je ze installeert.

Het bouwen zelf is niet gratis. Voor Claude Code betaal je een abonnement, en dat geldt ook voor de meeste andere assistenten die dit kunnen. Daarnaast steek je er tijd in. Die zit niet in het typen, maar in het uitproberen, terugmelden en beslissen.

## Lokaal

De app en mijn gegevens staan op mijn eigen laptop. Er is geen account bij een leverancier, en valt het internet weg, dan werkt mijn bord gewoon door. Ook transcriberen en samenvatten gebeuren op de laptop zelf. Dat vind ik belangrijk, omdat ik soms gesprekken opneem waarvan ik heb beloofd dat ze niet naar een clouddienst gaan.

Eén ding zeg ik er wel bij. Claude Code werkt via de cloud en kan lezen wat er in zijn werkmap staat. Voor vertrouwelijke stukken geldt daarom een harde afspraak: de assistent opent ze niet.

## Je bent zelf de beheerder

Hier zit de keerzijde, en die heb ik zelf gemerkt. Eind augustus wilde ik een opname laten uitschrijven en bleek transcriberen al sinds juni niet meer te werken. Bij een herinstallatie was een onderdeel verdwenen, en zolang ik geen opname aanbood, viel het niemand op. Er is dan geen helpdesk die je belt. Het team heeft het opgelost, en het transcriberen is daarna zelfs veel sneller geworden, maar ontdekken moest ik het zelf. In deel 5 lees je hoe dat zat.

Zo'n moment leert je een paar gewoontes: een backup voordat er iets aan de database verandert, en na elke grote wijziging een korte controle of alles nog werkt. Wil je liever een programma waar een ander voor zorgt, dan ben je met een bestaande app beter af. Dat meen ik.

## Wat je nodig hebt

Om mee te bouwen heb je drie dingen nodig. Om te beginnen een Mac of een Windows-laptop. Ik werk zelf op een Mac; de stappen voor Windows heb ik laten uitzoeken, maar niet zelf getest. Daarnaast een AI-assistent die in een map op je laptop bestanden kan lezen en schrijven, zoals Claude Code of Codex van OpenAI. Een gewone chat in de browser, zoals ChatGPT of Claude.ai, is niet genoeg, want die kan je bestanden niet aanpassen. En tot slot een eerste klein idee. Niet de hele app, maar het ene onderdeel dat je elke dag zou openen. Bij mij was dat het taakbord.

Programmeren hoef je niet te kunnen. Het helpt wel als je niet schrikt van een terminal, een venster waarin je een opdracht typt in plaats van klikt. Op de Mac heet dat programma Terminal, op Windows gebruik je PowerShell. Probeer het vandaag al en vraag welke versie van Python er op je laptop staat. Krijg je een versienummer terug, dan staat Python er al. Zo niet, dan regelen we dat samen in deel 2.

> [!mac] Een terminal openen en kijken of Python er al is
> 1. Druk op Cmd en de spatiebalk, typ Terminal en druk op Enter.
> 2. Typ `python3 --version` en druk op Enter.
> 3. Zie je iets als Python 3.13, dan staat Python er al.
> 4. Vraagt de Mac of je de ontwikkelaarstools wilt installeren, dan heb je nog geen Python. Installeren mag, maar hoeft nu nog niet; in deel 2 installeren we Python.

> [!windows] Een terminal openen en kijken of Python er al is
> 1. Klik op Start, typ PowerShell en open het programma.
> 2. Typ `py --version` en druk op Enter.
> 3. Zie je iets als Python 3.13, dan staat Python er al.
> 4. Zegt PowerShell dat het commando niet bekend is, dan heb je Python nog niet, of niet op de manier die we in deel 2 gebruiken. Daar installeren we het.

## Zo gaat de serie verder

In deel 2 zet je de basis neer, zodat er een lege app in je browser draait. Daarna bouw je het taakbord, koppel je aantekeningen, projecten en documenten aan elkaar, laat je opnames uitschrijven zonder cloud en geef je de app een rustig ontwerp. In het laatste deel laat ik zien hoe deze site uit mijn eigen app wordt gevuld, en wat al dat bouwen me heeft opgeleverd. In elk deel staan de stappen voor Mac en Windows apart.

Mijn voorstel voor deze week: let eens op welk programma je elke dag opent en waar het schuurt. Welke kolom mis je, welke knop zoek je steeds, wat typ je twee keer over? Dat lijstje is je eerste kleine idee, en daarmee bouwen we in deel 3 je eigen bord.

---

**Transparantie GenAI.** Een AI-teamlid in Claude Code schreef de eerste versie van dit artikel in mijn schrijfstijl, op basis van mijn eigen teksten, mijn feedback, het werklogboek van mijn team en de changelog van mijn app. De stappen voor Windows zijn opgezocht, niet getest. Ik bepaalde onderwerp, opbouw en voorbeelden en heb de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
