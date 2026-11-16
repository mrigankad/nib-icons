import { createElement as h, forwardRef } from 'react';

export const NibPersonPresenting = forwardRef(function NibPersonPresenting({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6.5", cy: "5", r: "2.2", fill: "none" }),
    h('rect', { x: "4", y: "9", width: "5", height: "7", rx: "1.8", fill: "none" }),
    h('path', { d: "M5.5 16v5M7.5 16v5M4 11l-1.5 4M9 11l2 -.5", fill: "none" }),
    h('rect', { x: "11", y: "3.5", width: "10", height: "8", rx: "1", fill: "none" }),
    h('path', { d: "M16 11.5V21M13.5 21h5", fill: "none" })
  );
});

export default NibPersonPresenting;
