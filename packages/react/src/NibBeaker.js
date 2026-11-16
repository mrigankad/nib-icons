import { createElement as h, forwardRef } from 'react';

export const NibBeaker = forwardRef(function NibBeaker({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 3h14M5 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M5 12h12M9 7h3M9 16h3", fill: "none" })
  );
});

export default NibBeaker;
