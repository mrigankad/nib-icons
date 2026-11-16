import { createElement as h, forwardRef } from 'react';

export const NibEuro = forwardRef(function NibEuro({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 6.5A7 7 0 1 0 18 17.5M4 10h9M4 14h9", fill: "none" })
  );
});

export default NibEuro;
