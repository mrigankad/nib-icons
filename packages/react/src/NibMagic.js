import { createElement as h, forwardRef } from 'react';

export const NibMagic = forwardRef(function NibMagic({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21L15 9l-2-2L1 19zM13 7l2 2M18 2v3M16.5 3.5h3M21 8v2M20 9h2M19 13v1.5M18.2 13.7h1.6", fill: "none" })
  );
});

export default NibMagic;
