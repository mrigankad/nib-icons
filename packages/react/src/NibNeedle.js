import { createElement as h, forwardRef } from 'react';

export const NibNeedle = forwardRef(function NibNeedle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21L18 6a2.5 2.5 0 0 1 3.5 3.5L6.5 24M17 7.5l1.5 1.5M18 3c-4 1-6 4-9 4", fill: "none" })
  );
});

export default NibNeedle;
