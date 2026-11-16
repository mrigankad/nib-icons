import { createElement as h, forwardRef } from 'react';

export const NibTestTubes = forwardRef(function NibTestTubes({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3v15a2 2 0 0 0 4 0V3M5 3h6M13 3v15a2 2 0 0 0 4 0V3M12 3h6M6 12h4M13 9h4", fill: "none" })
  );
});

export default NibTestTubes;
