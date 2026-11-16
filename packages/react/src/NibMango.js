import { createElement as h, forwardRef } from 'react';

export const NibMango = forwardRef(function NibMango({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 5c5 1 7 6 5 11s-8 7-12 4-3-8 0-12c2-2 4-3 7-3zM14 5l1-3M15 3c2-1 4 0 5 1-2 1-4 0-5-1z", fill: "none" })
  );
});

export default NibMango;
