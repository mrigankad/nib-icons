import { createElement as h, forwardRef } from 'react';

export const NibOm = forwardRef(function NibOm({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 9c1-2 4-2 5 0s-1 3-3 3c3 0 5 2 4 5s-5 3-6 0M9 12c2-1 4-1 5 1s1 5 3 5 3-3 2-6c0-1.5-1.5-2-2.5-1M14 6c1 1 3 1 4 0M17 3h.01", fill: "none" })
  );
});

export default NibOm;
