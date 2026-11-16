import { createElement as h, forwardRef } from 'react';

export const NibHeadphones = forwardRef(function NibHeadphones({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 18v-6a9 9 0 0 1 18 0v6", fill: "none" }),
    h('rect', { x: "3", y: "14", width: "4", height: "7", rx: "1.5", fill: "none" }),
    h('rect', { x: "17", y: "14", width: "4", height: "7", rx: "1.5", fill: "none" })
  );
});

export default NibHeadphones;
