import { createElement as h, forwardRef } from 'react';

export const NibReset = forwardRef(function NibReset({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 12a8 8 0 1 0 2.5-5.8M4 4v5h5", fill: "none" })
  );
});

export default NibReset;
