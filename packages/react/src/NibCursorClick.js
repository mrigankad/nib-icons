import { createElement as h, forwardRef } from 'react';

export const NibCursorClick = forwardRef(function NibCursorClick({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 9l12 5-5 1.5L14.5 21zM5 2v3M2 5h3M4 9l-2 1M9 4l1-2", fill: "none" })
  );
});

export default NibCursorClick;
