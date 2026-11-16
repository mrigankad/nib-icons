import { createElement as h, forwardRef } from 'react';

export const NibStomach = forwardRef(function NibStomach({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 2v5c0 1-1 2-2 3-2 2-3 4-3 6a6 6 0 0 0 6 6c4 0 10-2 10-8 0-3-2-5-5-5-2 0-3 1-3 3", fill: "none" }),
    h('path', { d: "M7 21l-2 1", fill: "none" })
  );
});

export default NibStomach;
