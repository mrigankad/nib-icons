import { createElement as h, forwardRef } from 'react';

export const NibPickaxe = forwardRef(function NibPickaxe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 10L4 20M3 9c4-5 10-6 15-3M15 3c3 5 2 11-3 15M13 7.5l3.5 3.5", fill: "none" })
  );
});

export default NibPickaxe;
