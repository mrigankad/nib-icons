import { createElement as h, forwardRef } from 'react';

export const NibChalkboard = forwardRef(function NibChalkboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "20", height: "14", rx: "1", fill: "none" }),
    h('path', { d: "M2 20h20M6 8h6M6 12h4M15 15h4", fill: "none" })
  );
});

export default NibChalkboard;
