import { createElement as h, forwardRef } from 'react';

export const NibHandPoint = forwardRef(function NibHandPoint({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 13V4.5a1.5 1.5 0 0 1 3 0V11M12 10.5a1.5 1.5 0 0 1 3 0V12M15 11a1.5 1.5 0 0 1 3 0v1M18 12a1.5 1.5 0 0 1 3 0v3a6 6 0 0 1-6 6h-2a5.5 5.5 0 0 1-4.6-2.5L6 15.6a1.4 1.4 0 0 1 2.3-1.6L9 15", fill: "none" })
  );
});

export default NibHandPoint;
