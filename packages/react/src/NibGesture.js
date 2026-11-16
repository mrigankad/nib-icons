import { createElement as h, forwardRef } from 'react';

export const NibGesture = forwardRef(function NibGesture({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 14V7a1.5 1.5 0 0 1 3 0v5h3a3 3 0 0 1 3 3v1a6 6 0 0 1-6 6h-1a5 5 0 0 1-4-2l-2-3M3 4h8M8 1l3 3-3 3", fill: "none" })
  );
});

export default NibGesture;
