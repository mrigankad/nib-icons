import { createElement as h, forwardRef } from 'react';

export const NibForecast = forwardRef(function NibForecast({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18h18M6 16l4-4 3 2", fill: "none" }),
    h('path', { d: "M13 14l6-7", fill: "none", strokeDasharray: "1.5 2.5" }),
    h('path', { d: "M13 3v16", fill: "none", strokeDasharray: "1 2" })
  );
});

export default NibForecast;
