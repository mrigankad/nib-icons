import { createElement as h, forwardRef } from 'react';

export const NibCycling = forwardRef(function NibCycling({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "17", r: "3.5", fill: "none" }),
    h('circle', { cx: "19", cy: "17", r: "3.5", fill: "none" }),
    h('circle', { cx: "15", cy: "4", r: "1.5", fill: "none" }),
    h('path', { d: "M5 17l4-6 4 3v5M9 11l4-3 2 3h3", fill: "none" })
  );
});

export default NibCycling;
