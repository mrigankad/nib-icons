import { createElement as h, forwardRef } from 'react';

export const NibDrumstick = forwardRef(function NibDrumstick({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 3a6 6 0 0 1 6 6c0 4-4 6-7 6l-3 3a2 2 0 1 1-3 3 2 2 0 1 1-3-3 2 2 0 1 1 3-3l3-3c0-3 2-9 4-9z", fill: "none" })
  );
});

export default NibDrumstick;
