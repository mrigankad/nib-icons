import { createElement as h, forwardRef } from 'react';

export const NibChartCombo = forwardRef(function NibChartCombo({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21h18M6 18v-4M11 18v-6M16 18v-3M4 10l5-4 5 3 6-5", fill: "none" })
  );
});

export default NibChartCombo;
