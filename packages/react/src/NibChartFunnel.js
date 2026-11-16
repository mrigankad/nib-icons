import { createElement as h, forwardRef } from 'react';

export const NibChartFunnel = forwardRef(function NibChartFunnel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18l-2 4H5zM6 11h12l-2 4H8zM9 18h6l-1 3h-4z", fill: "none" })
  );
});

export default NibChartFunnel;
