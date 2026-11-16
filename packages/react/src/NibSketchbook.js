import { createElement as h, forwardRef } from 'react';

export const NibSketchbook = forwardRef(function NibSketchbook({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "3", width: "15", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M3 6.5h3M3 10.5h3M3 14.5h3M3 18.5h3M9 15c2-4 4-4 5-1s2 1 3-2", fill: "none" })
  );
});

export default NibSketchbook;
