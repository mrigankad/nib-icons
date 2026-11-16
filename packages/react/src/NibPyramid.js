import { createElement as h, forwardRef } from 'react';

export const NibPyramid = forwardRef(function NibPyramid({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 20L11 4l9 16zM11 4l3 16M5 15h10M7.5 11h5", fill: "none" })
  );
});

export default NibPyramid;
