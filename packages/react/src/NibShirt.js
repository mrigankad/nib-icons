import { createElement as h, forwardRef } from 'react';

export const NibShirt = forwardRef(function NibShirt({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3l3 3 3-3 6 3-2 5-2-1v11H7V10l-2 1-2-5zM12 6v15M9 3l1 4M15 3l-1 4", fill: "none" })
  );
});

export default NibShirt;
