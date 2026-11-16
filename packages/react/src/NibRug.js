import { createElement as h, forwardRef } from 'react';

export const NibRug = forwardRef(function NibRug({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "3", width: "14", height: "18", rx: "1", fill: "none" }),
    h('rect', { x: "8", y: "7", width: "8", height: "10", fill: "none" }),
    h('path', { d: "M7 1v2M10 1v2M14 1v2M17 1v2M7 21v2M10 21v2M14 21v2M17 21v2", fill: "none" })
  );
});

export default NibRug;
