import { createElement as h, forwardRef } from 'react';

export const NibDeer = forwardRef(function NibDeer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 9L6 5V2M6 5L3 4M6 5l2-2M15 9l3-4V2M18 5l3-1M18 5l-2-2M8 9h8l-1 7-3 5-3-5zM10.5 12h.01M13.5 12h.01M8 10l-3 1M16 10l3 1", fill: "none" })
  );
});

export default NibDeer;
