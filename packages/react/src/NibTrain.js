import { createElement as h, forwardRef } from 'react';

export const NibTrain = forwardRef(function NibTrain({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "16", rx: "4", fill: "none" }),
    h('path', { d: "M5 10h14M8 22l2-4M16 22l-2-4M9 14h.01M15 14h.01M10 6h4", fill: "none" })
  );
});

export default NibTrain;
