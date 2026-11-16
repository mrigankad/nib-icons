import { createElement as h, forwardRef } from 'react';

export const NibArrowTrendDown = forwardRef(function NibArrowTrendDown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 6l7 7 4-4 9 9M16 18h6v-6", fill: "none" })
  );
});

export default NibArrowTrendDown;
