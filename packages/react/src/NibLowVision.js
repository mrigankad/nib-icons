import { createElement as h, forwardRef } from 'react';

export const NibLowVision = forwardRef(function NibLowVision({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z", fill: "none", strokeDasharray: "3 2" }),
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" })
  );
});

export default NibLowVision;
