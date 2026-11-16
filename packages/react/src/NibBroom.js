import { createElement as h, forwardRef } from 'react';

export const NibBroom = forwardRef(function NibBroom({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 2L12 12M10 10l4 4-4 8-8-8zM5 17l3-3M7 19l3-3", fill: "none" })
  );
});

export default NibBroom;
