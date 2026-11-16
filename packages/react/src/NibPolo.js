import { createElement as h, forwardRef } from 'react';

export const NibPolo = forwardRef(function NibPolo({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3l3 2 3-2 6 3-2 5-2-1v11H7V10l-2 1-2-5zM9 3l1 3 2-1 2 1 1-3M12 5v4", fill: "none" })
  );
});

export default NibPolo;
