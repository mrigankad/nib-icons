import { createElement as h, forwardRef } from 'react';

export const NibCookingPot = forwardRef(function NibCookingPot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 10h16v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zM2 12h2M20 12h2M4 10a8 3 0 0 1 16 0M12 5V7", fill: "none" })
  );
});

export default NibCookingPot;
