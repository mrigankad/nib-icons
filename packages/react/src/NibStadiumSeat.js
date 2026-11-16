import { createElement as h, forwardRef } from 'react';

export const NibStadiumSeat = forwardRef(function NibStadiumSeat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 13V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8M4 13h16v3H4zM6 16v5M18 16v5", fill: "none" })
  );
});

export default NibStadiumSeat;
