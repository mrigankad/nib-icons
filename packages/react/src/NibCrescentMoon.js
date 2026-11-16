import { createElement as h, forwardRef } from 'react';

export const NibCrescentMoon = forwardRef(function NibCrescentMoon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3a9 9 0 1 0 6 15A7.5 7.5 0 1 1 14 3zM18 7l.7 1.6 1.7.2-1.3 1.1.4 1.7-1.5-.9-1.5.9.4-1.7-1.3-1.1 1.7-.2z", fill: "none" })
  );
});

export default NibCrescentMoon;
