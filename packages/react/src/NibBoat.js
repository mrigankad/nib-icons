import { createElement as h, forwardRef } from 'react';

export const NibBoat = forwardRef(function NibBoat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 14h20l-3 5H5zM8 14V9h6l2 5M2 22c2-1.5 3 1 5 0s3 1 5 0 3 1 5 0 3 1 5 0", fill: "none" })
  );
});

export default NibBoat;
