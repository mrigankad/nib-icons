import { createElement as h, forwardRef } from 'react';

export const NibWine = forwardRef(function NibWine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 2h10l1 6a6 6 0 0 1-12 0zM12 14v8M8 22h8M6.5 7h11", fill: "none" })
  );
});

export default NibWine;
