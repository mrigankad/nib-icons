import { createElement as h, forwardRef } from 'react';

export const NibVisa = forwardRef(function NibVisa({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('circle', { cx: "15", cy: "15", r: "3.5", fill: "none" }),
    h('path', { d: "M13.5 15l1 1 2-2M7 7h6M7 10h4", fill: "none" })
  );
});

export default NibVisa;
