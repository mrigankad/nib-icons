import { createElement as h, forwardRef } from 'react';

export const NibCaseUpper = forwardRef(function NibCaseUpper({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 18l4-12 4 12M3.3 14h5.4M13 18V6h4a3 3 0 0 1 0 6h-4M13 12h4.5a3 3 0 0 1 0 6H13", fill: "none" })
  );
});

export default NibCaseUpper;
