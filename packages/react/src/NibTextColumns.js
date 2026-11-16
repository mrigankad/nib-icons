import { createElement as h, forwardRef } from 'react';

export const NibTextColumns = forwardRef(function NibTextColumns({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h7M3 10h7M3 14h7M3 18h5M14 6h7M14 10h7M14 14h7M14 18h5", fill: "none" })
  );
});

export default NibTextColumns;
