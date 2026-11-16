import { createElement as h, forwardRef } from 'react';

export const NibCards = forwardRef(function NibCards({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "8", y: "3", width: "12", height: "17", rx: "2", transform: "rotate(12 14 11.5)", fill: "none" }),
    h('path', { d: "M5 7.5l3-.6M4 18l-1.5-9a2 2 0 0 1 1.6-2.3", fill: "none" })
  );
});

export default NibCards;
