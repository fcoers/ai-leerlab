#!/usr/bin/env python3
"""
Maakt de deelafbeeldingen (1200 x 630) die LinkedIn, Teams en WhatsApp tonen als iemand een link deelt.

    python3 maak-deelafbeeldingen.py          alleen wat nog ontbreekt
    python3 maak-deelafbeeldingen.py --alles  alles opnieuw

Gebruikt Google Chrome (moet op de Mac staan). Schrijft naar statisch/assets/img/deel/<adres>.png.
Heeft een pagina geen eigen afbeelding, dan gebruikt de site ai-leerlab.png.
Bouw daarna de site opnieuw: python3 bouw.py
"""
import os
import subprocess
import sys
import tempfile

import bouw

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DOEL = os.path.join(bouw.STATISCH, "assets", "img", "deel")
S = bouw.STATISCH


def bestand(p):
    return "file://" + os.path.join(S, p)


def sjabloon(titel, label, avatar_naam):
    av = ""
    a = bouw.avatar(avatar_naam) if avatar_naam else None
    if a:
        av = f'<img class="av" src="{bestand(a[0].lstrip("/"))}">'
    lab = f'<p class="label">{bouw.esc(label)}</p>' if label else ""
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: F; src: url("{bestand('assets/fonts/roboto-flex-latin.woff2')}"); font-weight: 400 800; }}
@font-face {{ font-family: M; src: url("{bestand('assets/fonts/roboto-mono-500-latin.woff2')}"); font-weight: 500; }}
html, body {{ margin: 0; width: 1200px; height: 630px; overflow: hidden; }}
body {{ position: relative; background: #F7F8F4; background-image: radial-gradient(#DDE2DA 2px, transparent 2.2px); background-size: 32px 32px; background-position: 16px 16px; font-family: F; color: #17211C; }}
.logo {{ position: absolute; left: 72px; top: 64px; height: 64px; }}
.tekst {{ position: absolute; left: 72px; top: 190px; width: 700px; }}
.label {{ font: 500 22px/1 M; letter-spacing: .08em; text-transform: uppercase; color: #4A5550; margin: 0 0 22px; }}
h1 {{ font-weight: 800; font-size: 64px; line-height: 1.06; letter-spacing: -.02em; margin: 0; }}
.bel {{ position: absolute; border-radius: 50%; background: #C5D94A; }}
.groot {{ width: 300px; height: 300px; right: 90px; bottom: -120px; }}
.klein {{ width: 84px; height: 84px; right: 370px; top: 120px; }}
.av {{ position: absolute; right: 150px; bottom: 0; height: 400px; }}
.vloer {{ position: absolute; left: 0; right: 0; bottom: 0; height: 10px; background: #17211C; }}
</style></head><body>
<img class="logo" src="{bestand('assets/img/logo.svg')}">
<div class="bel groot"></div><div class="bel klein"></div>
{av}
<div class="tekst">{lab}<h1>{bouw.esc(titel)}</h1></div>
<div class="vloer"></div>
</body></html>"""


def maak(naam, html):
    uit = os.path.join(DOEL, f"{naam}.png")
    if os.path.exists(uit) and "--alles" not in sys.argv:
        print("  bestaat al:", os.path.relpath(uit, bouw.HIER))
        return
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as f:
        f.write(html)
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
                    "--allow-file-access-from-files", "--window-size=1200,630", "--virtual-time-budget=3000",
                    f"--screenshot={uit}", "file://" + f.name], check=True, capture_output=True)
    os.unlink(f.name)
    print("  gemaakt:", os.path.relpath(uit, bouw.HIER))


if __name__ == "__main__":
    if not os.path.exists(CHROME):
        sys.exit("Google Chrome niet gevonden. Installeer Chrome of maak de afbeeldingen met de hand (1200 x 630).")
    os.makedirs(DOEL, exist_ok=True)
    maak("ai-leerlab", sjabloon(bouw.SITE["home"]["kop"], "", bouw.SITE["home"]["avatar"]))
    for item in bouw.lees_items():
        maak(item.slug, sjabloon(item.titel, item.soortlabel, item.avatar))
