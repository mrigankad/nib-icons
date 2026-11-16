import { createElement as h, forwardRef } from 'react';

export const NibDrone = forwardRef(function NibDrone({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "9", y: "9", width: "6", height: "6", rx: "1.5", fill: "none" }),
    h('path', { d: "M9.5 9.5L6.5 6.5M14.5 9.5l3-3M9.5 14.5l-3 3M14.5 14.5l3 3", fill: "none" }),
    h('circle', { cx: "5.5", cy: "5.5", r: "2.5", fill: "none" }),
    h('circle', { cx: "18.5", cy: "5.5", r: "2.5", fill: "none" }),
    h('circle', { cx: "5.5", cy: "18.5", r: "2.5", fill: "none" }),
    h('circle', { cx: "18.5", cy: "18.5", r: "2.5", fill: "none" })
  );
});

export default NibDrone;
