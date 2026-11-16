import { createElement as h, forwardRef } from 'react';

export const NibRock = forwardRef(function NibRock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 19l2-7 5-6 6 2 4 5 1 6zM10 6l1 6 4 2M11 12l-6 0", fill: "none" })
  );
});

export default NibRock;
