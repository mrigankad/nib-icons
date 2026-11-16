import { createElement as h, forwardRef } from 'react';

export const NibListIndent = forwardRef(function NibListIndent({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 6h16M10 12h10M10 18h10M5 9v7a2 2 0 0 0 2 2", fill: "none" })
  );
});

export default NibListIndent;
