import { createElement as h, forwardRef } from 'react';

export const NibSortAlpha = forwardRef(function NibSortAlpha({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3.5 10l2.5-6 2.5 6M4.3 8h3.4M3.5 14h5l-5 6h5M17 5v14M14 16l3 3 3-3", fill: "none" })
  );
});

export default NibSortAlpha;
