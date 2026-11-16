import { createElement as h, forwardRef } from 'react';

export const NibMarket = forwardRef(function NibMarket({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9l2-5h14l2 5M3 9a2.25 2 0 0 0 4.5 0 2.25 2 0 0 0 4.5 0 2.25 2 0 0 0 4.5 0 2.25 2 0 0 0 4.5 0M5 11v10M19 11v10M3 21h18M8 21v-4h8v4", fill: "none" })
  );
});

export default NibMarket;
