import { createElement as h, forwardRef } from 'react';

export const NibWidget = forwardRef(function NibWidget({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "7", height: "7", rx: "1.5", fill: "none" }),
    h('rect', { x: "3", y: "14", width: "7", height: "7", rx: "1.5", fill: "none" }),
    h('rect', { x: "14", y: "14", width: "7", height: "7", rx: "1.5", fill: "none" }),
    h('path', { d: "M17.5 2.5l4 4-4 4-4-4z", fill: "none" })
  );
});

export default NibWidget;
