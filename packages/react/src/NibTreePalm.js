import { createElement as h, forwardRef } from 'react';

export const NibTreePalm = forwardRef(function NibTreePalm({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 8c-2-3-6-3-8-1 3 0 5 1 8 1zM12 8c2-3 6-3 8-1-3 0-5 1-8 1zM12 8c-3 0-6 2-6 5 2-2 4-3 6-5zM12 8c3 0 6 2 6 5-2-2-4-3-6-5zM12 8c0 5-1 10-2 14M7 22h7", fill: "none" })
  );
});

export default NibTreePalm;
