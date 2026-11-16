import { createElement as h, forwardRef } from 'react';

export const NibBug = forwardRef(function NibBug({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 9a4 4 0 0 1 8 0v7a4 4 0 0 1-8 0zM12 12v8M4 9l4 1.5M20 9l-4 1.5M3 14h5M16 14h5M4 19l4-2M20 19l-4-2M9.5 5.5L8 3.5M14.5 5.5L16 3.5", fill: "none" })
  );
});

export default NibBug;
