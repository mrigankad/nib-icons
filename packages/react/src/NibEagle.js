import { createElement as h, forwardRef } from 'react';

export const NibEagle = forwardRef(function NibEagle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8l5 2 3-2 2 2 2-2 3 2 5-2-4 6-4 1-2 6-2-6-4-1zM12 5a1.5 1.5 0 1 0 0 3", fill: "none" })
  );
});

export default NibEagle;
