import { createElement as h, forwardRef } from 'react';

export const NibStrategy = forwardRef(function NibStrategy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3l4 4M7 3L3 7M17 17l4 4M21 17l-4 4", fill: "none" }),
    h('circle', { cx: "18", cy: "6", r: "2.5", fill: "none" }),
    h('path', { d: "M5 20c0-6 4-6 7-8s3-3 3.5-4", fill: "none", strokeDasharray: "2 2.5" })
  );
});

export default NibStrategy;
