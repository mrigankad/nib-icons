import { createElement as h, forwardRef } from 'react';

export const NibHorse = forwardRef(function NibHorse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 21v-6L4 13l1-3 5-6 1-2 1 2h2c3 0 6 3 6 8v9M10 4c-1 3-1 5 1 7M7.5 9.5h.01", fill: "none" })
  );
});

export default NibHorse;
