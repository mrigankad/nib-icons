import { createElement as h, forwardRef } from 'react';

export const NibArrowUpLeft = forwardRef(function NibArrowUpLeft({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 17L7 7M16 7H7v9", fill: "none" })
  );
});

export default NibArrowUpLeft;
