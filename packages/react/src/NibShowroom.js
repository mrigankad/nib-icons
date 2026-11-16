import { createElement as h, forwardRef } from 'react';

export const NibShowroom = forwardRef(function NibShowroom({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21h18M5 21V10l7-5 7 5v11", fill: "none" }),
    h('rect', { x: "8", y: "12", width: "8", height: "6", rx: "1", fill: "none" })
  );
});

export default NibShowroom;
