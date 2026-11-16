import { createElement as h, forwardRef } from 'react';

export const NibThreadSpool = forwardRef(function NibThreadSpool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3h12M6 21h12M8 3v18M16 3v18M8 7l8 3M8 11l8 3M8 15l8 3", fill: "none" })
  );
});

export default NibThreadSpool;
