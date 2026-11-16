import { createElement as h, forwardRef } from 'react';

export const NibCupcake = forwardRef(function NibCupcake({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 12l2 9h10l2-9M5 12a3 3 0 0 1 1-5 3 3 0 0 1 4-3 3 3 0 0 1 4 0 3 3 0 0 1 4 3 3 3 0 0 1 1 5zM10 12l.5 9M14 12l-.5 9", fill: "none" })
  );
});

export default NibCupcake;
