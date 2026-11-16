import { createElement as h, forwardRef } from 'react';

export const NibDolphin = forwardRef(function NibDolphin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 10c3-4 8-6 12-4l2-3 1 4c2 2 3 5 2 8l2 3-4-1c-2 1-4 0-5-2l-3 3v-4C7 14 4 13 3 10zM5 10l-2 1M14 9h.01", fill: "none" })
  );
});

export default NibDolphin;
