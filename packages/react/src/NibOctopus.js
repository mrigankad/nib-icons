import { createElement as h, forwardRef } from 'react';

export const NibOctopus = forwardRef(function NibOctopus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 11a6 6 0 0 1 12 0v2H6zM6 13c-1 3-3 4-4 4M9 13c0 4-1 6-2 7M12 13v8M15 13c0 4 1 6 2 7M18 13c1 3 3 4 4 4M10 9h.01M14 9h.01", fill: "none" })
  );
});

export default NibOctopus;
