import { createElement as h, forwardRef } from 'react';

export const NibSquiggle = forwardRef(function NibSquiggle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 15c2-6 4 2 6-4s4 6 6 0 4 4 6-2", fill: "none" })
  );
});

export default NibSquiggle;
