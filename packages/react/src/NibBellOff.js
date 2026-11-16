import { createElement as h, forwardRef } from 'react';

export const NibBellOff = forwardRef(function NibBellOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8.5 4.1A6 6 0 0 1 18 9c0 2.7.5 4.6 1.1 5.9M17 17H3.5S6 15 6 9c0-.6.1-1.1.2-1.6M10 20.5a2.2 2.2 0 0 0 4 0M3 3l18 18", fill: "none" })
  );
});

export default NibBellOff;
