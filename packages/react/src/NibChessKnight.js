import { createElement as h, forwardRef } from 'react';

export const NibChessKnight = forwardRef(function NibChessKnight({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 21h12M7 18h10M9 18c-1-3 0-5 3-8l-4-1 2-3 2-1c4 0 6 3 6 7 0 2-1 4-2 6M11 6.5h.01", fill: "none" })
  );
});

export default NibChessKnight;
