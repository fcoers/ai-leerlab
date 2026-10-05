---
seotitel: Een les ontwerpen met AI: wat je zelf houdt
beschrijving: Hoe ik met AI een oefenset voor Power BI heb gemaakt: welke stappen ik heb uitbesteed, wat ik zelf ben blijven doen en waar het misging.
kaarttekst: Van leerdoel tot rubric: welke stappen ik aan AI heb gegeven bij een oefenset voor Power BI, en wat ik zelf ben blijven doen.
soort: uitleg
categorie: didactiek
tags: lesontwerp, toetsing, data-analyse
voor: docenten
avatar: dide-nadenken
datum: 2026-09-30
---

# Een les ontwerpen met AI: wat je uitbesteedt en wat je zelf doet

Frits Coers, docent bij Windesheim

Deze week heb ik met mijn AI-team een oefenset voor Power BI gemaakt: drie lessen voor het vak Informatiemanagement bij Technische Bedrijfskunde. Er hoort een eigen dataset bij, een dashboard met ingebouwde fouten, een opdracht met antwoordmodel en een rubric. De eerste versie stond er binnen twee dagen.

Het ging snel omdat ik vooraf wist wat ik wilde, en het ging mis op de plekken waar ik dat nog niet wist. In dit artikel laat ik zien welke stappen ik samen met AI heb gezet en wat ik bewust zelf ben blijven doen.

## Stap 1: het leerdoel blijft van jou

De eerste vraag was niet "maak een Power BI-opdracht", maar: waar moeten studenten na deze drie lessen staan? In het project dat erop volgt, bouwen ze een dashboard met echte sensordata van een Raspberry Pi Pico. De oefenset moet ze daar klaar voor maken.

Ik heb de AI de studiewijzer, mijn oude lessen en de vijf bestaande opdrachten gegeven en gevraagd die naast de eindopdracht te leggen. Dat leverde een helder overzicht op van wat ontbrak: data inlezen uit een bestand, opschonen, zelf relaties leggen en een dashboard bouwen vanuit de vraag van een gebruiker.

Daarna kwamen de keuzes, en die waren van mij. De oefenset wordt voldaan of niet voldaan, zonder cijfer. Studenten werken in tweetallen in Power BI Desktop. De data gaat over temperatuur en luchtvochtigheid. En alle drie de lessen werken met hetzelfde fictieve gebouw.

## Stap 2: de opbouw van de lessen

Voor de opbouw heeft de AI de drie lessen ingedeeld volgens het 4C/ID-model (Van Merriënboer & Kirschner, 2018): eerst een uitgewerkt voorbeeld, dan een taak die je aanvult, dan zelfstandig. In les 1 lezen studenten een kant-en-klaar dashboard af en zoeken ze de fouten. In les 2 maken ze ruwe data bruikbaar. In les 3 bouwen ze zelf een dashboard voor een facilitair manager, met drie KPI's, drie conclusies en één advies.

Dit is een stap waar AI echt helpt. Een model dat je kent, maar niet elke dag toepast, wordt ineens concreet uitgewerkt. Ik hoefde alleen te beoordelen of het bij mijn studenten paste.

## Stap 3: een dataset met verhalen erin

De mooiste vondst was de dataset. De AI heeft een programma geschreven dat een maand metingen maakt, elke vijf minuten, voor vier ruimtes. Daarin zitten verhalen die studenten zelf moeten ontdekken: een ruimte die in een drukke week te warm wordt, een kantoor waar in het weekend de verwarming aanstaat terwijl er niemand is, een sensor die langzaam wegloopt. Voor les 2 zit er bewust rommel in: komma's en punten door elkaar, lege regels, dubbele metingen en een stroomuitval waarbij de klok terugspringt.

Dat is precies het soort materiaal dat je als docent nooit zelf maakt, omdat het te veel werk is. Echte data is vaak niet te gebruiken, en een verzonnen tabel in Excel heeft geen verhaal.

Hier ging het ook voor het eerst mis. Het eerste gebouw was een soort kantoorgebouw met een lokaal, een vergaderruimte en een gang. Mijn studenten worden technisch bedrijfskundigen en gaan in fabrieken werken. Dus vroeg ik om een fabriek: een fabriekshal met machines en ploegendiensten, een kantoor, een magazijn en een expeditie met dockdeuren. Dat was een goede keuze, want de energievraag wordt daarmee veel concreter. Maar het was een keuze die ik aan het begin had moeten maken.

## Stap 4: fouten die je expres inbouwt

In les 1 krijgen studenten twee versies van hetzelfde dashboard. In de tweede zitten twee fouten: een kaart die temperaturen optelt in plaats van het gemiddelde te nemen, en een ontbrekende koppeling tussen twee tabellen. Beide fouten zijn zichtbaar als je goed kijkt. Een temperatuur van ruim een half miljoen graden valt op, als je tenminste leert kijken.

Welke fouten erin kwamen, stelde de AI voor, met een uitleg waarom. Die uitleg lees ik kritisch, want het is een didactische keuze: de fout moet iets leren over hoe je een dashboard leest, en niet alleen lastig zijn.

## Stap 5: controle, want het klinkt altijd goed

Het wisselen van kantoorgebouw naar fabriek had gevolgen die ik niet direct zag. De dataset en het dashboard waren netjes omgezet, maar het document met de ingebouwde fouten noemde nog het oude gebouw en de oude controlewaarden. Een student had dan een antwoord gezocht dat niet meer bestond. De AI die de dataset had gemaakt, meldde het zelf in het logboek, en daarna is het hersteld. Maar het laat zien hoe makkelijk één wijziging ergens anders iets laat staan.

Wat wel goed ging: elke controlewaarde in het antwoordmodel is opnieuw uitgerekend op de dataset zelf, los van het programma dat de data heeft gemaakt. En de AI was eerlijk over wat hij niet kon controleren. Het dashboard is op een Mac gebouwd, en Power BI Desktop draait alleen op Windows. Het openen en nalopen in Power BI doe ik dus zelf. Ook de streefwaarden kwamen met een eerlijke opmerking: voor een deel is er een norm, voor een deel was het een eigen keuze.

Mijn les hieruit: laat de AI altijd opschrijven wat hij heeft aangenomen en wat hij niet heeft getest. Dat lijstje is het belangrijkste deel van de oplevering.

## Stap 6: de beoordeling blijft van jou

De rubric heeft acht criteria, voor elke les een paar, en elk criterium is iets wat je in het ingeleverde bestand kunt aanwijzen. Zijn beide fouten hersteld? Staan de relatie en de datumtabel in het model? Verwijzen de conclusies naar een grafiek? Het is een single point rubric (Fluckiger, 2010): één standaard per criterium, geen oordeel over mooi of lelijk.

De AI heeft de criteria voorgesteld en ik keur ze. Maar of een student voldaan krijgt, beslis ik. Dat hoort bij mijn vak, en dat laat ik niet aan een model over.

## Voor studenten die zelf materiaal maken

Maak je zelf een samenvatting of oefenvragen met AI, dan gelden dezelfde stappen. Bepaal eerst wat je wilt kunnen. Laat AI daarna het werk doen dat veel tijd kost en weinig oplevert, zoals een opzet of een eerste versie. Controleer elk antwoord met je eigen boek of aantekeningen. En kijk na afloop eerlijk wie het denkwerk heeft gedaan. De [labels van Boetje](/leren/human-ai-labels/) helpen om dat te benoemen.

Als ik de oefenset opnieuw zou maken, begin ik met het gebouw. De rest ging sneller dan ik had verwacht, juist omdat het doel vanaf het begin duidelijk was.

> [!lees-ook]
> **Je eigen agentteam: zo begin je, en hier is het bij mij misgegaan**
> Hoe ik met een team van AI-agents werk, welke afspraken daarbij horen en waar het is misgegaan.
> [Lees het artikel](/leren/je-eigen-agentteam/)

> [!tutorial]
> **Bouw je eigen AI-team in ChatGPT**
> Zet in een paar stappen een klein team op: één coördinator en twee rollen die je zelf bedenkt. Jij beslist en keurt alles.
> [Naar de tutorial](/leren/bouw-je-eigen-ai-team/)

## Bronnen

- Fluckiger, J. (2010). Single point rubric: A tool for responsible student self-assessment. *The Delta Kappa Gamma Bulletin, 76*(4), 18–25. https://digitalcommons.unomaha.edu/tedfacpub/5/ (vrij toegankelijk)
- Van Merriënboer, J. J. G., & Kirschner, P. A. (2018). *Ten steps to complex learning: A systematic approach to four-component instructional design* (3rd ed.). Routledge.

---

**Transparantie GenAI.** Een AI-teamlid heeft de eerste versie van dit artikel in mijn schrijfstijl geschreven, op basis van mijn eigen teksten, het logboek van de oefenset en de bronnen hierboven. De oefenset zelf is gemaakt met mijn AI-team. Ik heb onderwerp, opbouw en voorbeelden bepaald en de tekst gecontroleerd voordat hij online ging. Human-AI Agency Label: Creative Director.
Labels-bron: Boetje, J., & Baake, G. (2026). *Nine prototypical human-AI agency patterns* [Figuur]. figshare. https://doi.org/10.6084/m9.figshare.31706884 (CC BY 4.0).
