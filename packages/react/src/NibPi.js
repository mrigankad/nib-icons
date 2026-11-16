import { createElement as h, forwardRef } from 'react';

export const NibPi = forwardRef(function NibPi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 7c1-2 3-2 4-2h12M9 5v14M16 5v11a3 3 0 0 0 3 3", fill: "none" })
  );
});

export default NibPi;
