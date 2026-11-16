"""Extra artefacts built from icons.json.

  dist/nib-figma.svg            every icon as a named layer, grouped by category (drop into Figma)
  assets/readme/preview-*.svg   icon grid previews for the README (light and dark)
  README banners are designed in Paper (boards 10/11) and exported to assets/readme/banner-*.png

Run: python -I scripts/build_extras.py
"""
import json, pathlib, html, random

ROOT = pathlib.Path(__file__).resolve().parent.parent
ATTR = 'fill="none" stroke="{c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"'
MARK = ('<path d="M24 4l11 13-11 19-11-19z" fill="{acc}"/><path d="M24 35V21" stroke="{bg}" stroke-width="1.8" stroke-linecap="round"/>'
        '<circle cx="24" cy="17.5" r="2.6" fill="{bg}"/><path d="M24 36c0 4-3 7-7 7s-6-3-3.5-5.5S22 40 30 42s10-2 12-5" '
        'stroke="{ink}" stroke-width="2.8" stroke-linecap="round" fill="none"/>')


def load():
    data = json.loads((ROOT / "data" / "icons.json").read_text(encoding="utf-8"))
    return [{"name": d["n"], "category": d["c"], "svg": d["s"]} for d in data]


def figma(icons):
    cell, cols, pad, head = 48, 20, 40, 56
    out, y, cats = [], pad, {}
    for ic in icons:
        cats.setdefault(ic["category"], []).append(ic)
    for cat, items in cats.items():
        out.append(f'<g id="{html.escape(cat)}">')
        out.append(f'<text x="{pad}" y="{y + 24}" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="#0F1A3D">{html.escape(cat)} · {len(items)}</text>')
        y += head
        for i, ic in enumerate(items):
            x = pad + (i % cols) * cell
            yy = y + (i // cols) * cell
            out.append(f'<g id="{ic["name"]}" transform="translate({x + 12} {yy + 12})" {ATTR.format(c="#0F1A3D")}>{ic["svg"].replace("currentColor", "#0F1A3D")}</g>')
        y += ((len(items) - 1) // cols + 1) * cell + pad
        out.append("</g>")
    w = pad * 2 + cols * cell
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{y}" viewBox="0 0 {w} {y}">'
           f'<rect width="{w}" height="{y}" fill="#FFFFFF"/>' + "".join(out) + "</svg>\n")
    (ROOT / "dist" / "nib-figma.svg").write_text(svg, encoding="utf-8")
    return len(cats)


def preview(icons, theme):
    bg, ink, line = ("#FFFFFF", "#0F1A3D", "#ECECE6") if theme == "light" else ("#0E0E0E", "#F2F2F2", "#222222")
    picks = ["home", "search", "bell", "settings", "user", "heart", "star-outline", "calendar", "mail", "camera", "music", "map-pin",
             "cloud", "sun", "moon", "droplet", "cyclone", "globe", "lock", "shield", "credit-card", "cart", "gift", "analytics",
             "layers", "folder", "upload", "download", "share", "bookmark", "compass", "lifebuoy", "rocket", "sparkles", "brain", "code",
             "terminal", "wifi", "battery", "phone", "video", "image", "play", "pause", "dosa", "chai", "diya", "kalash",
             "bicycle", "truck", "plane", "train", "leaf", "flower", "paw", "fish", "trophy", "puzzle-piece", "dice", "palette"]
    by = {i["name"]: i for i in icons}
    chosen = [by[n] for n in picks if n in by]
    rnd = random.Random(7)
    pool = [i for i in icons if i["name"] not in picks]
    while len(chosen) < 48:
        chosen.append(rnd.choice(pool))
    chosen = chosen[:48]
    cols, cell, pad = 12, 64, 24
    rows = (len(chosen) + cols - 1) // cols
    w, h = pad * 2 + cols * cell, pad * 2 + rows * cell
    parts = [f'<rect x=".5" y=".5" width="{w-1}" height="{h-1}" rx="20" fill="{bg}" stroke="{line}"/>']
    for k, ic in enumerate(chosen):
        x = pad + (k % cols) * cell + 20
        y = pad + (k // cols) * cell + 20
        parts.append(f'<g transform="translate({x} {y})" {ATTR.format(c=ink)}>{ic["svg"].replace("currentColor", ink)}</g>')
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">' + "".join(parts) + "</svg>\n"
    (ROOT / "assets" / "readme" / f"preview-{theme}.svg").write_text(svg, encoding="utf-8")


def banner(theme):
    bg, ink, acc, sub = ("#FAFAF7", "#0F1A3D", "#1F3FD1", "#5A6178") if theme == "light" else ("#000000", "#F2F2F2", "#3B5BFF", "#A3A3A3")
    w, h = 1280, 360
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
<rect width="{w}" height="{h}" rx="28" fill="{bg}"/>
<g transform="translate(96 92) scale(2.6)">{MARK.format(acc=acc, bg=bg, ink=ink)}</g>
<text x="236" y="190" font-family="Inter, Segoe UI, Helvetica, Arial, sans-serif" font-size="104" font-weight="700" letter-spacing="-5" fill="{ink}">nib</text>
<text x="100" y="268" font-family="Inter, Segoe UI, Helvetica, Arial, sans-serif" font-size="30" font-weight="500" fill="{ink}">2,196 open source line icons, drawn with care.</text>
<text x="100" y="310" font-family="Inter, Segoe UI, Helvetica, Arial, sans-serif" font-size="22" fill="{sub}">One 24px grid · one 1.5 stroke · MIT</text>
</svg>
'''
    (ROOT / "assets" / "readme" / f"banner-{theme}.svg").write_text(svg, encoding="utf-8")


if __name__ == "__main__":
    icons = load()
    (ROOT / "assets" / "readme").mkdir(parents=True, exist_ok=True)
    n = figma(icons)
    for t in ("light", "dark"):
        preview(icons, t)
    print(f"figma sheet: {len(icons)} icons in {n} groups; readme previews written")
