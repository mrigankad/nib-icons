import { createElement as h, forwardRef } from 'react';

export const NibCabin = forwardRef(function NibCabin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 11l10-8 10 8M4 9.5V21h16V9.5M4 13h16M4 17h16M10 21v-6h4v6M17 6V3h2v4.5", fill: "none" })
  );
});

export default NibCabin;
