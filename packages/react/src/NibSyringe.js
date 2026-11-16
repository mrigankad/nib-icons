import { createElement as h, forwardRef } from 'react';

export const NibSyringe = forwardRef(function NibSyringe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 2l4 4M20 4l-4 4M16 4l4 4M14 6l4 4-9 9H5v-4zM5 19l-3 3M10 10l2 2M8 12l2 2", fill: "none" })
  );
});

export default NibSyringe;
