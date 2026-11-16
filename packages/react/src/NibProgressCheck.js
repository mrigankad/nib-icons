import { createElement as h, forwardRef } from 'react';

export const NibProgressCheck = forwardRef(function NibProgressCheck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 12a9 9 0 1 1-6.3-8.6M8.5 12l2.5 2.5L20 5.5", fill: "none" })
  );
});

export default NibProgressCheck;
