import { createElement as h, forwardRef } from 'react';

export const NibTrolley = forwardRef(function NibTrolley({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3h2.5l3 13H21", fill: "none" }),
    h('rect', { x: "10", y: "6", width: "8", height: "7", rx: "1", fill: "none" }),
    h('circle', { cx: "9.5", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "19", r: "2", fill: "none" })
  );
});

export default NibTrolley;
