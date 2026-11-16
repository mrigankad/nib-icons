import { createElement as h, forwardRef } from 'react';

export const NibMonument = forwardRef(function NibMonument({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 6l2-4 2 4v12h-4zM7 18h10l1 3H6zM10 10h4", fill: "none" })
  );
});

export default NibMonument;
