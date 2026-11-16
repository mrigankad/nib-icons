import { createElement as h, forwardRef } from 'react';

export const NibRefinery = forwardRef(function NibRefinery({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M4 21V7h3v14M9 21v-9h6v9M17 21V4h3v17M4 11h3M17 9h3M17 14h3M5.5 7V4M18.5 4V2", fill: "none" })
  );
});

export default NibRefinery;
