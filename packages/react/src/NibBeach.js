import { createElement as h, forwardRef } from 'react';

export const NibBeach = forwardRef(function NibBeach({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 10a8 8 0 0 1 14-3zM11 7l3 10M2 19c3-2 6-2 10-2s7 0 10 2", fill: "none" })
  );
});

export default NibBeach;
