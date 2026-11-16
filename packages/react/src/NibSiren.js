import { createElement as h, forwardRef } from 'react';

export const NibSiren = forwardRef(function NibSiren({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 18v-5a5 5 0 0 1 10 0v5M4 18h16v3H4zM12 3v2M4 7l1.5 1M20 7l-1.5 1", fill: "none" })
  );
});

export default NibSiren;
