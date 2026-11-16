import { createElement as h, forwardRef } from 'react';

export const NibWind = forwardRef(function NibWind({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3", fill: "none" })
  );
});

export default NibWind;
