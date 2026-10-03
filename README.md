# ai-leerlab.nl

De site van AI-leerlab: tutorials, tools en korte uitleg over leren en werken met AI, van Frits Coers.

Het is een statische site. Je schrijft een artikel in Markdown, een klein script maakt er gewone HTML van, en Plesk serveert alleen die HTML. Er draait niets op de server en er is geen database.

## Hoe het werkt

- Je bouwt op je eigen Mac. Het script `bouw.py` zet alles uit `inhoud/` om naar HTML in `public/`.
- `public/` gaat mee in de repository. Plesk haalt de repository op en laat alleen `public/` zien.
- Plesk hoeft dus niets te bouwen. Dat is de eenvoudigste variant: geen extra software op de server, en wat je lokaal ziet, is wat er online komt.

Nodig op je Mac: Python 3 (staat er al) en git. Voor de deelafbeeldingen ook Google Chrome.

## Lokaal bekijken

```
cd "…/Claude/Projecten/AI-leerlab/site"
python3 bouw.py --bekijk
```

De browser opent http://localhost:8000. Stoppen doe je met Ctrl+C in het Terminal-venster. Na een wijziging bouw je opnieuw en ververs je de pagina.

## Een nieuw artikel toevoegen

1. Maak een bestand in `inhoud/leren/`. De bestandsnaam wordt het adres: `inhoud/leren/prompts-schrijven.md` komt op `https://ai-leerlab.nl/leren/prompts-schrijven/`. Gebruik kleine letters en streepjes.
2. Zet bovenaan het kopje. Kopieer het van een bestaand artikel en pas het aan:

   ```
   ---
   seotitel: Prompts schrijven die werken
   beschrijving: Eén of twee zinnen voor Google, hooguit 155 tekens.
   kaarttekst: De uitleg op de kaart op de beginpagina, twee regels.
   soort: uitleg
   categorie: didactiek
   tags: lesontwerp, toetsing
   voor: studenten, docenten
   avatar: onno-rust
   datum: 2026-10-14
   ---
   ```

   - `seotitel` is de titel in Google en in het tabblad, hooguit ongeveer 50 tekens (" · AI-leerlab" komt er vanzelf achter).
   - `soort` is `uitleg`, `tutorial`, `tool` of `verhaal`.
   - `categorie` en `tags`: zie hieronder, "Categorieën, onderwerpen en series".
   - `avatar` is de naam van een bestand in `statisch/assets/img/avatars/` zonder `.webp`. Kies het teamlid dat bij het onderwerp past, in rustpose; een tutorial krijgt de rolpose. Bij een artikel of seriedeel mag een handeling (lezen, nadenken, controleren, uitleggen, overdragen, bouwen) als die de kern van het stuk is; oeps en vragend alleen als de titel erover gaat, blij nooit in een kop (regel in `Styleguides/AI-leerlab/DESIGN.md`). Nooit dezelfde figuur als het artikel waar je naar verwijst: `bouw.py` vergelijkt het deel vóór het eerste streepje, dus `james-overdragen` in de kop en `james-rust` in een verwijsblok telt als twee keer James, en het blok krijgt dan het icoon.
     De vorm is `<teamlid>-<versie>`, in kleine letters: `james-rust`, `james-rol`, en straks ook expressies als `james-blij` of `james-vragend`. In de contentkalender van de Productiviteit-app kiest Frits het figuur per artikel (teamlid, dan versie). De app leest de versies uit de bestandsnamen van Anouks stills (`Styleguides/Windesheim/Leveringen/Avatars 3D - set 2/Stills/` en `Avatars 3D - expressies/Stills/`, `<Naam> - <versie>.png`); `James - blij.png` wordt `avatar: james-blij`. Staat er nog geen `james-blij.webp` in `statisch/assets/img/avatars/`, dan waarschuwt `bouw.py` en blijft het figuur weg; de app zegt dat bij de keuze ("nog niet op de site").
     Alle negen expressies van de negentien teamleden staan er sinds 03-10-2026 als webp (Cor niet: hij hoort niet bij het team op de site). Ze staan op de schaal van de rustpose van dezelfde figuur: uit de still bijgesneden op de figuur en verkleind met dezelfde factor als rust (bij Job wordt 1635 px 560 px), niet passend gemaakt op 560 px. Daardoor verschillen de bestanden in hoogte; `bouw.py` zet de verhouding tot de rustpose als `--schaal` op het beeld en de css vermenigvuldigt de vaste hoogte (220 px in de kop) daarmee, zodat het lijf even groot blijft. Nieuwe versie erbij: zelfde werkwijze, webp kwaliteit 80.
   - `datum` in de toekomst plant het artikel: het gaat op die dag online (zie Gepland publiceren).
   - `bijgewerkt: 2026-11-02` zet je erbij als je een artikel later aanpast.
   - `status: concept` zet het artikel op `/test/<naam>/`, met noindex, zonder dat het op de beginpagina of in de sitemap staat. Haal de regel weg als het live mag.
   - `uitgelicht: ja` zet een item groot bovenaan de beginpagina. Zet dat bij één item tegelijk; staat het bij meer items, dan neemt de beginpagina het nieuwste en waarschuwt het script.
   - `uitgelicht: categorie` maakt het artikel de grote kaart in het blok van zijn categorie op de beginpagina. Eén per categorie; staat het bij meer, dan neemt de beginpagina het nieuwste en waarschuwt het script. Zonder keuze wordt het nieuwste artikel van de categorie de grote kaart.
3. Daaronder de tekst, gewoon in Markdown. De eerste regel `# Titel` wordt de titel van de pagina. Een losse regel "Frits Coers, docent bij Windesheim" direct onder de titel laat `bouw.py` weg: Frits is de enige auteur (afspraak Frits, 01-10-2026). Hij blijft author in schema.org. Staat zijn naam ergens anders, of begint een gewone alinea ermee, dan blijft die staan.
4. Onderaan, na een regel met `---`, de GenAI-vermelding die begint met `**Transparantie GenAI.**`. Die is verplicht bij artikelen; zonder vermelding waarschuwt het script. Alleen artikelen krijgen hem. De beginpagina, `/leren/`, `/over/`, de 404 en tutorials niet: daar stoort hij (afspraak Frits, 30-09-2026). Zet er `Human-AI Agency Label: <label>.` in: op de site wordt dat één zin met het label, en de rest komt in een uitklap. De bron van de labels (Boetje & Baake) komt er vanzelf onder als je een label noemt.
5. Verwijzen naar een tutorial, tool of ander artikel gaat met een blok:

   ```
   > [!tutorial]
   > **Bouw je eigen AI-team**
   > Eén regel uitleg.
   > [Naar de tutorial](/leren/bouw-je-eigen-ai-team/)
   ```

   Gebruik `[!tutorial]` of `[!tool]` voor het groene verwijsblok en `[!lees-ook]` voor een ander artikel. Hooguit twee per artikel en niet twee direct onder elkaar.
6. Stappen die verschillen per besturingssysteem zet je in een uitklap per systeem. De lezer klapt zelf het deel voor Mac of Windows open; dicht staan ze de tekst niet in de weg.

   ```
   > [!mac] Python installeren
   > Open Terminal.
   >
   > 1. Typ:
   >
   > ```
   > python3 --version
   > ```
   >
   > 2. Zie je 3.10 of hoger, dan ben je klaar.

   > [!windows] Python installeren
   > ...
   ```

   - De titel staat op dezelfde regel als `[!mac]` of `[!windows]`. Daaronder alles wat Markdown kan: alinea's, lijsten, codeblokken. Elke regel begint met `>`, ook de lege.
   - Zet een lege regel (`>`) vóór en na een codeblok. Een genummerde lijst die na een codeblok verdergaat, telt door: `2.` blijft 2.
   - Twee blokken met alleen een lege regel ertussen worden één paar met één rand. Zet Mac eerst, dan Windows.
   - Is een stap voor beide systemen gelijk, schrijf hem dan gewoon in de tekst en niet twee keer.
7. Bouw en kijk: `python3 bouw.py --bekijk`. Het script noemt onder "Let op" wat er ontbreekt of mis is, bijvoorbeeld een link naar een pagina die niet bestaat.
8. Wil je een eigen deelafbeelding voor LinkedIn en Teams: `python3 maak-deelafbeeldingen.py` maakt er een voor elk artikel dat er nog geen heeft. Bouw daarna opnieuw.

Een foto of schermafbeelding zet je in `statisch/assets/img/` en gebruik je in de tekst met `![Wat erop staat](/assets/img/naam.webp)`.

## Categorieën, onderwerpen en series

Vier velden in het kopje. De namen zijn vast; de contentkalender in de Productiviteit-app schrijft dezelfde regels. De lijsten staan op één plek, in `site.json` (`categorieen`, `onderwerpen`, en onder `kopje` een korte uitleg per veld).

| Veld | Waarde | Voorbeeld |
|---|---|---|
| `categorie` | precies één slug: `praktijk`, `didactiek`, `techniek` of `onderzoek`. Verplicht | `categorie: didactiek` |
| `tags` | 0 tot 3 onderwerpen uit de lijst in `site.json`, met komma's | `tags: lesontwerp, toetsing` |
| `serie` | naam van een bestand in `inhoud/series/`, zonder `.md` | `serie: masterproject` |
| `deel` | het nummer binnen de serie, alleen samen met `serie` | `deel: 3` |

- Een artikel blijft altijd op `/leren/<naam>/`. De categorie zit niet in het adres, dus een artikel van categorie wisselen breekt geen link. Daarom mag een artikel niet `praktijk`, `didactiek`, `techniek` of `onderzoek` heten.
- Elke categorie met artikelen krijgt een eigen pagina, `/leren/<categorie>/`, en een tab bovenaan Leren. Een categorie zonder artikelen verschijnt nergens: geen tab, geen pagina, niet in de sitemap.
- Een onderwerp staat als tekst onder het artikel. Pas vanaf drie artikelen krijgt het een pagina `/onderwerp/<tag>/` en wordt het een link. Een nieuw onderwerp zet je in `site.json` als twee artikelen het nodig hebben. Nooit de naam van een categorie, soort of product.
- "Verder in het lab" staat alleen onder een artikel dat in de tekst nergens naar een ander item verwijst: geen verwijsblok, geen "Lees ook" en geen gewone link naar een ander artikel. Onder een tutorial, tool of seriedeel staat het nooit (Frits, 01-10-2026: de onderkant was te druk). Verschijnt het wel, dan kiest het eerst artikelen met dezelfde onderwerpen, dan dezelfde categorie.

### Series

Een serie is een bestand in `inhoud/series/`, bijvoorbeeld `masterproject.md`, met `titel`, `kaartnaam` (een korte naam voor smalle kaarten en het kruimelpad op mobiel, hooguit ongeveer 18 tekens; zonder neemt het script de titel), `seotitel`, `beschrijving`, `lede`, `categorie`, `avatar`, `ritme` (bijvoorbeeld `elke week`), eventueel `dag` (`donderdag`) en `status` (`lopend` of `afgerond`). De tekst onder het kopje wordt "Over deze serie". Een deel is een gewoon artikel met `serie:` en `deel:` in het kopje.

Een serie verschijnt pas als er minstens één deel gepubliceerd is: een deel zonder `status: concept` en met een datum van vandaag of eerder. Tot dan staat Series niet in het menu en niet in de voet, is er geen pagina `/series/` of `/series/<naam>/`, staat er niets over op de beginpagina en niets in de sitemap. Dat regelt `bouw.py` vanzelf; zodra het eerste deel online gaat (ook via gepland publiceren), komt alles tegelijk.

`inhoud/series/masterproject.md` staat er al, met een werktitel. De echte naam zet je daar neer voordat deel 1 verschijnt. Ook `inhoud/series/bouw-je-eigen-productiviteitsapp.md` staat klaar (categorie techniek); beschrijving, lede en ritme zijn daar een werktekst.

Wat er dan komt:

- `/series/` met alle series en `/series/<naam>/` met de delen in leesvolgorde, "Begin bij deel 1" en "Lees het nieuwste deel". Staat het volgende deel gepland, dan zegt de pagina "Deel 6 verschijnt op donderdag 12 november".
- Op een deel: kruimelpad Series / <serie>, het label "Deel 3", onderaan vorige en volgende plus "Alle delen van deze serie". Geen "Verder in het lab", en de onderwerpen zonder links. In "Verder in het lab" bij andere artikelen komen geen seriedelen.
- Op de beginpagina tellen de delen in het blok van hun categorie mee als gewone artikelen (zie "De beginpagina").
- Een RSS-feed per serie: `/series/<naam>/feed.xml` (zie "RSS-feeds").

`bouw.py` waarschuwt onder "Let op" bij: geen of een onbekende categorie, een onbekend onderwerp, meer dan drie onderwerpen, een serie zonder deelnummer of een deelnummer zonder serie, een serie die niet bestaat, een deelnummer dat twee keer voorkomt, en een artikel dat heet als een categorie.

### RSS-feeds

- De hele site: `https://ai-leerlab.nl/feed.xml` (03-10-2026). Alle gepubliceerde items, nieuwste bovenaan, met titel, link, beschrijving, publicatiedatum en categorie. Een seriedeel heet daarin "Deel 2: <titel>". Concepten (`/test/`) en geplande artikelen staan er niet in; een gepland artikel komt erin op de dag dat de ochtendbouw het publiceert.
- Elke pagina heeft in de kop `<link rel="alternate" type="application/rss+xml" href="/feed.xml">`, zodat een feedlezer de feed vindt als je alleen ai-leerlab.nl invoert. Op een seriepagina staat de seriefeed er als tweede onder.
- In de voet van elke pagina staat de link "RSS-feed".
- Rechts daarnaast staan de profielen van Frits als icoon (03-10-2026): LinkedIn en Instagram (@ai_leerlab). Ze komen uit `sameAs` in `site.json`; zet je daar een adres met instagram.com bij, dan verschijnt het icoon bij de volgende bouw vanzelf. Iconen in lijnstijl, klikvlak 44 px, openen in hetzelfde tabblad zoals de andere links.
- Per serie blijft er een eigen feed: `/series/<naam>/feed.xml`.
- Beide feeds maakt `bouw.py` (`bouw_site_feed` en `bouw_feed`). Controleren kan met https://validator.w3.org/feed/.

## Delen

Onder elk artikel, elke tutorial en elk seriedeel staat een rij "Delen" met drie iconen, direct onder de onderwerpen (03-10-2026, idee 3 uit Brams featureideeën):

- LinkedIn: een gewone link naar `linkedin.com/sharing/share-offsite/?url=…`, opent in een nieuw tabblad.
- Mail: een `mailto:`-link met de titel als onderwerp en titel plus adres in de tekst.
- Link kopiëren: zet het adres op het klembord en toont "Gekopieerd" naast de knop (ook voor schermlezers). Dit is het enige stukje JavaScript, `statisch/assets/delen.js`, van ons zelf. De knop staat in de HTML op `hidden` en verschijnt pas als het script draait; zonder JavaScript blijven LinkedIn en mail over.

Alle drie gebruiken het canonieke adres op https://ai-leerlab.nl. Geen knoppen of scripts van LinkedIn of andere diensten, dus geen trackers en geen extra cookies. Een concept onder `/test/` krijgt geen deelrij. Iconen in dezelfde lijnstijl als de profielen in de voet, klikvlak 44 px, icoon 24 px. Code: `delen_html` in `bouw.py`, opmaak onder `.deelrij` in `site.css`.

## De beginpagina

Ontwerp van Bram (01-10-2026, categorieblokken 02-10-2026), met besluiten van Frits.

- Bovenaan één uitgelicht item: het item met `uitgelicht: ja`, anders het nieuwste.
- Daaronder per categorie een blok, in de vaste volgorde van de lijst `categorieen` in `site.json`: AI in de praktijk, Didactiek, Onderzoek, Techniek (Frits, 02-10-2026). De tabrij op Leren volgt dezelfde volgorde. Een categorie zonder artikelen, of met alleen het uitgelichte item, krijgt geen blok.
- In elk blok: de naam als kop, de korte uitleg uit `site.json`, links een grote kaart en rechts onder "Laatst verschenen" de nieuwste andere artikelen, hooguit drie (`CAT_LIJST_MAX` in `bouw.py`). De grote kaart is het artikel met `uitgelicht: categorie`, anders het nieuwste. Is er naast de grote kaart niets, dan wordt hij één brede kaart. Onderaan de link "Alles in <categorie>" met het aantal artikelen.
- Op de grote kaart staan rechtsonder de belletjes uit de kop met het figuur van de categorie: het `avatar`-veld van de categorie in `site.json`. Is dat dezelfde avatar als in de kop van de beginpagina, dan neemt het script de rol-pose (nu: James).
- Het uitgelichte item komt niet terug in zijn eigen blok. Het raster "Laatst verschenen" en de regel met categorieën zijn vervallen (Frits, 02-10-2026).
- Een seriedeel telt in een blok als gewoon artikel: is deel 1 de grote kaart, dan kan deel 2 in de lijst staan (Frits, 03-10-2026; eerder nam een serie één plek in). Een deel dat nog niet gepubliceerd is, staat er niet. Op de kaart staat als label "Serie", het deelnummer klein vóór de titel en de serienaam onderaan.
- "Nieuw" staat op een item op de publicatiedag en de zes dagen daarna (`NIEUW_DAGEN` in `bouw.py`; Frits; Bram stelde alleen de laatste publicatiedag voor). Het is een klein icoon (een kiemplantje) rechts in de voetregel, met "Nieuw" voor schermlezers. De GitHub Action bouwt elke ochtend, dus het teken verdwijnt vanzelf, ook als er niets nieuws verschijnt. Op de beginpagina en bij de delen op een seriepagina.
- Elke kaart toont de publicatiedatum als kleine pill rechts in de labelregel: "1 okt 2026". Ook op Leren en de categoriepagina's.
- De voetregel van een kaart staat altijd op één regel (Frits, 01-10-2026): voor wie, of bij een seriedeel de serienaam. Is de kaart te smal, dan staat er de korte vorm: "Studenten en docenten", of de `kaartnaam` van de serie. Past ook die niet, dan waarschuwt `bouw.py` onder "Let op".
- Het kruimelpad begint zonder "Beginpagina", want het logo gaat daarheen. In het schema voor Google staat de beginpagina er wel in.

## Publiceren

Na het bouwen:

```
git add -A
git commit -m "Nieuw artikel: prompts schrijven"
git push
```

Plesk haalt de nieuwe versie op en binnen een minuut staat hij online.

### Gepland publiceren

Een artikel met een `datum:` in de toekomst slaat `bouw.py` over: het staat wel in de repository, maar nog niet op de site. Elke ochtend rond zes uur bouwt GitHub de site opnieuw (`.github/workflows/dagelijks-bouwen.yml`). Is de dag van een artikel gekomen, dan legt die bouw `public/` vast en pusht hij, en zet Plesk het artikel online. De Mac hoeft daarvoor niet aan te staan. Je plant per dag, niet per uur.

- Dezelfde bouw haalt het label "Nieuw" weg als een item zeven dagen oud is, en legt dat vast.
- Is er die ochtend niets nieuws, dan legt de bouw niets vast. Alleen een nieuw versienummer achter de css-link telt niet als iets nieuws.
- Met de hand starten kan bij GitHub onder Actions, "Dagelijks bouwen", "Run workflow".
- GitHub zet geplande Actions uit in een repository waar zestig dagen niets is gebeurd. Komt er een mail daarover, zet hem dan onder Actions weer aan.
- `status: concept` gaat voor: een concept staat altijd op `/test/`, ook met een datum in de toekomst.

### Vanuit de Productiviteit-app

De contentkalender in de Productiviteit-app schrijft een artikel als `.md` in `inhoud/leren/`, draait `bouw.py`, legt het vast en pusht. Zonder datum gaat het meteen online, met een datum wordt het gepland zoals hierboven. De app overschrijft geen artikel dat je hier met de hand hebt aangepast, en pusht niet als er in deze map nog andere wijzigingen klaarstaan: leg die eerst zelf vast.

### Eenmalig: de repository koppelen aan GitHub

De map is al een git-repository met een eerste commit. Vul je GitHub-gebruikersnaam in op de plek van `GEBRUIKERSNAAM`:

```
git remote add origin https://github.com/GEBRUIKERSNAAM/ai-leerlab.git
git push -u origin main
```

### Eenmalig: Plesk instellen

1. In Plesk, bij het domein ai-leerlab.nl: Git, Repository toevoegen. Kies Externe repository en plak het adres van de GitHub-repository. Is de repository privé, dan toont Plesk een SSH-sleutel; zet die in GitHub bij Settings, Deploy keys.
2. Uitrolmodus: Automatisch. Uitrolpad: `httpdocs`.
3. Bij Hosting-instellingen: zet de document root op `httpdocs/public`. Zo is alleen de gebouwde site te zien, en niet de scripts en bronbestanden.
4. Zet in Plesk bij SSL/TLS een gratis Let's Encrypt-certificaat aan en kies "Doorverwijzen van http naar https". Kies ook één vorm van het adres, zonder www, want de site gebruikt overal `https://ai-leerlab.nl`.
5. Voor automatisch bijwerken na een push: kopieer in Plesk de webhook-URL van de repository en zet die in GitHub bij Settings, Webhooks. Zonder webhook klik je in Plesk op Ophalen na elke push.
6. Controleer daarna https://ai-leerlab.nl/robots.txt en meld de sitemap aan in Google Search Console: `https://ai-leerlab.nl/sitemap.xml`.

## Wat waar staat

| Map of bestand | Wat erin staat |
|---|---|
| `inhoud/leren/` | De artikelen (`.md`) en de tutorial (`.html`, eigen opmaak met een kopje bovenaan) |
| `inhoud/over.md` | De pagina Over, met privacy en colofon |
| `inhoud/series/` | De series (`.md`, kopje plus de tekst "Over deze serie") |
| `site.json` | Adres, teksten van de beginpagina, Leren en Series, de categorieën en de lijst onderwerpen |
| `sjablonen/basis.html` | Wat op elke pagina staat: de kop, de voet en alles voor Google |
| `statisch/` | Gaat ongewijzigd mee: opmaak (`assets/site.css`), letters, avatars, logo, favicons, downloads, `.htaccess` |
| `bouw.py` | Het bouwscript |
| `maak-deelafbeeldingen.py` | Maakt de afbeeldingen van 1200 × 630 voor delen op sociale media |
| `public/` | De gebouwde site. Nooit met de hand aanpassen: bij elke bouw wordt de map opnieuw gemaakt |

## Vindbaarheid

Per pagina: een eigen titel en beschrijving, canonical op https://ai-leerlab.nl, Open Graph- en Twitter-tags met deelafbeelding, schema.org (Article of LearningResource met HowTo, met articleSection en keywords; CollectionPage op categorie- en onderwerppagina's; CreativeWorkSeries op een seriepagina en als isPartOf met position op een deel; Person, WebSite en een kruimelpad). Voor de hele site: `sitemap.xml`, `robots.txt`, favicons en een webmanifest. Alle tekst staat als gewone HTML in de pagina; de site werkt ook zonder JavaScript. Alleen pagina's onder `/test/` en de 404-pagina staan op noindex. De 404 toont Onno in oeps, groter dan in een gewone kop (300 px, 220 px tot 820 px breed, 180 px onder 640 px) en ook op mobiel.

## Privacy

Statistieken via Google Analytics (meet-ID `analytics` in `site.json`), alleen na toestemming. `statisch/assets/toestemming.js` toont een melding met Accepteren en Weigeren, even zwaar. Google Consent Mode v2 staat standaard op denied; gtag.js laadt pas na Accepteren, dus zonder toestemming gaat er geen verzoek naar Google. De keuze staat in localStorage (`ai-leerlab:statistieken`), en via Cookie-instellingen in de voet kun je hem wijzigen. Bij Weigeren na eerder Accepteren ruimt het script de `_ga`-cookies op. Geen advertentiefuncties: Google signals en advertentiepersonalisatie staan uit, `ads_data_redaction` aan. Niet op `/test/` en de 404. Verder geen letters of scripts van andere diensten. Haal je `analytics` uit `site.json`, dan verdwijnen melding en meting overal.

## Later erbij

De opzet houdt hier rekening mee, zonder verbouwing:

- Tools: een map `inhoud/tools/`. Een tool is een `.html`-bestand met een kopje, net als de tutorial, plus een eigen script in `statisch/assets/`. Ze komen op `/tools/<naam>/`. Zet dan ook een menulink in `sjablonen/basis.html`.
- Filters op voor wie en soort: pas zinvol vanaf een stuk of acht items. Soort en doelgroep staan al in elk kopje.
- Zoeken en een nieuwsbrief.
