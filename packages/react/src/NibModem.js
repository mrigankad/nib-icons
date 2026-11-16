import { createElement as h, forwardRef } from 'react';

export const NibModem = forwardRef(function NibModem({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "10", width: "18", height: "10", rx: "2", fill: "none" }),
    h('path', { d: "M7 15h.01M11 15h.01M15 15h3M8 10V5M16 10V5", fill: "none" })
  );
});

export default NibModem;
