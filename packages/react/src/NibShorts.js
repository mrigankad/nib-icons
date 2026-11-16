import { createElement as h, forwardRef } from 'react';

export const NibShorts = forwardRef(function NibShorts({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 5h14l1 13h-6l-2-7-2 7H4zM5 8h14", fill: "none" })
  );
});

export default NibShorts;
