import { createElement as h, forwardRef } from 'react';

export const NibDragon = forwardRef(function NibDragon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 8l3-1 2-4 1 4c3 0 5 2 5 5 0 2-1 3-1 5h4c2 0 3 2 3 4H8c-2 0-3-2-2-4l2-3c-1 0-3-1-3-3L3 10z", fill: "none" }),
    h('path', { d: "M14 9l5-5 1 5-4 2M7.5 8.5h.01", fill: "none" })
  );
});

export default NibDragon;
