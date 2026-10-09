---
seotitel: Aantekeningen, projecten en bronnen in één app
beschrijving: Koppel aantekeningen, projecten, bronnen en documenten in je eigen app en vind alles terug met één zoekveld, op Mac en Windows. Met prompts en mijn fouten.
kaarttekst: Aantekeningen, bronnen en documenten die aan je projecten en taken hangen, en één zoekveld dat alles terugvindt.
soort: uitleg
categorie: techniek
tags: agents, professionalisering
voor: studenten, docenten
avatar: wouter-bouwen
serie: bouw-je-eigen-productiviteitsapp
deel: 4
datum: 2026-10-09
---

# Journal, projecten, kennisbank en documenten in één database

Eind augustus zocht mijn team uit hoe ik mijn kennisbank eigenlijk gebruikte. De uitkomst viel me tegen. Ik had tientallen bronnen verzameld voor mijn masteropleiding, en er was in de app een project voor die master, maar geen enkele bron hing aan dat project.

Dat is voor mij de kern van dit deel. In [deel 3](/leren/je-eerste-onderdeel-een-taakbord-dat-je-elke-dag-gebruikt/) heb je een taakbord gebouwd. Nu komen je aantekeningen, je projecten, je bronnen en je documenten erbij, en het gaat er vooral om dat ze naar elkaar verwijzen. Daar zit de echte winst van een eigen app, en ook de meeste valkuilen.

## Alles in één database

In mei kwamen na het bord de kennisbank en de projecten. In de kennisbank staan de artikelen en bronnen die ik eerder in een Notion-wiki bijhield. Die heb ik één keer laten overzetten, en daarna heb ik Notion losgelaten. Ik raad je aan het ook zo te doen: één keer importeren en daarna geen verbinding meer met je oude systeem. Twee systemen naast elkaar bijhouden houd je niet lang vol.

Kort daarna volgden de journal, voor aantekeningen na een overleg, en de documenten. Een project is bij mij de plek waar alles over één klus samenkomt. Alles staat in dezelfde SQLite-database als het bord. Die keuze heb ik al genoemd in [deel 2](/leren/zo-installeer-je-de-basis-van-je-app-op-mac-en-windows/): een aantekening kan alleen aan een taak hangen als ze in hetzelfde bestand staan.

![Schema van de app. In één database staan tags en een zoekindex voor alle onderdelen. Een aantekening wijst met een vast vakje naar een taak en een project. Taak, bron, contact en document hangen via een koppeltabel aan het project. Onder de database staat de map Documenten: watchdog meldt wijzigingen aan de app, en een klik opent het bestand.](/assets/img/productiviteitsapp-onderdelen.svg)

*Zo hangen de onderdelen aan elkaar. Een aantekening heeft een vast vakje voor één project en één taak. Taken, bronnen, contacten en documenten hangen via een koppeltabel aan een project. De documenten zelf blijven in je map.*

> Ik wil naast mijn taakbord een journal voor aantekeningen en een pagina per project. Zet alles in dezelfde database. Een aantekening hoort bij hooguit één project en hooguit één taak. Op de pagina van een project wil ik de taken, aantekeningen en bronnen zien die erbij horen. Maak eerst een backup van de database.

![Een projectpagina in mijn app met aantekeningen, bronnen uit de kennisbank, taken en documenten bij één project, met voorbeeldgegevens](/assets/img/productiviteitsapp-projectpagina.webp)

## Eén vaste plek of meer plekken tegelijk

Bij elke koppeling moet je één vraag beantwoorden: hoort iets bij één ding, of bij meer dingen tegelijk? Je assistent kan beide bouwen, maar het is de moeite waard om er even bij stil te staan, want achteraf veranderen is lastig.

Voor de journal stelde mijn team een flexibele opzet voor, waarin een aantekening aan meerdere projecten en taken kon hangen. Ik koos het eenvoudiger: een aantekening hoort bij hooguit één project en hooguit één taak. In de database is dat gewoon een vakje bij de aantekening waarin staat bij welk project hij hoort. Dat is makkelijk te begrijpen en makkelijk te controleren, en ik heb de flexibele variant nog niet gemist.

Bij contactpersonen ligt dat anders. Iemand met wie ik samenwerk, komt vaak in meer projecten voor. Daar hoort een aparte koppeltabel bij, een lijst met regels als "deze persoon hoort bij dit project". Mijn vuistregel is daarom: begin met één vast vakje, en kies alleen voor een koppeltabel als je zeker weet dat iets op meer plekken thuishoort.

![Twee tabellen. Boven een tabel met aantekeningen, met per regel één vakje voor het project. Onder een lijst met contacten, Anne en Bas, en een koppeltabel met drie regels: Anne bij Master, Anne bij Website en Bas bij Master.](/assets/img/productiviteitsapp-vakje-of-koppeltabel.svg)

*Boven een vast vakje: elke aantekening hoort bij hooguit één project. Onder een koppeltabel: Anne hoort bij twee projecten en staat er daarom twee keer in.*

## Een fout zonder melding

Tags werken in mijn app voor alles. Taken, aantekeningen, bronnen, documenten en contacten delen één lijst met tags. Dat is handig, want een tag betekent overal hetzelfde en het zoekveld vindt alles wat hem draagt. Het nadeel bleek pas na maanden.

In september ontdekte het team dat het tagveld bij contacten nog nooit één tag had opgeslagen, vier maanden lang. Wie er een tag invulde, zag de pagina opnieuw laden en daarna stond er niets. Er verscheen ook geen foutmelding. De database hield bij welke soorten items een tag mochten krijgen, en contacten stonden niet op die lijst. In mei was die uitbreiding wel aangekondigd in een toelichting in de code, maar de regel zelf is nooit geschreven. En de code die de tag bewaarde, liet de weigering van de database stilletjes passeren.

Wat ik daarvan heb geleerd: een functie die stilletjes niets doet, is erger dan een functie die vastloopt. Een foutmelding zie je meteen, een lege plek pas als je iets zoekt. Vraag je assistent daarom bij elk nieuw veld om een melding als bewaren mislukt. En probeer het zelf: iets invullen, de pagina opnieuw laden en kijken of het er nog staat. Het team zocht daarna ook alle andere plekken af waar tags worden bewaard, om te zien of dezelfde fout daar zat. Dat vraag ik sindsdien bij elke fout.

## Eén zoekveld voor alles

Ik heb één zoekveld dat alles tegelijk doorzoekt: taken, aantekeningen, projecten, bronnen en documenten. Daarvoor gebruikt mijn app de zoekfunctie die in SQLite zit, FTS5. Die maakt een index, een soort register achter in een boek, met alle woorden en waar ze staan. Je hoeft er niets voor te installeren.

Die index doorzoekt alleen wat erin staat, en dat bleek een les op zich. In augustus wilde ik mijn tags laten opruimen, omdat er veel namen van auteurs en organisaties tussen stonden. Toen het team uitzocht hoe die daar kwamen, bleek dat de index de auteurs van een bron niet bevatte. Zocht ik op een auteur, dan vond ik niets. Zonder dat ik het doorhad, was een tag met zijn naam mijn omweg geworden. Het team heeft daarom eerst de index gerepareerd en pas daarna de tags opgeruimd. Andersom waren die bronnen onvindbaar geworden.

> Maak één zoekveld dat taken, aantekeningen, projecten, bronnen en documenten tegelijk doorzoekt, met de zoekfunctie FTS5 van SQLite. Neem alle velden op waarop ik zou willen zoeken, ook auteurs en bronvermeldingen. Laat me daarna zien welke velden in de index staan.

## Documenten blijven waar ze zijn

Bij documenten stelde mijn team eerst een bibliotheek voor waarin ik bestanden zou uploaden. Dat wilde ik niet. Mijn bestanden staan al netjes in mappen, en OneDrive houdt ze bij. Nu blijven ze gewoon waar ze zijn, en houdt de app alleen een lijst bij met de naam, de map en de datum. Verandert er iets in de map, dan ziet de app dat meteen, met een klein hulpprogramma dat watchdog heet. Klik ik op een document, dan opent het in Word of Excel.

Dat laatste ging niet meteen goed. Mijn reactie op de eerste versie was: "PDF documenten kan ik rechtstreeks openen vanuit de lijst, maar Word documenten worden eerst gedownload, dat is niet handig." Een browser kan een Word-bestand niet tonen, dus de app moet het aan het besturingssysteem doorgeven. Op de Mac en op Windows gaat dat op een andere manier, en daarom zeg je je assistent op welk systeem je werkt.

Later kwamen ook mijn projectmappen in de lijst. In september vroeg het team waarom ik het scherm met documenten nooit gebruikte, en het antwoord liet zich tellen. De index bevatte ruim dertigduizend bestanden, en maar een klein deel daarvan kwam uit mijn documentenmap. De rest was bouwmateriaal uit projectmappen, zoals onderdelen van websites en tussenbestanden van video's. Die bestanden konden niet eens geopend worden, maar dat had niemand gemerkt, omdat niemand het scherm gebruikte. Een index die alles opneemt, wordt een hooiberg. Sindsdien kijkt de app alleen nog naar mijn documentenmap.

> Ik wil dat mijn app de bestanden in mijn map Documenten bijhoudt, zonder ze te kopiëren. Houd alleen een lijst bij met naam, map en datum, en zie wijzigingen meteen, bijvoorbeeld met watchdog. Een klik op een bestand opent het in het programma dat er standaard bij hoort, zoals Word of Excel. Ik werk op [Mac of Windows].

> [!mac] Zoeken en openen controleren
> 1. Open Terminal en controleer of jouw Python de zoekfunctie FTS5 heeft:
>
> ```
> python3 -c "import sqlite3; sqlite3.connect(':memory:').execute('create virtual table t using fts5(x)'); print('FTS5 werkt')"
> ```
>
> 2. Zie je "FTS5 werkt", dan kan je assistent het zoekveld bouwen.
> 3. Op de Mac opent de app een document met het commando `open`. Dat start het programma dat in de Finder bij dat bestand hoort.

> [!windows] Zoeken en openen controleren
> 1. Open PowerShell en controleer of jouw Python de zoekfunctie FTS5 heeft:
>
> ```
> py -c "import sqlite3; sqlite3.connect(':memory:').execute('create virtual table t using fts5(x)'); print('FTS5 werkt')"
> ```
>
> 2. Zie je "FTS5 werkt", dan kan je assistent het zoekveld bouwen.
> 3. Op Windows opent de app een document met `os.startfile` in Python. Dat start het programma dat Windows bij dat bestand hoort.
> 4. Paden op Windows hebben schuine strepen de andere kant op en vaak spaties, zoals in `Mijn documenten`. Vraag je assistent om paden met `pathlib` te maken en probeer een document met een spatie in de naam.

## Zo ga je verder

Mijn voorstel voor deze week: kies één echt project en hang er alles aan wat erbij hoort, je aantekeningen van het laatste overleg, een bron en een document. Laad daarna de pagina opnieuw en kijk of alles er nog staat. Zoek vervolgens iets terug via het zoekveld, op een woord dat alleen in een aantekening voorkomt. In deel 5 laten we opnames uitschrijven en samenvatten, zonder dat ze je laptop verlaten.

---

**Transparantie GenAI.** Een AI-teamlid in Claude Code heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van mijn eigen teksten, mijn feedback, het werklogboek van mijn team en de changelog van mijn app. De stappen voor Windows zijn opgezocht, niet getest. Ik heb onderwerp, opbouw en voorbeelden bepaald en de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
