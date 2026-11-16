import { createElement as h, forwardRef } from 'react';

export const NibHerb = forwardRef(function NibHerb({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22V4M12 8c-2 0-4-1-4-3 2 0 4 1 4 3zM12 8c2 0 4-1 4-3-2 0-4 1-4 3zM12 13c-2.5 0-5-1.5-5-4 2.5 0 5 1.5 5 4zM12 13c2.5 0 5-1.5 5-4-2.5 0-5 1.5-5 4zM12 18c-3 0-6-2-6-5 3 0 6 2 6 5zM12 18c3 0 6-2 6-5-3 0-6 2-6 5z", fill: "none" })
  );
});

export default NibHerb;
