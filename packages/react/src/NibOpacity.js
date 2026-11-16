import { createElement as h, forwardRef } from 'react';

export const NibOpacity = forwardRef(function NibOpacity({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M3 9h6v6H3M9 3v6h6V3M15 9h6v6h-6M9 15h6v6H9", fill: "none" })
  );
});

export default NibOpacity;
