import { createElement as h, forwardRef } from 'react';

export const NibSortNumeric = forwardRef(function NibSortNumeric({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4.5 5L6 4v6M4.5 10h3M4 15.5a2 2 0 1 1 3.3 1.5L4 20h4M17 5v14M14 16l3 3 3-3", fill: "none" })
  );
});

export default NibSortNumeric;
