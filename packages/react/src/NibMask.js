import { createElement as h, forwardRef } from 'react';

export const NibMask = forwardRef(function NibMask({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 8c3-1 6-1 9 1 3-2 6-2 9-1v3c0 4-3 6-5 6-2 0-3-2-4-3-1 1-2 3-4 3-2 0-5-2-5-6zM7 11.5h2.5M14.5 11.5H17", fill: "none" })
  );
});

export default NibMask;
