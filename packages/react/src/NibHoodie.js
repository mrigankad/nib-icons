import { createElement as h, forwardRef } from 'react';

export const NibHoodie = forwardRef(function NibHoodie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 5a4 4 0 0 1 8 0l4 3 2 7-3 1-1-3v8H6v-8l-1 3-3-1 2-7z", fill: "none" }),
    h('path', { d: "M8 5c0 3 2 5 4 5s4-2 4-5M11 10v3M13 10v3M9 17h6", fill: "none" })
  );
});

export default NibHoodie;
