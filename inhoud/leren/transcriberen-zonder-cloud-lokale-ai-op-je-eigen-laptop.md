---
seotitel: Opnames uitschrijven met lokale AI, zonder cloud
beschrijving: Laat opnames uitschrijven en samenvatten op je eigen laptop met whisper.cpp en Ollama, op Mac en Windows. Met de instellingen en fouten uit mijn eigen app.
kaarttekst: Opnames uitschrijven en samenvatten op je eigen laptop, zodat niets naar een clouddienst gaat.
soort: uitleg
categorie: techniek
tags: agents, privacy
voor: studenten, docenten
avatar: wouter-controleren
serie: bouw-je-eigen-productiviteitsapp
deel: 5
datum: 2026-10-16
---

# Transcriberen zonder cloud: lokale AI op je eigen laptop

Eind augustus wilde ik een opname van een vergadering laten uitschrijven, en dat mislukte. Toen het team ging zoeken, bleek het onderdeel dat het uitschrijven deed niet meer op mijn laptop te staan. Bij het opnieuw opbouwen van de Python-omgeving van mijn app was het niet meegekomen, omdat het niet op de lijst met benodigdheden stond die je in [deel 2](/leren/zo-installeer-je-de-basis-van-je-app-op-mac-en-windows/) maakte. Omdat ik in die tijd niets had opgenomen, was het niemand opgevallen. De laatste geslaagde transcriptie was van half juni.

Het team heeft het opgelost, en daarbij is het uitschrijven ook nog een stuk sneller geworden. Hoe dat zat, vertel ik in dit deel. Aan het eind staat er op je eigen laptop een spraakmodel dat opnames uitschrijft en een taalmodel dat ze samenvat, en verlaat geen van beide je computer.

## Waarom lokaal

Ik neem soms gesprekken op waarvan ik heb beloofd dat ze niet naar een clouddienst gaan. Dan wil ik zeker weten dat dat ook zo is, en niet afhankelijk zijn van de voorwaarden van een leverancier. Een model dat op je eigen laptop draait, stuurt niets weg. Het werkt ook zonder internet.

Daar hoort nog iets bij. Mijn app wordt gebouwd met Claude Code, en dat werkt wel via de cloud. Voor gesprekken waarvan ik heb beloofd dat ze lokaal blijven, geldt daarom een harde afspraak: de assistent opent de opnames en de uitgeschreven teksten niet. Hij mag wel aan de code werken die het uitschrijven regelt, maar niet aan de gesprekken zelf.

## Drie programma's voor hetzelfde model

Het spraakmodel heet Whisper. Het is gemaakt door OpenAI, maar het model zelf is vrij te gebruiken en draait gewoon op je laptop. Wat ik niet wist toen ik begon: er zijn verschillende programma's die dat model laten draaien, en die verschillen flink.

In mei begon mijn app met het programma van OpenAI zelf, zonder verdere instellingen. Zo blijft Whisper bij Nederlandse vergaderingen soms dezelfde zin herhalen, of verzint het tekst in een stilte. Eind mei stapte het team na onderzoek over naar faster-whisper, met drie instellingen die vooral bij Nederlandse vergaderingen verschil maken. De taal staat vast op Nederlands, zodat het model niet hoeft te raden. Stiltes worden overgeslagen. En het model bouwt niet voort op de vorige zin, waardoor het niet in een herhaling blijft hangen. Voordat we overstapten, is een eigen opname van bijna een uur met beide programma's uitgeschreven en vergeleken. Vaktermen kwamen er duidelijk beter uit.

Bij het herstel in augustus kwam de derde motor: whisper.cpp. Dat programma stond via Homebrew al op mijn Mac en gebruikt de grafische chip. Een vergadering van bijna een uur was voorheen in ruim twintig minuten uitgeschreven, en nu in een paar minuten. Omdat het om hetzelfde model gaat, bleef de kwaliteit gelijk; het team heeft de nieuwe tekst woord voor woord naast de oude gelegd. Opvallend was dat whisper.cpp zonder de grafische chip juist trager was dan de oude route. De snelheid zit dus niet in het programma alleen, maar ook in je laptop.

Elke wissel had een reden die we konden meten, en dat raad ik je ook aan. Vraag je assistent bij een overstap om dezelfde opname met de oude en de nieuwe route uit te schrijven en de tijd en de tekst te vergelijken.

## Samenvatten met een lokaal taalmodel

Na het uitschrijven maakt de app een samenvatting en zet die onder de aantekening in de journal waar de opname bij hoort. Dat doet een taalmodel dat via Ollama op mijn laptop draait. Ollama is een gratis programma dat zulke modellen downloadt en beschikbaar maakt voor je eigen apps. Hetzelfde gebeurt bij nakijken: het lokale model stelt criteria en feedback voor, maar ik bevestig de criteria en schrijf mijn eigen feedback. Wat het model voorstelt en wat ik zelf vind, staan in de app bewust apart.

![Een uitgeschreven gesproken notitie in mijn app, met daarboven de samenvatting van het lokale taalmodel, met voorbeeldgegevens](/assets/img/productiviteitsapp-transcriptie.webp)

Eén ding wist ik niet. Ollama kan ook modellen aanbieden die niet op je laptop draaien maar in de cloud, en voor je app ziet dat er hetzelfde uit. Mijn team heeft daarom een controle ingebouwd: de app gebruikt alleen een model dat echt op mijn laptop staat en weigert een model met een verbinding naar buiten. Vraag je assistent om hetzelfde.

> Ik wil opnames laten uitschrijven met whisper.cpp en samenvatten met een lokaal model via Ollama, alles op mijn eigen laptop. Zet de taal vast op Nederlands, sla stiltes over en voorkom herhalingen. Zet de samenvatting onder de aantekening waar de opname bij hoort. Gebruik alleen modellen die lokaal staan, en weiger modellen die naar de cloud gaan. Ik werk op [Mac of Windows].

## Een lokaal model maakt zijn fouten ongemerkt

In augustus heb ik ook geprobeerd om korte opdrachten aan mijn app, zoals "zet een taak op mijn bord voor donderdag", door een lokaal model te laten uitvoeren. Dat werkte vaak, maar niet altijd. Bij dezelfde opdracht kwam er de ene keer een keurige taak uit, en de andere keer bleef "donderdag" in de titel staan of stond er een verkeerde datum. Eén keer meldde het model zelfs dat de taak was aangemaakt, terwijl er niets was opgeslagen.

Zo'n fout zie je niet aan de buitenkant. Het antwoord ziet er net zo netjes uit als een goed antwoord. Daarom moest ik bij die proef elke schrijfactie zelf goedkeuren. De app liet in gewone taal zien wat hij ging opslaan, en pas na mijn ja kwam er iets in de database. Bij een samenvatting is dat minder nodig, want die lees ik toch. Bij alles wat in je database belandt, zou ik het altijd doen.

Ik ben ook eerlijk over de snelheid. In de eerste proef kostte een vraag als "wat staat er deze week op mijn bord?" ongeveer een minuut. Met een nieuwere versie van Ollama, en door het model bij een gewone vraag niet eerst te laten nadenken, ging dat naar een paar seconden. Lokaal is dus niet vanzelf snel, maar het valt wel te verbeteren.

## Modellen zijn groot

Een spraakmodel is al snel een paar gigabyte, en de taalmodellen die ik gebruik zijn rond de twintig gigabyte. Mijn laptop heeft daar genoeg geheugen voor, maar dat geldt niet voor elke laptop. Begin daarom met een kleiner taalmodel van een paar gigabyte, zoals qwen3:8b, en kijk of de samenvattingen je bevallen.

Zet modellen bovendien niet in een map die met OneDrive of iCloud synchroniseert. Ze veranderen nooit en kosten alleen maar ruimte in je cloud. Mijn spraakmodellen staan daarom in een eigen map buiten OneDrive. Ollama bewaart zijn modellen standaard al in je gebruikersmap, en niet in OneDrive.

> [!mac] whisper.cpp en Ollama installeren
> 1. Open Terminal en installeer whisper.cpp en ffmpeg met Homebrew. ffmpeg zet je opname om naar het formaat dat whisper.cpp leest.
>
> ```
> brew install whisper.cpp ffmpeg
> ```
>
> 2. Download Ollama van [ollama.com/download](https://ollama.com/download), sleep het naar Apps en open het. Ollama vraagt of het de opdracht `ollama` mag installeren; zeg ja.
> 3. Haal een taalmodel op met `ollama pull qwen3:8b`.
> 4. Maak een map voor spraakmodellen buiten OneDrive, bijvoorbeeld met `mkdir ~/whisper-modellen`, en download daarin een model van de [modellenpagina van whisper.cpp](https://huggingface.co/ggerganov/whisper.cpp/tree/main). `ggml-large-v3-turbo.bin` is een goed begin.
> 5. Probeer het met een korte opname:
>
> ```
> ffmpeg -i opname.m4a -ar 16000 -ac 1 -c:a pcm_s16le opname.wav
> whisper-cli -m ~/whisper-modellen/ggml-large-v3-turbo.bin -l nl -f opname.wav
> ```
>
> Op een Mac met een M-chip gebruikt whisper.cpp vanzelf de grafische chip.

> [!windows] whisper.cpp en Ollama installeren
> 1. Open PowerShell en installeer ffmpeg en Ollama met winget. ffmpeg zet je opname om naar het formaat dat whisper.cpp leest.
>
> ```
> winget install --id Gyan.FFmpeg -e
> winget install --id Ollama.Ollama -e
> ```
>
> 2. Sluit PowerShell, open hem opnieuw en haal een taalmodel op met `ollama pull qwen3:8b`.
> 3. Download whisper.cpp van de [releasepagina op GitHub](https://github.com/ggml-org/whisper.cpp/releases). Kies bij de nieuwste versie met bestanden `whisper-bin-x64.zip` en pak het uit, bijvoorbeeld naar `C:\whisper`. In de map `Release` staat `whisper-cli.exe`.
> 4. Maak een map voor spraakmodellen buiten OneDrive, bijvoorbeeld `C:\whisper-modellen`, en download daarin een model van de [modellenpagina van whisper.cpp](https://huggingface.co/ggerganov/whisper.cpp/tree/main). `ggml-large-v3-turbo.bin` is een goed begin.
> 5. Probeer het met een korte opname:
>
> ```
> ffmpeg -i opname.m4a -ar 16000 -ac 1 -c:a pcm_s16le opname.wav
> C:\whisper\Release\whisper-cli.exe -m C:\whisper-modellen\ggml-large-v3-turbo.bin -l nl -f opname.wav
> ```
>
> Deze versie rekent op de processor, en dat is trager dan op een Mac met grafische chip. Heb je een NVIDIA-videokaart, dan is er ook een versie met `cublas` in de naam die die kaart gebruikt.

## Zo ga je verder

Mijn voorstel voor deze week: neem een kort overleg of een eigen gesproken notitie van een paar minuten op en laat die op je laptop uitschrijven. Lees de tekst daarna helemaal door en let op namen en vaktermen, want daar gaat het het vaakst mis. Lukt dat, vraag je assistent dan om de samenvatting onder een aantekening te zetten. In deel 6 gaan we van een app die werkt naar een app die je prettig vindt om te gebruiken.

---

**Transparantie GenAI.** Een AI-teamlid in Claude Code heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van mijn eigen teksten, mijn feedback, het werklogboek van mijn team en de changelog van mijn app. De opnames en uitgeschreven gesprekken zelf heeft het niet gezien. De stappen voor Windows zijn opgezocht, niet getest. Ik heb onderwerp, opbouw en voorbeelden bepaald en de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
