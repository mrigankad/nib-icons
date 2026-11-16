import { createElement as h, forwardRef } from 'react';

export const NibSolar = forwardRef(function NibSolar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h18l-2 8H5zM4 16h16M9.5 12l-.5 8M14.5 12l.5 8M12 2v2M6 4l1.5 1.5M18 4l-1.5 1.5M9 9a3 3 0 0 1 6 0", fill: "none" })
  );
});

export default NibSolar;
