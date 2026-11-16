import { createElement as h, forwardRef } from 'react';

export const NibChopsticks = forwardRef(function NibChopsticks({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 22L13 2M10 22L19 3M7 17l5 1", fill: "none" })
  );
});

export default NibChopsticks;
