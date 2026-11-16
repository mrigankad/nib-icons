import { createElement as h, forwardRef } from 'react';

export const NibTriangleDown = forwardRef(function NibTriangleDown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10.3 19a2 2 0 0 0 3.4 0l7-12A2 2 0 0 0 19 4H5a2 2 0 0 0-1.7 3z", fill: "none" })
  );
});

export default NibTriangleDown;
