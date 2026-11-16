import { createElement as h, forwardRef } from 'react';

export const NibHandshakeDeal = forwardRef(function NibHandshakeDeal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 11l4-4 4 2 3-2 5 1 4 3M2 11l3 3M22 11l-4 4-3 2-2-1.5M5 14l3 3 2 1M10 9l-2 3a1.5 1.5 0 0 0 2.5 1.5L13 11l4 4", fill: "none" })
  );
});

export default NibHandshakeDeal;
