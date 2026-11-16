import { createElement as h, forwardRef } from 'react';

export const NibLotusFestival = forwardRef(function NibLotusFestival({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 5c2 2 3 4 3 7s-1 5-3 6c-2-1-3-3-3-6s1-5 3-7zM9 9c-3-1-5 0-6 2 1 4 4 6 9 7M15 9c3-1 5 0 6 2-1 4-4 6-9 7M3 21h18", fill: "none" })
  );
});

export default NibLotusFestival;
