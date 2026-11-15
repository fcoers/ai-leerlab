#!/usr/bin/env python3
"""Zet de grammatica van de taaloefen-app op de site (klus 952).

Leest Dides bestanden (Grammatica Duits.json, Grammatica Frans.json) en stuurt ze naar
/apps/taaloefenen/api/grammatica.php, met dezelfde sleutel als de thema's (postvak, macOS-sleutelhanger).
Het hele bestand per taal vervangt wat er stond. Opnieuw sturen na een wijziging van Dide kan altijd.

  python3 grammatica_versturen.py                      # beide talen naar ai-leerlab.nl
  python3 grammatica_versturen.py --taal duits --droog # alleen controleren wat er gestuurd zou worden
  python3 grammatica_versturen.py --site http://127.0.0.1:8473 --sleutel <testsleutel>   # lokale testsite
"""
import argparse
import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

CLAUDE = Path(__file__).resolve().parents[3]
MAP = CLAUDE / "Projecten/AI-leerlab/Leveringen/Apps/Taaloefen-app"
BESTANDEN = {"duits": MAP / "Grammatica Duits.json", "frans": MAP / "Grammatica Frans.json"}
PAD = "/apps/taaloefenen/api/grammatica.php"


def sleutel_uit_sleutelhanger() -> str:
    sys.path.insert(0, str(CLAUDE / "Productiviteit/scripts"))
    import _postvak  # noqa: E402  (zelfde sleutel als de thema's en de lesquiz)
    return _postvak.sleutel()


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--site", default="https://ai-leerlab.nl")
    ap.add_argument("--taal", choices=sorted(BESTANDEN), action="append")
    ap.add_argument("--sleutel", help="alleen voor een lokale testsite; anders uit de sleutelhanger")
    ap.add_argument("--droog", action="store_true", help="niets sturen, alleen lezen en tellen")
    a = ap.parse_args()
    fout = 0
    for taal in a.taal or sorted(BESTANDEN):
        g = json.loads(BESTANDEN[taal].read_text(encoding="utf-8"))
        n = len(g.get("onderdelen", []))
        if a.droog:
            print(f"{taal}: {n} onderdelen in {BESTANDEN[taal].name}")
            continue
        s = a.sleutel or sleutel_uit_sleutelhanger()
        data = json.dumps({"actie": "opslaan", "taal": taal, "grammatica": g}, ensure_ascii=False).encode("utf-8")
        req = urllib.request.Request(a.site.rstrip("/") + PAD, data=data, method="POST",
                                     headers={"Content-Type": "application/json", "X-Postvak-Sleutel": s})
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                print(f"{taal}: {n} onderdelen op de site", json.loads(r.read()).get("grammatica"))
        except urllib.error.HTTPError as e:
            fout = 1
            print(f"{taal}: niet gelukt ({e.code}):", e.read().decode("utf-8", "replace")[:800], file=sys.stderr)
    return fout


if __name__ == "__main__":
    sys.exit(main())
