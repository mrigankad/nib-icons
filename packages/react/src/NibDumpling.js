import { createElement as h, forwardRef } from 'react';

export const NibDumpling = forwardRef(function NibDumpling({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 16c0-6 5-10 10-10s10 4 10 10c-3 2-7 3-10 3s-7-1-10-3zM12 6l-1 3M8 7l1 3M16 7l-1 3M5 10l2 2M19 10l-2 2", fill: "none" })
  );
});

export default NibDumpling;
