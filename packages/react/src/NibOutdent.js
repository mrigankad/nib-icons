import { createElement as h, forwardRef } from 'react';

export const NibOutdent = forwardRef(function NibOutdent({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 5h16M11 10h9M11 14h9M4 19h16M7 9.5L4 12l3 2.5", fill: "none" })
  );
});

export default NibOutdent;
