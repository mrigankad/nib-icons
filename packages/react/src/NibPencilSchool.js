import { createElement as h, forwardRef } from 'react';

export const NibPencilSchool = forwardRef(function NibPencilSchool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 3l4 4L8 20l-5 1 1-5zM14 6l4 4M4 16l4 4", fill: "none" })
  );
});

export default NibPencilSchool;
