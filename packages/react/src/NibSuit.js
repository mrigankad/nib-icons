import { createElement as h, forwardRef } from 'react';

export const NibSuit = forwardRef(function NibSuit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2h8l4 3v17H4V5zM8 2l4 10 4-10M12 12v10M11 6l1 2 1-2-1-1zM16.5 14h1", fill: "none" })
  );
});

export default NibSuit;
