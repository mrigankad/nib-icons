import { createElement as h, forwardRef } from 'react';

export const NibLandmark = forwardRef(function NibLandmark({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9h18M5 9v9M9.5 9v9M14.5 9v9M19 9v9M2 21h20M3 18h18M4 9l8-6 8 6", fill: "none" })
  );
});

export default NibLandmark;
