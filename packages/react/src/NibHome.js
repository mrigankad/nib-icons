import { createElement as h, forwardRef } from 'react';

export const NibHome = forwardRef(function NibHome({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 10.5L12 3l9 7.5M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M10 21v-6h4v6", fill: "none" })
  );
});

export default NibHome;
