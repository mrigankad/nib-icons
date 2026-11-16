import { createElement as h, forwardRef } from 'react';

export const NibChartBarStacked = forwardRef(function NibChartBarStacked({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21h18", fill: "none" }),
    h('rect', { x: "5", y: "9", width: "4", height: "9", rx: ".5", fill: "none" }),
    h('rect', { x: "15", y: "5", width: "4", height: "13", rx: ".5", fill: "none" }),
    h('path', { d: "M5 13h4M15 11h4", fill: "none" })
  );
});

export default NibChartBarStacked;
