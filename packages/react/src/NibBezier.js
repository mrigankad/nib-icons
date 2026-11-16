import { createElement as h, forwardRef } from 'react';

export const NibBezier = forwardRef(function NibBezier({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3.5 17C5 10 9 7 12 7s7 3 8.5 10M6.5 7H17.5", fill: "none" }),
    h('rect', { x: "2", y: "17", width: "3", height: "3", rx: ".5", fill: "none" }),
    h('rect', { x: "19", y: "17", width: "3", height: "3", rx: ".5", fill: "none" }),
    h('circle', { cx: "5", cy: "7", r: "1.5", fill: "none" }),
    h('circle', { cx: "19", cy: "7", r: "1.5", fill: "none" })
  );
});

export default NibBezier;
