import { createElement as h, forwardRef } from 'react';

export const NibArrowsRotate = forwardRef(function NibArrowsRotate({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 12a8 8 0 1 1-2.34-5.66L20 8.5M20 3.5v5h-5", fill: "none" })
  );
});

export default NibArrowsRotate;
