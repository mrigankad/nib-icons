import { createElement as h, forwardRef } from 'react';

export const NibHedgehog = forwardRef(function NibHedgehog({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 17c0-5 4-9 9-9 5 0 8 4 8 9zM4 17l-2 .5 1.5-3M13 8V5M9 9L8 6M17 9l1-3M20 12l2-1M6 12l-2-2M7 17h.01", fill: "none" })
  );
});

export default NibHedgehog;
