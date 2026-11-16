import { createElement as h, forwardRef } from 'react';

export const NibFuel = forwardRef(function NibFuel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 4h9a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2zM3 10h13M16 8h2l2 2v8a1.5 1.5 0 0 1-3 0v-3h-1", fill: "none" })
  );
});

export default NibFuel;
