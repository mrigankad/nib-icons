import { createElement as h, forwardRef } from 'react';

export const NibBoxingGlove = forwardRef(function NibBoxingGlove({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 16V8a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v4a4 4 0 0 1-4 4zM7 11H5.5a2 2 0 0 0 0 4H7M7 16h10v5H7zM11 8h4", fill: "none" })
  );
});

export default NibBoxingGlove;
