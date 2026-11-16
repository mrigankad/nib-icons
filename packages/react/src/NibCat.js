import { createElement as h, forwardRef } from 'react';

export const NibCat = forwardRef(function NibCat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3l3 4h8l3-4 1 9c0 5-4 9-8 9s-8-4-8-9zM9.5 12h.01M14.5 12h.01M11 15.5h2l-1 1zM2 14h4M2 17l4-1M22 14h-4M22 17l-4-1", fill: "none" })
  );
});

export default NibCat;
