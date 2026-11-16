import { createElement as h, forwardRef } from 'react';

export const NibWheelchairAccess = forwardRef(function NibWheelchairAccess({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "2", width: "20", height: "20", rx: "3", fill: "none" }),
    h('circle', { cx: "11", cy: "6", r: "1.2", fill: "none" }),
    h('path', { d: "M11 8.5v4.5h4l2 4M11 10.5h3.5M9 11a4 4 0 1 0 5 5", fill: "none" })
  );
});

export default NibWheelchairAccess;
