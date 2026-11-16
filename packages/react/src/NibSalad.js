import { createElement as h, forwardRef } from 'react';

export const NibSalad = forwardRef(function NibSalad({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h18a9 9 0 0 1-18 0zM7 12c0-3 2-6 5-6M12 12c0-2 1-5 4-6 1 2 0 4-1 6M17 12a3 3 0 0 0-3-3", fill: "none" })
  );
});

export default NibSalad;
