import { createElement as h, forwardRef } from 'react';

export const NibLayoutDashboard = forwardRef(function NibLayoutDashboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "6", rx: "1.5", fill: "none" }),
    h('rect', { x: "3", y: "11", width: "8", height: "10", rx: "1.5", fill: "none" }),
    h('rect', { x: "13", y: "11", width: "8", height: "10", rx: "1.5", fill: "none" }),
    h('path', { d: "M15.5 18l1.5-2 1.5 1 1-2", fill: "none" })
  );
});

export default NibLayoutDashboard;
