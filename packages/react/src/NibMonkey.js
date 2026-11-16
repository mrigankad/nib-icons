import { createElement as h, forwardRef } from 'react';

export const NibMonkey = forwardRef(function NibMonkey({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "4", cy: "11", r: "2.5", fill: "none" }),
    h('circle', { cx: "20", cy: "11", r: "2.5", fill: "none" }),
    h('path', { d: "M6 11c0-5 3-8 6-8s6 3 6 8v2c0 5-3 8-6 8s-6-3-6-8z", fill: "none" }),
    h('path', { d: "M8 13a4 4 0 0 1 4-3 4 4 0 0 1 4 3c0 3-2 5-4 5s-4-2-4-5zM10 8h.01M14 8h.01M10.5 15c1 1 2 1 3 0", fill: "none" })
  );
});

export default NibMonkey;
