import { createElement as h, forwardRef } from 'react';

export const NibToothbrush = forwardRef(function NibToothbrush({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21L14 10M14 10h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6zM16 6V3M18 6V3M20 6V4", fill: "none" })
  );
});

export default NibToothbrush;
