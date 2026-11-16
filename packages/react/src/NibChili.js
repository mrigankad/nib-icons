import { createElement as h, forwardRef } from 'react';

export const NibChili = forwardRef(function NibChili({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 7c2 2 2 6-1 10s-9 6-13 5c4-2 7-5 8-9 1-3 3-6 6-6zM17 7c0-2 1-4 3-5M15 7.5c1-1 3-1 4 0", fill: "none" })
  );
});

export default NibChili;
