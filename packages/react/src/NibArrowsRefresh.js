import { createElement as h, forwardRef } from 'react';

export const NibArrowsRefresh = forwardRef(function NibArrowsRefresh({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 11a8 8 0 0 1 14.5-4.5L20 8M20 3v5h-5M20 13a8 8 0 0 1-14.5 4.5L4 16M4 21v-5h5", fill: "none" })
  );
});

export default NibArrowsRefresh;
