# nib-icons-react

[Nib](https://mrigankad.github.io/nib-icons/) icons as React components. 2,196 line icons on a 24px grid with one 1.5 stroke. MIT.

```bash
npm i nib-icons-react
```

```jsx
import { NibHome, NibSearch, NibBell } from 'nib-icons-react';

<NibHome />
<NibSearch size={20} color="#1F3FD1" />
<NibBell strokeWidth={1.75} className="icon" aria-hidden="true" />
```

Every component is named `Nib` plus the icon name in PascalCase (`arrow-up` becomes `NibArrowUp`), forwards its ref and accepts any SVG prop. Imports are tree-shakable, so you only ship the icons you use.

| Prop | Default | |
|---|---|---|
| `size` | `24` | width and height |
| `color` | `currentColor` | stroke colour |
| `strokeWidth` | `1.5` | line weight |

Browse every icon at [mrigankad.github.io/nib-icons](https://mrigankad.github.io/nib-icons/).
