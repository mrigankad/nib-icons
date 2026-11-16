import { createElement as h, forwardRef } from 'react';

export const NibBone = forwardRef(function NibBone({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 10l-7 7a2.5 2.5 0 1 1-3.5 3.5A2.5 2.5 0 1 1 3 17a2.5 2.5 0 1 1 3.5-3.5L13.5 6.5A2.5 2.5 0 1 1 17 3a2.5 2.5 0 1 1 3.5 3.5A2.5 2.5 0 1 1 17 10z", fill: "none" })
  );
});

export default NibBone;
