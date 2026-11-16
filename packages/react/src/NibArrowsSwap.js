import { createElement as h, forwardRef } from 'react';

export const NibArrowsSwap = forwardRef(function NibArrowsSwap({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 20V4M3 8l4-4 4 4M17 4v16M13 16l4 4 4-4", fill: "none" })
  );
});

export default NibArrowsSwap;
