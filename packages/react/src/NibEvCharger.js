import { createElement as h, forwardRef } from 'react';

export const NibEvCharger = forwardRef(function NibEvCharger({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "3", width: "10", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M10 7l-2 4h3l-2 4M14 10h3a2 2 0 0 1 2 2v4a1.5 1.5 0 0 0 3 0V8l-2-2M2 21h14", fill: "none" })
  );
});

export default NibEvCharger;
