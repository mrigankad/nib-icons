import { createElement as h, forwardRef } from 'react';

export const NibMath = forwardRef(function NibMath({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 4v6M4 7h6M14 7h6M5 15l4 4M9 15l-4 4M14 16h6M14 19h6", fill: "none" })
  );
});

export default NibMath;
