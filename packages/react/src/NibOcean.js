import { createElement as h, forwardRef } from 'react';

export const NibOcean = forwardRef(function NibOcean({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8c2-1.5 3 1.5 5 0s3 1.5 5 0 3 1.5 5 0 3 1.5 5 0M2 13c2-1.5 3 1.5 5 0s3 1.5 5 0 3 1.5 5 0 3 1.5 5 0M2 18c2-1.5 3 1.5 5 0s3 1.5 5 0 3 1.5 5 0 3 1.5 5 0", fill: "none" })
  );
});

export default NibOcean;
