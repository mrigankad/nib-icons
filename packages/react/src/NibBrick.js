import { createElement as h, forwardRef } from 'react';

export const NibBrick = forwardRef(function NibBrick({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 10l4-3h16l-4 3zM2 10v7h16v-7M18 17l4-3V7", fill: "none" })
  );
});

export default NibBrick;
