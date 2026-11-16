import { createElement as h, forwardRef } from 'react';

export const NibAlignBottom = forwardRef(function NibAlignBottom({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21h16", fill: "none" }),
    h('rect', { x: "6.5", y: "5", width: "3.5", height: "13", rx: "1", fill: "none" }),
    h('rect', { x: "14", y: "10", width: "3.5", height: "8", rx: "1", fill: "none" })
  );
});

export default NibAlignBottom;
