import { createElement as h, forwardRef } from 'react';

export const NibDislike = forwardRef(function NibDislike({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 14V3M17 14l-4 8a3 3 0 0 1-3-3v-4H5a2 2 0 0 1-2-2.3l1.4-8A2 2 0 0 1 6.4 3H17M21 14h-4V3h4z", fill: "none" })
  );
});

export default NibDislike;
