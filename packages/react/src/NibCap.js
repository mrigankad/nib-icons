import { createElement as h, forwardRef } from 'react';

export const NibCap = forwardRef(function NibCap({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 15a8 8 0 0 1 16 0zM12 7V6M4 15h18l-2 2H4z", fill: "none" })
  );
});

export default NibCap;
