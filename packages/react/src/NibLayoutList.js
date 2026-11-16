import { createElement as h, forwardRef } from 'react';

export const NibLayoutList = forwardRef(function NibLayoutList({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "4", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "3", y: "10", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "3", y: "16", width: "4", height: "4", rx: "1", fill: "none" }),
    h('path', { d: "M11 6h10M11 12h10M11 18h10", fill: "none" })
  );
});

export default NibLayoutList;
