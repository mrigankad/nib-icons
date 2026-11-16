import { createElement as h, forwardRef } from 'react';

export const NibCrescent = forwardRef(function NibCrescent({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 3a9 9 0 1 0 0 18A7 7 0 0 1 15 3z", fill: "none" })
  );
});

export default NibCrescent;
