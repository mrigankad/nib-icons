import { createElement as h, forwardRef } from 'react';

export const NibUpi = forwardRef(function NibUpi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3l-4 9 4 9M15 3l-4 9 4 9M19 8l-2 4 2 4", fill: "none" })
  );
});

export default NibUpi;
