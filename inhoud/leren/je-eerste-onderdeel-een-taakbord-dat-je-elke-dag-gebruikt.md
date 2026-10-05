---
seotitel: Een eigen taakbord bouwen dat elke ochtend klaarstaat
beschrijving: Bouw met je AI-assistent een taakbord met je eigen kolommen dat elke ochtend vanzelf start, op Mac en Windows. Met prompts en wat bij mij misging.
kaarttekst: Een bord met jouw eigen kolommen, dat elke ochtend vanzelf klaarstaat en dat je ook weer uit kunt zetten.
soort: uitleg
categorie: techniek
tags: agents
voor: studenten, docenten
avatar: job-bouwen
serie: bouw-je-eigen-productiviteitsapp
deel: 3
datum: 2026-10-05
---

# Je eerste onderdeel: een taakbord dat je elke dag gebruikt

Frits Coers, docent bij Windesheim

Op de eerste dag dat mijn eigen bord draaide, maakte ik een nieuwe taak en drukte op Enter. De kolom ververste, maar mijn taak stond er niet. Bij de volgende poging soms wel en soms niet. Het team zocht het voor me uit: de app las de kolom al opnieuw in voordat de database de nieuwe taak had vastgelegd. Eén extra regel, die het opslaan eerst afrondt, loste het op. Zo'n kleine fout zegt meteen iets over bouwen met een AI-assistent. Wat er in de code gebeurt, hoef ik niet te begrijpen, maar of het werkt, merk ik alleen door het te gebruiken.

In dit deel maak je van de lege app uit [deel 2](/leren/zo-installeer-je-de-basis-van-je-app-op-mac-en-windows/) een taakbord met je eigen kolommen. Daarna zorg je dat het elke ochtend vanzelf klaarstaat, zonder dat je eraan hoeft te denken.

## Begin bij wat je elke dag gebruikt

Het bord was bij mij het eerste onderdeel, en dat was geen toeval. Een kennisbank of een journal open je als je iets zoekt of opschrijft. Je taken bekijk je elke dag, vaak meerdere keren. Daardoor merk je bij een bord ook het snelst wat er niet lekker werkt, en dat is precies wat je in het begin wilt.

Mijn kolommen volgen mijn werk als docent: lesontwikkeling, lesvoorbereiding, lesuitvoering en nakijken, met aan het begin een kolom voor wat nog gepland moet worden en aan het eind een voor wat af is. Pak het lijstje erbij dat je na [deel 1](/leren/waarom-ik-mijn-eigen-productiviteitsapp-bouwde-en-wat-jij-nodig-hebt/) hebt bijgehouden en bedenk welke stappen jouw werk doorloopt. Vier of vijf kolommen is genoeg om mee te beginnen; een kolom erbij kan altijd nog.

Ik begon met een export van mijn bord in Notion, zodat mijn bestaande taken er meteen in stonden. Staan jouw taken in een ander programma, vraag dan of je assistent ze kan overnemen. Begin je leeg, dan is dat ook prima. Dit is de opdracht:

> Maak in mijn app een taakbord met deze kolommen: [jouw kolommen]. Een taak heeft een titel, een einddatum en een toelichting. Ik wil een taak kunnen toevoegen, openen, aanpassen en naar een andere kolom zetten. Gebruik htmx, zodat alleen de kolom vernieuwt die verandert. Maak eerst een backup van de database.

![Een eenvoudig taakbord in de browser met eigen kolommen en een paar voorbeeldtaken](/assets/img/productiviteitsapp-taakbord.webp)

## Wat er onder het bord zit

Je hoeft de code niet te lezen, maar het helpt als je in gewone taal weet hoe je gegevens bewaard worden. Dan kun je je assistent betere vragen stellen en zie je sneller wanneer een antwoord niet klopt. Mijn bord bestaat uit vier soorten gegevens: borden, kolommen op een bord, taken in een kolom en notities bij een taak. Meer is het niet.

Daarnaast houdt de database een lijstje bij van de wijzigingen die al zijn uitgevoerd. Wil je later iets toevoegen, bijvoorbeeld het vak waar een taak bij hoort, dan schrijft je assistent een kleine wijziging, een migratie, en zet die op het lijstje. Zo weet de app altijd in welke staat de database is, ook als je hem op een andere laptop opnieuw opbouwt. Vraag hier vanaf het begin om, want achteraf is het lastiger.

En net als in deel 2 geldt: voor elke wijziging aan de database eerst een kopie. Dat is je vangnet.

## Een bord dat prettig werkt

De eerste versie had geen slepen. Een taak verplaatsen deed ik met een keuzelijst op de kaart, en dat werkte op zich prima. Een week later kwam slepen erbij, met SortableJS. Dat is een klein bestand dat net als htmx gewoon in de map van de app staat, dus mijn bord hoeft nooit het internet op.

Een taak heeft bij mij ook een toelichting, en die schrijf ik in Markdown, een simpele opmaaktaal: een sterretje voor een opsomming, twee voor vet. De app maakt er nette tekst van bij het opslaan. Daarbij haalt hij eerst alles weg wat er niet in hoort, zoals stukjes code die iets op de pagina zouden kunnen uitvoeren. Dat klinkt overdreven voor een app die alleen jij gebruikt, maar vroeg of laat plak je tekst uit een mail of een website in een taak. Vraag je assistent er dus gewoon om.

Wat ik van die eerste dag heb geleerd: probeer elke nieuwe knop een paar keer achter elkaar. Een fout die maar soms optreedt, zie je bij één keer klikken niet.

## Elke ochtend klaar

Een bord dat je eerst moet opstarten, open je minder vaak. Daarom wilde ik dat de app er elke ochtend gewoon was. Op de Mac kreeg ik een icoon in de menubalk, met een knop om de app te starten en te stoppen, en een instelling om alles bij het inloggen te laten starten.

Dat ging een paar keer mis, en elke keer leerde ik er iets van. Na de eerste herstart van mijn Mac kwam er niets op. macOS weigerde het programma dat op de achtergrond start de toegang tot mijn OneDrive-map, terwijl het vanuit Terminal gewoon werkte. De oplossing was een kopie van de starter buiten OneDrive.

Later verdween ergens in de zomer een klein instellingenbestand, en daarmee ging het automatisch starten stilletjes uit. Het icoon stond keurig in de menubalk. Ruim twee maanden heb ik de app elke ochtend met de hand gestart, zonder te weten dat dat niet de bedoeling was. Daarna kwam er een bewaker: een klein programma dat elke paar seconden kijkt of de app draait en hem anders opnieuw start.

Dat werkte, alleen iets te goed. Als ik de app zelf stopte, stond hij binnen tien seconden weer aan, want de bewaker zag elke stop als een crash. Pas in september kwam er een duidelijke afspraak. Wie de app stopt, laat een markering achter dat hij bewust uit is, en dan blijft de bewaker eraf. Na een crash of een herstart van de laptop start hij wel. Automatisch starten en weer kunnen stoppen bouw je dus het best tegelijk.

> Ik wil dat mijn app vanzelf start als ik inlog, en opnieuw start als hij crasht. Maak ook een stopscript. Als ik de app zelf stop, moet hij uit blijven tot ik hem weer start. Leg uit hoe ik kan controleren of het werkt.

> [!mac] Je app vanzelf laten starten
> 1. Geef je assistent de opdracht hierboven. Op de Mac maakt hij daarvoor een LaunchAgent, een klein bestand waarmee macOS een programma start als je inlogt.
> 2. Herstart je Mac, log in en open het adres van je app.
> 3. Zie je niets en staat je app in OneDrive of iCloud, vraag je assistent dan om de starter buiten die map te zetten. macOS laat programma's die op de achtergrond starten niet zomaar in die mappen.
> 4. Wil je zien of de app draait, vraag dan om een icoon in de menubalk.

> [!windows] Je app vanzelf laten starten
> 1. Klik met de rechtermuisknop op Start, kies Uitvoeren, typ `shell:startup` en druk op Enter. De map Opstarten gaat open.
> 2. Vraag je assistent om een snelkoppeling die `start.ps1` met PowerShell uitvoert, en om die in deze map te zetten.
> 3. Log uit en weer in, en open het adres van je app.
> 4. Wil je dat de app ook na een crash vanzelf terugkomt, vraag dan om een taak in Taakplanner die start bij het aanmelden en de app bewaakt.
>
> Een icoon zoals in de menubalk van de Mac staat op Windows in het systeemvak rechtsonder. Deze route volgt de documentatie van Microsoft; ik heb hem niet zelf op Windows getest.

## Zo ga je verder

Mijn voorstel voor deze week: bouw je bord, zet je taken erin en laat het elke ochtend vanzelf starten. Stop het daarna een keer bewust en kijk of het uit blijft. Gebruik het een week en schrijf op wat je mist. Bij mij kwam al snel de vraag waar mijn aantekeningen en bronnen bleven, en die koppelen we in deel 4 aan je bord.

---

**Transparantie GenAI.** Een AI-teamlid in Claude Code heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van mijn eigen teksten, mijn feedback, het werklogboek van mijn team en de changelog van mijn app. De stappen voor Windows zijn opgezocht, niet getest. Ik heb onderwerp, opbouw en voorbeelden bepaald en de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
