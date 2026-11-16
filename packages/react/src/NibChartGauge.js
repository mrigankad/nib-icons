import { createElement as h, forwardRef } from 'react';

export const NibChartGauge = forwardRef(function NibChartGauge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 16a9 9 0 0 1 18 0M6.5 16a5.5 5.5 0 0 1 11 0M12 16l-3-4M3 19h18", fill: "none" })
  );
});

export default NibChartGauge;
