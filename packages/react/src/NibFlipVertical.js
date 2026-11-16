import { createElement as h, forwardRef } from 'react';

export const NibFlipVertical = forwardRef(function NibFlipVertical({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h18M7 8.5L17 3v5.5zM7 15.5L17 21v-5.5z", fill: "none" })
  );
});

export default NibFlipVertical;
