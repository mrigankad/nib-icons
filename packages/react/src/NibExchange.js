import { createElement as h, forwardRef } from 'react';

export const NibExchange = forwardRef(function NibExchange({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "8", height: "8", rx: "1", fill: "none" }),
    h('rect', { x: "14", y: "13", width: "8", height: "8", rx: "1", fill: "none" }),
    h('path', { d: "M13 7h6v3M17 8l2 2 2-2M11 17H5v-3M7 16l-2-2-2 2", fill: "none" })
  );
});

export default NibExchange;
