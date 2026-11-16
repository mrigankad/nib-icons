import { createElement as h, forwardRef } from 'react';

export const NibIron = forwardRef(function NibIron({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 18h18v-3a6 6 0 0 0-6-6H7l-1 3M8 6h9a2 2 0 0 1 2 2v1M8 14h.01M11 14h.01", fill: "none" })
  );
});

export default NibIron;
