import { createElement as h, forwardRef } from 'react';

export const NibAlignMiddle = forwardRef(function NibAlignMiddle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h3.5M10 12h4M17.5 12H21", fill: "none" }),
    h('rect', { x: "6.5", y: "5", width: "3.5", height: "14", rx: "1", fill: "none" }),
    h('rect', { x: "14", y: "8", width: "3.5", height: "8", rx: "1", fill: "none" })
  );
});

export default NibAlignMiddle;
