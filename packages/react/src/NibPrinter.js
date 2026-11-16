import { createElement as h, forwardRef } from 'react';

export const NibPrinter = forwardRef(function NibPrinter({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "8", width: "18", height: "9", rx: "2", fill: "none" }),
    h('path', { d: "M7 8V3h10v5M7 14h10v7H7zM17.5 11h.01", fill: "none" })
  );
});

export default NibPrinter;
