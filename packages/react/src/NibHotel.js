import { createElement as h, forwardRef } from 'react';

export const NibHotel = forwardRef(function NibHotel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21V3h16v18M2 21h20M8 7h2M14 7h2M8 11h2M14 11h2M10 21v-5h4v5", fill: "none" })
  );
});

export default NibHotel;
