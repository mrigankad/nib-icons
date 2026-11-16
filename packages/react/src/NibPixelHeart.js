import { createElement as h, forwardRef } from 'react';

export const NibPixelHeart = forwardRef(function NibPixelHeart({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 5h4v2h2v2h2V7h2V5h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V7h2z", fill: "none", strokeLinecap: "square" })
  );
});

export default NibPixelHeart;
