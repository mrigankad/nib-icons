import { createElement as h, forwardRef } from 'react';

export const NibKettlebell = forwardRef(function NibKettlebell({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 9V6a4 4 0 0 1 8 0v3M6 21a7 7 0 1 1 12 0z", fill: "none" })
  );
});

export default NibKettlebell;
