import { createElement as h, forwardRef } from 'react';

export const NibMapTreasure = forwardRef(function NibMapTreasure({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM14 13l3 3M17 13l-3 3", fill: "none" }),
    h('path', { d: "M6 15c1-3 3-5 6-5", fill: "none", strokeDasharray: "1.5 2" })
  );
});

export default NibMapTreasure;
