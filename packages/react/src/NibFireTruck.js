import { createElement as h, forwardRef } from 'react';

export const NibFireTruck = forwardRef(function NibFireTruck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 18H2v-7h12v7M14 11h4l4 4v3h-2M9 18h5M2 8l12-4M5 7l1 3M9 5.5l1 3", fill: "none" }),
    h('circle', { cx: "7", cy: "18", r: "2", fill: "none" }),
    h('circle', { cx: "17", cy: "18", r: "2", fill: "none" })
  );
});

export default NibFireTruck;
