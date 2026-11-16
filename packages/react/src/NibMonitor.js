import { createElement as h, forwardRef } from 'react';

export const NibMonitor = forwardRef(function NibMonitor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "13", rx: "1.5", fill: "none" }),
    h('path', { d: "M9 21l1-4h4l1 4M7 21h10", fill: "none" })
  );
});

export default NibMonitor;
