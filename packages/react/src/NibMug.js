import { createElement as h, forwardRef } from 'react';

export const NibMug = forwardRef(function NibMug({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4h12v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zM16 8h2a3 3 0 0 1 0 6h-2", fill: "none" })
  );
});

export default NibMug;
