import { createElement as h, forwardRef } from 'react';

export const NibHandThumbsDown = forwardRef(function NibHandThumbsDown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 14l4 7a2 2 0 0 0 2.5-2.4L12.5 14h6a2 2 0 0 0 2-2.3l-1.2-7a2 2 0 0 0-2-1.7H7zM3 3h4v11H3z", fill: "none" })
  );
});

export default NibHandThumbsDown;
