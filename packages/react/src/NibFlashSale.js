import { createElement as h, forwardRef } from 'react';

export const NibFlashSale = forwardRef(function NibFlashSale({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9zM12 7.5L9.5 12h3L10 16.5", fill: "none" })
  );
});

export default NibFlashSale;
