import { createElement as h, forwardRef } from 'react';

export const NibTape = forwardRef(function NibTape({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('circle', { cx: "8", cy: "11", r: "2", fill: "none" }),
    h('circle', { cx: "16", cy: "11", r: "2", fill: "none" }),
    h('path', { d: "M8 13h8M6 19l2-3h8l2 3", fill: "none" })
  );
});

export default NibTape;
