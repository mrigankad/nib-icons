import { createElement as h, forwardRef } from 'react';

export const NibTreasury = forwardRef(function NibTreasury({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "9", width: "18", height: "11", rx: "1.5", fill: "none" }),
    h('path', { d: "M3 13h18M7 9V6a5 5 0 0 1 10 0v3M11 16.5h2", fill: "none" })
  );
});

export default NibTreasury;
