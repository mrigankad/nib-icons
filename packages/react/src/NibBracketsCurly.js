import { createElement as h, forwardRef } from 'react';

export const NibBracketsCurly = forwardRef(function NibBracketsCurly({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3H7a2 2 0 0 0-2 2v4.5L3.5 12 5 14.5V19a2 2 0 0 0 2 2h1M16 3h1a2 2 0 0 1 2 2v4.5l1.5 2.5-1.5 2.5V19a2 2 0 0 1-2 2h-1", fill: "none" })
  );
});

export default NibBracketsCurly;
