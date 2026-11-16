import { createElement as h, forwardRef } from 'react';

export const NibLeash = forwardRef(function NibLeash({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "6", height: "9", rx: "3", fill: "none" }),
    h('path', { d: "M6 12v2c0 4 3 6 7 6h3", fill: "none" }),
    h('circle', { cx: "18.5", cy: "20", r: "2.5", fill: "none" })
  );
});

export default NibLeash;
