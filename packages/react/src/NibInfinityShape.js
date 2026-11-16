import { createElement as h, forwardRef } from 'react';

export const NibInfinityShape = forwardRef(function NibInfinityShape({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 12c-2-3-4-4.5-6-4.5a4.5 4.5 0 0 0 0 9c2 0 4-1.5 6-4.5zM12 12c2 3 4 4.5 6 4.5a4.5 4.5 0 0 0 0-9c-2 0-4 1.5-6 4.5z", fill: "none" })
  );
});

export default NibInfinityShape;
