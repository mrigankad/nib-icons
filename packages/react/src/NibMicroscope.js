import { createElement as h, forwardRef } from 'react';

export const NibMicroscope = forwardRef(function NibMicroscope({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3l3 0 0 9-3 0zM8 3h5M10.5 12v2M14 8a6 6 0 0 1 1 11H5M4 21h16M8 17h5", fill: "none" })
  );
});

export default NibMicroscope;
