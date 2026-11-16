import { createElement as h, forwardRef } from 'react';

export const NibCafe = forwardRef(function NibCafe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 8l2-5h14l2 5zM3 8c0 1.5 1.5 2 3 2s3-.5 3-2c0 1.5 1.5 2 3 2s3-.5 3-2c0 1.5 1.5 2 3 2s3-.5 3-2M5 10v11h14V10M9 15h5v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zM14 15.5h1a1 1 0 0 1 0 2h-1", fill: "none" })
  );
});

export default NibCafe;
