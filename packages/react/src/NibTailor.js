import { createElement as h, forwardRef } from 'react';

export const NibTailor = forwardRef(function NibTailor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3h8l-1 4c2 1 3 3 3 5v9H6v-9c0-2 1-4 3-5z", fill: "none" }),
    h('path', { d: "M9 7h6M2 14c3-2 6 2 9 0s6-2 9 0M3 14v2M6 13v1.5M15 13v1.5M18 13.5v1.5M21 14v2", fill: "none" })
  );
});

export default NibTailor;
