---
seotitel: Zo installeer je de basis van je app op Mac en Windows
beschrijving: Zo zet je de basis voor je eigen productiviteitsapp neer: Python, Flask, htmx en SQLite op Mac en Windows, met prompts voor je AI-assistent.
kaarttekst: Een lege app in je browser die je volgende week net zo makkelijk weer start: wat je zelf installeert en wat je je AI-assistent vraagt.
soort: uitleg
categorie: techniek
tags: agents
voor: studenten, docenten
avatar: job-bouwen
serie: bouw-je-eigen-productiviteitsapp
deel: 2
datum: 2026-10-03
---

# Zo installeer je de basis van je app op Mac en Windows

Frits Coers, docent bij Windesheim

In augustus wilde ik mijn app opstarten en lukte dat ineens niet meer. Toen mijn team uitzocht waarom, bleek dat de onderdelen waar de app op draait verspreid stonden over drie plekken op mijn laptop. In de ene stond Flask niet, in de andere ontbrak iets anders, en een nieuwe installatie werd geweigerd. Ik had in een paar maanden steeds iets laten bijinstalleren, zonder dat iemand bijhield waar het terechtkwam. Dat voelde als een la waar je jarenlang losse kabels in hebt gegooid.

In dit deel zet je de basis zo neer dat jou dat niet overkomt. Aan het eind draait er een lege app in je browser en weet je hoe je hem volgende week weer start. Zelf installeer je maar weinig; de rest vraag je aan je AI-assistent.

## Waarom Flask, htmx en SQLite

Mijn app draait op drie gratis bouwstenen, en die raad ik jou ook aan.

Flask is een klein raamwerk in de programmeertaal Python. Met een paar regels code maak je er een website mee die op je eigen laptop draait. Klein is hier een voordeel: er zit weinig in wat je niet gebruikt, en Flask bestaat al zo lang dat Claude Code en Codex het heel goed kennen. Vraag je iets, dan krijg je vaak in één keer werkende code.

htmx zorgt dat een pagina een stukje vernieuwt zonder dat het hele scherm opnieuw laadt. Zet je een taak op klaar, dan verandert alleen die taak. Daardoor voelt een eenvoudige website al snel als een echte app. htmx is één bestand dat je naast je app zet, dus je hebt geen groot JavaScript-framework zoals React nodig, met alle bouwstappen die daarbij horen.

SQLite is een database die gewoon één bestand op je laptop is. Er draait geen aparte server en je hebt geen account nodig. Een backup maken is dat bestand kopiëren. SQLite zit bovendien al in Python, dus er valt niets extra's te installeren.

Toen het team in mei de kennisbank naast het taakbord ging bouwen, hebben we bewust gekozen voor één app, één database en één opmaakbestand, in plaats van losse apps per onderdeel. Alles wat ik in deel 1 beschreef, zoals een aantekening die aan een project hangt, werkt alleen als alles in hetzelfde huis woont. Voor je AI-assistent is dat ook prettig: alles staat in één map, dus hij overziet het geheel als hij iets verandert.

En het draait allemaal lokaal. De app staat alleen open op je eigen laptop, op een adres dat begint met 127.0.0.1. Iemand anders in hetzelfde netwerk kan er niet bij.

## Wat je zelf doet en wat je vraagt

Je installeert zelf twee dingen: Python en je AI-assistent, zoals Claude Code of Codex. Hoe je die assistent installeert, staat op hun eigen site. Python doe je zo.

> [!mac] Python installeren met Homebrew
> 1. Open Terminal (Cmd en de spatiebalk, typ Terminal).
> 2. Heb je Homebrew nog niet, installeer het dan met de opdracht van [brew.sh](https://brew.sh):
>
> ```
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
> ```
>
> 3. Volg de aanwijzingen aan het eind; Homebrew vraagt soms om twee regels te kopiëren en te plakken.
> 4. Installeer Python met `brew install python`.
> 5. Controleer met `python3 --version`. Zie je een versienummer, dan ben je klaar.

> [!windows] Python installeren met de Python install manager
> 1. Open PowerShell (Start, typ PowerShell).
> 2. Installeer de Python install manager met winget:
>
> ```
> winget install 9NQ7512CXL7T -e --accept-package-agreements --disable-interactivity
> ```
>
> 3. Sluit PowerShell en open hem opnieuw.
> 4. Installeer Python met `py install 3.14`.
> 5. Controleer met `py --version`. Zie je een versienummer, dan ben je klaar.
>
> Werkt winget niet, download de install manager dan van [python.org/downloads](https://www.python.org/downloads/) en volg de installer.

Daarna maak je een lege map voor je app, bijvoorbeeld Mijn app in je Documenten, en start je je assistent in die map. Vanaf hier praat je met hem in gewone taal.

## Een eigen omgeving voor je app

De oplossing voor mijn la met kabels was een eigen omgeving voor de app, een venv. Zie het als een gereedschapskist die in de map van je app staat. Alles wat de app nodig heeft, gaat in die kist en nergens anders. Daarbij hoort een lijst, `requirements.txt`, met precies welke onderdelen erin zitten en in welke versie. Raakt de kist ooit kwijt, dan bouw je hem met die lijst zo opnieuw op.

Dat de nieuwe installatie in augustus werd geweigerd, was achteraf een waarschuwing. Python beschermt zichzelf tegen pakketten die je overal tussendoor installeert, en terecht. Met een venv heb je daar geen last van.

Dit is de eerste opdracht die je aan je assistent geeft:

> Ik wil in deze map een eenvoudige webapp bouwen met Flask, htmx en SQLite. Ik programmeer zelf niet. Maak een venv in deze map, een requirements.txt met vaste versies en installeer daaruit. Leg in twee zinnen uit wat je hebt gedaan.

Kort daarna leerde ik nog iets. De app startte weer gewoon, maar nakijken en het uitschrijven van opnames deden niets. De server draaide in een andere kist dan die waarin alles was geïnstalleerd. Een app die opstart, werkt dus nog niet helemaal. Daarom vraag ik na elke grote wijziging om elk onderdeel even uit te proberen, en niet alleen de voorpagina.

## Je eerste lege app

Nu de kist klaarstaat, vraag je om de app zelf:

> Maak een Flask-app met één pagina met de titel Mijn app. Zet htmx als bestand in de map, zodat de app zonder internet werkt. Maak een SQLite-database met één tabel voor taken, nog zonder taken. De app mag alleen bereikbaar zijn op 127.0.0.1. Maak ook een startscript, zodat ik de app met één opdracht kan starten, en zeg welk adres ik in de browser open.

Je assistent maakt een handvol bestanden aan en noemt een adres. Open dat in je browser en je ziet je eigen app. Er staat nog bijna niets op, maar hij is van jou.

![Een lege app in de browser met het terminalvenster ernaast, waarin de server draait](/assets/img/productiviteitsapp-lege-app.webp)

Het startscript is het stuk dat je volgende week nodig hebt. Zonder script moet je onthouden in welke map je stond, welke kist je opende en welk commando je typte. Met het script is het één regel.

> [!mac] Je app starten en stoppen
> 1. Open Terminal en ga naar de map van je app, bijvoorbeeld met `cd ~/Documents/"Mijn app"`.
> 2. Start de app met `./start.sh`.
> 3. Open het adres dat in de terminal verschijnt.
> 4. Stoppen doe je met Ctrl+C in de terminal.
>
> Meldt de terminal dat poort 5000 bezet is, vraag je assistent dan om een andere poort. Op de Mac gebruikt AirPlay die poort.

> [!windows] Je app starten en stoppen
> 1. Open PowerShell en ga naar de map van je app, bijvoorbeeld met `cd "$HOME\Documents\Mijn app"`.
> 2. Start de app met `.\start.ps1`.
> 3. Open het adres dat in PowerShell verschijnt.
> 4. Stoppen doe je met Ctrl+C.
>
> Weigert PowerShell het script, sta dan eenmalig scripts toe voor je eigen gebruiker met `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` en probeer het opnieuw.

## Drie gewoontes vanaf de eerste dag

Er zijn drie dingen die ik had willen weten toen ik begon. Om te beginnen: laat niets meer los installeren. Heeft je app iets nieuws nodig, dan gaat het in de lijst en in de kist, en vraag je je assistent dat ook zo te doen. Daarnaast is een backup van je database niets meer dan een kopie van één bestand. Vraag je assistent om die kopie te maken voordat hij iets aan de database verandert, en maak er een vaste afspraak van. En tot slot: start je app na elke grote wijziging opnieuw en klik alles even aan.

Werk je in een map die met OneDrive of iCloud synchroniseert, zoals ik, vraag dan of de kist buiten die map kan staan. Zo'n kist bestaat uit duizenden kleine bestanden die je niet wilt laten synchroniseren. Mijn eigen omgeving staat inmiddels ook buiten OneDrive.

## Zo ga je verder

Mijn voorstel voor deze week: start je lege app, stop hem, sluit de terminal en start hem de volgende dag opnieuw met je startscript. Lukt dat zonder na te denken, dan staat je basis. In deel 3 maken we van die ene lege pagina een taakbord, met het lijstje dat je na deel 1 hebt bijgehouden.

---

**Transparantie GenAI.** Een AI-teamlid in Claude Code schreef de eerste versie van dit artikel in mijn schrijfstijl, op basis van mijn eigen teksten, mijn feedback, het werklogboek van mijn team en de changelog van mijn app. De stappen voor Windows zijn opgezocht, niet getest. Ik bepaalde onderwerp, opbouw en voorbeelden en heb de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
