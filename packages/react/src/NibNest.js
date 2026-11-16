import { createElement as h, forwardRef } from 'react';

export const NibNest = forwardRef(function NibNest({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12h20c0 5-4 8-10 8S2 17 2 12zM4 15l4-2 4 2 4-2 4 2M9 12a2.5 3 0 0 1 2.5-5A2.5 3 0 0 1 14 12M13 12a2.5 3 0 0 1 2.5-4.5A2.5 3 0 0 1 18 12", fill: "none" })
  );
});

export default NibNest;
