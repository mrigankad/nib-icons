<p align="center"><img src="assets/favicon.svg" width="72" alt="Nib logo"></p>

<h1 align="center">Nib</h1>
<p align="center">2,196 open source line icons. One 1.5 stroke on a 24 grid. MIT.</p>
<p align="center"><a href="https://mrigankad.github.io/nib-icons/">Browse the icons</a> · <a href="https://mrigankad.github.io/nib-icons/docs.html">Docs</a> · <a href="dist/nib-icons.zip">Download zip</a></p>

## Use

- **Copy** any icon as SVG or React from the website.
- **Link** from the CDN: `https://cdn.jsdelivr.net/gh/mrigankad/nib-icons@main/icons/<name>.svg`
- **Sprite**: `dist/sprite.svg`, symbols named `nib-<name>`.
- **Files**: everything lives in [`icons/`](icons).

Icons use `currentColor`, so they inherit text colour.

## Build

```
python scripts/build.py
```

Regenerates `data/icons.json`, `dist/sprite.svg` and `dist/nib-icons.zip` from `icons.json`.

## License

MIT
