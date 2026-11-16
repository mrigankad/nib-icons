import { createElement as h, forwardRef } from 'react';

export const NibTeapot = forwardRef(function NibTeapot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 11h12v4a6 6 0 0 1-12 0zM17 12h1.5a2.5 2.5 0 0 1 0 5H16M5 13L2 10M7 11a4 4 0 0 1 8 0M11 7V5M9 21h6", fill: "none" })
  );
});

export default NibTeapot;
