import { createElement as h, forwardRef } from 'react';

export const NibCyclone = forwardRef(function NibCyclone({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 12a9 9 0 1 1-9-9M17 12a5 5 0 1 1-5-5M13 12a1 1 0 1 1-1-1", fill: "none" })
  );
});

export default NibCyclone;
