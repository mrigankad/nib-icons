import { createElement as h, forwardRef } from 'react';

export const NibCrossShape = forwardRef(function NibCrossShape({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3l6 6 6-6 3 3-6 6 6 6-3 3-6-6-6 6-3-3 6-6-6-6z", fill: "none" })
  );
});

export default NibCrossShape;
