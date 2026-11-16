import { createElement as h, forwardRef } from 'react';

export const NibCherry = forwardRef(function NibCherry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "17", r: "4", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "4", fill: "none" }),
    h('path', { d: "M7 13c1-5 4-8 8-10M17 13c-1-4-1-7-2-10M15 3c2 0 4 1 5 3-2 0-4-1-5-3z", fill: "none" })
  );
});

export default NibCherry;
