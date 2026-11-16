import { createElement as h, forwardRef } from 'react';

export const NibDiamond = forwardRef(function NibDiamond({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3h12l4 6-10 12L2 9zM2 9h20M9 3L7 9l5 12 5-12-2-6", fill: "none" })
  );
});

export default NibDiamond;
