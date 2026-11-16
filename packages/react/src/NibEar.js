import { createElement as h, forwardRef } from 'react';

export const NibEar = forwardRef(function NibEar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 9a6 6 0 0 1 12 0c0 3-2 4-3 6s-1 4-3.5 5.5S7 21 7 19M9 9a3 3 0 0 1 6 0c0 1.5-1 2-2 3", fill: "none" })
  );
});

export default NibEar;
