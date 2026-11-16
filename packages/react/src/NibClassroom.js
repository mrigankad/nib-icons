import { createElement as h, forwardRef } from 'react';

export const NibClassroom = forwardRef(function NibClassroom({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "2", width: "18", height: "9", rx: "1", fill: "none" }),
    h('circle', { cx: "6", cy: "15", r: "1.5", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "1.5", fill: "none" }),
    h('circle', { cx: "18", cy: "15", r: "1.5", fill: "none" }),
    h('path', { d: "M3.5 21a2.5 2.5 0 0 1 5 0M9.5 21a2.5 2.5 0 0 1 5 0M15.5 21a2.5 2.5 0 0 1 5 0M6 6h7", fill: "none" })
  );
});

export default NibClassroom;
