import { createElement as h, forwardRef } from 'react';

export const NibCompare = forwardRef(function NibCompare({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "4", width: "7", height: "16", rx: "1.5", fill: "none" }),
    h('rect', { x: "14", y: "4", width: "7", height: "16", rx: "1.5", fill: "none" }),
    h('path', { d: "M5.5 15v-3M7.5 15V9M16.5 15v-5M18.5 15v-2", fill: "none" })
  );
});

export default NibCompare;
