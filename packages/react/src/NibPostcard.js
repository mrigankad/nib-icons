import { createElement as h, forwardRef } from 'react';

export const NibPostcard = forwardRef(function NibPostcard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('rect', { x: "16", y: "8", width: "3", height: "3.5", rx: ".5", fill: "none" }),
    h('path', { d: "M13 8v8M5 9h5M5 12h5M5 15h3", fill: "none" })
  );
});

export default NibPostcard;
