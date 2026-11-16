import { createElement as h, forwardRef } from 'react';

export const NibSunsetTime = forwardRef(function NibSunsetTime({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 18h18M7 18a5 5 0 0 1 10 0M12 3v5M9.5 5.5L12 8l2.5-2.5M4.5 11l1.5 1M19.5 11l-1.5 1M7 21.5h10", fill: "none" })
  );
});

export default NibSunsetTime;
