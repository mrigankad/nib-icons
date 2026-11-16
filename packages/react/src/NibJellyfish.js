import { createElement as h, forwardRef } from 'react';

export const NibJellyfish = forwardRef(function NibJellyfish({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 11a8 8 0 0 1 16 0c-1 1-2 1-3 0-1 1-2 1-3 0-1 1-3 1-4 0-1 1-2 1-3 0-1 1-2 1-3 0zM7 12c0 3 1 5-1 8M10 12c0 4 1 6 0 9M14 12c0 4-1 6 0 9M17 12c0 3-1 5 1 8", fill: "none" })
  );
});

export default NibJellyfish;
