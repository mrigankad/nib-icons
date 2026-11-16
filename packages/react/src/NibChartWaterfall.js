import { createElement as h, forwardRef } from 'react';

export const NibChartWaterfall = forwardRef(function NibChartWaterfall({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21h18", fill: "none" }),
    h('rect', { x: "4", y: "10", width: "3", height: "8", rx: ".5", fill: "none" }),
    h('rect', { x: "9", y: "6", width: "3", height: "4", rx: ".5", fill: "none" }),
    h('rect', { x: "14", y: "6", width: "3", height: "6", rx: ".5", fill: "none" }),
    h('rect', { x: "19", y: "12", width: "2", height: "6", rx: ".5", fill: "none" })
  );
});

export default NibChartWaterfall;
