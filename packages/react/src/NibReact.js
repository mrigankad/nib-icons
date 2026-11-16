import { createElement as h, forwardRef } from 'react';

export const NibReact = forwardRef(function NibReact({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 12a8 8 0 1 1-8-8M8.5 14.5a4 4 0 0 0 7 0M9 10h.01M15 10h.01M19 2v6M16 5h6", fill: "none" })
  );
});

export default NibReact;
