import { createElement as h, forwardRef } from 'react';

export const NibEBike = forwardRef(function NibEBike({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5.5", cy: "17", r: "3.5", fill: "none" }),
    h('circle', { cx: "18.5", cy: "17", r: "3.5", fill: "none" }),
    h('path', { d: "M5.5 17l4-7h6l3 7M9.5 10l3 7h-7M15 6h2l-1.5 4M11 2l-1.5 3h2.5L10.5 8", fill: "none" })
  );
});

export default NibEBike;
