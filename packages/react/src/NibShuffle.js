import { createElement as h, forwardRef } from 'react';

export const NibShuffle = forwardRef(function NibShuffle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7h3c2 0 3 1 4.5 3l3 4c1.5 2 2.5 3 4.5 3h3M3 17h3c1.5 0 2.5-.6 3.5-1.7M14 8.7C15 7.6 16 7 18 7h3M18 4l3 3-3 3M18 14l3 3-3 3", fill: "none" })
  );
});

export default NibShuffle;
