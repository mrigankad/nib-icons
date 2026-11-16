import { createElement as h, forwardRef } from 'react';

export const NibBackpackSchool = forwardRef(function NibBackpackSchool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 10a7 7 0 0 1 14 0v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 4V3a3 3 0 0 1 6 0v1M8 14h8v5H8zM12 14v2", fill: "none" })
  );
});

export default NibBackpackSchool;
