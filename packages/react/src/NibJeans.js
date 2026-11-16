import { createElement as h, forwardRef } from 'react';

export const NibJeans = forwardRef(function NibJeans({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3h12l1 19h-5l-2-12-2 12H5zM6 6h12M8 6c0 2 1 3 2.5 3M16 6c0 2-1 3-2.5 3M12 6v4", fill: "none" })
  );
});

export default NibJeans;
