import { createElement as h, forwardRef } from 'react';

export const NibHeels = forwardRef(function NibHeels({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 8c3 0 5 3 7 6 2 2 5 3 9 3h2v2H11c-2 0-4-2-5-4L4 12v8M4 8v4", fill: "none" })
  );
});

export default NibHeels;
