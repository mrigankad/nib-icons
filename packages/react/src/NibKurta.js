import { createElement as h, forwardRef } from 'react';

export const NibKurta = forwardRef(function NibKurta({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3h6l5 3-2 4-2-1v13H8V9l-2 1-2-4zM12 3v7M11 6h.01M11 8.5h.01", fill: "none" })
  );
});

export default NibKurta;
