import { createElement as h, forwardRef } from 'react';

export const NibLoss = forwardRef(function NibLoss({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "14", r: "6", fill: "none" }),
    h('path', { d: "M7 14h4M15 4l4 5 3-3M19 10V4", fill: "none" })
  );
});

export default NibLoss;
