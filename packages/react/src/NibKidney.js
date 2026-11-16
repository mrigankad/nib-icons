import { createElement as h, forwardRef } from 'react';

export const NibKidney = forwardRef(function NibKidney({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3.500C5.500 5 4 9 4 12.500S6.500 20.500 10.500 20.500c2.500 0 3.500-2 2.500-3.500s-2.500-2-2.500-4 2-3 4-3c2.500 0 3.500-2 2.500-4C15.500 3 11.500 2.500 9 3.500z", fill: "none" })
  );
});

export default NibKidney;
