import { createElement as h, forwardRef } from 'react';

export const NibHouse = forwardRef(function NibHouse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11l9-8 9 8M5 9v12h14V9M10 21v-6h4v6", fill: "none" })
  );
});

export default NibHouse;
