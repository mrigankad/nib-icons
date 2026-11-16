import { createElement as h, forwardRef } from 'react';

export const NibLampFloor = forwardRef(function NibLampFloor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 2h6l2 5H7zM12 7v15M9 22h6", fill: "none" })
  );
});

export default NibLampFloor;
