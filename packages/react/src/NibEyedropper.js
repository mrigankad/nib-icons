import { createElement as h, forwardRef } from 'react';

export const NibEyedropper = forwardRef(function NibEyedropper({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14.5 6.5l3-3a2.1 2.1 0 0 1 3 3l-3 3M13 5l6 6M16 8l-9.5 9.5L4 20l2.5-2.5M8 15h5", fill: "none" })
  );
});

export default NibEyedropper;
