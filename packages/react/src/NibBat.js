import { createElement as h, forwardRef } from 'react';

export const NibBat = forwardRef(function NibBat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 9l-1-2-1 2C7 8 4 7 2 8c2 2 2 5 1 7 2-1 4 0 5 2 1-2 2-2 4-1 2-1 3-1 4 1 1-2 3-3 5-2-1-2-1-5 1-7-2-1-5 0-8 1l-1-2z", fill: "none" })
  );
});

export default NibBat;
