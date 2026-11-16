import { createElement as h, forwardRef } from 'react';

export const NibArrowBounce = forwardRef(function NibArrowBounce({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 18c2-9 5-12 7-12s3 4 4 8c.6-2.7 2-5 4-5M17 6l2 3-3 1.5M3 21h18", fill: "none" })
  );
});

export default NibArrowBounce;
