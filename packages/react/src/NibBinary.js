import { createElement as h, forwardRef } from 'react';

export const NibBinary = forwardRef(function NibBinary({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 4v6M4.5 4.5L6 4M17.5 14v6M16 14.5l1.5-.5", fill: "none" }),
    h('rect', { x: "14", y: "4", width: "4", height: "6", rx: "2", fill: "none" }),
    h('rect', { x: "4", y: "14", width: "4", height: "6", rx: "2", fill: "none" })
  );
});

export default NibBinary;
