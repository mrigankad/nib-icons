import { createElement as h, forwardRef } from 'react';

export const NibShelf = forwardRef(function NibShelf({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18M21 3v18M3 9h18M3 15h18M3 21h18M6 9V5.5M8.5 9V5M11 9V6.5M14 15v-3M16.5 15v-4", fill: "none" })
  );
});

export default NibShelf;
