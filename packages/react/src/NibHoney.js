import { createElement as h, forwardRef } from 'react';

export const NibHoney = forwardRef(function NibHoney({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 6h10M8 6V4h8v2M6 9a2 2 0 0 1 2-3h8a2 2 0 0 1 2 3v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM6 11c2 0 2 2 4 2s2-2 4-2 2 2 4 2", fill: "none" })
  );
});

export default NibHoney;
