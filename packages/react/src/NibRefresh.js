import { createElement as h, forwardRef } from 'react';

export const NibRefresh = forwardRef(function NibRefresh({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 11A8 8 0 0 0 5 7.5M4 3.5v4h4M4 13a8 8 0 0 0 15 3.5M20 20.5v-4h-4", fill: "none" })
  );
});

export default NibRefresh;
