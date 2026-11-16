import { createElement as h, forwardRef } from 'react';

export const NibCroissant = forwardRef(function NibCroissant({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 16c0-3 2-6 5-7l2 5zM21 16c0-3-2-6-5-7l-2 5zM8 9c1-2 3-3 4-3s3 1 4 3l-2 5h-4zM3 16l2 1M21 16l-2 1", fill: "none" })
  );
});

export default NibCroissant;
