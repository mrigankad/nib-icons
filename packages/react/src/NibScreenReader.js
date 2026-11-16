import { createElement as h, forwardRef } from 'react';

export const NibScreenReader = forwardRef(function NibScreenReader({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "14", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M5 7h8M5 10h8M5 13h5M18 9a3 3 0 0 1 0 4M20 7a6 6 0 0 1 0 8M7 21h6", fill: "none" })
  );
});

export default NibScreenReader;
