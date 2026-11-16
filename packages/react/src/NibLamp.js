import { createElement as h, forwardRef } from 'react';

export const NibLamp = forwardRef(function NibLamp({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3h8l3 8H5zM12 11v8M8 21h8", fill: "none" })
  );
});

export default NibLamp;
