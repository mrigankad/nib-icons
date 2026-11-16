import { createElement as h, forwardRef } from 'react';

export const NibHandbag = forwardRef(function NibHandbag({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 9h16l-1 12H5zM8 9V7a4 4 0 0 1 8 0v2M4 13h16", fill: "none" })
  );
});

export default NibHandbag;
