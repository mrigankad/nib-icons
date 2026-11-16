import { createElement as h, forwardRef } from 'react';

export const NibTabs = forwardRef(function NibTabs({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "8", width: "18", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M3 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M11 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", fill: "none" })
  );
});

export default NibTabs;
