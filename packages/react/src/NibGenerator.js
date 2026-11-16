import { createElement as h, forwardRef } from 'react';

export const NibGenerator = forwardRef(function NibGenerator({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "11", rx: "2", fill: "none" }),
    h('path', { d: "M13 9l-2 4h3l-2 4M5 18v2M19 18v2M6 4h4M8 4v3", fill: "none" })
  );
});

export default NibGenerator;
