import { createElement as h, forwardRef } from 'react';

export const NibArrowReturn = forwardRef(function NibArrowReturn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 5v6a3 3 0 0 1-3 3H5M9 10l-4 4 4 4", fill: "none" })
  );
});

export default NibArrowReturn;
