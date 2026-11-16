import { createElement as h, forwardRef } from 'react';

export const NibCarElectric = forwardRef(function NibCarElectric({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 19v-5l2-5h14l2 5v5zM3 14h18M5 19v2M19 19v2M13 2l-2 3h3l-2 3", fill: "none" })
  );
});

export default NibCarElectric;
