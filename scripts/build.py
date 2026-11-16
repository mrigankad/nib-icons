"""Build Nib distributables from icons/*.svg + icons.json.

Outputs:
  data/icons.json   compact [{n, c, s}] used by the website
  dist/sprite.svg   <symbol id="nib-NAME"> sprite
  dist/nib-icons.zip all SVGs
Run:  python -I scripts/build.py
"""
import json, re, zipfile, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
REDUNDANT = re.compile(r'\s(?:fill="none"|stroke="currentColor"|stroke-width="1\.5"|stroke-linecap="round"|stroke-linejoin="round")')
HEAD = ('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" '
        'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">')

def clean(inner: str) -> str:
    inner = REDUNDANT.sub("", inner)
    return re.sub(r"\s*/>", "/>", inner).strip()

def main():
    icons = json.loads((ROOT / "icons.json").read_text(encoding="utf-8"))
    (ROOT / "data").mkdir(exist_ok=True)
    (ROOT / "dist").mkdir(exist_ok=True)
    compact, symbols = [], []
    for ic in icons:
        inner = clean(ic["svg"])
        compact.append({"n": ic["name"], "c": ic["category"], "s": inner})
        (ROOT / "icons" / f'{ic["name"]}.svg').write_text(HEAD + inner + "</svg>\n", encoding="utf-8")
        symbols.append(f'<symbol id="nib-{ic["name"]}" viewBox="0 0 24 24">{inner}</symbol>')
    (ROOT / "data" / "icons.json").write_text(json.dumps(compact, separators=(",", ":")), encoding="utf-8")
    (ROOT / "dist" / "sprite.svg").write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" fill="none" stroke="currentColor" '
        'stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + "".join(symbols) + "</svg>\n",
        encoding="utf-8")
    with zipfile.ZipFile(ROOT / "dist" / "nib-icons.zip", "w", zipfile.ZIP_DEFLATED) as z:
        for ic in icons:
            z.write(ROOT / "icons" / f'{ic["name"]}.svg', f'nib-icons/{ic["name"]}.svg')
        z.write(ROOT / "LICENSE", "nib-icons/LICENSE")
    print(len(compact), "icons built")

if __name__ == "__main__":
    main()
