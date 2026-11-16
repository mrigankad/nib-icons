import { createElement as h, forwardRef } from 'react';

export const NibArrowsShuffle = forwardRef(function NibArrowsShuffle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h3.5l11 12H21M3 18h3.5l3-3.3M14.5 9.3l3-3.3H21M18 3l3 3-3 3M18 15l3 3-3 3", fill: "none" })
  );
});

export default NibArrowsShuffle;
