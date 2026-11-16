import { createElement as h, forwardRef } from 'react';

export const NibArrowBarRight = forwardRef(function NibArrowBarRight({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 5v14M4 12h12M11 7l5 5-5 5", fill: "none" })
  );
});

export default NibArrowBarRight;
