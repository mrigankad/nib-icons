import { createElement as h, forwardRef } from 'react';

export const NibShoppingBag = forwardRef(function NibShoppingBag({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 7h14l1 14H4zM9 10V6a3 3 0 0 1 6 0v4", fill: "none" })
  );
});

export default NibShoppingBag;
