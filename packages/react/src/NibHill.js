import { createElement as h, forwardRef } from 'react';

export const NibHill = forwardRef(function NibHill({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 19c3-8 8-10 12-8s6 5 8 8zM2 19h20", fill: "none" })
  );
});

export default NibHill;
