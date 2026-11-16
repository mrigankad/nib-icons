import { createElement as h, forwardRef } from 'react';

export const NibChatHeart = forwardRef(function NibChatHeart({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.5-5A8.5 8.5 0 1 1 21 11.5zM12 15s-3.5-2-3.5-4.3a1.8 1.8 0 0 1 3.5-.7 1.8 1.8 0 0 1 3.5.7C15.5 13 12 15 12 15z", fill: "none" })
  );
});

export default NibChatHeart;
