import { createElement as h, forwardRef } from 'react';

export const NibTajMahal = forwardRef(function NibTajMahal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 11c0-3 2-5 4-6 2 1 4 3 4 6zM12 5V2M7 11h10v10H7zM10.5 21v-4a1.5 1.5 0 0 1 3 0v4M3 21V9M2.5 9h1l-.5-2zM21 21V9M20.5 9h1l-.5-2zM5 21v-6M19 21v-6M2 21h20", fill: "none" })
  );
});

export default NibTajMahal;
