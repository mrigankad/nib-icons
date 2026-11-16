import { createElement as h, forwardRef } from 'react';

export const NibChild = forwardRef(function NibChild({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7", r: "2.8", fill: "none" }),
    h('rect', { x: "9", y: "11.5", width: "6", height: "5", rx: "1.8", fill: "none" }),
    h('path', { d: "M10.8 16.5v4.5M13.2 16.5v4.5M9 13l-2.5 3.5M15 13l2.5 3.5", fill: "none" })
  );
});

export default NibChild;
