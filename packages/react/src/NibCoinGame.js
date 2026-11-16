import { createElement as h, forwardRef } from 'react';

export const NibCoinGame = forwardRef(function NibCoinGame({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "12", rx: "6", ry: "9", fill: "none" }),
    h('path', { d: "M12 7v10M14 3.5c3 1 4 4.5 4 8.5s-1 7.5-4 8.5", fill: "none" })
  );
});

export default NibCoinGame;
