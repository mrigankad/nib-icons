import { createElement as h, forwardRef } from 'react';

export const NibChartHeatmap = forwardRef(function NibChartHeatmap({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M3 9h18M3 15h18M9 3v18M15 3v18", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
    h('circle', { cx: "18", cy: "6", r: "1.2", fill: "currentColor" }),
    h('circle', { cx: "6", cy: "18", r: "1.2", fill: "currentColor" })
  );
});

export default NibChartHeatmap;
