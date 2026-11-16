import { createElement as h, forwardRef } from 'react';

export const NibBookmarkCheck = forwardRef(function NibBookmarkCheck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 3h10a1 1 0 0 1 1 1v17l-6-4-6 4V4a1 1 0 0 1 1-1zM9 10l2 2 4-4", fill: "none" })
  );
});

export default NibBookmarkCheck;
