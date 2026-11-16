import { createElement as h, forwardRef } from 'react';

export const NibCampfire = forwardRef(function NibCampfire({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 15a4 4 0 0 0 4-4c0-3-2-4-3-7-1 1.5-2 2.5-2 4-.5-.5-1-1-1.5-2C8 7.5 8 9 8 11a4 4 0 0 0 4 4zM4 21l16-4M20 21L4 17", fill: "none" })
  );
});

export default NibCampfire;
