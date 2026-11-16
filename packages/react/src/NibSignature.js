import { createElement as h, forwardRef } from 'react';

export const NibSignature = forwardRef(function NibSignature({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 17c3-6 5-10 6-9s-3 9-1 9 3-5 5-5-1 5 1 5 2-3 3-3 1 2 4 2M3 21h18", fill: "none" })
  );
});

export default NibSignature;
