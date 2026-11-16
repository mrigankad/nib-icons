import { createElement as h, forwardRef } from 'react';

export const NibChristmasTree = forwardRef(function NibChristmasTree({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l1 2h2l-1.5 1.2.5 2L12 6l-2 1.2.5-2L9 4h2zM12 7l-5 6h3l-4 5h12l-4-5h3zM12 18v4M10 22h4", fill: "none" })
  );
});

export default NibChristmasTree;
