import { createElement as h, forwardRef } from 'react';

export const NibChartHistogram = forwardRef(function NibChartHistogram({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 20h18M4 20v-5h4v5M8 20V9h4v11M12 20V6h4v14M16 20v-8h4v8", fill: "none" })
  );
});

export default NibChartHistogram;
