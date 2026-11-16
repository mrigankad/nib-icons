import { createElement as h, forwardRef } from 'react';

export const NibMoodBoard = forwardRef(function NibMoodBoard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "20", height: "18", rx: "2", fill: "none" }),
    h('rect', { x: "5", y: "6", width: "6", height: "6", rx: "1", fill: "none" }),
    h('circle', { cx: "16", cy: "9", r: "2.5", fill: "none" }),
    h('path', { d: "M5 15.5h14M5 18h8", fill: "none" })
  );
});

export default NibMoodBoard;
