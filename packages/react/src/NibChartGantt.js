import { createElement as h, forwardRef } from 'react';

export const NibChartGantt = forwardRef(function NibChartGantt({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18h18", fill: "none" }),
    h('rect', { x: "6", y: "5", width: "7", height: "3", rx: "1", fill: "none" }),
    h('rect', { x: "10", y: "10", width: "8", height: "3", rx: "1", fill: "none" }),
    h('rect', { x: "14", y: "15", width: "6", height: "3", rx: "1", fill: "none" })
  );
});

export default NibChartGantt;
