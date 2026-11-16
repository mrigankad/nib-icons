import { createElement as h, forwardRef } from 'react';

export const NibPenguin = forwardRef(function NibPenguin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c-3 0-5 2-5 5v6c0 4 2 7 5 7s5-3 5-7V7c0-3-2-5-5-5zM10 7h.01M14 7h.01M11 9h2l-1 1zM7 12l-3 3M17 12l3 3M9 21h2M13 21h2M9.5 12c0 3 1 5 2.5 5s2.5-2 2.5-5", fill: "none" })
  );
});

export default NibPenguin;
