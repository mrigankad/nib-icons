import { createElement as h, forwardRef } from 'react';

export const NibTreasure = forwardRef(function NibTreasure({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v9H3zM3 11h18M10 11v3h4v-3M7 6v14M17 6v14", fill: "none" })
  );
});

export default NibTreasure;
