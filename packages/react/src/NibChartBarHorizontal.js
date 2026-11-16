import { createElement as h, forwardRef } from 'react';

export const NibChartBarHorizontal = forwardRef(function NibChartBarHorizontal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18M7 6h6M7 10h12M7 14h8M7 18h4", fill: "none" })
  );
});

export default NibChartBarHorizontal;
