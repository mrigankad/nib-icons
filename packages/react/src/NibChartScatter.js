import { createElement as h, forwardRef } from 'react';

export const NibChartScatter = forwardRef(function NibChartScatter({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18h18", fill: "none" }),
    h('circle', { cx: "8", cy: "15", r: "1", fill: "none" }),
    h('circle', { cx: "11", cy: "10", r: "1", fill: "none" }),
    h('circle', { cx: "15", cy: "13", r: "1", fill: "none" }),
    h('circle', { cx: "17", cy: "7", r: "1", fill: "none" }),
    h('circle', { cx: "19", cy: "15", r: "1", fill: "none" })
  );
});

export default NibChartScatter;
