import { createElement as h, forwardRef } from 'react';

export const NibChartLine = forwardRef(function NibChartLine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18h18M6 15l4-6 4 4 5-7", fill: "none" })
  );
});

export default NibChartLine;
