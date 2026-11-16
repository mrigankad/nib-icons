import { createElement as h, forwardRef } from 'react';

export const NibFlipHorizontal = forwardRef(function NibFlipHorizontal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3v18M8.5 7L3 17h5.5zM15.5 7L21 17h-5.5z", fill: "none" })
  );
});

export default NibFlipHorizontal;
