import { createElement as h, forwardRef } from 'react';

export const NibLayoutCards = forwardRef(function NibLayoutCards({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "8", height: "14", rx: "1.5", fill: "none" }),
    h('rect', { x: "13", y: "5", width: "8", height: "14", rx: "1.5", fill: "none" }),
    h('path', { d: "M5.5 15h3M15.5 15h3", fill: "none" })
  );
});

export default NibLayoutCards;
