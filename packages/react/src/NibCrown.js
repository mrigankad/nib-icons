import { createElement as h, forwardRef } from 'react';

export const NibCrown = forwardRef(function NibCrown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7l4 5 5-7 5 7 4-5-2 12H5zM5 21h14", fill: "none" })
  );
});

export default NibCrown;
