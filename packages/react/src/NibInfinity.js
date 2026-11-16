import { createElement as h, forwardRef } from 'react';

export const NibInfinity = forwardRef(function NibInfinity({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 12c-2-2.7-3.8-4-5.5-4a4 4 0 0 0 0 8c1.7 0 3.5-1.3 5.5-4s3.8-4 5.5-4a4 4 0 0 1 0 8c-1.7 0-3.5-1.3-5.5-4z", fill: "none" })
  );
});

export default NibInfinity;
