import { createElement as h, forwardRef } from 'react';

export const NibMailOpen = forwardRef(function NibMailOpen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9l-9-6.5zM3 10l9 6 9-6", fill: "none" })
  );
});

export default NibMailOpen;
