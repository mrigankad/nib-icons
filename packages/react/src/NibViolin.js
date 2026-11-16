import { createElement as h, forwardRef } from 'react';

export const NibViolin = forwardRef(function NibViolin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M16 3l5 5M18.5 5.5l-7 7M10.5 13.5a3 3 0 0 0-4 .5 2 2 0 0 1-2.5.5 3 3 0 0 0-.5 4l2 2a3 3 0 0 0 4-.5 2 2 0 0 1 .5-2.5 3 3 0 0 0 .5-4zM7.5 16.5l1 1", fill: "none" })
  );
});

export default NibViolin;
