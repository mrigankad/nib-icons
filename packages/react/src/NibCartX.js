import { createElement as h, forwardRef } from 'react';

export const NibCartX = forwardRef(function NibCartX({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 3h3l2.6 12.5h11l2.4-8.5H6M11.5 9.5l3 3M14.5 9.5l-3 3", fill: "none" }),
    h('circle', { cx: "9", cy: "20", r: "1.5", fill: "none" }),
    h('circle', { cx: "18", cy: "20", r: "1.5", fill: "none" })
  );
});

export default NibCartX;
