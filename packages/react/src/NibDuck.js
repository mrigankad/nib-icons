import { createElement as h, forwardRef } from 'react';

export const NibDuck = forwardRef(function NibDuck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 11V7a4 4 0 0 1 8 0l3 1-3 1v2c3 1 4 3 3 6-1 3-4 4-8 4s-9-2-11-8c3 1 6 1 8-2zM14 6h.01", fill: "none" })
  );
});

export default NibDuck;
