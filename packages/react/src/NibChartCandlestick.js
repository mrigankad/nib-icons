import { createElement as h, forwardRef } from 'react';

export const NibChartCandlestick = forwardRef(function NibChartCandlestick({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 3v4M7 15v6M17 5v3M17 17v2", fill: "none" }),
    h('rect', { x: "5", y: "7", width: "4", height: "8", rx: ".5", fill: "none" }),
    h('rect', { x: "15", y: "8", width: "4", height: "9", rx: ".5", fill: "none" })
  );
});

export default NibChartCandlestick;
