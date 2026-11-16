import { createElement as h, forwardRef } from 'react';

export const NibCanyon = forwardRef(function NibCanyon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 6h5l1 4 2 2 1 9M22 6h-5l-1 3-2 3-1 9M2 21h20M3 12h3M18 13h3", fill: "none" })
  );
});

export default NibCanyon;
