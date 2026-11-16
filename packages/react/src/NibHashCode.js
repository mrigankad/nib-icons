import { createElement as h, forwardRef } from 'react';

export const NibHashCode = forwardRef(function NibHashCode({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 4l-4 8 4 8M17 4l4 8-4 8M9 10h6M9 14h6M11 8l-1 8M14 8l-1 8", fill: "none" })
  );
});

export default NibHashCode;
