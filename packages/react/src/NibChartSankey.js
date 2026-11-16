import { createElement as h, forwardRef } from 'react';

export const NibChartSankey = forwardRef(function NibChartSankey({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4v16M21 3v7M21 14v7M3 6c9 0 9-2 18-2M3 12c9 0 9 6 18 6M3 18c9 0 9-11 18-11", fill: "none" })
  );
});

export default NibChartSankey;
