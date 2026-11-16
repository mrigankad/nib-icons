import { createElement as h, forwardRef } from 'react';

export const NibChess = forwardRef(function NibChess({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 21h10M9 18h8l-1-4h-6zM10 14c-1-3 0-5 3-8l-3-1 2-2c3 0 6 2 6 6 0 2-1 3-2 5M11 9h.01", fill: "none" })
  );
});

export default NibChess;
