import { createElement as h, forwardRef } from 'react';

export const NibArrowsDiverge = forwardRef(function NibArrowsDiverge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h7l6-6h4M10 12l6 6h4M17 3l3 3-3 3M17 15l3 3-3 3", fill: "none" })
  );
});

export default NibArrowsDiverge;
