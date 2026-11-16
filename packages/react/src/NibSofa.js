import { createElement as h, forwardRef } from 'react';

export const NibSofa = forwardRef(function NibSofa({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 11a2 2 0 0 1 2 2v1h14v-1a2 2 0 1 1 2 2v3H3v-3a2 2 0 0 1 0-4zM5 18v2M19 18v2", fill: "none" })
  );
});

export default NibSofa;
