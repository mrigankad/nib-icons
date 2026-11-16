import { createElement as h, forwardRef } from 'react';

export const NibHydroDam = forwardRef(function NibHydroDam({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3h4l3 18H5zM2 7c1.5-1 3 1 4.5 0M2 11c1.5-1 3 1 5 0M15 15c1 1 2-1 3 0s2-1 3 0M15 19c1 1 2-1 3 0s2-1 3 0", fill: "none" })
  );
});

export default NibHydroDam;
