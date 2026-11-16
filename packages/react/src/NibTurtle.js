import { createElement as h, forwardRef } from 'react';

export const NibTurtle = forwardRef(function NibTurtle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 15a8 7 0 0 1 16 0zM3 15h16M8 15l3-6 3 6M19 13h1.5a1.5 1.5 0 0 0 0-3H19M6 15l-1 3M16 15l1 3M3 15l-1.5 1", fill: "none" })
  );
});

export default NibTurtle;
