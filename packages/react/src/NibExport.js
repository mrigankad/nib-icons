import { createElement as h, forwardRef } from 'react';

export const NibExport = forwardRef(function NibExport({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5M21 12H9M17 8l4 4-4 4", fill: "none" })
  );
});

export default NibExport;
