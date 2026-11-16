import { createElement as h, forwardRef } from 'react';

export const NibMenuLeft = forwardRef(function NibMenuLeft({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 6h16M4 12h10M4 18h13", fill: "none" })
  );
});

export default NibMenuLeft;
