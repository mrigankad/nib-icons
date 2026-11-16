import { createElement as h, forwardRef } from 'react';

export const NibReel = forwardRef(function NibReel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "4", fill: "none" }),
    h('path', { d: "M3 8h18M8 3l2.5 5M14 3l2.5 5M10 12v5l4.5-2.5z", fill: "none" })
  );
});

export default NibReel;
