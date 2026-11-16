import { createElement as h, forwardRef } from 'react';

export const NibShieldOff = forwardRef(function NibShieldOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4.5 5.5V11c0 5 3.5 8.5 7.5 10 1.7-.6 3.3-1.6 4.6-3M8.5 4.3L12 3l8 3v5c0 1.3-.2 2.5-.6 3.6M3 3l18 18", fill: "none" })
  );
});

export default NibShieldOff;
