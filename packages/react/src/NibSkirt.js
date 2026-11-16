import { createElement as h, forwardRef } from 'react';

export const NibSkirt = forwardRef(function NibSkirt({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 4h10v3H7zM7 7L3 20h18L17 7M10 7l-1 13M14 7l1 13", fill: "none" })
  );
});

export default NibSkirt;
