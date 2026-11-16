import { createElement as h, forwardRef } from 'react';

export const NibGoat = forwardRef(function NibGoat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 7C8 4 6 3 4 3M15 7c1-3 3-4 5-4M8 7h8l-1 9-3 2-3-2zM12 18v4M10.5 11h.01M13.5 11h.01M8 9L4 10M16 9l4 1", fill: "none" })
  );
});

export default NibGoat;
