import { createElement as h, forwardRef } from 'react';

export const NibArrowUpRight = forwardRef(function NibArrowUpRight({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 17L17 7M8 7h9v9", fill: "none" })
  );
});

export default NibArrowUpRight;
