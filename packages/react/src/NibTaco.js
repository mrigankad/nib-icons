import { createElement as h, forwardRef } from 'react';

export const NibTaco = forwardRef(function NibTaco({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 18a9 9 0 0 1 18 0z", fill: "none" }),
    h('path', { d: "M6.5 14c1-2.5 3-4 5.5-4s4.500 1.500 5.500 4", fill: "none" })
  );
});

export default NibTaco;
