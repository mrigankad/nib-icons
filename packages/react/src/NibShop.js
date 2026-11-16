import { createElement as h, forwardRef } from 'react';

export const NibShop = forwardRef(function NibShop({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 9l3-5h14l3 5zM4 9v12h16V9M10 21v-6h4v6", fill: "none" })
  );
});

export default NibShop;
