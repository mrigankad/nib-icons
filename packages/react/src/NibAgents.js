import { createElement as h, forwardRef } from 'react';

export const NibAgents = forwardRef(function NibAgents({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "9", height: "8", rx: "2.5", fill: "none" }),
    h('rect', { x: "13", y: "5", width: "9", height: "8", rx: "2.5", fill: "none" }),
    h('path', { d: "M5 9h.01M8 9h.01M16 9h.01M19 9h.01M2 21a4.5 3.5 0 0 1 9 0M13 21a4.5 3.5 0 0 1 9 0", fill: "none" })
  );
});

export default NibAgents;
