import { createElement as h, forwardRef } from 'react';

export const NibCrayon = forwardRef(function NibCrayon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 9h6v13H9zM9 9l3-7 3 7M9 13h6M9 18h6", fill: "none" })
  );
});

export default NibCrayon;
