#!/usr/bin/env python3
"""
Bouwt ai-leerlab.nl: van de bestanden in inhoud/ naar gewone HTML in public/.

    python3 bouw.py            bouwen
    python3 bouw.py --bekijk   bouwen en de site openen op http://localhost:8000

Geen extra software nodig: alleen de Python die op elke Mac staat.
public/ wordt bij elke bouw helemaal opnieuw gemaakt. Pas daar dus nooit iets met de hand aan;
wijzig de bron in inhoud/, sjablonen/ of statisch/ en bouw opnieuw.
"""
import datetime
import html
import json
import os
import re
import shutil
import struct
import sys
import urllib.parse

HIER = os.path.dirname(os.path.abspath(__file__))
INHOUD = os.path.join(HIER, "inhoud")
STATISCH = os.path.join(HIER, "statisch")
SJABLONEN = os.path.join(HIER, "sjablonen")
UIT = os.path.join(HIER, "public")

with open(os.path.join(HIER, "site.json"), encoding="utf-8") as f:
    SITE = json.load(f)
ADRES = SITE["adres"].rstrip("/")          # https://ai-leerlab.nl
MAANDEN = ["januari", "februari", "maart", "april", "mei", "juni", "juli",
           "augustus", "september", "oktober", "november", "december"]
SOORTEN = {  # soort -> (label, meervoud, actietekst)
    "uitleg": ("Uitleg", "Uitleg", "Lees het artikel"),
    "tutorial": ("Tutorial", "Tutorials", "Open de tutorial"),
    "tool": ("Tool", "Tools", "Probeer de tool"),
    "verhaal": ("Verhaal", "Verhalen", "Lees het verhaal"),
}
MAANDEN_KORT = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
WEEKDAGEN = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]
# Categorieën en onderwerpen staan in site.json (één plek, ook voor de contentkalender).
CATEGORIEEN = {c["slug"]: c for c in SITE.get("categorieen", [])}
ONDERWERPEN = list(SITE.get("onderwerpen", []))
MAX_TAGS = 3
CAT_LIJST_MAX = 3          # per categorieblok op de beginpagina: naast de grote kaart hooguit zoveel in de lijst
NIEUW_DAGEN = 7            # "Nieuw" staat er zeven dagen: op de publicatiedag en de zes dagen daarna (Frits, 01-10-2026)
ONDERWERP_DREMPEL = 3      # een eigen pagina /onderwerp/<tag>/ pas vanaf zoveel artikelen
WAARSCHUWINGEN = []


def let_op(tekst):
    WAARSCHUWINGEN.append(tekst)


# ---------------------------------------------------------------- iconen
def icoon(naam, klasse=""):
    paden = {
        "tutorial": '<path d="M4 6h2M4 12h2M4 18h2M10 6h10M10 12h10M10 18h10"/>',
        "tool": '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
        "uitleg": '<path d="M4 5h5a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H4zM20 5h-5a3 3 0 0 0-3 3v11a2 2 0 0 1 2-2h6z"/>',
        "pijl": '<path d="M5 12h14M13 6l6 6-6 6"/>',
        "voor": '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 0 1 0 6M21 20c0-2.6-1.6-4.8-4-5.6"/>',
        "klok": '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
        "scherm": '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
        "download": '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
        "verhaal": '<path d="M5 5h14v10h-8l-4 4v-4H5z"/>',
        "serie": '<path d="M8 3h12v14M5 6h12v15H5z"/>',
        # Profielen in de voet: lijntekeningen in dezelfde stijl als de andere iconen, geen gevulde merklogo's.
        "linkedin": '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 11v6M8 7.5v.01M12 17v-6M12 13.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V17"/>',
        "instagram": '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5v.01"/>',
        # Delen onder een item (03-10-2026): dezelfde lijnstijl als de profielen in de voet.
        "mail": '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/>',
        "link": '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
        "pijl-terug": '<path d="M19 12H5M11 6l-6 6 6 6"/>',
        # Nieuw: een kiemplantje, twee blaadjes in mos met een lijn in inkt.
        "nieuw": '<path d="M12 21v-8"/><path class="blad" d="M12 14C7.6 14 5 11.4 5 7c4.4 0 7 2.6 7 7z"/>'
                 '<path class="blad" d="M12 12c0-4.2 2.4-6.8 7-6.8 0 4.2-2.4 6.8-7 6.8z"/>',
    }
    k = f' class="{klasse}"' if klasse else ""
    return f'<svg{k} viewBox="0 0 24 24" aria-hidden="true">{paden[naam]}</svg>'


# ---------------------------------------------------------------- hulpjes
def esc(t):
    return html.escape(str(t), quote=True)


def datum_nl(d):
    return f"{d.day} {MAANDEN[d.month - 1]} {d.year}"


def datum_kort(d):
    """Korte datum op een kaart: "1 okt 2026"."""
    return f"{d.day} {MAANDEN_KORT[d.month - 1]} {d.year}"


def is_nieuw(item, vandaag=None):
    """Nieuw tot en met de zesde dag na de publicatiedatum. De site wordt elke ochtend opnieuw gebouwd
    (GitHub Action), dus het teken verdwijnt vanzelf, ook als er niets nieuws verschijnt."""
    vandaag = vandaag or datetime.date.today()
    return 0 <= (vandaag - item.datum).days < NIEUW_DAGEN


def lees_datum(t):
    return datetime.date.fromisoformat(str(t).strip())


def slugify(t):
    t = t.lower()
    for a, b in (("ë", "e"), ("é", "e"), ("è", "e"), ("ï", "i"), ("ö", "o"), ("ü", "u"), ("á", "a")):
        t = t.replace(a, b)
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
    return t


def voor_tekst(voor):
    namen = {"studenten": "studenten", "docenten": "docenten", "student": "studenten", "docent": "docenten"}
    v = [namen.get(x, x) for x in voor]
    if not v:
        return ""
    return "Voor " + (" en ".join(v) if len(v) <= 2 else ", ".join(v[:-1]) + " en " + v[-1])


def voor_kort(voor):
    """Korte vorm van voor wie, voor een smalle kaart: "Studenten en docenten" zonder "Voor"."""
    t = voor_tekst(voor)
    return t[5].upper() + t[6:] if t.startswith("Voor ") and " en " in t else t


# De voetregel van een kaart staat op één regel (Frits, 01-10-2026). Hij toont de lange vorm (volledige
# serienaam, "Voor studenten en docenten") en wisselt naar de korte vorm als de kaart te smal is. Dat doet
# een container query op de kaart; het script schat hier per regel de breedte waaronder dat moet.
# Tekenbreedte bij 16px Roboto Flex: ongeveer 7,7px (400) en 8,1px (500). Plus 28px voor het Nieuw-icoon.
DREMPELS = range(200, 421, 20)     # moet gelijk lopen met de @container-regels in site.css
KAART_SMALST = 230                 # smalste kaart (telefoon van 320px), tekstbreedte in px


def voet_breedte(tekst, vet=False):
    return len(tekst) * (8.1 if vet else 7.7) + 28


def voet_html(item, lang, kort, vet=False, nieuw=False):
    """Voetregel van een kaart: tekst links (lang en kort), Nieuw-icoon rechts. Geeft (html, klasse)."""
    klasse = ""
    if kort and kort != lang:
        nodig = voet_breedte(lang, vet) + 8
        drempel = next((d for d in DREMPELS if d >= nodig), None)
        if drempel is None:
            klasse = " altijd-kort"            # te lang voor elke kaart: altijd de korte vorm
        elif nodig > KAART_SMALST:
            klasse = f" past-{drempel}"        # lang vanaf deze breedte, daaronder kort
        tekst = f'<span class="v-lang">{esc(lang)}</span><span class="v-kort">{esc(kort)}</span>'
    else:
        tekst = esc(lang)
        kort = lang
    if voet_breedte(kort, vet) > KAART_SMALST:
        waar = f"series/{item.serie}.md: kaartnaam" if item.is_deel else os.path.basename(item.pad)
        let_op(f"{waar}: '{kort}' past op een smalle kaart niet op één regel")
    span = f'<span class="v-tekst{" serie-voet" if vet else ""}">{tekst}</span>' if lang else ""
    return f'<p class="voor">{span}{NIEUW_ICOON if nieuw else ""}</p>', klasse


def beeldmaat(pad):
    """Breedte en hoogte van een PNG of WebP, zonder extra software."""
    with open(pad, "rb") as f:
        kop = f.read(40)
    if kop[:8] == b"\x89PNG\r\n\x1a\n":
        return struct.unpack(">II", kop[16:24])
    if kop[:4] == b"RIFF" and kop[8:12] == b"WEBP":
        soort = kop[12:16]
        if soort == b"VP8X":
            w = 1 + int.from_bytes(kop[24:27], "little")
            h = 1 + int.from_bytes(kop[27:30], "little")
            return w, h
        if soort == b"VP8L":
            b = kop[21:25]
            w = 1 + (((b[1] & 0x3F) << 8) | b[0])
            h = 1 + (((b[3] & 0xF) << 10) | (b[2] << 2) | ((b[1] & 0xC0) >> 6))
            return w, h
        if soort == b"VP8 ":
            w, h = struct.unpack("<HH", kop[26:30])
            return w & 0x3FFF, h & 0x3FFF
    return None


def avatar(naam):
    """Geeft (url, breedte, hoogte) van een avatar uit statisch/assets/img/avatars/."""
    for ext in ("webp", "png"):
        p = os.path.join(STATISCH, "assets", "img", "avatars", f"{naam}.{ext}")
        if os.path.exists(p):
            w, h = beeldmaat(p)
            return f"/assets/img/avatars/{naam}.{ext}", w, h
    let_op(f"avatar '{naam}' niet gevonden in statisch/assets/img/avatars/")
    return None


# ---------------------------------------------------------------- bestanden lezen
def lees_bestand(pad):
    """Leest een bestand met een kopje tussen twee regels '---' (frontmatter)."""
    with open(pad, encoding="utf-8") as f:
        tekst = f.read().replace("\r\n", "\n")
    meta = {}
    if tekst.startswith("---\n"):
        eind = tekst.index("\n---\n", 4)
        for regel in tekst[4:eind].split("\n"):
            if ":" in regel and not regel.strip().startswith("#"):
                k, v = regel.split(":", 1)
                meta[k.strip()] = v.strip()
        tekst = tekst[eind + 5:]
    return meta, tekst


# ---------------------------------------------------------------- markdown
def inline(t):
    """Opmaak binnen een regel: `code`, [links](url), losse https-adressen, **vet**, *cursief*."""
    bewaard = []

    def bewaar(h):
        bewaard.append(h)
        return f"\x00{len(bewaard) - 1}\x00"

    t = re.sub(r"`([^`]+)`", lambda m: bewaar(f"<code>{esc(m.group(1))}</code>"), t)
    t = re.sub(r"!\[([^\]]*)\]\(([^)\s]+)\)",
               lambda m: bewaar(f'<img src="{esc(m.group(2))}" alt="{esc(m.group(1))}" loading="lazy">'), t)
    t = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)",
               lambda m: bewaar(f'<a href="{esc(m.group(2))}">{inline(m.group(1))}</a>'), t)
    t = re.sub(r"(?<![\"'(=])(https?://[^\s<)]+[^\s<).,;:])",
               lambda m: bewaar(f'<a href="{esc(m.group(1))}">{esc(m.group(1))}</a>'), t)
    t = esc(t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", t)
    t = re.sub(r"(?<![\w])_(?!\s)(.+?)(?<!\s)_(?![\w])", r"<em>\1</em>", t)
    return re.sub(r"\x00(\d+)\x00", lambda m: bewaard[int(m.group(1))], t)


def markdown(tekst, verwijzing=None):
    """Kleine Markdown-omzetter voor wat de artikelen gebruiken.
    verwijzing(soort, regels) maakt van een blok '> [!tutorial]' een verwijsblok."""
    regels = tekst.split("\n")
    uit, i = [], 0
    while i < len(regels):
        r = regels[i]
        if not r.strip():
            i += 1
            continue
        if r.startswith("```"):
            j = i + 1
            while j < len(regels) and not regels[j].startswith("```"):
                j += 1
            uit.append("<pre><code>" + esc("\n".join(regels[i + 1:j])) + "</code></pre>")
            i = j + 1
            continue
        m = re.match(r"^(#{1,6})\s+(.*)$", r)
        if m:
            n, kop = len(m.group(1)), m.group(2).strip()
            eigen = re.search(r"\s*\{#([\w-]+)\}$", kop)   # '## Kop {#anker}' geeft een eigen anker
            anker = eigen.group(1) if eigen else slugify(kop)
            kop = kop[:eigen.start()] if eigen else kop
            uit.append(f'<h{n} id="{anker}">{inline(kop)}</h{n}>')
            i += 1
            continue
        if re.match(r"^(-{3,}|\*{3,})\s*$", r):
            uit.append("<hr>")
            i += 1
            continue
        if r.startswith(">"):
            blok = []
            while i < len(regels) and regels[i].startswith(">"):
                blok.append(re.sub(r"^>\s?", "", regels[i]))
                i += 1
            m = re.match(r"^\[!([a-z-]+)\]\s*(.*)$", blok[0].strip())
            if m and m.group(1) in BESTURINGSSYSTEMEN:
                # Twee os-blokken direct onder elkaar worden één paar: verzamel ze in een lijst.
                h = os_blok(m.group(1), m.group(2), "\n".join(blok[1:]))
                if uit and isinstance(uit[-1], list):
                    uit[-1].append(h)
                else:
                    uit.append([h])
            elif m and verwijzing:
                uit.append(verwijzing(m.group(1), [m.group(2)] + blok[1:]))
            else:
                uit.append("<blockquote>" + markdown("\n".join(blok)) + "</blockquote>")
            continue
        if re.match(r"^\s*([-*+]|\d+\.)\s+", r):
            geordend = bool(re.match(r"^\s*\d+\.", r))
            # Een genummerde lijst die na een codeblok verdergaat, telt door: '2.' geeft <ol start="2">.
            begin = int(re.match(r"^\s*(\d+)\.", r).group(1)) if geordend else 1
            items = []
            while i < len(regels) and regels[i].strip() and not regels[i].startswith("```"):
                m = re.match(r"^\s*([-*+]|\d+\.)\s+(.*)$", regels[i])
                if m:
                    items.append(m.group(2))
                elif items:
                    items[-1] += " " + regels[i].strip()
                i += 1
            tag = "ol" if geordend else "ul"
            start = f' start="{begin}"' if geordend and begin != 1 else ""
            uit.append(f"<{tag}{start}>" + "".join(f"<li>{inline(x)}</li>" for x in items) + f"</{tag}>")
            continue
        alinea = []
        while i < len(regels) and regels[i].strip() and not re.match(r"^(#{1,6}\s|>|```|\s*([-*+]|\d+\.)\s+)", regels[i]):
            alinea.append(regels[i].strip())
            i += 1
        uit.append("<p>" + inline(" ".join(alinea)) + "</p>")
    return "\n".join(
        (x[0] if len(x) == 1 else '<div class="os-paar">\n' + "\n".join(x) + "\n</div>")
        if isinstance(x, list) else x for x in uit)


# Instructies per besturingssysteem: '> [!mac] Titel' en '> [!windows] Titel' worden een uitklap,
# standaard dicht. Naam en icoon samen zijn het signaal, niet de kleur.
BESTURINGSSYSTEMEN = {
    "mac": ("Mac", '<path d="M9 9V6.5A2.5 2.5 0 1 0 6.5 9H9zm0 0h6m-6 0v6m6-6V6.5A2.5 2.5 0 1 1 17.5 9H15zm0 0v6m0 0H9m6 0v2.5a2.5 2.5 0 1 0 2.5-2.5H15zm-6 0v2.5A2.5 2.5 0 1 1 6.5 15H9z"/>'),
    "windows": ("Windows", '<rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M12 4v16M4 12h16"/>'),
}


def os_blok(soort, titel, tekst):
    naam, pad = BESTURINGSSYSTEMEN[soort]
    if not titel.strip():
        let_op(f"blok [!{soort}] zonder titel: zet de titel achter [!{soort}] op dezelfde regel")
    titel_html = f'<span class="os-titel">{inline(titel.strip())}</span>' if titel.strip() else ""
    return f"""<details class="os os-{soort}">
  <summary><span class="os-teken" aria-hidden="true"><svg viewBox="0 0 24 24">{pad}</svg></span><span class="os-naam">{naam}<span class="sr">: </span></span>{titel_html}</summary>
  <div class="os-inhoud">
{markdown(tekst)}
  </div>
</details>"""


# ---------------------------------------------------------------- items
class Item:
    """Eén pagina onder /leren/ (of later /tools/): een artikel, tutorial of tool."""

    def __init__(self, pad, map_):
        self.pad = pad
        self.meta, self.tekst = lees_bestand(pad)
        naam, ext = os.path.splitext(os.path.basename(pad))
        self.slug = self.meta.get("adres", naam)
        self.vorm = "html" if ext == ".html" else "md"
        m = self.meta
        self.concept = m.get("status", "live").lower() == "concept"
        self.url = f"/test/{self.slug}/" if self.concept else f"/{map_}/{self.slug}/"
        self.soort = m.get("soort", "uitleg")
        self.voor = [x.strip() for x in m.get("voor", "").split(",") if x.strip()]
        self.datum = lees_datum(m["datum"]) if m.get("datum") else datetime.date.today()
        self.bijgewerkt = lees_datum(m["bijgewerkt"]) if m.get("bijgewerkt") else self.datum
        self.avatar = m.get("avatar", "")
        # uitgelicht: ja        -> groot bovenaan de beginpagina
        # uitgelicht: categorie -> de grote kaart in het blok van zijn categorie op de beginpagina (Frits, 02-10-2026)
        u = m.get("uitgelicht", "").strip().lower()
        self.uitgelicht = u in ("ja", "yes", "true")
        self.uitgelicht_categorie = u == "categorie"
        # Categorie (slug uit site.json), onderwerpen (tags) en een plek in een serie.
        cat = m.get("categorie", "").strip()
        self.categorie = next((c for c in CATEGORIEEN if cat.lower() in (c, CATEGORIEEN[c]["naam"].lower())), cat)
        self.tags = [t.strip().lower() for t in m.get("tags", "").split(",") if t.strip()]
        self.serie = m.get("serie", "").strip()
        self.deel = None
        if m.get("deel", "").strip():
            try:
                self.deel = int(m["deel"])
            except ValueError:
                let_op(f"{os.path.basename(pad)}: deel '{m['deel']}' is geen getal")
        self.map = map_
        self.titel = m.get("titel", "")
        self.transparantie = m.get("transparantie", "")
        if self.vorm == "md":
            self._lees_markdown()
        self.seotitel = m.get("seotitel", self.titel)
        self.beschrijving = m.get("beschrijving", "")
        self.kaarttekst = m.get("kaarttekst", self.beschrijving)
        self.lede = m.get("lede", "")
        if not self.titel:
            let_op(f"{os.path.basename(pad)}: geen titel")
        if not self.beschrijving:
            let_op(f"{os.path.basename(pad)}: geen beschrijving (meta description)")
        if len(self.seotitel) + len(" · AI-leerlab") > 65:
            let_op(f"{os.path.basename(pad)}: seotitel is lang ({len(self.seotitel)} tekens), Google kort hem af")
        if len(self.beschrijving) > 160:
            let_op(f"{os.path.basename(pad)}: beschrijving is lang ({len(self.beschrijving)} tekens)")

    def _lees_markdown(self):
        t = self.tekst.strip("\n")
        m = re.match(r"^#\s+(.+)\n", t)
        if m:
            self.titel = self.titel or m.group(1).strip()
            t = t[m.end():].lstrip("\n")
        # Een losse regel "Frits Coers, docent bij Windesheim" direct onder de titel valt weg: Frits is de
        # enige auteur, dus de naam boven elk artikel zegt niets (Frits, 01-10-2026). Hij blijft author in
        # schema.org. Alleen precies op die plek en alleen een korte regel; een alinea die met zijn naam
        # begint, blijft staan.
        eerste = t.split("\n\n", 1)
        if re.fullmatch(r"Frits Coers(,[^\n]{0,80})?", eerste[0].strip()):
            t = eerste[1] if len(eerste) > 1 else ""
        # De GenAI-vermelding onderaan (na de laatste '---') gaat naar een eigen blok.
        delen = re.split(r"\n-{3,}\s*\n", t)
        if len(delen) > 1 and "Transparantie" in delen[-1]:
            self.transparantie = delen[-1].strip()
            t = "\n---\n".join(delen[:-1])
        self.tekst = t
        self.woorden = len(re.findall(r"\w+", t))

    @property
    def soortlabel(self):
        return SOORTEN.get(self.soort, (self.soort.capitalize(),))[0]

    @property
    def is_deel(self):
        """Een deel van een zichtbare serie (een serie verschijnt pas met één gepubliceerd deel)."""
        return bool(self.serie and self.deel and self.serie in STAAT["series"])

    @property
    def categorie_info(self):
        return CATEGORIEEN.get(self.categorie)


# Wat er zichtbaar is, berekend in bouw(): alleen series met een gepubliceerd deel, categorieën
# met artikelen en onderwerpen vanaf ONDERWERP_DREMPEL artikelen krijgen een pagina en een link.
STAAT = {"series": {}, "categorieen": {}, "onderwerpen": {}, "tools": []}
GEPLAND = []   # artikelen met een datum in de toekomst: nog niet op de site, wel nodig voor "Deel 6 verschijnt op ..."


def lees_items():
    items = []
    GEPLAND.clear()
    for map_ in ("leren", "tools"):
        d = os.path.join(INHOUD, map_)
        if not os.path.isdir(d):
            continue
        for naam in sorted(os.listdir(d)):
            if naam.startswith((".", "_")) or not naam.endswith((".md", ".html")):
                continue
            item = Item(os.path.join(d, naam), map_)
            # Gepland publiceren: een artikel met een datum in de toekomst gaat pas op die dag
            # online. De GitHub Action bouwt elke ochtend (zie README, "Gepland publiceren").
            if item.datum > datetime.date.today() and not item.concept:
                GEPLAND.append(item)
                continue
            items.append(item)
    return items


# ---------------------------------------------------------------- series
class Serie:
    """Een serie: inhoud/series/<naam>.md met een kopje en de tekst voor "Over deze serie".
    De delen zijn gewone artikelen met 'serie: <naam>' en 'deel: <nummer>' in hun kopje."""

    def __init__(self, pad):
        self.pad = pad
        self.meta, tekst = lees_bestand(pad)
        m = self.meta
        self.slug = os.path.splitext(os.path.basename(pad))[0]
        self.url = f"/series/{self.slug}/"
        self.titel = m.get("titel", self.slug.capitalize())
        self.seotitel = m.get("seotitel", self.titel)
        self.beschrijving = m.get("beschrijving", "")
        self.lede = m.get("lede", self.beschrijving)
        self.categorie = m.get("categorie", "").strip()
        self.avatar = m.get("avatar", "")
        # Korte naam voor de voetregel van een kaart en het kruimelpad op mobiel. Zonder: de titel.
        self.kaartnaam = m.get("kaartnaam", "").strip() or self.titel
        self.ritme = m.get("ritme", "").strip()          # "elke week"
        self.dag = m.get("dag", "").strip()              # "donderdag", optioneel
        self.lopend = m.get("status", "lopend").strip().lower() != "afgerond"
        self.over = tekst.strip()
        self.delen = []      # gepubliceerd, op volgorde
        self.gepland = []    # datum in de toekomst, op volgorde
        if self.categorie and self.categorie not in CATEGORIEEN:
            let_op(f"series/{self.slug}.md: onbekende categorie '{self.categorie}'")
        if not self.beschrijving:
            let_op(f"series/{self.slug}.md: geen beschrijving (meta description)")

    @property
    def label(self):
        if not self.lopend:
            return "Serie · afgerond"
        return f"Serie · {self.ritme}" if self.ritme else "Serie"

    def buren(self, item):
        """(vorige, volgende, gepland) rond een deel; gepland alleen als er geen volgende uit is."""
        i = self.delen.index(item)
        vorige = self.delen[i - 1] if i > 0 else None
        volgende = self.delen[i + 1] if i + 1 < len(self.delen) else None
        gepland = self.gepland[0] if not volgende and self.gepland and self.lopend else None
        return vorige, volgende, gepland


def lees_series(items):
    """Leest inhoud/series/*.md en hangt de delen eraan. Alleen een serie met minstens één
    gepubliceerd deel komt in STAAT["series"]; de rest blijft onzichtbaar (geen menu, geen sitemap)."""
    alle = {}
    d = os.path.join(INHOUD, "series")
    if os.path.isdir(d):
        for naam in sorted(os.listdir(d)):
            if naam.endswith(".md") and not naam.startswith((".", "_")):
                s = Serie(os.path.join(d, naam))
                alle[s.slug] = s
    for item in items + GEPLAND:
        if item.serie and item.serie not in alle:
            let_op(f"{os.path.basename(item.pad)}: serie '{item.serie}' bestaat niet (geen inhoud/series/{item.serie}.md)")
            continue
        if item.serie and not item.deel:
            let_op(f"{os.path.basename(item.pad)}: serie '{item.serie}' zonder deelnummer (zet 'deel: 1' in het kopje)")
            continue
        if item.deel and not item.serie:
            let_op(f"{os.path.basename(item.pad)}: deel {item.deel} zonder serie")
            continue
        if not item.serie or item.concept:
            continue
        s = alle[item.serie]
        (s.gepland if item in GEPLAND else s.delen).append(item)
    for s in alle.values():
        s.delen.sort(key=lambda x: x.deel)
        s.gepland.sort(key=lambda x: (x.deel, x.datum))
        nummers = [x.deel for x in s.delen + s.gepland]
        for n in sorted(set(nummers)):
            if nummers.count(n) > 1:
                let_op(f"serie '{s.slug}': deel {n} komt twee keer voor")
    return {k: s for k, s in alle.items() if s.delen}


def controleer_kopje(item):
    """Waarschuwingen voor categorie, onderwerpen en de naam van een artikel."""
    naam = os.path.basename(item.pad)
    if item.map != "leren":
        return
    if not item.categorie:
        let_op(f"{naam}: geen categorie (kies uit {', '.join(CATEGORIEEN)})")
    elif item.categorie not in CATEGORIEEN:
        let_op(f"{naam}: onbekende categorie '{item.categorie}' (kies uit {', '.join(CATEGORIEEN)})")
    for t in item.tags:
        if t not in ONDERWERPEN:
            let_op(f"{naam}: onbekend onderwerp '{t}' (de lijst staat in site.json)")
    if len(item.tags) > MAX_TAGS:
        let_op(f"{naam}: {len(item.tags)} onderwerpen, hooguit {MAX_TAGS}")
    if item.slug in CATEGORIEEN:
        let_op(f"{naam}: heet als een categorie; /leren/{item.slug}/ is de categoriepagina. Kies een andere naam")


# ---------------------------------------------------------------- onderdelen
def soort_label(item):
    """Het label boven een kaart of titel: soort, of bij een seriedeel "Deel 3" met het serie-icoon."""
    if item.is_deel:
        return f'{icoon("serie")}<span class="serie-deel">Deel {item.deel}</span>'
    return f"{icoon(item.soort)}{esc(item.soortlabel)}"


# "Nieuw" is een klein icoon rechts in de voetregel, met de tekst voor schermlezers en als tooltip
# (Frits, 01-10-2026: minder nadruk dan het blokje in de labelregel).
NIEUW_ICOON = ('<span class="nieuw-icoon" title="Nieuw">' + icoon("nieuw") + '<span class="sr">Nieuw</span></span>')


def datum_pill(item):
    """De publicatiedatum als kleine pill rechts in de labelregel van een kaart."""
    return f'<time class="datum-pill" datetime="{item.datum.isoformat()}">{datum_kort(item.datum)}</time>'


def kaart_label(item):
    """Labelregel van een kaart. Een seriedeel krijgt alleen "Serie", net als "Uitleg" of "Tutorial";
    het deelnummer staat vóór de titel en de serienaam onderaan (Bram, 01-10-2026)."""
    if item.is_deel:
        return f"{icoon('serie')}Serie"
    return f"{icoon(item.soort)}{esc(item.soortlabel)}"


def titel_html(item):
    """De titel, bij een seriedeel met het nummer ervoor. Een schermlezer leest "Deel 3: titel"."""
    if item.is_deel:
        return f'<span class="nr"><span class="sr">Deel </span>{item.deel}<span class="sr">:</span></span> {esc(item.titel)}'
    return esc(item.titel)


def kaart(item, nieuw=False):
    """Een kaart: labelregel met de datum als pill rechts, titel, uitleg, en onderaan de serienaam of voor
    wie, met rechts het Nieuw-icoon (Frits, 01-10-2026)."""
    if item.is_deel:
        s = STAAT["series"][item.serie]
        voet, klasse = voet_html(item, s.titel, s.kaartnaam, vet=True, nieuw=nieuw)
    else:
        voet, klasse = voet_html(item, voor_tekst(item.voor), voor_kort(item.voor), nieuw=nieuw)
    return f"""<li class="kaart{klasse}">
  <p class="label"><span class="soort">{kaart_label(item)}</span>{datum_pill(item)}</p>
  <h3><a href="{item.url}">{titel_html(item)}</a></h3>
  <p class="uitleg">{esc(item.kaarttekst)}</p>
  {voet}
</li>"""


def raster(items, nieuw=False, kop=""):
    """Kaarten in een raster. Met nieuw=True krijgen items van de afgelopen NIEUW_DAGEN het teken
    (alleen op de beginpagina). kop is het id van een zichtbare kop boven het raster."""
    attr = f' aria-labelledby="{kop}"' if kop else ""
    return f'<ul class="raster"{attr}>\n' + "\n".join(kaart(x, nieuw and is_nieuw(x)) for x in items) + "\n</ul>"


def figuur(naam):
    """Het teamlid in een avatarwaarde: 'job-bouwen' wordt 'job'. De versie (rust, rol, bouwen) telt niet mee."""
    return naam.split("-", 1)[0] if naam else ""


def avatar_schaal(naam, h):
    """Hoe hoog dit bestand is ten opzichte van de rustpose van dezelfde figuur. Een expressie staat op de
    schaal van rust (still 1635 px wordt 560 px), dus blij met opgeheven armen is hoger dan 560. De css
    vermenigvuldigt de vaste hoogte met deze factor, zodat het lijf even groot blijft en niet het bestand
    (Bram, 03-10-2026). Rust en de rol-bestanden van de site zijn 560 hoog en geven 1."""
    rust = os.path.join(STATISCH, "assets", "img", "avatars", f"{figuur(naam)}-rust.webp")
    if not os.path.exists(rust):
        return 1.0
    maat = beeldmaat(rust)
    return h / maat[1] if maat and maat[1] else 1.0


def avatar_img(naam, klasse, hoogte=None):
    a = avatar(naam) if naam else None
    if not a:
        return ""
    url, w, h = a
    schaal = avatar_schaal(naam, h)
    stijl = f' style="--schaal: {schaal:.3f}"' if abs(schaal - 1) > 0.005 else ""
    return f'<img class="{klasse}" src="{url}" width="{w}" height="{h}" alt=""{stijl}>'


def maak_verwijzing(pagina, alle):
    """Maakt de functie die een '> [!tutorial]'-blok omzet in een verwijsblok of 'Lees ook'."""
    per_url = {x.url: x for x in alle}

    def verwijzing(soort, regels):
        regels = [r.strip() for r in regels if r.strip()]
        titel, url, linktekst, uitleg = "", "", "", []
        for r in regels:
            m_link = re.fullmatch(r"\[([^\]]+)\]\(([^)]+)\)", r)
            m_vet = re.fullmatch(r"\*\*(.+)\*\*", r)
            if m_link and not url:
                url, linktekst = m_link.group(2), m_link.group(1)
                if not titel:
                    titel = linktekst
            elif m_vet and not titel:
                titel = m_vet.group(1)
            elif not titel:
                titel = r
            else:
                uitleg.append(r)
        doel = per_url.get(url)
        if not url:
            let_op(f"{os.path.basename(pagina.pad)}: verwijzing '{titel}' heeft geen link")
        elif url.startswith("/") and not doel:
            let_op(f"{os.path.basename(pagina.pad)}: verwijzing naar {url}, maar die pagina bestaat (nog) niet")
        uitleg_html = f"<p>{inline(' '.join(uitleg))}</p>" if uitleg else ""

        if soort == "lees-ook":
            return f"""<nav class="lees-ook" aria-label="Lees ook">
  <p class="label">Lees ook</p>
  <a href="{esc(url)}">{inline(titel)}{icoon("pijl")}</a>
  {uitleg_html}
</nav>"""

        label = SOORTEN.get(soort, (soort.capitalize(),))[0]
        actie = linktekst if linktekst and linktekst != titel else SOORTEN.get(soort, ("", "", "Bekijk"))[2]
        teken = f'<div class="teken" aria-hidden="true">{icoon(soort if soort in SOORTEN else "tool")}</div>'
        # Dubbelcontrole op de figuur, niet op de versie: james-overdragen in de kop en james-rust in het
        # blok is twee keer James (Bram, 03-10-2026). Het teken is uitgesneden op het hoofd van de rust- en
        # rolpose; bij een expressie toont het daarom de rustpose van die figuur.
        if doel and doel.avatar and figuur(doel.avatar) != figuur(pagina.avatar):
            teken_naam = doel.avatar
            if teken_naam.split("-", 1)[-1] not in ("rust", "rol"):
                teken_naam = f"{figuur(teken_naam)}-rust"
            a = avatar(teken_naam)
            if a:
                teken = f'<div class="teken avatar" aria-hidden="true"><img src="{a[0]}" alt=""></div>'
        extra = f" · {esc(doel.meta['duur'])}" if doel and doel.meta.get("duur") else ""
        return f"""<aside class="verwijs" aria-label="{esc(label)}">
  {teken}
  <div>
    <p class="label">{esc(label)}{extra}</p>
    <h3><a href="{esc(url)}">{inline(titel)}</a></h3>
    {uitleg_html}
    <span class="actie" aria-hidden="true">{esc(actie)}{icoon("pijl")}</span>
  </div>
</aside>"""

    return verwijzing


LABELS_URL = "/leren/human-ai-labels/"


def transparantie_html(item):
    """GenAI-vermelding, alleen onder artikelen. Niet op home, /leren/, /over/, 404 of tutorials (Frits, 30-09-2026).

    Component: een zin met het Human-AI Agency Label (link naar het labels-artikel), en de rest
    (wat er met AI is gedaan, de bron van de labels) in een uitklap die standaard dicht is."""
    t = item.transparantie.strip()
    if not t:
        let_op(f"{os.path.basename(item.pad)}: geen GenAI-vermelding (Transparantie GenAI) gevonden")
        return ""
    regels = [r.strip() for r in t.split("\n") if r.strip()]
    if "Agency Label" in t and not any("Labels-bron" in r for r in regels):
        regels.append(SITE["labels_bron"])
    m = re.search(r"Human-AI Agency Label:\s*([^.\n]+?)\s*(?:\.|$)", t, re.M)
    if not m:
        let_op(f"{os.path.basename(item.pad)}: geen Human-AI Agency Label in de GenAI-vermelding")
        label = ""
    else:
        label = m.group(1).strip()
    # Uit de uitklap: het kopje en de labelzin, die staan al in de zin erboven.
    uitleg = []
    for r in regels:
        r = re.sub(r"^\*\*Transparantie GenAI\.\*\*\s*", "", r)
        r = re.sub(r"\s*Human-AI Agency Label:[^.\n]*\.?", "", r).strip()
        if r:
            uitleg.append(f"<p>{inline(r)}</p>")
    if label:
        naam = esc(label) if item.url == LABELS_URL else f'<a href="{LABELS_URL}">{esc(label)}</a>'
        zin = f"Geschreven met hulp van AI · label: {naam}"
    else:
        zin = "Geschreven met hulp van AI"
    return f"""<div class="gemaakt">
  <p class="gemaakt-zin">{zin}</p>
  <details class="gemaakt-meer">
    <summary>Hoe AI is gebruikt</summary>
    {"".join(uitleg)}
  </details>
</div>"""


# ---------------------------------------------------------------- schema.org
PERSOON = {
    "@type": "Person", "@id": f"{ADRES}/#frits", "name": SITE["auteur"],
    "url": f"{ADRES}/over/", "jobTitle": SITE["functie"],
}
if SITE.get("sameAs"):
    PERSOON["sameAs"] = SITE["sameAs"]
if SITE.get("werkgever"):
    PERSOON["worksFor"] = {"@type": "CollegeOrUniversity", "name": SITE["werkgever"]["naam"],
                           "url": SITE["werkgever"]["url"]}
WEBSITE = {"@type": "WebSite", "@id": f"{ADRES}/#site", "name": SITE["naam"], "url": f"{ADRES}/",
           "inLanguage": "nl", "publisher": {"@id": f"{ADRES}/#frits"}}


def kruimelpad(*stappen):
    return {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": n + 1, "name": naam, **({"item": ADRES + url} if url else {})}
        for n, (naam, url) in enumerate(stappen)]}


def jsonld(*delen):
    data = {"@context": "https://schema.org", "@graph": list(delen)}
    return ('<script type="application/ld+json">\n'
            + json.dumps(data, ensure_ascii=False, indent=1).replace("</", "<\\/")
            + "\n</script>")


# ---------------------------------------------------------------- pagina's
with open(os.path.join(SJABLONEN, "basis.html"), encoding="utf-8") as f:
    BASIS = f.read()


def deelbeeld(slug):
    p = os.path.join(STATISCH, "assets", "img", "deel", f"{slug}.png")
    return f"/assets/img/deel/{slug}.png" if os.path.exists(p) else "/assets/img/deel/ai-leerlab.png"


# Profielen van Frits als icoon in de voet. Bron: sameAs in site.json; een nieuw adres daar verschijnt vanzelf.
PROFIELEN = (("linkedin.com", "linkedin", "Frits Coers op LinkedIn"), ("instagram.com", "instagram", "AI-leerlab op Instagram"))


def voet_profielen():
    links = []
    for domein, naam, label in PROFIELEN:
        url = next((u for u in SITE.get("sameAs", []) if domein in u), "")
        if url:
            links.append(f'<a class="profiel" href="{esc(url)}" aria-label="{label}">{icoon(naam)}</a>')
    return ("\n        " + "".join(links)) if links else ""


def pagina(pad, *, titel, beschrijving, inhoud, url, menu="", ogtype="website", deel="/assets/img/deel/ai-leerlab.png",
           schema="", noindex=False, extra_kop="", extra_voet="", hoofd_titel=None):
    volle_titel = hoofd_titel or f"{titel} · {SITE['naam']}"
    # Series staat pas in het menu als er een serie met een gepubliceerd deel is.
    huidig = ' aria-current="page"' if menu == "series" else ""
    menu_series = f'\n        <a href="/series/"{huidig}>Series</a>' if STAAT["series"] else ""
    # Tools staat pas in het menu als er een live tool is.
    huidig_t = ' aria-current="page"' if menu == "tools" else ""
    menu_tools = f'\n        <a href="/tools/"{huidig_t}>Tools</a>' if STAAT["tools"] else ""
    voet_tools = '\n        <a href="/tools/">Tools</a>' if STAAT["tools"] else ""
    voet_series = '\n        <a href="/series/">Series</a>' if STAAT["series"] else ""
    vervang = {
        "titel": esc(volle_titel),
        "ogtitel": esc(titel),
        "beschrijving": esc(beschrijving),
        "canonical": ADRES + url,
        "robots": '<meta name="robots" content="noindex, nofollow">' if noindex else "",
        "ogtype": ogtype,
        "deelafbeelding": ADRES + deel,
        "schema": schema,
        # De feed van de hele site op elke pagina, zodat een feedlezer hem vindt met alleen ai-leerlab.nl.
        "extra_kop": f'<link rel="alternate" type="application/rss+xml" title="{esc(SITE["naam"])}" href="{FEED}">'
                     + (f"\n  {extra_kop}" if extra_kop else ""),
        "extra_voet": extra_voet,
        "inhoud": inhoud,
        "menu_leren": ' aria-current="page"' if menu == "leren" else "",
        "menu_series": menu_series,
        "menu_tools": menu_tools,
        "voet_tools": voet_tools,
        "voet_series": voet_series,
        "voet_profielen": voet_profielen(),
        "menu_over": ' aria-current="page"' if menu == "over" else "",
        "jaar": str(datetime.date.today().year),
        "versie": VERSIE,
        # Statistieken (Google Analytics, alleen na toestemming) op elke pagina behalve noindex: /test/ en de 404.
        "statistieken": "" if noindex or not SITE.get("analytics") else
            f'\n  <script src="/assets/toestemming.js?v={VERSIE}" data-meet-id="{esc(SITE["analytics"])}" defer></script>',
        "voet_cookies": "" if noindex or not SITE.get("analytics") else
            '\n        <a href="/over/#colofon" data-cookie-instellingen>Cookie-instellingen</a>',
    }
    tekst = re.sub(r"\{\{\s*(\w+)\s*\}\}", lambda m: vervang[m.group(1)], BASIS)
    doel = os.path.join(UIT, pad.strip("/"), "index.html") if not pad.endswith(".html") else os.path.join(UIT, pad.strip("/"))
    os.makedirs(os.path.dirname(doel), exist_ok=True)
    with open(doel, "w", encoding="utf-8") as f:
        f.write(tekst)


def kruimel_html(*stappen):
    """Het zichtbare kruimelpad: stappen zijn (naam, url) of (naam, url, korte naam). De beginpagina staat er
    niet in, want het logo gaat daarheen (Frits, 01-10-2026); in het BreadcrumbList-schema wel. Een korte naam
    vervangt de lange op mobiel, zodat het pad op één regel past. Zonder stappen: geen kruimelpad."""
    if not stappen:
        return ""
    sep = '<span class="sep" aria-hidden="true">/</span>'

    def naam(stap):
        if len(stap) > 2 and stap[2] and stap[2] != stap[0]:
            return f'<span class="lang">{esc(stap[0])}</span><span class="kort">{esc(stap[2])}</span>'
        return esc(stap[0])
    return ('<nav aria-label="Kruimelpad"><p class="kruimel">'
            + sep.join(f'<a href="{s[1]}">{naam(s)}</a>' for s in stappen) + "</p></nav>")


def item_stappen(item):
    """Het kruimelpad boven een item: (naam, url) per stap, zonder het item zelf."""
    if item.is_deel:
        s = STAAT["series"][item.serie]
        return [("Series", "/series/"), (s.titel, s.url, s.kaartnaam)]
    if item.map == "tools" and not item.concept:
        return [("Tools", "/tools/")]
    stappen = [("Leren", "/leren/")]
    c = item.categorie_info
    if c and not item.concept and c["slug"] in STAAT["categorieen"]:
        stappen.append((c["naam"], f"/leren/{c['slug']}/"))
    return stappen


def item_kruimelpad_schema(item):
    stappen = [("AI-leerlab", "/")] + [(s[0], s[1]) for s in item_stappen(item)]
    return kruimelpad(*stappen, (item.titel, None))


def item_kop(item, lede_html="", feiten_extra=()):
    feiten = []
    if item.voor:
        feiten.append(f'<li>{icoon("voor")}{esc(voor_tekst(item.voor))}</li>')
    for icon, tekst in feiten_extra:
        feiten.append(f"<li>{icoon(icon)}{esc(tekst)}</li>")
    datumtekst = (f"Bijgewerkt {datum_nl(item.bijgewerkt)}" if item.bijgewerkt != item.datum
                  else datum_nl(item.datum))
    feiten.append(f'<li>{icoon("klok")}<time datetime="{item.bijgewerkt.isoformat()}">{datumtekst}</time></li>')
    a = avatar_img(item.avatar, "")
    klasse = "item-kop met-avatar labpapier" if a else "item-kop labpapier"
    return f"""<section class="{klasse}" aria-labelledby="titel">
  <div class="wrap">
    <div class="tekst">
      {kruimel_html(*item_stappen(item))}
      <p class="label">{soort_label(item)}</p>
      <h1 id="titel">{esc(item.titel)}</h1>
      {lede_html}
      <ul class="feiten">{"".join(feiten)}</ul>
    </div>
    <div class="kop-avatar">{a}</div>
  </div>
</section>"""


def onderwerpen_html(item):
    """De onderwerpen onder een item. Een link alleen als het onderwerp een eigen pagina heeft,
    en nooit op een seriedeel: daar is de serienavigatie het enige blok met links."""
    tags = [t for t in item.tags if t in ONDERWERPEN]
    if not tags:
        return ""
    delen = []
    for t in tags:
        if t in STAAT["onderwerpen"] and not item.is_deel and not item.concept:
            delen.append(f'<a href="/onderwerp/{t}/">{esc(t)}</a>')
        else:
            delen.append(f"<span>{esc(t)}</span>")
    return f'<p class="onderwerpen"><span class="label">Onderwerpen</span>{"".join(delen)}</p>'


DELEN_JS = "/assets/delen.js"


DEELKNOPPEN = "<!--deelknoppen-->"   # markering in een tool: daar komt de deelrij (bij de uitslag)


def live_url(item):
    """Het adres dat het item heeft zodra het live staat, ook als het nu nog een concept is."""
    return f"/{item.map}/{item.slug}/"


def delen_html(item, altijd=False):
    """Delen onder een artikel, tutorial of seriedeel: LinkedIn, mail en link kopiëren (03-10-2026).
    LinkedIn en mail zijn gewone links: geen scripts of knoppen van derden, geen trackers.
    Link kopiëren staat er alleen met JavaScript: de knop is hidden tot delen.js hem toont.
    Niet op een concept: een adres onder /test/ deel je niet. Uitzondering (altijd=True): een tool met de
    markering DEELKNOPPEN, zodat Frits de knoppen bij de uitslag al in de testversie ziet; die delen het live adres."""
    if item.concept and not altijd:
        return ""
    url = ADRES + live_url(item)
    q = urllib.parse.quote
    linkedin = "https://www.linkedin.com/sharing/share-offsite/?url=" + q(url, safe="")
    mail = f"mailto:?subject={q(item.titel)}&body={q(item.titel + chr(10) + chr(10) + url)}"
    return f"""<div class="deelrij" role="group" aria-label="Deel deze pagina">
      <span class="label" aria-hidden="true">Delen</span>
      <a class="deelknop" href="{esc(linkedin)}" target="_blank" rel="noopener" aria-label="Delen op LinkedIn (opent in een nieuw tabblad)">{icoon("linkedin")}</a>
      <a class="deelknop" href="{esc(mail)}" aria-label="Delen per mail">{icoon("mail")}</a>
      <button class="deelknop" type="button" data-kopieer="{esc(url)}" aria-label="Link kopiëren" hidden>{icoon("link")}</button>
      <span class="gekopieerd" role="status" aria-live="polite"></span>
    </div>"""


def delen_script(item, altijd=False):
    return "" if item.concept and not altijd else f'<script src="{DELEN_JS}?v={VERSIE}" defer></script>'


def dag_nl(d):
    """'donderdag 12 november', met het jaar erbij als dat niet dit jaar is."""
    t = f"{WEEKDAGEN[d.weekday()]} {d.day} {MAANDEN[d.month - 1]}"
    return t if d.year == datetime.date.today().year else f"{t} {d.year}"


def serie_nav_html(item):
    """Serienavigatie onder een deel: vorige en volgende naast elkaar, en een link naar alle delen.
    Is het volgende deel gepland, dan de datum in een kaart met stippelrand, zonder link."""
    if not item.is_deel or item.concept:
        return ""
    s = STAAT["series"][item.serie]
    vorige, volgende, gepland = s.buren(item)
    links = rechts = "<span></span>"
    if vorige:
        links = f"""<a class="stap vorige" href="{vorige.url}">
            <span class="richting">{icoon("pijl-terug")}Deel {vorige.deel}</span>
            <span class="titel">{esc(vorige.titel)}</span>
          </a>"""
    if volgende:
        rechts = f"""<a class="stap volgende" href="{volgende.url}">
            <span class="richting">Deel {volgende.deel}{icoon("pijl")}</span>
            <span class="titel">{esc(volgende.titel)}</span>
          </a>"""
    elif gepland:
        rechts = f"""<div class="stap volgende nog-niet">
            <span class="richting">Deel {gepland.deel}</span>
            <span class="titel">Verschijnt op {dag_nl(gepland.datum)}</span>
          </div>"""
    return f"""<nav class="serie-nav" aria-label="Andere delen van deze serie">
        <p class="label">Serie · <a href="{s.url}">{esc(s.titel)}</a></p>
        <div class="paar">
          {links}
          {rechts}
        </div>
        <a class="tekstlink alle" href="{s.url}">Alle delen van deze serie</a>
      </nav>"""


def verder(item, alle):
    """Verder lezen, alleen onder een artikel zonder eigen verwijzing naar een ander item.
    Volgorde: eerst artikelen met dezelfde onderwerpen, dan dezelfde categorie, dan de nieuwste.
    Niet op een seriedeel, en geen seriedelen in de lijst (Bram, 01-10-2026)."""
    if item.is_deel or item.vorm != "md":
        return ""   # tutorials en tools: de focus blijft op het item zelf (Frits, 01-10-2026)
    # Alleen als het artikel zelf nergens naar een ander item verwijst (Frits, 01-10-2026):
    # een verwijsblok of een gewone link in de tekst is genoeg, dan geen tweede blok onderaan.
    if re.search(r"^>\s*\[!(tutorial|tool|lees-ook)\]", item.tekst, re.M):
        return ""
    if any(f"]({x.url}" in item.tekst for x in alle if x is not item):
        return ""
    kandidaten = [x for x in alle if x is not item and not x.concept and not x.is_deel]

    def score(x):
        gedeeld = len(set(x.tags) & set(item.tags))
        return (gedeeld, x.categorie == item.categorie and bool(item.categorie), x.datum)

    anderen = sorted(kandidaten, key=score, reverse=True)[:3]
    if not anderen:
        return ""
    return f"""<section class="verder" aria-labelledby="verder-titel">
  <h2 id="verder-titel">Verder in het lab</h2>
  {raster(anderen)}
</section>"""


def schema_extra(item):
    """articleSection en keywords; op een deel isPartOf de serie met position."""
    extra = {}
    if item.categorie_info:
        extra["articleSection"] = item.categorie_info["naam"]
    if item.tags:
        extra["keywords"] = ", ".join(item.tags)
    deel_van = [{"@id": f"{ADRES}/#site"}]
    if item.is_deel:
        s = STAAT["series"][item.serie]
        deel_van.append({"@type": "CreativeWorkSeries", "@id": f"{ADRES}{s.url}#serie", "name": s.titel,
                         "url": ADRES + s.url})
        extra["position"] = item.deel
    extra["isPartOf"] = deel_van if len(deel_van) > 1 else deel_van[0]
    return extra


def bouw_artikel(item, alle):
    lijf = markdown(item.tekst, maak_verwijzing(item, alle))
    minuten = max(1, round(item.woorden / 220))
    inhoud = f"""{item_kop(item, feiten_extra=[("uitleg", f"{minuten} minuten lezen")])}
<div class="wrap">
  <article class="artikel">
    {lijf}
    {onderwerpen_html(item)}
    {delen_html(item)}
    {serie_nav_html(item)}
    {transparantie_html(item)}
  </article>
  {verder(item, alle)}
</div>"""
    schema = jsonld(
        {"@type": "Article", "headline": item.titel, "description": item.beschrijving,
         "inLanguage": "nl", "datePublished": item.datum.isoformat(), "dateModified": item.bijgewerkt.isoformat(),
         "author": {"@id": f"{ADRES}/#frits"}, "publisher": {"@id": f"{ADRES}/#frits"},
         "image": ADRES + deelbeeld(item.slug), "mainEntityOfPage": ADRES + item.url,
         **schema_extra(item)},
        PERSOON, WEBSITE,
        item_kruimelpad_schema(item))
    pagina(item.url, titel=item.seotitel, beschrijving=item.beschrijving, inhoud=inhoud, url=item.url,
           menu="series" if item.is_deel else "leren", ogtype="article", deel=deelbeeld(item.slug), schema=schema,
           noindex=item.concept, extra_voet=delen_script(item),
           extra_kop=f'<meta property="article:published_time" content="{item.datum.isoformat()}">\n'
                     f'  <meta property="article:modified_time" content="{item.bijgewerkt.isoformat()}">')


EXTERNE_LINK = re.compile(r'<a\b([^>]*\bhref="https?://(?!(?:www\.)?ai-leerlab\.nl[/"])[^"]*"[^>]*)>(.*?)</a>', re.S)


def extern_nieuw_tabblad(tekst):
    """Externe links in een tutorial of tool openen in een nieuw tabblad, zodat je de tool niet uit gaat
    en je voortgang blijft staan (Frits, 05-10-2026). Een link met een eigen target blijft zoals hij is.
    Schermlezers horen dat er een nieuw tabblad opengaat."""
    def vervang(m):
        attr, binnen = m.group(1), m.group(2)
        if re.search(r'\btarget=', attr):
            return m.group(0)
        if re.search(r'\brel="', attr):
            attr = re.sub(r'\brel="([^"]*)"', lambda r: r.group(0) if "noopener" in r.group(1).split()
                          else f'rel="{r.group(1)} noopener"', attr)
        else:
            attr += ' rel="noopener"'
        return f'<a{attr} target="_blank">{binnen}<span class="sr"> (opent in een nieuw tabblad)</span></a>'
    return EXTERNE_LINK.sub(vervang, tekst)


def bouw_html_item(item, alle):
    """Een item met eigen HTML (tutorial, later een tool). De tekst komt uit het bestand zelf."""
    lede = f'<p class="lede">{esc(item.lede)}</p>' if item.lede else ""
    feiten = [tuple(x.split("=", 1)) for x in item.meta.get("feiten", "").split("|") if "=" in x]
    # Een tool met de markering DEELKNOPPEN krijgt de deelrij op die plek (bij de uitslag) en niet onderaan.
    eigen_delen = DEELKNOPPEN in item.tekst
    tekst = item.tekst.replace(DEELKNOPPEN, delen_html(item, altijd=True)) if eigen_delen else item.tekst
    tekst = extern_nieuw_tabblad(tekst)
    # GenAI-vermelding: niet bij tutorials (Frits, 30-09-2026), wel bij een tool met een veld transparantie.
    gemaakt = transparantie_html(item) if item.soort == "tool" and item.transparantie else ""
    inhoud = f"""{item_kop(item, lede, [(a.strip(), b.strip()) for a, b in feiten])}
<div class="wrap">
  <div class="{esc(item.meta.get('klasse', 'eigen'))}">
{tekst}
  </div>
  {onderwerpen_html(item)}
  {"" if eigen_delen else delen_html(item)}
  {gemaakt}
  {verder(item, alle)}
</div>"""
    stappen = [s.strip() for s in item.meta.get("stappen", "").split("|") if s.strip()]
    hoofd = {"@type": ["LearningResource", "HowTo"] if stappen else "LearningResource",
             "name": item.titel, "description": item.beschrijving, "inLanguage": "nl",
             "learningResourceType": item.soortlabel, "url": ADRES + item.url,
             "datePublished": item.datum.isoformat(), "dateModified": item.bijgewerkt.isoformat(),
             "image": ADRES + deelbeeld(item.slug),
             "author": {"@id": f"{ADRES}/#frits"},
             "audience": [{"@type": "EducationalAudience",
                           "educationalRole": "student" if v.startswith("student") else "teacher"} for v in item.voor]}
    extra = schema_extra(item)
    extra.pop("isPartOf", None)
    hoofd.update(extra)
    if stappen:
        hoofd["step"] = [{"@type": "HowToStep", "position": n + 1, "name": s, "url": f"{ADRES}{item.url}#stap-{n + 1}"}
                         for n, s in enumerate(stappen)]
    # hulpmiddelen: ChatGPT Work | Claude  -> de tools waarmee je de tutorial kunt volgen (HowToTool)
    hulp = [h.strip() for h in item.meta.get("hulpmiddelen", "").split("|") if h.strip()]
    if stappen and hulp:
        hoofd["tool"] = [{"@type": "HowToTool", "name": h} for h in hulp]
    schema = jsonld(hoofd, PERSOON, WEBSITE, item_kruimelpad_schema(item))
    script = item.meta.get("script", "")
    pagina(item.url, titel=item.seotitel, beschrijving=item.beschrijving, inhoud=inhoud, url=item.url,
           menu="tools" if item.map == "tools" else "leren", deel=deelbeeld(item.slug), schema=schema,
           noindex=item.concept,
           extra_voet="\n  ".join(x for x in (
               f'<script src="{esc(script)}?v={VERSIE}" defer></script>' if script else "",
               delen_script(item, altijd=eigen_delen)) if x))


def kaart_figuur(slug):
    """Het figuur in de cirkel op de grote kaart van een categorieblok: de avatar van de categorie uit site.json.
    Staat die al in de kop van de beginpagina (nu james-rust), dan de rol-pose, zodat dezelfde avatar
    niet twee keer op de pagina staat (Bram, 02-10-2026)."""
    naam = CATEGORIEEN[slug].get("avatar", "")
    if naam and naam == SITE["home"].get("avatar"):
        rol = re.sub(r"-rust$", "-rol", naam)
        if avatar(rol):
            naam = rol
    return avatar_img(naam, "kaart-figuur")


def categorie_keuze(slug, live, uit):
    """(grote kaart, lijst, totaal) voor het blok van een categorie op de beginpagina.

    Het uitgelichte item van de beginpagina komt niet terug. Een seriedeel telt als gewoon artikel: deel 1
    groot en deel 2 in de lijst kan (Frits, 03-10-2026; eerder nam een serie één plek in).
    De grote kaart is het artikel met 'uitgelicht: categorie' (Frits kiest, 02-10-2026), anders het nieuwste.
    De lijst: de nieuwste andere, hooguit CAT_LIJST_MAX."""
    alle = [x for x in live if x.categorie == slug]
    totaal = len(alle)
    rest = [x for x in alle if x is not uit]
    if not rest:
        return None, [], totaal
    gemarkeerd = [x for x in rest if x.uitgelicht_categorie]
    if len(gemarkeerd) > 1:
        let_op(f"categorie '{slug}': meer dan één artikel met 'uitgelicht: categorie' ("
               + ", ".join(os.path.basename(x.pad) for x in gemarkeerd)
               + f"); de beginpagina neemt de nieuwste: {os.path.basename(gemarkeerd[0].pad)}")
    groot = gemarkeerd[0] if gemarkeerd else rest[0]
    lijst = [x for x in rest if x is not groot]
    return groot, lijst[:CAT_LIJST_MAX], totaal


def voet_van(item, nieuw):
    if item.is_deel:
        s = STAAT["series"][item.serie]
        return voet_html(item, s.titel, s.kaartnaam, vet=True, nieuw=nieuw)
    return voet_html(item, voor_tekst(item.voor), voor_kort(item.voor), nieuw=nieuw)


def groot_kaart(item, slug, breed):
    """De grote kaart links in een categorieblok, met rechtsonder de belletjes en het figuur van de categorie.
    Breed (bij een categorie met alleen dit artikel): titel links, uitleg rechts, over de hele breedte."""
    voet, klasse = voet_van(item, is_nieuw(item))
    sfeer = ('<span class="bel-kaart" aria-hidden="true"></span><span class="bel-kaart klein" aria-hidden="true"></span>'
             + kaart_figuur(slug))
    label = f'<p class="label"><span class="soort">{kaart_label(item)}</span>{datum_pill(item)}</p>'
    titel = f'<h3><a href="{item.url}">{titel_html(item)}</a></h3>'
    uitleg = f'<p class="uitleg">{esc(item.kaarttekst)}</p>'
    if breed:
        return f"""<article class="kaart kaart-groot kaart-breed met-figuur{klasse}">
        {sfeer}
        <div class="links">
          {label}
          {titel}
        </div>
        <div class="rechts">
          {uitleg}
          {voet}
        </div>
      </article>"""
    return f"""<article class="kaart kaart-groot met-figuur{klasse}">
        {sfeer}
        {label}
        {titel}
        {uitleg}
        {voet}
      </article>"""


def lijst_regel(item):
    """Eén regel in de lijst "Laatst verschenen" van een categorieblok: titel, en eronder soort en datum."""
    if item.is_deel:
        soort = f'Serie · <span class="serie-naam">{esc(STAAT["series"][item.serie].titel)}</span>'
    else:
        soort = esc(item.soortlabel)
    tijd = f'<time datetime="{item.datum.isoformat()}">{datum_kort(item.datum)}</time>'
    return f"""<li>
            <h3><a href="{item.url}">{titel_html(item)}</a></h3>
            <p class="meta">{soort} · {tijd}{NIEUW_ICOON if is_nieuw(item) else ""}</p>
          </li>"""


def categorie_blok(slug, groot, lijst, totaal):
    c = CATEGORIEEN[slug]
    enkel = not lijst
    rechts = ""
    if lijst:
        rechts = f"""
      <div class="cat-nieuwste">
        <p class="label" id="n-{slug}">Laatst verschenen</p>
        <ul aria-labelledby="n-{slug}">
          {"".join(lijst_regel(x) for x in lijst)}
        </ul>
      </div>"""
    return f"""<section class="cat-blok{' enkel' if enkel else ''}" aria-labelledby="c-{slug}">
    <h2 id="c-{slug}">{esc(c["naam"])}</h2>
    <p class="cat-lede">{esc(c["lede"])}</p>
    <div class="cat-lijf">
      {groot_kaart(groot, slug, enkel)}{rechts}
    </div>
    <a class="cat-alles" href="/leren/{slug}/">Alles in {esc(c["naam"])} <span class="aantal">{totaal}</span>{icoon("pijl")}</a>
  </section>"""


def bouw_home(items):
    live = [x for x in items if not x.concept]
    live.sort(key=lambda x: x.datum, reverse=True)
    gemarkeerd = [x for x in live if x.uitgelicht]
    if len(gemarkeerd) > 1:
        let_op("meer dan één item heeft 'uitgelicht: ja' (" + ", ".join(os.path.basename(x.pad) for x in gemarkeerd)
               + f"); de beginpagina neemt de nieuwste: {os.path.basename(gemarkeerd[0].pad)}")
    uit = gemarkeerd[0] if gemarkeerd else (live[0] if live else None)
    h = SITE["home"]
    uitgelicht = ""
    if uit:
        duur = uit.meta.get("duur", "")
        if uit.is_deel:
            s = STAAT["series"][uit.serie]
            lang, kort = s.titel, s.kaartnaam
        else:
            lang = " · ".join(f for f in (voor_tekst(uit.voor), duur) if f)
            kort = voor_tekst(uit.voor) or duur    # smal: alleen voor wie, de duur staat ook op het item zelf
        voet, klasse = voet_html(uit, lang, kort, vet=uit.is_deel, nieuw=is_nieuw(uit))
        uitgelicht = f"""<article class="uitgelicht{klasse}">
  <div class="tekst">
    <p class="label"><span class="soort">{kaart_label(uit)}</span>{datum_pill(uit)}</p>
    <h2><a href="{uit.url}">{titel_html(uit)}</a></h2>
    <p>{esc(uit.kaarttekst)}</p>
    {voet}
    <div class="knoppen"><a class="knop knop-primair" href="{uit.url}" tabindex="-1" aria-hidden="true">{esc(SOORTEN.get(uit.soort, ('', '', 'Bekijk'))[2])}{icoon("pijl")}</a></div>
  </div>
  <div class="uitgelicht-avatar">{avatar_img(uit.avatar, "")}</div>
</article>"""
    # Per categorie een blok, in de vaste volgorde van site.json (praktijk, didactiek, onderzoek, techniek;
    # Frits, 02-10-2026). Een categorie zonder artikelen, of met alleen het uitgelichte item, krijgt geen blok.
    # Het raster "Laatst verschenen" en de categorieregel zijn vervallen (Frits, 02-10-2026).
    blokken, getoond = [], ([uit] if uit else [])
    for slug in CATEGORIEEN:
        if slug not in STAAT["categorieen"]:
            continue
        groot, lijst, totaal = categorie_keuze(slug, live, uit)
        if not groot:
            continue
        blokken.append(categorie_blok(slug, groot, lijst, totaal))
        getoond += [groot] + lijst
    blokken_html = "\n  ".join(blokken)
    inhoud = f"""<section class="held labpapier" aria-labelledby="titel">
  <div class="bel groot" aria-hidden="true"></div><div class="bel klein" aria-hidden="true"></div>
  {avatar_img(h["avatar"], "held-avatar")}
  <div class="wrap">
    <h1 id="titel">{esc(h["kop"])}</h1>
    <p class="lede">{esc(h["lede"])}</p>
  </div>
</section>
<div class="wrap" id="items">
  {uitgelicht}
  {blokken_html}
</div>
<section class="wrap" aria-labelledby="over-titel">
  <div class="van-frits">
    <img src="/assets/img/frits-portret.webp" width="440" height="542" alt="Getekend portret van Frits Coers">
    <div>
      <h2 id="over-titel">Van Frits</h2>
      <p>{esc(SITE["over_kort"])}</p>
      <p><a href="/over/">Meer over mij en hoe dit lab werkt</a></p>
    </div>
  </div>
</section>"""
    # Het schema volgt wat er op de pagina staat: het uitgelichte item en de blokken, in die volgorde.
    lijst = {"@type": "ItemList", "itemListElement": [
        {"@type": "ListItem", "position": n + 1, "url": ADRES + x.url, "name": x.titel} for n, x in enumerate(getoond)]}
    pagina("/", titel=h["seotitel"], beschrijving=h["beschrijving"], inhoud=inhoud, url="/",
           schema=jsonld(WEBSITE, PERSOON, lijst), hoofd_titel=h["seotitel"])


def leren_items(items):
    """Alles wat onder Leren en de categorieën valt: artikelen, tutorials en tools (een tool heeft een categorie,
    zoals de zelftest in Didactiek; Frits, 03-10-2026). Series en losse pagina's niet."""
    return sorted([x for x in items if not x.concept and x.url.startswith(("/leren/", "/tools/"))],
                  key=lambda x: x.datum, reverse=True)


def tabrij(items, actief=""):
    """De categorieën als tabrij op /leren/ en /leren/<categorie>/. Een lege categorie verschijnt niet."""
    if not STAAT["categorieen"]:
        return ""
    def tab(naam, url, n, aan):
        huidig = ' aria-current="page"' if aan else ""
        return f'<li><a href="{url}"{huidig}>{esc(naam)} <span class="aantal">{n}</span></a></li>'
    tabs = [tab("Alles", "/leren/", len(leren_items(items)), not actief)]
    for slug, c in CATEGORIEEN.items():
        if slug in STAAT["categorieen"]:
            tabs.append(tab(c["naam"], f"/leren/{slug}/", len(STAAT["categorieen"][slug]), actief == slug))
    return f"""<nav class="tabrij" aria-label="Categorieën">
  <div class="wrap">
    <ul>{"".join(tabs)}</ul>
  </div>
</nav>"""


def bouw_leren(items):
    live = leren_items(items)
    inhoud = f"""<section class="lijst-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <h1 id="titel">Leren</h1>
    <p class="lede">{esc(SITE["leren"]["lede"])}</p>
  </div>
</section>
{tabrij(items)}
<div class="wrap lijst">
  {raster(live)}
</div>"""
    pagina("/leren/", titel=SITE["leren"]["seotitel"], beschrijving=SITE["leren"]["beschrijving"], inhoud=inhoud,
           url="/leren/", menu="leren",
           schema=jsonld({"@type": "CollectionPage", "name": "Leren", "url": f"{ADRES}/leren/",
                          "isPartOf": {"@id": f"{ADRES}/#site"}}, WEBSITE, PERSOON,
                         kruimelpad(("AI-leerlab", "/"), ("Leren", None))))


def bouw_tools(items):
    """/tools/ met alle live tools, alleen als er een is. De menulink Tools hangt aan dezelfde lijst."""
    if not STAAT["tools"]:
        return
    t = SITE["tools"]
    inhoud = f"""<section class="lijst-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <h1 id="titel">Tools</h1>
    <p class="lede">{esc(t["lede"])}</p>
  </div>
</section>
<div class="wrap lijst">
  {raster(STAAT["tools"])}
</div>"""
    pagina("/tools/", titel=t["seotitel"], beschrijving=t["beschrijving"], inhoud=inhoud, url="/tools/", menu="tools",
           schema=lijst_schema("Tools", "/tools/", t["beschrijving"], STAAT["tools"],
                               ("AI-leerlab", "/"), ("Tools", None)))
    EXTRA.append(("/tools/", max(x.bijgewerkt for x in STAAT["tools"])))


def lijst_schema(naam, url, beschrijving, leden, *kruimels):
    return jsonld({"@type": "CollectionPage", "name": naam, "url": ADRES + url, "description": beschrijving,
                   "isPartOf": {"@id": f"{ADRES}/#site"},
                   "mainEntity": {"@type": "ItemList", "itemListElement": [
                       {"@type": "ListItem", "position": n + 1, "url": ADRES + x.url, "name": x.titel}
                       for n, x in enumerate(leden)]}},
                  WEBSITE, PERSOON, kruimelpad(*kruimels))


def bouw_categorieen(items):
    """Een pagina per categorie met artikelen: /leren/<categorie>/, met de tabrij."""
    for slug, leden in STAAT["categorieen"].items():
        c = CATEGORIEEN[slug]
        # Het item met 'uitgelicht: categorie' staat ook op de categoriepagina vooraan (Frits, 03-10-2026);
        # daarna de rest, nieuwste eerst.
        leden = sorted(leden, key=lambda x: not x.uitgelicht_categorie)
        url = f"/leren/{slug}/"
        inhoud = f"""<section class="item-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <div class="tekst">
      {kruimel_html(("Leren", "/leren/"))}
      <h1 id="titel">{esc(c["naam"])}</h1>
      <p class="lede">{esc(c["lede"])}</p>
    </div>
    <div class="kop-avatar">{avatar_img(c.get("avatar", ""), "")}</div>
  </div>
</section>
{tabrij(items, slug)}
<div class="wrap lijst">
  {raster(leden)}
</div>"""
        pagina(url, titel=c["seotitel"], beschrijving=c["beschrijving"], inhoud=inhoud, url=url, menu="leren",
               schema=lijst_schema(c["naam"], url, c["beschrijving"], leden,
                                   ("AI-leerlab", "/"), ("Leren", "/leren/"), (c["naam"], None)))
        EXTRA.append((url, max(x.bijgewerkt for x in leden)))


def bouw_onderwerpen():
    """/onderwerp/<tag>/, alleen voor onderwerpen met minstens ONDERWERP_DREMPEL artikelen."""
    for tag, leden in STAAT["onderwerpen"].items():
        url = f"/onderwerp/{tag}/"
        naam = tag[0].upper() + tag[1:]
        seotitel = f"{naam} en AI: artikelen en tutorials"
        beschrijving = (f"Alle artikelen en tutorials van AI-leerlab over {tag}, "
                        "voor studenten en docenten in het hoger onderwijs.")
        inhoud = f"""<section class="lijst-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    {kruimel_html(("Leren", "/leren/"))}
    <p class="label">Onderwerp</p>
    <h1 id="titel">{esc(naam)}</h1>
    <p class="lede">Alles in het lab over {esc(tag)}. Het nieuwste staat bovenaan.</p>
  </div>
</section>
<div class="wrap lijst">
  {raster(leden)}
</div>"""
        pagina(url, titel=seotitel, beschrijving=beschrijving, inhoud=inhoud, url=url, menu="leren",
               schema=lijst_schema(naam, url, beschrijving, leden,
                                   ("AI-leerlab", "/"), ("Leren", "/leren/"), (naam, None)))
        EXTRA.append((url, max(x.bijgewerkt for x in leden)))


def serie_feiten(s):
    feiten = [f'<li>{icoon("tutorial")}{len(s.delen)} {"deel" if len(s.delen) == 1 else "delen"}</li>']
    sinds = f"Sinds {datum_nl(s.delen[0].datum)}"
    if s.lopend and (s.dag or s.ritme):
        sinds += f", elke {s.dag}" if s.dag else f", {s.ritme}"
    feiten.append(f'<li>{icoon("klok")}{esc(sinds)}</li>')
    c = CATEGORIEEN.get(s.categorie)
    if c:
        naam = (f'<a href="/leren/{c["slug"]}/">{esc(c["naam"])}</a>' if c["slug"] in STAAT["categorieen"]
                else esc(c["naam"]))
        feiten.append(f'<li>{icoon("uitleg")}{naam}</li>')
    return f'<ul class="feiten">{"".join(feiten)}</ul>'


def bouw_series():
    """/series/ en /series/<naam>/, alleen voor series met minstens één gepubliceerd deel."""
    if not STAAT["series"]:
        return
    for s in STAAT["series"].values():
        nieuwste = s.delen[-1]
        knoppen = f'<a class="knop knop-primair" href="{s.delen[0].url}">Begin bij deel 1{icoon("pijl")}</a>'
        if len(s.delen) > 1:
            knoppen += f'\n            <a class="tekstlink" href="#deel-{nieuwste.deel}">Lees het nieuwste deel</a>'
        rijen = []
        for x in s.delen:
            is_nieuwste = x is nieuwste and s.lopend and len(s.delen) > 1
            nieuw = NIEUW_ICOON if is_nieuw(x) else ""
            rijen.append(f"""<li class="deel{' nieuwste' if is_nieuwste else ''}" id="deel-{x.deel}">
          <span class="nr" aria-hidden="true">{x.deel}</span>
          <h3><a href="{x.url}"><span class="sr">Deel {x.deel}: </span>{esc(x.titel)}</a></h3>
          <p>{esc(x.kaarttekst)}</p>
          <p class="wanneer"><time datetime="{x.datum.isoformat()}">{datum_nl(x.datum)}</time>{nieuw}</p>
        </li>""")
        if s.lopend and s.gepland:
            g = s.gepland[0]
            rijen.append(f"""<li class="deel gepland">
          <span class="nr" aria-hidden="true">{g.deel}</span>
          <h3>Deel {g.deel} verschijnt op {dag_nl(g.datum)}</h3>
        </li>""")
        over = ""
        if s.over:
            over = f"""<section class="serie-over" aria-labelledby="over-serie">
        <h2 id="over-serie">Over deze serie</h2>
        {markdown(s.over)}
      </section>"""
        inhoud = f"""<section class="item-kop serie-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <div class="tekst">
      {kruimel_html(("Series", "/series/"))}
      <p class="label">{icoon("serie")}{esc(s.label)}</p>
      <h1 id="titel">{esc(s.titel)}</h1>
      <p class="lede">{esc(s.lede)}</p>
      {serie_feiten(s)}
      <div class="knoppen">
        {knoppen}
      </div>
    </div>
    <div class="kop-avatar">{avatar_img(s.avatar, "")}</div>
  </div>
</section>
<div class="wrap lijst">
  <h2 class="sr">Alle delen</h2>
  <ol class="delen">
    {"".join(rijen)}
  </ol>
  {over}
</div>"""
        reeks = {"@type": "CreativeWorkSeries", "@id": f"{ADRES}{s.url}#serie", "name": s.titel, "url": ADRES + s.url,
                 "description": s.beschrijving, "inLanguage": "nl", "author": {"@id": f"{ADRES}/#frits"},
                 "isPartOf": {"@id": f"{ADRES}/#site"}, "startDate": s.delen[0].datum.isoformat(),
                 "hasPart": [{"@type": "Article", "headline": x.titel, "url": ADRES + x.url, "position": x.deel}
                             for x in s.delen]}
        if CATEGORIEEN.get(s.categorie):
            reeks["genre"] = CATEGORIEEN[s.categorie]["naam"]
        feed = f"{s.url}feed.xml"
        pagina(s.url, titel=s.seotitel, beschrijving=s.beschrijving, inhoud=inhoud, url=s.url, menu="series",
               schema=jsonld(reeks, PERSOON, WEBSITE,
                             kruimelpad(("AI-leerlab", "/"), ("Series", "/series/"), (s.titel, None))),
               extra_kop=f'<link rel="alternate" type="application/rss+xml" title="{esc(s.titel)}" href="{feed}">')
        bouw_feed(s)
        EXTRA.append((s.url, max(x.bijgewerkt for x in s.delen)))

    # Het overzicht /series/
    alle = sorted(STAAT["series"].values(), key=lambda s: s.delen[-1].datum, reverse=True)
    kaarten = "\n".join(f"""<li class="kaart">
  <p class="label">{icoon("serie")}{esc(s.label)}</p>
  <h3><a href="{s.url}">{esc(s.titel)}</a></h3>
  <p class="uitleg">{esc(s.lede)}</p>
  <p class="voor">{len(s.delen)} {"deel" if len(s.delen) == 1 else "delen"} · nieuwste {datum_kort(s.delen[-1].datum)}</p>
</li>""" for s in alle)
    t = SITE.get("series", {})
    beschrijving = t.get("beschrijving", "")
    inhoud = f"""<section class="lijst-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <h1 id="titel">Series</h1>
    <p class="lede">{esc(t.get("lede", ""))}</p>
  </div>
</section>
<div class="wrap lijst">
  <ul class="raster">
{kaarten}
  </ul>
</div>"""
    schema = jsonld({"@type": "CollectionPage", "name": "Series", "url": f"{ADRES}/series/", "description": beschrijving,
                     "isPartOf": {"@id": f"{ADRES}/#site"},
                     "mainEntity": {"@type": "ItemList", "itemListElement": [
                         {"@type": "ListItem", "position": n + 1, "url": ADRES + s.url, "name": s.titel}
                         for n, s in enumerate(alle)]}},
                    WEBSITE, PERSOON, kruimelpad(("AI-leerlab", "/"), ("Series", None)))
    pagina("/series/", titel=t.get("seotitel", "Series"), beschrijving=beschrijving, inhoud=inhoud, url="/series/",
           menu="series", schema=schema)
    EXTRA.append(("/series/", max(s.delen[-1].bijgewerkt for s in alle)))


def rfc(d):
    """Datum als RFC 822 voor RSS (07:00 UTC, het tijdstip van de ochtendbouw)."""
    import email.utils
    return email.utils.format_datetime(datetime.datetime(d.year, d.month, d.day, 7, 0, tzinfo=datetime.timezone.utc))


FEED = "/feed.xml"   # de feed van de hele site; elke pagina verwijst ernaar in de kop en de voet


def bouw_site_feed(items):
    """RSS van de hele site: /feed.xml, alle gepubliceerde items (geen concepten, geen geplande), nieuwste bovenaan."""
    live = sorted([x for x in items if not x.concept], key=lambda x: (x.datum, x.titel), reverse=True)

    def regel(x):
        titel = f"Deel {x.deel}: {x.titel}" if x.is_deel else x.titel
        c = x.categorie_info
        cat = f"\n    <category>{esc(c['naam'])}</category>" if c else ""
        return f"""  <item>
    <title>{esc(titel)}</title>
    <link>{ADRES}{x.url}</link>
    <guid isPermaLink="true">{ADRES}{x.url}</guid>
    <pubDate>{rfc(x.datum)}</pubDate>
    <description>{esc(x.beschrijving)}</description>{cat}
  </item>"""

    laatste = max([x.bijgewerkt for x in live] or [datetime.date.today()])
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>{esc(SITE["naam"])}</title>
  <link>{ADRES}/</link>
  <atom:link href="{ADRES}{FEED}" rel="self" type="application/rss+xml"/>
  <description>{esc(SITE["home"]["beschrijving"])}</description>
  <language>nl</language>
  <lastBuildDate>{rfc(laatste)}</lastBuildDate>
{chr(10).join(regel(x) for x in live)}
</channel>
</rss>
"""
    with open(os.path.join(UIT, FEED.lstrip("/")), "w", encoding="utf-8") as f:
        f.write(xml)


def bouw_feed(s):
    """RSS per serie: /series/<naam>/feed.xml, nieuwste deel bovenaan."""
    items = "\n".join(f"""  <item>
    <title>Deel {x.deel}: {esc(x.titel)}</title>
    <link>{ADRES}{x.url}</link>
    <guid>{ADRES}{x.url}</guid>
    <pubDate>{rfc(x.datum)}</pubDate>
    <description>{esc(x.beschrijving)}</description>
  </item>""" for x in reversed(s.delen))
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>{esc(s.titel)} · {esc(SITE["naam"])}</title>
  <link>{ADRES}{s.url}</link>
  <atom:link href="{ADRES}{s.url}feed.xml" rel="self" type="application/rss+xml"/>
  <description>{esc(s.beschrijving)}</description>
  <language>nl</language>
  <lastBuildDate>{rfc(s.delen[-1].bijgewerkt)}</lastBuildDate>
{items}
</channel>
</rss>
"""
    with open(os.path.join(UIT, s.url.strip("/"), "feed.xml"), "w", encoding="utf-8") as f:
        f.write(xml)


def bouw_losse_paginas(items):
    """Pagina's als over.md: Markdown met een kopje, in een eenvoudige opmaak."""
    for naam in sorted(os.listdir(INHOUD)):
        if not naam.endswith(".md"):
            continue
        meta, tekst = lees_bestand(os.path.join(INHOUD, naam))
        slug = meta.get("adres", os.path.splitext(naam)[0])
        url = f"/{slug}/"
        titel = meta.get("titel", slug)
        portret = ""
        if meta.get("portret", "").lower() == "ja":
            portret = '<img class="portret" src="/assets/img/frits-portret.webp" width="440" height="542" alt="Getekend portret van Frits Coers">'
        kop_avatar = f'<div class="kop-avatar">{avatar_img(meta["avatar"], "")}</div>' if meta.get("avatar") else ""
        inhoud = f"""<section class="item-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <div class="tekst">
      <h1 id="titel">{esc(titel)}</h1>
      {f'<p class="lede">{esc(meta["lede"])}</p>' if meta.get("lede") else ""}
    </div>
    {kop_avatar}
  </div>
</section>
<div class="wrap">
  <article class="artikel losse-pagina">
    {portret}
    {markdown(tekst)}
  </article>
</div>"""
        schema = ""
        if meta.get("schema") == "ProfilePage":
            schema = jsonld({"@type": "ProfilePage", "url": ADRES + url, "mainEntity": {"@id": f"{ADRES}/#frits"},
                             "isPartOf": {"@id": f"{ADRES}/#site"}}, PERSOON, WEBSITE)
        pagina(url, titel=meta.get("seotitel", titel), beschrijving=meta.get("beschrijving", ""), inhoud=inhoud,
               url=url, menu=meta.get("menu", ""), schema=schema)
        LOSSE.append((url, datetime.date.fromisoformat(meta.get("datum", str(datetime.date.today())))))


def bouw_404():
    """Onno in oeps, groter dan in een gewone kop en ook op mobiel zichtbaar: het vergrootglas valt, de pagina
    is zoek. Onze misser, niet die van de lezer (Bram en Frits, 03-10-2026)."""
    inhoud = f"""<section class="item-kop niet-gevonden labpapier" aria-labelledby="titel">
  <div class="wrap">
    <div class="tekst">
      <p class="label">Pagina niet gevonden</p>
      <h1 id="titel">Deze pagina is zoek</h1>
      <p class="lede">Misschien is het adres veranderd. Op de beginpagina vind je alles wat er in het lab staat.</p>
      <div class="knoppen"><a class="knop knop-primair" href="/">Naar de beginpagina{icoon("pijl")}</a></div>
    </div>
    <div class="kop-avatar">{avatar_img("onno-oeps", "")}</div>
  </div>
</section>"""
    pagina("/404.html", titel="Pagina niet gevonden", beschrijving="Deze pagina bestaat niet (meer).", inhoud=inhoud,
           url="/404.html", noindex=True)


def bouw_sitemap(items):
    regels = []
    live = [x for x in items if not x.concept]
    laatste = max([x.bijgewerkt for x in live] or [datetime.date.today()])
    # EXTRA: categorie-, serie- en onderwerppagina's, alleen de pagina's die er echt zijn.
    lijst = [("/", laatste), ("/leren/", laatste)] + EXTRA + LOSSE + [(x.url, x.bijgewerkt) for x in live]
    for url, d in lijst:
        regels.append(f"  <url><loc>{ADRES}{url}</loc><lastmod>{d.isoformat()}</lastmod></url>")
    with open(os.path.join(UIT, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n'
                '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(regels) + "\n</urlset>\n")
    with open(os.path.join(UIT, "robots.txt"), "w", encoding="utf-8") as f:
        f.write("User-agent: *\nAllow: /\n\n"
                "# Pagina's onder /test/ staan op noindex. Ze blijven toegankelijk, zodat zoekmachines die noindex kunnen lezen.\n\n"
                f"Sitemap: {ADRES}/sitemap.xml\n")


# ---------------------------------------------------------------- bouwen
LOSSE = []
EXTRA = []
VERSIE = datetime.datetime.now().strftime("%Y%m%d%H%M")


def bouw():
    if os.path.isdir(UIT):
        shutil.rmtree(UIT)
    shutil.copytree(STATISCH, UIT)
    items = lees_items()
    urls = [x.url for x in items]
    if len(urls) != len(set(urls)):
        let_op("twee items hebben hetzelfde adres")
    for item in items + GEPLAND:
        controleer_kopje(item)
    # Wat zichtbaar is: series met een gepubliceerd deel, categorieën met artikelen, onderwerpen vanaf de drempel.
    STAAT["series"] = lees_series(items)
    live = leren_items(items)
    STAAT["categorieen"] = {c: [x for x in live if x.categorie == c] for c in CATEGORIEEN
                            if any(x.categorie == c for x in live)}
    STAAT["tools"] = [x for x in live if x.map == "tools"]
    STAAT["onderwerpen"] = {t: [x for x in live if t in x.tags] for t in ONDERWERPEN
                            if sum(t in x.tags for x in live) >= ONDERWERP_DREMPEL}
    for item in items:
        (bouw_artikel if item.vorm == "md" else bouw_html_item)(item, items)
    bouw_home(items)
    bouw_tools(items)
    bouw_leren(items)
    bouw_categorieen(items)
    bouw_series()
    bouw_onderwerpen()
    bouw_losse_paginas(items)
    bouw_404()
    bouw_sitemap(items)
    bouw_site_feed(items)
    # Controle: interne links die nergens heen gaan.
    for wortel, _, bestanden in os.walk(UIT):
        for b in bestanden:
            if not b.endswith(".html"):
                continue
            with open(os.path.join(wortel, b), encoding="utf-8") as f:
                t = f.read()
            for href in re.findall(r'(?:href|src)="(/[^"#?]*)', t):
                doel = os.path.join(UIT, href.lstrip("/").replace("%20", " "))
                if not (os.path.exists(doel) or os.path.exists(os.path.join(doel, "index.html"))):
                    let_op(f"{os.path.relpath(os.path.join(wortel, b), UIT)}: link naar {href} gaat nergens heen")
    n = sum(1 for x in items if not x.concept)
    print(f"Klaar: {n} items, {len(LOSSE)} losse pagina's, in public/.")
    for w in sorted(set(WAARSCHUWINGEN)):
        print("  Let op:", w)


def bekijk():
    import functools
    import http.server
    import webbrowser

    class Handler(http.server.SimpleHTTPRequestHandler):
        def send_error(self, code, message=None, explain=None):
            if code == 404 and os.path.exists(os.path.join(UIT, "404.html")):
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                with open(os.path.join(UIT, "404.html"), "rb") as f:
                    self.wfile.write(f.read())
                return
            super().send_error(code, message, explain)

    poort = 8000
    server = http.server.ThreadingHTTPServer(("127.0.0.1", poort), functools.partial(Handler, directory=UIT))
    print(f"De site draait op http://localhost:{poort}/  (stoppen met Ctrl+C)")
    webbrowser.open(f"http://localhost:{poort}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nGestopt.")


if __name__ == "__main__":
    bouw()
    if "--bekijk" in sys.argv:
        bekijk()
