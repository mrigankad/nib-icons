import { createElement as h, forwardRef } from 'react';

export const NibCaretRight = forwardRef(function NibCaretRight({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9.5 7l5.5 5-5.5 5z", fill: "none" })
  );
});

export default NibCaretRight;
