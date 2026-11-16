import { createElement as h, forwardRef } from 'react';

export const NibWindows = forwardRef(function NibWindows({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "3", width: "14", height: "13", rx: "2", fill: "none" }),
    h('path', { d: "M7 7.5h14M3 8v11a2 2 0 0 0 2 2h11", fill: "none" })
  );
});

export default NibWindows;
