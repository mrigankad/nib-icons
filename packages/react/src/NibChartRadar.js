import { createElement as h, forwardRef } from 'react';

export const NibChartRadar = forwardRef(function NibChartRadar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l9.5 7-3.6 11H6.1L2.5 9z", fill: "none" }),
    h('path', { d: "M12 7l5 3-2 6H9.5L8 11z", fill: "none" })
  );
});

export default NibChartRadar;
