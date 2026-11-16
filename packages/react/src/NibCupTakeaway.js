import { createElement as h, forwardRef } from 'react';

export const NibCupTakeaway = forwardRef(function NibCupTakeaway({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 7h14M6 7l1.5 14h9L18 7M7 7l1-4h8l1 4M6.8 12h10.4", fill: "none" })
  );
});

export default NibCupTakeaway;
