import { createElement as h, forwardRef } from 'react';

export const NibWolf = forwardRef(function NibWolf({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 2l3 6h8l3-6 1 9-3 4-2 6h-6l-2-6-3-4zM9.5 11l1 .5M14.5 11l-1 .5M11 18h2", fill: "none" })
  );
});

export default NibWolf;
