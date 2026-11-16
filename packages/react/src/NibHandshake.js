import { createElement as h, forwardRef } from 'react';

export const NibHandshake = forwardRef(function NibHandshake({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 11l3-3.5 4 1L12 7l4 1.5 3-1 3 3.5M5 7.5V14l4.5 4.5 1.5-1 1.5 1 1.5-1 1.5 1L19 14V7.5M9 9l3.5 3.5M10.5 14l1.5 1.5M12.5 12l1.5 1.5", fill: "none" })
  );
});

export default NibHandshake;
