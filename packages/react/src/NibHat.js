import { createElement as h, forwardRef } from 'react';

export const NibHat = forwardRef(function NibHat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 15V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8M2 16c0-1 4-1.5 10-1.5S22 15 22 16s-4 2-10 2-10-1-10-2zM7 12h10", fill: "none" })
  );
});

export default NibHat;
