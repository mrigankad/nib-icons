import { createElement as h, forwardRef } from 'react';

export const NibStone = forwardRef(function NibStone({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 15c0-5 4-8 9-8 5 0 7 3 7 6 0 4-4 5-8 5s-8 0-8-3z", fill: "none" }),
    h('path', { d: "M8 12c1-1.5 3-2 5-2", fill: "none" })
  );
});

export default NibStone;
