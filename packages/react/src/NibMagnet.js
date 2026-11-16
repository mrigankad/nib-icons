import { createElement as h, forwardRef } from 'react';

export const NibMagnet = forwardRef(function NibMagnet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 3h5v9a3 3 0 0 0 6 0V3h5v9a8 8 0 0 1-16 0zM4 7h5M15 7h5", fill: "none" })
  );
});

export default NibMagnet;
