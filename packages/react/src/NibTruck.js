import { createElement as h, forwardRef } from 'react';

export const NibTruck = forwardRef(function NibTruck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M1 5h13v12H1zM14 9h4l4 4v4h-8M5 17h0M9 17h3", fill: "none" }),
    h('circle', { cx: "5", cy: "18", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "18", r: "2", fill: "none" })
  );
});

export default NibTruck;
