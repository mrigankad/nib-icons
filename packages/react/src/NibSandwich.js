import { createElement as h, forwardRef } from 'react';

export const NibSandwich = forwardRef(function NibSandwich({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 10l9-6 9 6zM3 14h18M3 14c2 1 3-1 5 0s3-1 5 0 3-1 5 0 2 0 3-1M3 18h18v2H3zM3 10v4M21 10v4", fill: "none" })
  );
});

export default NibSandwich;
