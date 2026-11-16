import { createElement as h, forwardRef } from 'react';

export const NibBlob = forwardRef(function NibBlob({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3c4 0 6 2 7 5s3 5 1 8-6 5-9 5-6-2-7-5 0-5 1-8 3-5 7-5z", fill: "none" })
  );
});

export default NibBlob;
