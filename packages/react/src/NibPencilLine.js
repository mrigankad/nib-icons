import { createElement as h, forwardRef } from 'react';

export const NibPencilLine = forwardRef(function NibPencilLine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 18v-3.5L13.5 4l3.5 3.5L6.5 18zM11.5 6l3.5 3.5M3 21h18", fill: "none" })
  );
});

export default NibPencilLine;
