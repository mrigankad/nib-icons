import { createElement as h, forwardRef } from 'react';

export const NibArrowsSplit = forwardRef(function NibArrowsSplit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 21v-7L5 7M12 14l7-7M4 11V6h5M15 6h5v5", fill: "none" })
  );
});

export default NibArrowsSplit;
