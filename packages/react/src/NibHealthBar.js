import { createElement as h, forwardRef } from 'react';

export const NibHealthBar = forwardRef(function NibHealthBar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 6.5a1.8 1.8 0 0 1 3 0 1.8 1.8 0 0 1 3 0c0 1.8-3 3.5-3 3.5S5 8.3 5 6.5z", fill: "none" }),
    h('rect', { x: "2", y: "13", width: "20", height: "6", rx: "1.5", fill: "none" }),
    h('path', { d: "M5 16h9", fill: "none" })
  );
});

export default NibHealthBar;
