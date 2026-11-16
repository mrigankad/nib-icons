import { createElement as h, forwardRef } from 'react';

export const NibEgg = forwardRef(function NibEgg({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c-4 0-7 7-7 12a7 7 0 0 0 14 0c0-5-3-12-7-12z", fill: "none" })
  );
});

export default NibEgg;
