import { createElement as h, forwardRef } from 'react';

export const NibCastleGame = forwardRef(function NibCastleGame({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21V11h3V7l2-3 2 3v4h2V7l2-3 2 3v4h3v10zM10 21v-4a2 2 0 0 1 4 0v4M9 4V2l2 1M15 4V2l2 1", fill: "none" })
  );
});

export default NibCastleGame;
