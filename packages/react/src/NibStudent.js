import { createElement as h, forwardRef } from 'react';

export const NibStudent = forwardRef(function NibStudent({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 6l8-3 8 3-8 3zM8 7.5V10a4 4 0 0 0 8 0V7.5M5 21a7 7 0 0 1 14 0M20 6v4", fill: "none" })
  );
});

export default NibStudent;
