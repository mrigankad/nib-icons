import { createElement as h, forwardRef } from 'react';

export const NibHandHeart = forwardRef(function NibHandHeart({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 15h2.5l3.5 1.5h2.5a1.5 1.5 0 0 1 0 3H10M14 18l4-2.5a1.5 1.5 0 0 1 2 2.2L15 21H8l-2-1M2 14h4v7H2zM14 11s-3-1.8-3-3.8a1.6 1.6 0 0 1 3-.7 1.6 1.6 0 0 1 3 .7c0 2-3 3.8-3 3.8z", fill: "none" })
  );
});

export default NibHandHeart;
