import { createElement as h, forwardRef } from 'react';

export const NibCarrot = forwardRef(function NibCarrot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 9L3 21l1-6 8-9c1-1 3-1 4 0s1 2 0 3zM8 13l2 2M10 10l2 2M16 8l4-4M17 6l4 1M15 7l-1-4", fill: "none" })
  );
});

export default NibCarrot;
