import { createElement as h, forwardRef } from 'react';

export const NibIceCream = forwardRef(function NibIceCream({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 11l5 11 5-11M7 11a5 5 0 0 1 10 0M6 11h12M9.5 14.5l5-2M10.5 17.5l3-1.5", fill: "none" })
  );
});

export default NibIceCream;
