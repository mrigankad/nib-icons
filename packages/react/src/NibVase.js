import { createElement as h, forwardRef } from 'react';

export const NibVase = forwardRef(function NibVase({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3h6M10 3v3c-3 2-5 5-5 9a6 6 0 0 0 4 6h6a6 6 0 0 0 4-6c0-4-2-7-5-9V3M6 13h12", fill: "none" })
  );
});

export default NibVase;
