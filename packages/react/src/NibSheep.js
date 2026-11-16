import { createElement as h, forwardRef } from 'react';

export const NibSheep = forwardRef(function NibSheep({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 16a3 3 0 0 1-2-5 3 3 0 0 1 3-4 3 3 0 0 1 5 0 3 3 0 0 1 4 2 3 3 0 0 1 0 5 3 3 0 0 1-4 2H9a3 3 0 0 1-1 0z", fill: "none" }),
    h('path', { d: "M6 11H4a2 2 0 0 1 0-4h2M9 17v4M15 17v4M3.5 9h.01", fill: "none" })
  );
});

export default NibSheep;
