import { createElement as h, forwardRef } from 'react';

export const NibPurse = forwardRef(function NibPurse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 11c0-3 2-5 5-5h8c3 0 5 2 5 5M10 6a2 2 0 0 1 4 0M11 14h2", fill: "none" })
  );
});

export default NibPurse;
