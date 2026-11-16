import { createElement as h, forwardRef } from 'react';

export const NibBacon = forwardRef(function NibBacon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9c3-3 5 1 8-2s5 1 8-2l2 3c-3 3-5-1-8 2s-5-1-8 2zM3 9l2 3M3 15c3-3 5 1 8-2s5 1 8-2l2 3c-3 3-5-1-8 2s-5-1-8 2z", fill: "none" })
  );
});

export default NibBacon;
