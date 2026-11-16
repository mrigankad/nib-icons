import { createElement as h, forwardRef } from 'react';

export const NibChevronLeftRight = forwardRef(function NibChevronLeftRight({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 8l-4 4 4 4M15 8l4 4-4 4", fill: "none" })
  );
});

export default NibChevronLeftRight;
