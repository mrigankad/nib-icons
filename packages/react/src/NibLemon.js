import { createElement as h, forwardRef } from 'react';

export const NibLemon = forwardRef(function NibLemon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 4l-1.5 1.5c3 3 2 9-2 12.5s-10 4.5-12.5 2L2.5 21.5M18.5 5.5C15 2.5 9 3.5 5.5 7.5S2 15.5 4 18", fill: "none" })
  );
});

export default NibLemon;
