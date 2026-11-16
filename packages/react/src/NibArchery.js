import { createElement as h, forwardRef } from 'react';

export const NibArchery = forwardRef(function NibArchery({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3a14 14 0 0 1 0 18M6 3v18M3 12h18M18 9l3 3-3 3M3 10l2 2-2 2", fill: "none" })
  );
});

export default NibArchery;
