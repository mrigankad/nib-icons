import { createElement as h, forwardRef } from 'react';

export const NibVote = forwardRef(function NibVote({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 13h18v8H3zM6 13l3-9h6l3 9M8 9l2.5 2.5L16 6M7 17h10", fill: "none" })
  );
});

export default NibVote;
