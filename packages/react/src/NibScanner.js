import { createElement as h, forwardRef } from 'react';

export const NibScanner = forwardRef(function NibScanner({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "12", width: "20", height: "8", rx: "2", fill: "none" }),
    h('path', { d: "M4 12l1-4h14l1 4M6 16h8M17.5 16h.01M8 5l8-1", fill: "none" })
  );
});

export default NibScanner;
