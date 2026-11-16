import { createElement as h, forwardRef } from 'react';

export const NibCandle = forwardRef(function NibCandle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 10h8v12H8zM12 10V8M12 6c-1-1-1.5-2 0-4 1.5 2 1 3 0 4zM8 14c1 1 2 0 3 1", fill: "none" })
  );
});

export default NibCandle;
