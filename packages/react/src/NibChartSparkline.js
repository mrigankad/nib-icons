import { createElement as h, forwardRef } from 'react';

export const NibChartSparkline = forwardRef(function NibChartSparkline({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 14l3-3 2 4 3-7 3 9 3-5 2 2 4-4", fill: "none" })
  );
});

export default NibChartSparkline;
