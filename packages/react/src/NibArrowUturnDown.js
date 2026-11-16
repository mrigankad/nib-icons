import { createElement as h, forwardRef } from 'react';

export const NibArrowUturnDown = forwardRef(function NibArrowUturnDown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 15l-5 5-5-5M9 20V9.5a5.5 5.5 0 0 1 11 0V13", fill: "none" })
  );
});

export default NibArrowUturnDown;
