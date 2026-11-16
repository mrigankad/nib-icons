import { createElement as h, forwardRef } from 'react';

export const NibFerry = forwardRef(function NibFerry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 14h20l-2 5H4zM4 14V9h16v5M7 9V6h10v3M7 11.5h.01M11 11.5h.01M15 11.5h.01M2 22c2-1.5 3 1 5 0s3 1 5 0 3 1 5 0 3 1 5 0", fill: "none" })
  );
});

export default NibFerry;
