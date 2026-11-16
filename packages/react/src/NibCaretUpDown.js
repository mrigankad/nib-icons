import { createElement as h, forwardRef } from 'react';

export const NibCaretUpDown = forwardRef(function NibCaretUpDown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 10l4-4.5 4 4.5zM8 14l4 4.5 4-4.5z", fill: "none" })
  );
});

export default NibCaretUpDown;
