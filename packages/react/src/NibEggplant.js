import { createElement as h, forwardRef } from 'react';

export const NibEggplant = forwardRef(function NibEggplant({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 6c3 2 4 6 1 10s-9 7-12 4 0-9 4-12c2-1.5 5-3 7-2zM15 6c0-2 2-3 3-3M13 6c1-1 3-1 5 1", fill: "none" })
  );
});

export default NibEggplant;
