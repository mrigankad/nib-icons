import { createElement as h, forwardRef } from 'react';

export const NibTrending = forwardRef(function NibTrending({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17l6-6 4 4 9-9M15 6h6v6", fill: "none" })
  );
});

export default NibTrending;
