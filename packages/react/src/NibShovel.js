import { createElement as h, forwardRef } from 'react';

export const NibShovel = forwardRef(function NibShovel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 2l4 4M20 4l-9 9M11 13l-2-2-5 5a3 3 0 0 0 4 4l5-5z", fill: "none" })
  );
});

export default NibShovel;
