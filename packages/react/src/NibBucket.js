import { createElement as h, forwardRef } from 'react';

export const NibBucket = forwardRef(function NibBucket({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 8h16l-2 13H6zM4 8a8 6 0 0 1 16 0", fill: "none" })
  );
});

export default NibBucket;
