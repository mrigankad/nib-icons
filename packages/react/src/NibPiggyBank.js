import { createElement as h, forwardRef } from 'react';

export const NibPiggyBank = forwardRef(function NibPiggyBank({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M19 9.5c1 .6 1.8 1.5 2 2.5h1v3.5h-2a7 7 0 0 1-2 2V20h-3v-2h-4v2H8v-3a6 6 0 0 1-3-5.2A6 6 0 0 1 11 6h4a6 6 0 0 1 4 1.5zM2.5 9.5A2 2 0 0 0 5 11.5M16 11h.01M10.5 8h3.5", fill: "none" })
  );
});

export default NibPiggyBank;
