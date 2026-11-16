import { createElement as h, forwardRef } from 'react';

export const NibApple = forwardRef(function NibApple({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 7c-2-1.5-7-1-7 5 0 5 3 9 5 9 1 0 1.5-.5 2-.5s1 .5 2 .5c2 0 5-4 5-9 0-6-5-6.5-7-5zM12 7c0-2 1-4 3-5M12 5c-1-2-3-2-4-1", fill: "none" })
  );
});

export default NibApple;
