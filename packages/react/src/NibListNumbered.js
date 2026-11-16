import { createElement as h, forwardRef } from 'react';

export const NibListNumbered = forwardRef(function NibListNumbered({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M11 6h9M11 12h9M11 18h9M4 4.5L5.5 3.5v5M4 8.5h3M4 14a1.5 1.5 0 1 1 2.5 1.2L4 18.5h3", fill: "none" })
  );
});

export default NibListNumbered;
