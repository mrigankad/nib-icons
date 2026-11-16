import { createElement as h, forwardRef } from 'react';

export const NibOwl = forwardRef(function NibOwl({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3l2.5 2.5h9L19 3v10c0 5-3 8-7 8s-7-3-7-8z", fill: "none" }),
    h('circle', { cx: "9", cy: "10", r: "2", fill: "none" }),
    h('circle', { cx: "15", cy: "10", r: "2", fill: "none" }),
    h('path', { d: "M11 13l1 1.5 1-1.5M9 17l1 1M14 17l1 1", fill: "none" })
  );
});

export default NibOwl;
