import { createElement as h, forwardRef } from 'react';

export const NibSkating = forwardRef(function NibSkating({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3h5v8l7 3a2 2 0 0 1 1 2v1H5zM3 21h17a2 2 0 0 0 2-2M8 17v4M15 17v4M10 7h-3", fill: "none" })
  );
});

export default NibSkating;
