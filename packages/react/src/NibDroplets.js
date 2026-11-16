import { createElement as h, forwardRef } from 'react';

export const NibDroplets = forwardRef(function NibDroplets({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 7S3.5 12 3.5 15a4.5 4.5 0 0 0 9 0C12.5 12 8 7 8 7zM16.5 3S13 7 13 9.5a3.5 3.5 0 0 0 7 0C20 7 16.5 3 16.5 3z", fill: "none" })
  );
});

export default NibDroplets;
