import { createElement as h, forwardRef } from 'react';

export const NibNurse = forwardRef(function NibNurse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 6l1-3h8l1 3zM12 3.5v2M11 4.5h2M8 6v2a4 4 0 0 0 8 0V6M4 21a8 8 0 0 1 16 0", fill: "none" })
  );
});

export default NibNurse;
