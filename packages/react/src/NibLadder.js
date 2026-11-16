import { createElement as h, forwardRef } from 'react';

export const NibLadder = forwardRef(function NibLadder({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 2L5 22M17 2l2 20M6.6 6h10.8M6.2 10h11.6M5.8 14h12.4M5.4 18h13.2", fill: "none" })
  );
});

export default NibLadder;
