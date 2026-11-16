import { createElement as h, forwardRef } from 'react';

export const NibDoorOpen = forwardRef(function NibDoorOpen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21h18M5 21V3h10M15 3v2M13 21V6l6-2v17M16 12v1", fill: "none" })
  );
});

export default NibDoorOpen;
