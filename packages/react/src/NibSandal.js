import { createElement as h, forwardRef } from 'react';

export const NibSandal = forwardRef(function NibSandal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3c3 0 5 3 5 8v8a3 3 0 0 1-6 0c0-3-2-6-2-10 0-4 1-6 3-6z", fill: "none" }),
    h('path', { d: "M7 9c2 1 5 1 7 0M10 4l1 5M8 14h6", fill: "none" })
  );
});

export default NibSandal;
