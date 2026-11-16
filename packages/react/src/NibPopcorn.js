import { createElement as h, forwardRef } from 'react';

export const NibPopcorn = forwardRef(function NibPopcorn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 9h14l-2 12H7zM9 9l.5 12M15 9l-.5 12M5 9a2 2 0 0 1 1-4 2.5 2.5 0 0 1 4-2 2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 1 4 2 2 2 0 0 1 1 4", fill: "none" })
  );
});

export default NibPopcorn;
