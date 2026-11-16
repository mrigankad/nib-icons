import { createElement as h, forwardRef } from 'react';

export const NibCharger = forwardRef(function NibCharger({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "8", width: "11", height: "13", rx: "2", fill: "none" }),
    h('path', { d: "M7.5 8V4M11.5 8V4M15 14h2a2 2 0 0 0 2-2V3M10.5 11l-2 3h2.5l-2 3", fill: "none" })
  );
});

export default NibCharger;
