import { createElement as h, forwardRef } from 'react';

export const NibDustStorm = forwardRef(function NibDustStorm({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8h11a3 3 0 1 0-3-3M2 13h15a3 3 0 1 1-3 3M5 18h.01M8 20h.01M4 21.5h.01M19 7h.01M21 10h.01", fill: "none" })
  );
});

export default NibDustStorm;
