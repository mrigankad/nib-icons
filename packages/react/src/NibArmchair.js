import { createElement as h, forwardRef } from 'react';

export const NibArmchair = forwardRef(function NibArmchair({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5M5 11a2 2 0 0 1 2 2v1h10v-1a2 2 0 1 1 2 2v3H5v-3a2 2 0 0 1 0-4zM7 18v2M17 18v2", fill: "none" })
  );
});

export default NibArmchair;
