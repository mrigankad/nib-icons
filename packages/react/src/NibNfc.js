import { createElement as h, forwardRef } from 'react';

export const NibNfc = forwardRef(function NibNfc({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 9a4.5 4.5 0 0 1 0 6M9 6.5a8.5 8.5 0 0 1 0 11M13 4a12 12 0 0 1 0 16M17 2a15 15 0 0 1 0 20", fill: "none" })
  );
});

export default NibNfc;
