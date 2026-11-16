import { createElement as h, forwardRef } from 'react';

export const NibWorkflow = forwardRef(function NibWorkflow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "6", height: "5", rx: "1", fill: "none" }),
    h('rect', { x: "16", y: "3", width: "6", height: "5", rx: "1", fill: "none" }),
    h('rect', { x: "9", y: "16", width: "6", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M8 5.5h8M5 8v4h7v4M19 8v4h-7", fill: "none" })
  );
});

export default NibWorkflow;
