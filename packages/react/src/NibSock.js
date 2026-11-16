import { createElement as h, forwardRef } from 'react';

export const NibSock = forwardRef(function NibSock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2h8v11l-4 6a3 3 0 0 1-5-3l1-2zM8 6h8M10 17l3 2", fill: "none" })
  );
});

export default NibSock;
