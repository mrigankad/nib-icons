import { createElement as h, forwardRef } from 'react';

export const NibChartPie = forwardRef(function NibChartPie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 12A9 9 0 1 1 12 3v9z", fill: "none" }),
    h('path', { d: "M15 2.5A7 7 0 0 1 21.5 9H15z", fill: "none" })
  );
});

export default NibChartPie;
