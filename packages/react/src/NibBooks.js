import { createElement as h, forwardRef } from 'react';

export const NibBooks = forwardRef(function NibBooks({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3h4v18H3zM7 3h4v18H7zM12 5l4-1 4 16-4 1zM3 7h4M7 7h4M3 17h8", fill: "none" })
  );
});

export default NibBooks;
