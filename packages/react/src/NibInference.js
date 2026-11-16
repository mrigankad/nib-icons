import { createElement as h, forwardRef } from 'react';

export const NibInference = forwardRef(function NibInference({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12h5M17 12h5M19 9l3 3-3 3", fill: "none" }),
    h('rect', { x: "7", y: "7", width: "10", height: "10", rx: "2", fill: "none" }),
    h('path', { d: "M13 9.5l-2 3h2.5l-2 2.5", fill: "none" })
  );
});

export default NibInference;
