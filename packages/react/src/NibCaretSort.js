import { createElement as h, forwardRef } from 'react';

export const NibCaretSort = forwardRef(function NibCaretSort({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h10M3 12h7M3 18h4M17 5v14M14 16l3 3 3-3", fill: "none" })
  );
});

export default NibCaretSort;
