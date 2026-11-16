import { createElement as h, forwardRef } from 'react';

export const NibSeedling = forwardRef(function NibSeedling({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 19v-6M12 13c0-3 2-5 5-5 0 3-2 5-5 5zM3 19c3-1.5 6-1.5 9 0s6 1.5 9 0", fill: "none" })
  );
});

export default NibSeedling;
