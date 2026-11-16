import { createElement as h, forwardRef } from 'react';

export const NibListCheck = forwardRef(function NibListCheck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6l1.5 1.5 3-3M3 12l1.5 1.5 3-3M3 18l1.5 1.5 3-3M11 6h9M11 12h9M11 18h9", fill: "none" })
  );
});

export default NibListCheck;
