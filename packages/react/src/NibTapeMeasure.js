import { createElement as h, forwardRef } from 'react';

export const NibTapeMeasure = forwardRef(function NibTapeMeasure({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11a7 7 0 1 1 7 7H3zM17 15h5v3h-5M10 11h.01M19 15v1.5", fill: "none" }),
    h('circle', { cx: "10", cy: "11", r: "3", fill: "none" })
  );
});

export default NibTapeMeasure;
