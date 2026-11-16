import { createElement as h, forwardRef } from 'react';

export const NibCameraSecurity = forwardRef(function NibCameraSecurity({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7l14-4 2 6-14 4zM8 12l1.5 4H4M4 13.5v6M18 5.5l3-1v4l-2 .5", fill: "none" })
  );
});

export default NibCameraSecurity;
