import { createElement as h, forwardRef } from 'react';

export const NibMilk = forwardRef(function NibMilk({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2h8v3l2 4v13H6V9l2-4zM8 5h8M6 9h12M10 14a2 2 0 0 0 4 0", fill: "none" })
  );
});

export default NibMilk;
