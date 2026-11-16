import { createElement as h, forwardRef } from 'react';

export const NibOven = forwardRef(function NibOven({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M3 8h18M7 5.5h.01M10.5 5.5h.01M14 5.5h4", fill: "none" }),
    h('rect', { x: "6", y: "11", width: "12", height: "7", rx: "1", fill: "none" })
  );
});

export default NibOven;
