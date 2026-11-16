import { createElement as h, forwardRef } from 'react';

export const NibBow = forwardRef(function NibBow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3c8 2 12 6 15 15M6 3v15h15M6 18L19 5M16 5h3v3", fill: "none" })
  );
});

export default NibBow;
