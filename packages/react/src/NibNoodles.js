import { createElement as h, forwardRef } from 'react';

export const NibNoodles = forwardRef(function NibNoodles({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h18a9 9 0 0 1-18 0zM8 12c0-3 1-4 1-6M11 12c0-3 1-5 0-7M14 12c0-3 2-4 1-7M16 2l-6 7M20 3l-7 7", fill: "none" })
  );
});

export default NibNoodles;
