import { createElement as h, forwardRef } from 'react';

export const NibHammer = forwardRef(function NibHammer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M13 7L3 17l3 3 10-10M10 4l4-2 6 6-2 2-3-3-2 2-3-3z", fill: "none" })
  );
});

export default NibHammer;
