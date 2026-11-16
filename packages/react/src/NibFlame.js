import { createElement as h, forwardRef } from 'react';

export const NibFlame = forwardRef(function NibFlame({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22a7 7 0 0 0 7-7c0-5-4-7-5-12-2 2-3 4-3 6-1-1-2-2-2-3-2 2-4 5-4 9a7 7 0 0 0 7 7zM12 22a3 3 0 0 1-3-3c0-2 2-3 3-5 1 2 3 3 3 5a3 3 0 0 1-3 3z", fill: "none" })
  );
});

export default NibFlame;
