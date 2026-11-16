import { createElement as h, forwardRef } from 'react';

export const NibSquirrel = forwardRef(function NibSquirrel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 21h-5c-2 0-3-1-3-3 0-3 3-4 3-7V9a3 3 0 0 1 3-3l1-2 1 2.5c1 .5 1 1.5 1 2.5h-2M13 14l2 2M15 21c6 0 8-4 8-9s-3-8-6-8c-2 0-3 2-2 4 3 1 4 4 3 7", fill: "none" })
  );
});

export default NibSquirrel;
