import { createElement as h, forwardRef } from 'react';

export const NibBasket = forwardRef(function NibBasket({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 10h18l-2 10H5zM7 10l4-6M17 10l-4-6M9 14v3M12 14v3M15 14v3", fill: "none" })
  );
});

export default NibBasket;
