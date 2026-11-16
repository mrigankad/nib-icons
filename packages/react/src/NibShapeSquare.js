import { createElement as h, forwardRef } from 'react';

export const NibShapeSquare = forwardRef(function NibShapeSquare({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5.5", y: "5.5", width: "13", height: "13", rx: "1", fill: "none" }),
    h('path', { d: "M3 3h.01M21 3h.01M3 21h.01M21 21h.01", fill: "none" })
  );
});

export default NibShapeSquare;
