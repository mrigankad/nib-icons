import { createElement as h, forwardRef } from 'react';

export const NibLaptop = forwardRef(function NibLaptop({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "4", width: "16", height: "11", rx: "1.5", fill: "none" }),
    h('path', { d: "M2.5 19.5h19M3.5 15L2 19.5M20.5 15l1.5 4.5", fill: "none" })
  );
});

export default NibLaptop;
