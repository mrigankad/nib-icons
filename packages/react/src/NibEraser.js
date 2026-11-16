import { createElement as h, forwardRef } from 'react';

export const NibEraser = forwardRef(function NibEraser({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 20h12M14.4 3.6a1.5 1.5 0 0 1 2.1 0l3.9 3.9a1.5 1.5 0 0 1 0 2.1L10 20H7.5l-3.9-3.9a1.5 1.5 0 0 1 0-2.1zM8.5 9.5l6 6", fill: "none" })
  );
});

export default NibEraser;
