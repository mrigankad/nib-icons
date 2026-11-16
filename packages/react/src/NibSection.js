import { createElement as h, forwardRef } from 'react';

export const NibSection = forwardRef(function NibSection({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18M3 20h18", fill: "none" }),
    h('rect', { x: "5", y: "8", width: "14", height: "8", rx: "1.5", fill: "none" })
  );
});

export default NibSection;
