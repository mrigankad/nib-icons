import { createElement as h, forwardRef } from 'react';

export const NibFunction = forwardRef(function NibFunction({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 20c2 0 2.5-1 3-4l1.5-9c.5-2.5 1-4 3.5-4M8 10h8", fill: "none" })
  );
});

export default NibFunction;
