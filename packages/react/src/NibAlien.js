import { createElement as h, forwardRef } from 'react';

export const NibAlien = forwardRef(function NibAlien({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3c-4.5 0-8 3-8 7.5S8 21 12 21s8-6 8-10.5S16.5 3 12 3zM7 10.5c1.5 0 3 1 3.5 2.5M17 10.5c-1.5 0-3 1-3.5 2.5M11 17h2", fill: "none" })
  );
});

export default NibAlien;
