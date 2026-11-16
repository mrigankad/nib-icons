import { createElement as h, forwardRef } from 'react';

export const NibMailX = forwardRef(function NibMailX({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8M3 7l9 6 9-6M16 16l5 5M21 16l-5 5", fill: "none" })
  );
});

export default NibMailX;
