import { createElement as h, forwardRef } from 'react';

export const NibBoss = forwardRef(function NibBoss({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4l3 4M20 4l-3 4M5 11a7 7 0 0 1 14 0v4a7 7 0 0 1-14 0zM8 12l3 1M16 12l-3 1M9 17h6M10 17v1.5M14 17v1.5", fill: "none" })
  );
});

export default NibBoss;
