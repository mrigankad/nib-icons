import { createElement as h, forwardRef } from 'react';

export const NibPipe = forwardRef(function NibPipe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 7h10a5 5 0 0 1 5 5v10M2 13h8a1 1 0 0 1 1 1v8M2 5v10M15 22h6", fill: "none" })
  );
});

export default NibPipe;
