import { createElement as h, forwardRef } from 'react';

export const NibBezierCurve = forwardRef(function NibBezierCurve({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4.5 17.5C5 10 19 14 19.5 6.5M4 10.5h5M15 13.5h5", fill: "none" }),
    h('rect', { x: "2.5", y: "17.5", width: "3", height: "3", rx: ".5", fill: "none" }),
    h('rect', { x: "18.5", y: "3.5", width: "3", height: "3", rx: ".5", fill: "none" })
  );
});

export default NibBezierCurve;
