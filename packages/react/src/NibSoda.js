import { createElement as h, forwardRef } from 'react';

export const NibSoda = forwardRef(function NibSoda({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 4h10v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM7 4l1-2h8l1 2M7 8h10M7 18h10M11 12l2 2", fill: "none" })
  );
});

export default NibSoda;
