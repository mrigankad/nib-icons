import { createElement as h, forwardRef } from 'react';

export const NibChessKing = forwardRef(function NibChessKing({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v5M10 4h4M6 21h12M7 18h10l-1-5c2-1 3-2 3-4a3 3 0 0 0-6 0h-2a3 3 0 0 0-6 0c0 2 1 3 3 4z", fill: "none" })
  );
});

export default NibChessKing;
