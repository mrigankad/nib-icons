import { createElement as h, forwardRef } from 'react';

export const NibSpanner = forwardRef(function NibSpanner({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 3l-2 2 1 3 3 1 2-2a4 4 0 0 1-5 5L7 21a2 2 0 0 1-3-3l9-9a4 4 0 0 1 4-6zM6 4l-3 3 2 2 3-3", fill: "none" })
  );
});

export default NibSpanner;
