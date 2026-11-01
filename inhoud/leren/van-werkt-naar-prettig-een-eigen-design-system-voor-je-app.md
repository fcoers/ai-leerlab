---
cover: /assets/img/productiviteitsapp-design-system.webp
cover_soort: vol
cover_focus: 50% 50%
cover_alt: Het design system van AI-leerlab op een scherm, schuin in beeld: acht kleuren met naam en hexcode, de lettergroottes van 52 tot 14 pixels en zes maten voor ruimte.
seotitel: Een eigen design system voor je app, met DESIGN.md
beschrijving: Geef je app één huisstijl met een DESIGN.md die je AI-assistent steeds leest, en zet die stijl in Claude Design. Met prompts, op Mac en Windows.
kaarttekst: Van een app die werkt naar één huisstijl voor alles wat je maakt, vastgelegd in een DESIGN.md en in Claude Design.
soort: uitleg
categorie: techniek
tags: professionalisering
voor: studenten, docenten
avatar: bram-nadenken
serie: bouw-je-eigen-productiviteitsapp
deel: 6
datum: 2026-11-01
---

# Van werkt naar prettig: een eigen design system voor je app

Toen ik mijn team vroeg om één ontwerp voor de hele app, kreeg ik eerst drie voorstellen, elk met een andere manier om kleur te gebruiken. Mijn reactie was kort: "Heel eerlijk vind ik ze alledrie niks. Kijk eens naar de design systems van Google en Apple. Het is nog te wit waardoor elementen moeilijk herkenbaar zijn." Het team zocht uit waar het aan lag. Alle drie de voorstellen hadden een witte pagina met witte blokken erop, en waar een blok ophield en de pagina begon, zag je alleen aan een dun lijntje. In het ontwerp dat ik toen heb gekozen, stonden witte blokken op een lichtgrijze ondergrond, zoals in veel apps van Apple. Daarmee zag je in één oogopslag wat bij elkaar hoort.

Dit deel gaat over die stap, van een app die werkt naar een app die je graag opent. Je leest hoe je de afspraken over kleur, letters en ruimte vastlegt in een design system, zodat alles wat je maakt dezelfde huisstijl krijgt. Ik heb dat op twee plekken gedaan. Het eerste is een DESIGN.md die mijn AI-assistent leest voordat hij iets aan het ontwerp verandert, het tweede is Claude Design, waar elk nieuw ontwerp vanzelf in die stijl begint.

## Eerst gebruiken, dan mooi maken

De eerste versies van mijn bord en kennisbank zagen er gewoon uit, en dat was prima. Je weet pas wat een scherm moet doen als je het een tijdje hebt gebruikt. Wie meteen gaat schaven aan kleuren en lettertypes, schaaft aan iets wat volgende week misschien anders moet. Mijn advies is daarom om eerst de onderdelen te bouwen die je nodig hebt, ze een paar weken te gebruiken en dan pas aan het ontwerp te beginnen.

Eén ding zou ik wel meteen regelen, en dat is leesbaarheid. Ik ben 52, en kleine letters lees ik minder makkelijk dan vroeger. Daarom is lopende tekst in mijn app minimaal 14 pixels en liever 15, is nergens tekst kleiner dan 13, en is alles waar je op klikt groot genoeg om het zonder mikken te raken. Toen het nieuwe ontwerp werd doorgevoerd, bleek dat tientallen plekken in de app toch kleinere tekst hadden. Die zijn in één keer rechtgezet, omdat ze bijna allemaal dezelfde instelling gebruikten. Hoe dat kan, lees je verderop.

> Maak mijn app beter leesbaar. Lopende tekst minimaal 15 pixels, nergens tekst kleiner dan 13 pixels, en alles waar ik op kan klikken minimaal 40 pixels groot. Zoek alle plekken die hier niet aan voldoen en laat me eerst zien hoeveel het er zijn.

## Acht principes als toetssteen

Mijn team heeft acht principes voor eenvoud afgeleid van het ontwerp van de Ferrari Luce, de eerste auto van Jony Ive, die eerder de iPhone heeft vormgegeven. Dat klinkt ver van een takenapp, maar de principes gaan niet over auto's. Een paar ervan: laat weg tot alleen overblijft wat nodig is. Laat alleen zien wat nu telt en verberg de rest tot je het nodig hebt. Gebruik weinig kleuren en weinig lettergroottes, en geef kleur een vaste betekenis. Groen betekent in mijn app bijvoorbeeld dat je hier iets kunt doen.

Mijn team gebruikt ze als toetssteen. Bij twijfel over een scherm lopen ze de principes langs als vragen. Staat er iets wat ik niet gebruik, en valt het belangrijkste meteen op? Je hoeft mijn acht niet over te nemen. Wat helpt, is dat je er een paar opschrijft, zodat je assistent en jij hetzelfde bedoelen met "rustig".

## Kleuren en maten met een vaste naam

Een grote stap was dat de kleuren, maten en letters van de app een vaste naam hebben gekregen. Een knop heeft dan geen losse kleurcode meer, hij gebruikt bijvoorbeeld de kleur met de naam "actie". Verander je die ene waarde, dan verandert elke knop in de app mee.

Hoeveel dat scheelt, bleek bij de grijze ondergrond uit het begin van dit artikel. Het team hoefde niet elk scherm aan te passen. De kleur van de pagina veranderde op één plek, en daarmee werd elk wit vlak in de app in één keer een blok op een grijze ondergrond. Met de kleinste tekst ging het net zo. Bijna alle te kleine tekst gebruikte dezelfde maat met een vaste naam, en die ging van 11 naar 13 pixels.

![Hetzelfde taakbord twee keer: links witte blokken op een witte pagina, rechts witte blokken op een lichtgrijze ondergrond](/assets/img/productiviteitsapp-voor-en-na.webp)

Daarna is het nieuwe ontwerp scherm voor scherm doorgevoerd, eerst de basis, dan de beginpagina, het bord, de kennisbank, de projecten en zo verder. Zo was er na elk scherm een moment om te kijken of het beter werd, voordat het volgende aan de beurt was.

> Geef de kleuren, lettergroottes, afstanden en hoeken van mijn app elk een vaste naam die zegt waarvoor hij is, zoals "actie" of "achtergrond". Laat de opmaak van de app alleen die namen gebruiken. Voer het eerst door op één scherm, zodat ik kan kijken voordat je verdergaat.

## De afspraken in een DESIGN.md

Een AI-assistent begint elk gesprek opnieuw. Zonder vaste afspraken kiest hij elke keer zelf een kleur of een marge, en dan ziet het ene scherm er net iets anders uit dan het andere. Daarom staan alle afspraken bij mij ook in een DESIGN.md. Dat is een open format van Google voor precies dit doel, een gewoon tekstbestand dat een AI-assistent leest voordat hij iets bouwt.

Zo'n bestand heeft twee delen. Bovenaan staan de vaste waarden met hun naam, zoals de kleuren, de lettertypes en lettergroottes, de afstanden en de hoeken. Daaronder staat in gewone taal waarom ze zo zijn en wanneer je welke gebruikt. In de DESIGN.md van deze site staat bijvoorbeeld dat groen alleen is voor wat je kunt aanklikken, en dat geen enkele tekst kleiner is dan 14 pixels. Die uitleg is minstens zo belangrijk als de getallen. Met alleen de getallen weet je assistent welke kleuren er zijn, en met de uitleg erbij weet hij ook wanneer hij een kleur beter niet kan gebruiken.

Mijn team leest de DESIGN.md voordat het aan een scherm begint, zodat ik niet bij elk nieuw onderdeel opnieuw hoef uit te leggen wat ik rustig vind. Omdat de site ook een eigen DESIGN.md heeft, kon de app de huisstijl van de site overnemen, met het gestippelde papier, witte vlakken met een dun randje en hetzelfde groen voor alles waar je op klikt. De maten van de app zijn gebleven en de kleuren en letters komen nu van de site, zodat app en site bij dezelfde huisstijl horen.

> Schrijf een DESIGN.md voor mijn app volgens het open format van Google. Zet bovenaan de kleuren, lettergroottes, afstanden en hoeken, elk met een naam die zegt waarvoor hij is. Leg daaronder in gewone taal uit waarom ze zo zijn en wanneer je welke gebruikt. Haal de waarden uit de opmaak die er nu is en laat me zien waar die elkaar tegenspreken. Lees dit bestand voortaan voordat je iets aan het ontwerp verandert.

## Dezelfde stijl in Claude Design

Een DESIGN.md werkt goed zolang je AI-assistent code schrijft, maar een huisstijl gaat verder dan de app. Daarvoor gebruiken we Claude Design van Anthropic. Daarin maak je samen met Claude ontwerpen, prototypes en dia's, en je kunt er een design system in vastleggen. Elk nieuw project gebruikt dan vanzelf de kleuren, letters en onderdelen uit dat systeem.

Mijn team heeft het design system van AI-leerlab gemaakt uit de DESIGN.md en de opmaak van deze site. Er staan dezelfde kleuren en letters in, het logo en de iconen, onderdelen als de knop en de kaart, en de figuurtjes van mijn team die je bij de artikelen ziet. Begin ik in Claude Design aan iets nieuws, dan staat het meteen in de huisstijl van AI-leerlab en hoef ik niet eerst uit te leggen welk groen en welke letter het moet zijn.

Bij ons is de DESIGN.md de bron. Verandert er iets aan de huisstijl, dan komt dat eerst in dat bestand en daarna in Claude Design, zodat de twee niet uit elkaar gaan lopen.

> Maak een design system op basis van de DESIGN.md en het opmaakbestand die ik je geef. Neem de kleuren, letters, afstanden en de belangrijkste onderdelen over, zoals knoppen en kaarten, en verander geen waarden.

## Eerst tellen, dan repareren

Bij het doorvoeren van het nieuwe ontwerp meldde een controle een handvol plekken waar je niet kon zien welk veld actief was als je met de Tab-toets door een formulier ging. Toen het team ging tellen, bleken het er ruim vijftig. De markering stond wel in de opmaak, maar werd op al die plekken weer uitgezet.

Later gebeurde iets vergelijkbaars, toen ik in de journal merkte dat keuzelijsten lager waren dan invoervelden en dat het titelveld heel smal was. Het team maakte eerst een controle die de afgesproken maten naast elk scherm legt, en vond honderden afwijkingen. Na de reparatie stond die teller op nul, en die controle kan nu na elke wijziging opnieuw draaien. Dat kan alleen omdat de maten zijn vastgelegd, want zonder afspraak valt er niets te tellen.

Sindsdien vraag ik bij elke fout waar die nog meer voorkomt, want een fout die je op één scherm ziet, zit bijna altijd op meer plekken.

## Als je een wijziging niet ziet

Meldt je assistent dat een nieuwe kleur of maat klaar is en zie je nog het oude ontwerp, dan gebruikt je browser waarschijnlijk een bewaarde versie van het opmaakbestand. Bij mij is dat opgelost met een versienummer achter de bestandsnaam dat vanzelf verandert als de opmaak verandert.

> Zet achter de link naar het opmaakbestand een versienummer dat vanzelf verandert als het bestand verandert, zodat mijn browser nooit een oude versie gebruikt.

> [!mac] Je ontwerp testen op de Mac
> 1. Zie je een wijziging niet, vernieuw de pagina dan zonder de bewaarde bestanden: Cmd+Shift+R in Chrome of Edge.
> 2. Gebruikt je app de systeemletter, dan zie je op de Mac de letter van Apple, San Francisco. Op Windows is dat een andere letter, waardoor teksten iets langer of korter uitvallen. Laat knoppen en koppen daarom niet op de millimeter passen.

> [!windows] Je ontwerp testen op Windows
> 1. Zie je een wijziging niet, vernieuw de pagina dan zonder de bewaarde bestanden: Ctrl+Shift+R of Ctrl+F5 in Chrome of Edge.
> 2. Gebruikt je app de systeemletter, dan zie je op Windows Segoe UI. Op de Mac is dat een andere letter, waardoor teksten iets langer of korter uitvallen. Kijk daarom of knoppen en koppen nog goed passen.

## Zo ga je verder

Mijn voorstel is om je app te openen en op te schrijven wat je stoort, zonder meteen iets te veranderen. Vraag je assistent daarna om een DESIGN.md met de afspraken en laat hem die eerst op één scherm doorvoeren. Vind je dat scherm prettiger, ga dan verder met het volgende. Maak je ook dia's of beelden, zet dezelfde stijl dan als design system in Claude Design. In deel 7, het laatste deel, laat ik zien hoe deze site uit mijn eigen app wordt gevuld, en wat al dat bouwen me heeft opgeleverd.

---

**Transparantie GenAI.** Een AI-teamlid in Claude Code heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van mijn eigen teksten, mijn feedback, het werklogboek van mijn team, de changelog van mijn app en de ontwerpbestanden van app en site. De stappen voor Windows zijn opgezocht, niet getest. Ik heb onderwerp, opbouw en voorbeelden bepaald en de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
