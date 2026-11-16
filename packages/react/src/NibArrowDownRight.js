import { createElement as h, forwardRef } from 'react';

export const NibArrowDownRight = forwardRef(function NibArrowDownRight({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 7l10 10M17 8v9H8", fill: "none" })
  );
});

export default NibArrowDownRight;
