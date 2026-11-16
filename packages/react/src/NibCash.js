import { createElement as h, forwardRef } from 'react';

export const NibCash = forwardRef(function NibCash({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "20", height: "12", rx: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2.5", fill: "none" }),
    h('path', { d: "M6 9.5v.01M18 14.5v.01", fill: "none" })
  );
});

export default NibCash;
