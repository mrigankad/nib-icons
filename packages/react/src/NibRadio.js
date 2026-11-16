import { createElement as h, forwardRef } from 'react';

export const NibRadio = forwardRef(function NibRadio({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M6 7l12-5M15 11h3M15 14h3M15 17h3", fill: "none" }),
    h('circle', { cx: "8", cy: "14", r: "3", fill: "none" })
  );
});

export default NibRadio;
