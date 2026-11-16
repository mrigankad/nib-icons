import { createElement as h, forwardRef } from 'react';

export const NibArrowUturnLeft = forwardRef(function NibArrowUturnLeft({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 14L4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 0 11H11", fill: "none" })
  );
});

export default NibArrowUturnLeft;
