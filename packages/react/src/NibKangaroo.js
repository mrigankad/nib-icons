import { createElement as h, forwardRef } from 'react';

export const NibKangaroo = forwardRef(function NibKangaroo({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3l1 2.5L5 7l1.5 1 2.5-.5c1 2 1 3 0 5-1 3 0 5 2 6l-2 2.5h5l.5-2c2.5 0 4-2 4-5 0-3-2-5-4.5-5.5M14 17c3 .5 5 2 7 5M9.5 11L7 12.5M8 5.5h.01", fill: "none" })
  );
});

export default NibKangaroo;
