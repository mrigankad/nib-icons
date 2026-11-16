import { createElement as h, forwardRef } from 'react';

export const NibChisel = forwardRef(function NibChisel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 2l7 7-3 3-7-7zM12 5l-8 8 1 3 3 1 8-8M4 13l-2 9 9-2", fill: "none" })
  );
});

export default NibChisel;
