import { createElement as h, forwardRef } from 'react';

export const NibHash = forwardRef(function NibHash({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 9h16M4 15h16M10 3L8 21M16 3l-2 18", fill: "none" })
  );
});

export default NibHash;
