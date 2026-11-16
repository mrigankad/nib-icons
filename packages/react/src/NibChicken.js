import { createElement as h, forwardRef } from 'react';

export const NibChicken = forwardRef(function NibChicken({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 4c0-1 1-2 2-1 0-1 2-1 2 0 1-1 2 0 2 1M8 7a4 4 0 0 1 8 0v3c3 0 5 2 5 5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6c0-2 2-4 5-5zM5 8l3 1M10 21v2M14 21v2M11 7h.01", fill: "none" })
  );
});

export default NibChicken;
