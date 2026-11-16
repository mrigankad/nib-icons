import { createElement as h, forwardRef } from 'react';

export const NibBanana = forwardRef(function NibBanana({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 13c2 5 7 8 12 7 3-1 5-3 5-5-3 2-7 2-10 0s-5-6-5-10L4 4.5c-1 3-1 6 0 8.5zM6 5l-1-2", fill: "none" })
  );
});

export default NibBanana;
