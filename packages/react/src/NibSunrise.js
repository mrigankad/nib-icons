import { createElement as h, forwardRef } from 'react';

export const NibSunrise = forwardRef(function NibSunrise({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 18a5 5 0 0 0-10 0M2 18h20M5 22h14M12 2v7M9 6l3-3 3 3M4.2 10.2l1.4 1.4M19.8 10.2l-1.4 1.4", fill: "none" })
  );
});

export default NibSunrise;
