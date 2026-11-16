import { createElement as h, forwardRef } from 'react';

export const NibSword = forwardRef(function NibSword({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 3v4L10 18l-4-4L17 3zM5 13l6 6M7 17l-4 4M3 19l2 2", fill: "none" })
  );
});

export default NibSword;
