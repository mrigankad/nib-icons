import { createElement as h, forwardRef } from 'react';

export const NibBeer = forwardRef(function NibBeer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 8h11v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM16 10h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2M5 8a2.5 2.5 0 0 1 2-4 3 3 0 0 1 5-1 2.5 2.5 0 0 1 4 2v3M9 12v6M12 12v6", fill: "none" })
  );
});

export default NibBeer;
