import { createElement as h, forwardRef } from 'react';

export const NibTouch = forwardRef(function NibTouch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 13V5a1.5 1.5 0 0 1 3 0v6h3a3 3 0 0 1 3 3v2a6 6 0 0 1-6 6h-1a5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.5-1.7L10 16M7 5.5a4.5 4.5 0 0 1 9 0", fill: "none" })
  );
});

export default NibTouch;
