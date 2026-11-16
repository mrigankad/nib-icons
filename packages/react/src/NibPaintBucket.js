import { createElement as h, forwardRef } from 'react';

export const NibPaintBucket = forwardRef(function NibPaintBucket({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4.5 11l7-7 8 8-7 7a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8zM4 12.5h15.5M20.5 16s1.5 2 1.5 3a1.5 1.5 0 0 1-3 0c0-1 1.5-3 1.5-3z", fill: "none" })
  );
});

export default NibPaintBucket;
