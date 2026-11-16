import { createElement as h, forwardRef } from 'react';

export const NibMushroom = forwardRef(function NibMushroom({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12a9 8 0 0 1 18 0zM9.5 12v7a2.5 2.5 0 0 0 5 0v-7M9 7.5h.01M14 6h.01M16 9h.01", fill: "none" })
  );
});

export default NibMushroom;
