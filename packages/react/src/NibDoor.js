import { createElement as h, forwardRef } from 'react';

export const NibDoor = forwardRef(function NibDoor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 21V3h14v18M3 21h18M15 12h.01", fill: "none" })
  );
});

export default NibDoor;
