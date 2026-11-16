import { createElement as h, forwardRef } from 'react';

export const NibApi = forwardRef(function NibApi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M5 15l2-6 2 6M5.6 13.3h2.8M11.5 15V9H13a1.5 1.5 0 0 1 0 3h-1.5M17.5 9v6", fill: "none" })
  );
});

export default NibApi;
