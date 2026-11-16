import { createElement as h, forwardRef } from 'react';

export const NibDog = forwardRef(function NibDog({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 5L4 4 3 10l3 1M17 5l3-1 1 6-3 1M6 8c0-2 3-4 6-4s6 2 6 4v6c0 4-3 7-6 7s-6-3-6-7zM10 11h.01M14 11h.01M10.5 16h3l-1.5 1.5z", fill: "none" })
  );
});

export default NibDog;
