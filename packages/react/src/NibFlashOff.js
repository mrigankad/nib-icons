import { createElement as h, forwardRef } from 'react';

export const NibFlashOff = forwardRef(function NibFlashOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M13 2l-3.5 5M7.5 10L4 14h7l-1 8 4.5-6M16.5 13L19 10h-6M3 3l18 18", fill: "none" })
  );
});

export default NibFlashOff;
