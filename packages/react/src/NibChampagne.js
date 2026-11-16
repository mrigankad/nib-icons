import { createElement as h, forwardRef } from 'react';

export const NibChampagne = forwardRef(function NibChampagne({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3h5l-.5 6a2 2 0 0 1-4 0zM7.5 11v9M5 20h5M14 3h5l-.5 6a2 2 0 0 1-4 0zM16.5 11v9M14 20h5M10 5l4 0", fill: "none" })
  );
});

export default NibChampagne;
