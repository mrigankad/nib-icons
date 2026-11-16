import { createElement as h, forwardRef } from 'react';

export const NibMicroscopeLab = forwardRef(function NibMicroscopeLab({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 2l4 0 0 2-1 6H8L7 4zM9 10v3M5 21h14M8 17h6a4 4 0 0 0 0-8M7 14h4", fill: "none" })
  );
});

export default NibMicroscopeLab;
