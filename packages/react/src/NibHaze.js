import { createElement as h, forwardRef } from 'react';

export const NibHaze = forwardRef(function NibHaze({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 11a5 5 0 0 1 10 0M12 2v2M4.2 5.2l1.4 1.4M19.8 5.2l-1.4 1.4M3 14h18M5 18h14M8 22h8", fill: "none" })
  );
});

export default NibHaze;
