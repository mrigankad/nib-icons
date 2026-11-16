import { createElement as h, forwardRef } from 'react';

export const NibCursorGrab = forwardRef(function NibCursorGrab({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 11V6a1.5 1.5 0 0 1 3 0v4M11 9V4.5a1.5 1.5 0 0 1 3 0V10M14 9.5V6a1.5 1.5 0 0 1 3 0v4M17 9a1.5 1.5 0 0 1 3 0v4a8 8 0 0 1-8 8 6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.5L8 14", fill: "none" })
  );
});

export default NibCursorGrab;
