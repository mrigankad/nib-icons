import { createElement as h, forwardRef } from 'react';

export const NibFries = forwardRef(function NibFries({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 10h14l-2 11H7zM7 10V4M10 10V3M13 10V3.5M16 10V5M9 14a3 3 0 0 0 6 0", fill: "none" })
  );
});

export default NibFries;
