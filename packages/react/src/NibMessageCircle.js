import { createElement as h, forwardRef } from 'react';

export const NibMessageCircle = forwardRef(function NibMessageCircle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z", fill: "none" })
  );
});

export default NibMessageCircle;
