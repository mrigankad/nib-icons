import { createElement as h, forwardRef } from 'react';

export const NibPencil = forwardRef(function NibPencil({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 20v-4L16 4l4 4L8 20zM13.5 6.5l4 4", fill: "none" })
  );
});

export default NibPencil;
