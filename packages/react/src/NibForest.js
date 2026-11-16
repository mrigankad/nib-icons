import { createElement as h, forwardRef } from 'react';

export const NibForest = forwardRef(function NibForest({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3l-5 8h3l-4 6h12l-4-6h3zM8 17v4M16 7l3.5 5H17l3 5h-4M17 17v4M2 21h20", fill: "none" })
  );
});

export default NibForest;
