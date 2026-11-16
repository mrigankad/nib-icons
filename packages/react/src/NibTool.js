import { createElement as h, forwardRef } from 'react';

export const NibTool = forwardRef(function NibTool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14.7 6.3a4 4 0 0 1 5-1l-3 3 .7 1.3 1.3.7 3-3a4 4 0 0 1-5.3 5.3l-9 9a2 2 0 0 1-3-3l9-9a4 4 0 0 1 1.3-3.3z", fill: "none" })
  );
});

export default NibTool;
