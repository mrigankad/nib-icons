import { createElement as h, forwardRef } from 'react';

export const NibRupee = forwardRef(function NibRupee({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3h12M6 8h12M9 3a5 5 0 0 1 0 10H6l9 8", fill: "none" })
  );
});

export default NibRupee;
