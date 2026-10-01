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
WEEKDAGEN = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]
# Categorieën en onderwerpen staan in site.json (één plek, ook voor de contentkalender).
CATEGORIEEN = {c["slug"]: c for c in SITE.get("categorieen", [])}
ONDERWERPEN = list(SITE.get("onderwerpen", []))
MAX_TAGS = 3
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
        "pijl-terug": '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    }
    k = f' class="{klasse}"' if klasse else ""
    return f'<svg{k} viewBox="0 0 24 24" aria-hidden="true">{paden[naam]}</svg>'


# ---------------------------------------------------------------- hulpjes
def esc(t):
    return html.escape(str(t), quote=True)


def datum_nl(d):
    return f"{d.day} {MAANDEN[d.month - 1]} {d.year}"


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
            if m and verwijzing:
                uit.append(verwijzing(m.group(1), [m.group(2)] + blok[1:]))
            else:
                uit.append("<blockquote>" + markdown("\n".join(blok)) + "</blockquote>")
            continue
        if re.match(r"^\s*([-*+]|\d+\.)\s+", r):
            geordend = bool(re.match(r"^\s*\d+\.", r))
            items = []
            while i < len(regels) and regels[i].strip():
                m = re.match(r"^\s*([-*+]|\d+\.)\s+(.*)$", regels[i])
                if m:
                    items.append(m.group(2))
                elif items:
                    items[-1] += " " + regels[i].strip()
                i += 1
            tag = "ol" if geordend else "ul"
            uit.append(f"<{tag}>" + "".join(f"<li>{inline(x)}</li>" for x in items) + f"</{tag}>")
            continue
        alinea = []
        while i < len(regels) and regels[i].strip() and not re.match(r"^(#{1,6}\s|>|```|\s*([-*+]|\d+\.)\s+)", regels[i]):
            alinea.append(regels[i].strip())
            i += 1
        uit.append("<p>" + inline(" ".join(alinea)) + "</p>")
    return "\n".join(uit)


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
        self.uitgelicht = m.get("uitgelicht", "").lower() in ("ja", "yes", "true")
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
        self.byline = ""
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
        eerste = t.split("\n\n", 1)
        if eerste[0].startswith("Frits Coers"):
            self.byline = eerste[0].strip()
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
STAAT = {"series": {}, "categorieen": {}, "onderwerpen": {}}
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


def kaart(item):
    return f"""<li class="kaart">
  <p class="label">{soort_label(item)}</p>
  <h3><a href="{item.url}">{esc(item.titel)}</a></h3>
  <p class="uitleg">{esc(item.kaarttekst)}</p>
  <p class="voor">{esc(voor_tekst(item.voor))}</p>
</li>"""


def raster(items):
    return '<ul class="raster">\n' + "\n".join(kaart(x) for x in items) + "\n</ul>"


def avatar_img(naam, klasse, hoogte=None):
    a = avatar(naam) if naam else None
    if not a:
        return ""
    url, w, h = a
    return f'<img class="{klasse}" src="{url}" width="{w}" height="{h}" alt="">'


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
        if doel and doel.avatar and doel.avatar != pagina.avatar:
            a = avatar(doel.avatar)
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


def pagina(pad, *, titel, beschrijving, inhoud, url, menu="", ogtype="website", deel="/assets/img/deel/ai-leerlab.png",
           schema="", noindex=False, extra_kop="", extra_voet="", hoofd_titel=None):
    volle_titel = hoofd_titel or f"{titel} · {SITE['naam']}"
    # Series staat pas in het menu als er een serie met een gepubliceerd deel is.
    huidig = ' aria-current="page"' if menu == "series" else ""
    menu_series = f'\n        <a href="/series/"{huidig}>Series</a>' if STAAT["series"] else ""
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
        "extra_kop": extra_kop,
        "extra_voet": extra_voet,
        "inhoud": inhoud,
        "menu_leren": ' aria-current="page"' if menu == "leren" else "",
        "menu_series": menu_series,
        "voet_series": voet_series,
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
    """<p class="kruimel"> met links; stappen zijn (naam, url)."""
    sep = ' <span aria-hidden="true">/</span> '
    return '<p class="kruimel">' + sep.join(f'<a href="{u}">{esc(n)}</a>' for n, u in stappen) + "</p>"


def item_stappen(item):
    """Het kruimelpad boven een item: (naam, url) per stap, zonder het item zelf."""
    if item.is_deel:
        s = STAAT["series"][item.serie]
        return [("Beginpagina", "/"), ("Series", "/series/"), (s.titel, s.url)]
    stappen = [("Beginpagina", "/"), ("Leren", "/leren/")]
    c = item.categorie_info
    if c and not item.concept and c["slug"] in STAAT["categorieen"]:
        stappen.append((c["naam"], f"/leren/{c['slug']}/"))
    return stappen


def item_kruimelpad_schema(item):
    stappen = [("AI-leerlab" if n == "Beginpagina" else n, u) for n, u in item_stappen(item)]
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
    byline = f'<p class="byline">{esc(item.byline)}</p>' if item.byline else ""
    return f"""<section class="item-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <div class="tekst">
      {kruimel_html(*item_stappen(item))}
      <p class="label">{soort_label(item)}</p>
      <h1 id="titel">{esc(item.titel)}</h1>
      {lede_html}
      {byline}
      <ul class="feiten">{"".join(feiten)}</ul>
    </div>
    <div class="kop-avatar">{avatar_img(item.avatar, "")}</div>
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
           noindex=item.concept,
           extra_kop=f'<meta property="article:published_time" content="{item.datum.isoformat()}">\n'
                     f'  <meta property="article:modified_time" content="{item.bijgewerkt.isoformat()}">')


def bouw_html_item(item, alle):
    """Een item met eigen HTML (tutorial, later een tool). De tekst komt uit het bestand zelf."""
    lede = f'<p class="lede">{esc(item.lede)}</p>' if item.lede else ""
    feiten = [tuple(x.split("=", 1)) for x in item.meta.get("feiten", "").split("|") if "=" in x]
    inhoud = f"""{item_kop(item, lede, [(a.strip(), b.strip()) for a, b in feiten])}
<div class="wrap">
  <div class="{esc(item.meta.get('klasse', 'eigen'))}">
{item.tekst}
  </div>
  {onderwerpen_html(item)}
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
    schema = jsonld(hoofd, PERSOON, WEBSITE, item_kruimelpad_schema(item))
    script = item.meta.get("script", "")
    pagina(item.url, titel=item.seotitel, beschrijving=item.beschrijving, inhoud=inhoud, url=item.url,
           menu="leren", deel=deelbeeld(item.slug), schema=schema, noindex=item.concept,
           extra_voet=f'<script src="{esc(script)}?v={VERSIE}" defer></script>' if script else "")


def serie_regel(s):
    """Eén regel op de beginpagina voor een lopende serie, in de stijl van "Lees ook"."""
    laatste = s.delen[-1]
    return f"""<nav class="lees-ook serie-regel" aria-label="Lopende serie">
  <p class="label">{icoon("serie")}{esc(s.label.replace("Serie · ", "Serie, "))}</p>
  <a href="{s.url}">{esc(s.titel)} · Deel {laatste.deel} is uit{icoon("pijl")}</a>
</nav>"""


def categorie_regel():
    """Onder het raster op de beginpagina: de categorieën met artikelen."""
    if not STAAT["categorieen"]:
        return ""
    links = "".join(f'<li><a href="/leren/{slug}/">{esc(CATEGORIEEN[slug]["naam"])}</a></li>'
                    for slug in CATEGORIEEN if slug in STAAT["categorieen"])
    return f"""<nav class="categorie-regel" aria-label="Categorieën">
  <p class="label">Categorieën</p>
  <ul>{links}</ul>
</nav>"""


def bouw_home(items):
    live = [x for x in items if not x.concept]
    live.sort(key=lambda x: x.datum, reverse=True)
    uit = next((x for x in live if x.uitgelicht), live[0] if live else None)
    rest = [x for x in live if x is not uit]
    h = SITE["home"]
    uitgelicht = ""
    if uit:
        uitgelicht = f"""<article class="uitgelicht">
  <div class="tekst">
    <p class="label">{soort_label(uit)} · <span class="nieuw">Nieuw</span></p>
    <h2><a href="{uit.url}">{esc(uit.titel)}</a></h2>
    <p>{esc(uit.kaarttekst)}</p>
    <p class="voor">{esc(voor_tekst(uit.voor))}{(' · ' + esc(uit.meta['duur'])) if uit.meta.get('duur') else ''}</p>
    <div class="knoppen"><a class="knop knop-primair" href="{uit.url}" tabindex="-1" aria-hidden="true">{esc(SOORTEN.get(uit.soort, ('', '', 'Bekijk'))[2])}{icoon("pijl")}</a></div>
  </div>
  <div class="uitgelicht-avatar">{avatar_img(uit.avatar, "")}</div>
</article>"""
    series = "".join(serie_regel(s) for s in STAAT["series"].values() if s.lopend)
    inhoud = f"""<section class="held labpapier" aria-labelledby="titel">
  <div class="bel groot" aria-hidden="true"></div><div class="bel klein" aria-hidden="true"></div>
  {avatar_img(h["avatar"], "held-avatar")}
  <div class="wrap">
    <h1 id="titel">{esc(h["kop"])}</h1>
    <p class="lede">{esc(h["lede"])}</p>
  </div>
</section>
<div class="wrap" id="items">
  <h2 class="sr">Nieuw in het lab</h2>
  {uitgelicht}
  {series}
  {raster(rest)}
  {categorie_regel()}
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
    lijst = {"@type": "ItemList", "itemListElement": [
        {"@type": "ListItem", "position": n + 1, "url": ADRES + x.url, "name": x.titel} for n, x in enumerate(live)]}
    pagina("/", titel=h["seotitel"], beschrijving=h["beschrijving"], inhoud=inhoud, url="/",
           schema=jsonld(WEBSITE, PERSOON, lijst), hoofd_titel=h["seotitel"])


def leren_items(items):
    return sorted([x for x in items if not x.concept and x.url.startswith("/leren/")],
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
    <p class="kruimel"><a href="/">Beginpagina</a></p>
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
        url = f"/leren/{slug}/"
        inhoud = f"""<section class="item-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <div class="tekst">
      {kruimel_html(("Beginpagina", "/"), ("Leren", "/leren/"))}
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
    {kruimel_html(("Beginpagina", "/"), ("Leren", "/leren/"))}
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
            is_nieuw = x is nieuwste and s.lopend and len(s.delen) > 1
            nieuw = '<span class="nieuw">Nieuw</span>' if is_nieuw else ""
            rijen.append(f"""<li class="deel{' nieuwste' if is_nieuw else ''}" id="deel-{x.deel}">
          <span class="nr" aria-hidden="true">{x.deel}</span>
          <h3><a href="{x.url}"><span class="sr">Deel {x.deel}: </span>{esc(x.titel)}</a></h3>
          <p>{esc(x.kaarttekst)}</p>
          <p class="wanneer">{nieuw}<time datetime="{x.datum.isoformat()}">{datum_nl(x.datum)}</time></p>
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
      {kruimel_html(("Beginpagina", "/"), ("Series", "/series/"))}
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
  <p class="voor">{len(s.delen)} {"deel" if len(s.delen) == 1 else "delen"} · nieuwste {datum_nl(s.delen[-1].datum)}</p>
</li>""" for s in alle)
    t = SITE.get("series", {})
    beschrijving = t.get("beschrijving", "")
    inhoud = f"""<section class="lijst-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <p class="kruimel"><a href="/">Beginpagina</a></p>
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


def bouw_feed(s):
    """RSS per serie: /series/<naam>/feed.xml, nieuwste deel bovenaan."""
    import email.utils

    def rfc(d):
        return email.utils.format_datetime(datetime.datetime(d.year, d.month, d.day, 7, 0, tzinfo=datetime.timezone.utc))

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
      <p class="kruimel"><a href="/">Beginpagina</a></p>
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
    inhoud = f"""<section class="item-kop labpapier" aria-labelledby="titel">
  <div class="wrap">
    <div class="tekst">
      <p class="label">Pagina niet gevonden</p>
      <h1 id="titel">Deze pagina bestaat niet (meer)</h1>
      <p class="lede">Misschien is het adres veranderd. Op de beginpagina vind je alles wat er in het lab staat.</p>
      <div class="knoppen"><a class="knop knop-primair" href="/">Naar de beginpagina{icoon("pijl")}</a></div>
    </div>
    <div class="kop-avatar">{avatar_img("onno-rust", "")}</div>
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
    STAAT["onderwerpen"] = {t: [x for x in live if t in x.tags] for t in ONDERWERPEN
                            if sum(t in x.tags for x in live) >= ONDERWERP_DREMPEL}
    for item in items:
        (bouw_artikel if item.vorm == "md" else bouw_html_item)(item, items)
    bouw_home(items)
    bouw_leren(items)
    bouw_categorieen(items)
    bouw_series()
    bouw_onderwerpen()
    bouw_losse_paginas(items)
    bouw_404()
    bouw_sitemap(items)
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
