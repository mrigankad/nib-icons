import { createElement as h, forwardRef } from 'react';

export const NibCow = forwardRef(function NibCow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 6L3 3M18 6l3-3M3 8h4M17 8h4M7 6h10v8H7z", fill: "none" }),
    h('rect', { x: "6", y: "14", width: "12", height: "7", rx: "3.5", fill: "none" }),
    h('path', { d: "M10 10h.01M14 10h.01M10 17.5h.01M14 17.5h.01", fill: "none" })
  );
});

export default NibCow;
