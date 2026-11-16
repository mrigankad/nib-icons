import { createElement as h, forwardRef } from 'react';

export const NibUndo = forwardRef(function NibUndo({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4v5h5M4.5 9A8 8 0 1 1 6.5 17.5", fill: "none" })
  );
});

export default NibUndo;
