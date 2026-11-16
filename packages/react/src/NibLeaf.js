import { createElement as h, forwardRef } from 'react';

export const NibLeaf = forwardRef(function NibLeaf({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 19C5 9 11 4 20 4c0 9-5 15-15 15zM5 19l9-9", fill: "none" })
  );
});

export default NibLeaf;
