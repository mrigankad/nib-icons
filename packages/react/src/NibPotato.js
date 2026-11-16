import { createElement as h, forwardRef } from 'react';

export const NibPotato = forwardRef(function NibPotato({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 15c-2-4 1-9 6-11 5-2 10 0 11 4s-1 9-6 11-9 0-11-4zM9 9h.01M14 8h.01M16 13h.01M10 15h.01", fill: "none" })
  );
});

export default NibPotato;
