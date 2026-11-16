import { createElement as h, forwardRef } from 'react';

export const NibFunctionGraph = forwardRef(function NibFunctionGraph({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18h18", fill: "none" }),
    h('path', { d: "M6 18c2-9 4-12 6-6s4 3 7-6", fill: "none" })
  );
});

export default NibFunctionGraph;
