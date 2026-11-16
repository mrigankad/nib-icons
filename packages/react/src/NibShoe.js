import { createElement as h, forwardRef } from 'react';

export const NibShoe = forwardRef(function NibShoe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17V9h4l3 3 8 2c3 .7 5 1.5 5 3v1H2zM2 19h20", fill: "none" })
  );
});

export default NibShoe;
