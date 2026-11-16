import { createElement as h, forwardRef } from 'react';

export const NibSnake = forwardRef(function NibSnake({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 3a3 3 0 0 1 3 3c0 2-2 3-4 3H8a3 3 0 0 0 0 6h8a3 3 0 0 1 0 6H4M18 3h-2v3M21 7.5l1.5 1M21 8l1.5-1", fill: "none" })
  );
});

export default NibSnake;
