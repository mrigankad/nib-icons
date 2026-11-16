import { createElement as h, forwardRef } from 'react';

export const NibCashier = forwardRef(function NibCashier({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21h18M4 21l1-8h14l1 8M8 13V5h5v8M14 9h5v4M7 17h.01M10 17h.01M14 17h.01M17 17h.01", fill: "none" })
  );
});

export default NibCashier;
