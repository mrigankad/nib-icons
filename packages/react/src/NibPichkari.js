import { createElement as h, forwardRef } from 'react';

export const NibPichkari = forwardRef(function NibPichkari({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "10", width: "11", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M17 12.5h3M6 12.5H3M3 10v5M10 15v4h3v-4M20 12.5l2-1M20 12.5l2 1", fill: "none" })
  );
});

export default NibPichkari;
