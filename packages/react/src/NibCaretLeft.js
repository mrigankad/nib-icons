import { createElement as h, forwardRef } from 'react';

export const NibCaretLeft = forwardRef(function NibCaretLeft({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14.5 7L9 12l5.5 5z", fill: "none" })
  );
});

export default NibCaretLeft;
