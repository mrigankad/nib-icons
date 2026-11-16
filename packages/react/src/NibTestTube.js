import { createElement as h, forwardRef } from 'react';

export const NibTestTube = forwardRef(function NibTestTube({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3h6M10 3v15a2 2 0 0 0 4 0V3M10 11h4", fill: "none" })
  );
});

export default NibTestTube;
