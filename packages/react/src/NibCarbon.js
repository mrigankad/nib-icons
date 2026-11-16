import { createElement as h, forwardRef } from 'react';

export const NibCarbon = forwardRef(function NibCarbon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 19h11a4 4 0 0 0 .5-8A5.5 5.5 0 0 0 7 10a4.5 4.5 0 0 0-1 9zM11.5 12.5a2 2 0 1 0 0 3M15 12.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z", fill: "none" })
  );
});

export default NibCarbon;
