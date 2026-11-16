import { createElement as h, forwardRef } from 'react';

export const NibHandGrab = forwardRef(function NibHandGrab({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 11V9a2 2 0 0 1 4 0v1M11 10V8.5a2 2 0 0 1 4 0V10M15 10a2 2 0 0 1 4 0v4a7 7 0 0 1-7 7h-1a5 5 0 0 1-5-5v-3a2 2 0 0 1 4 0v1", fill: "none" })
  );
});

export default NibHandGrab;
