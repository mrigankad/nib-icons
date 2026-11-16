import { createElement as h, forwardRef } from 'react';

export const NibBonsai = forwardRef(function NibBonsai({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 17h14l-1.5 4h-11zM12 17c0-3-3-4-3-7M9 10c3 0 5-2 5-2M4 9a3 2 0 0 1 6 0zM11 6a3 2 0 0 1 6 0zM14 10a3 2 0 0 1 6 0z", fill: "none" })
  );
});

export default NibBonsai;
