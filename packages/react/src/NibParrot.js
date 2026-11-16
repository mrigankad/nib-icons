import { createElement as h, forwardRef } from 'react';

export const NibParrot = forwardRef(function NibParrot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 3a5 5 0 0 1 5 5c0 1-.5 2-1 2.5 1 1.5 1.5 3 1.5 5L13 22h-3l1-6c-2-1-3-3-3-6V8a5 5 0 0 1 2-5zM15 8h3c1 0 2 1 2 2.5-1-.5-2-.5-3 0M11.5 7h.01", fill: "none" })
  );
});

export default NibParrot;
