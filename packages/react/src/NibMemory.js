import { createElement as h, forwardRef } from 'react';

export const NibMemory = forwardRef(function NibMemory({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "10", rx: "1.5", fill: "none" }),
    h('path', { d: "M6 17v3M10 17v3M14 17v3M18 17v3M6 10.5v3M10 10.5v3M14 10.5v3M18 10.5v3", fill: "none" })
  );
});

export default NibMemory;
