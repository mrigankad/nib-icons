import { createElement as h, forwardRef } from 'react';

export const NibCactus = forwardRef(function NibCactus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 21V5a2 2 0 0 1 4 0v16M10 14H7a2 2 0 0 1-2-2V9M14 11h3a2 2 0 0 0 2-2V7M6 21h12", fill: "none" })
  );
});

export default NibCactus;
