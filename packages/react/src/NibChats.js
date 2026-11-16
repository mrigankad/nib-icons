import { createElement as h, forwardRef } from 'react';

export const NibChats = forwardRef(function NibChats({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M16 8.5A6.5 6.5 0 0 0 3.6 12.2L2.5 15.5l3.4-1A6.5 6.5 0 0 0 8 15.3M15 9.5a5.5 5.5 0 0 1 5 7.7l1 3.3-3.3-1A5.5 5.5 0 1 1 15 9.5z", fill: "none" })
  );
});

export default NibChats;
