import { createElement as h, forwardRef } from 'react';

export const NibMonsoon = forwardRef(function NibMonsoon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 12h10a3.5 3.5 0 0 0 .4-7A5 5 0 0 0 8 4a4 4 0 0 0-1 8zM7 15l-1 2M11 15l-1 2M15 15l-1 2M2 21c2-1.5 3 1.5 5 0s3 1.5 5 0 3 1.5 5 0 3 1.5 5 0", fill: "none" })
  );
});

export default NibMonsoon;
