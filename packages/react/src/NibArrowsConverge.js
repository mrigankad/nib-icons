import { createElement as h, forwardRef } from 'react';

export const NibArrowsConverge = forwardRef(function NibArrowsConverge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h4l6 6h8M3 18h4l6-6M18 9l3 3-3 3", fill: "none" })
  );
});

export default NibArrowsConverge;
