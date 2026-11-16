import { createElement as h, forwardRef } from 'react';

export const NibDisconnect = forwardRef(function NibDisconnect({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21l3-3M21 3l-3 3M6 14l4 4-2 2a2.8 2.8 0 0 1-4-4zM18 10l-4-4 2-2a2.8 2.8 0 0 1 4 4zM11 7.5L10 5.5M7.5 11l-2-1M16.5 13l2 1M13 16.5l1 2", fill: "none" })
  );
});

export default NibDisconnect;
