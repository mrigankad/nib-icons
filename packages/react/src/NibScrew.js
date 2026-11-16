import { createElement as h, forwardRef } from 'react';

export const NibScrew = forwardRef(function NibScrew({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 2h12l-2 4H8zM12 2v4M8 6h8v9l-4 7-4-7zM8 9l8 2M8 12l8 2", fill: "none" })
  );
});

export default NibScrew;
