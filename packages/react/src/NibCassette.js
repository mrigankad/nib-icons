import { createElement as h, forwardRef } from 'react';

export const NibCassette = forwardRef(function NibCassette({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "6", width: "18", height: "12", rx: "2", fill: "none" }),
    h('circle', { cx: "8.5", cy: "11", r: "1.5", fill: "none" }),
    h('circle', { cx: "15.5", cy: "11", r: "1.5", fill: "none" }),
    h('path', { d: "M8.5 9.5h7M7 18l1.5-3h7l1.5 3", fill: "none" })
  );
});

export default NibCassette;
