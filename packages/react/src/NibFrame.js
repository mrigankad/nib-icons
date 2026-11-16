import { createElement as h, forwardRef } from 'react';

export const NibFrame = forwardRef(function NibFrame({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 3v18M17 3v18M3 7h18M3 17h18", fill: "none" })
  );
});

export default NibFrame;
