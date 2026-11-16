import { createElement as h, forwardRef } from 'react';

export const NibCpu = forwardRef(function NibCpu({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "5", width: "14", height: "14", rx: "2", fill: "none" }),
    h('rect', { x: "9", y: "9", width: "6", height: "6", rx: "1", fill: "none" }),
    h('path', { d: "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3", fill: "none" })
  );
});

export default NibCpu;
