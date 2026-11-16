import { createElement as h, forwardRef } from 'react';

export const NibFlowChart = forwardRef(function NibFlowChart({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "7", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M17 3l4 4-4 4-4-4z", fill: "none" }),
    h('rect', { x: "8.5", y: "16", width: "7", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M6.5 8v4a1.5 1.5 0 0 0 1.5 1.5h4V16M17 11v1a1.5 1.5 0 0 1-1.5 1.5H12", fill: "none" })
  );
});

export default NibFlowChart;
