import { createElement as h, forwardRef } from 'react';

export const NibMosque = forwardRef(function NibMosque({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 13a5 5 0 0 1 10 0zM12 8V5M6 13h12v8H6zM10 21v-3a2 2 0 0 1 4 0v3M3 21V9M2.5 9h1l-.5-3zM21 21V9M20.5 9h1l-.5-3zM2 21h20", fill: "none" })
  );
});

export default NibMosque;
