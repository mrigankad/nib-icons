import { createElement as h, forwardRef } from 'react';

export const NibEcg = forwardRef(function NibEcg({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M5 12h3l1.5-3 2 6 2-8 1.5 5H19", fill: "none" })
  );
});

export default NibEcg;
