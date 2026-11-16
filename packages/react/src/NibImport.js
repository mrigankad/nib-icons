import { createElement as h, forwardRef } from 'react';

export const NibImport = forwardRef(function NibImport({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5M3 12h11M10 8l4 4-4 4", fill: "none" })
  );
});

export default NibImport;
