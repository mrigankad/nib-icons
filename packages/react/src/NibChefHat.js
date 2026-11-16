import { createElement as h, forwardRef } from 'react';

export const NibChefHat = forwardRef(function NibChefHat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 14a4 4 0 0 1 0-8 5 5 0 0 1 12 0 4 4 0 0 1 0 8v6H6zM6 17h12", fill: "none" })
  );
});

export default NibChefHat;
