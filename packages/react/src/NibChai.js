import { createElement as h, forwardRef } from 'react';

export const NibChai = forwardRef(function NibChai({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 9h12l-2 12H8zM6.5 12h11M10 2c0 1.5 1 1.5 1 3M14 3c0 1.5 1 1.5 1 3", fill: "none" })
  );
});

export default NibChai;
