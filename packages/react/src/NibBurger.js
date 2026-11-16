import { createElement as h, forwardRef } from 'react';

export const NibBurger = forwardRef(function NibBurger({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 10a8 6 0 0 1 16 0zM3 13h18M4 13c1 1.5 2 1.5 3 0s2 1.5 3 0 2 1.5 3 0 2 1.5 3 0 2 1.5 3 0M4 17h16v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zM9 7h.01M14 6.5h.01", fill: "none" })
  );
});

export default NibBurger;
