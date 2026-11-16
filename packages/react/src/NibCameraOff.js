import { createElement as h, forwardRef } from 'react';

export const NibCameraOff = forwardRef(function NibCameraOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8.5 4H15l1.5 2H19a2 2 0 0 1 2 2v9M18 20H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2M9.5 10.5a3.5 3.5 0 0 0 4.9 4.9M3 3l18 18", fill: "none" })
  );
});

export default NibCameraOff;
