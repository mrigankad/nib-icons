import { createElement as h, forwardRef } from 'react';

export const NibLadybug = forwardRef(function NibLadybug({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 7a4 4 0 0 1 8 0M5 14a7 7 0 0 1 14 0c0 4-3 7-7 7s-7-3-7-7zM12 7v14M10 4L8.5 2M14 4l1.5-2M9 12h.01M15 12h.01M8.5 16.5h.01M15.5 16.5h.01", fill: "none" })
  );
});

export default NibLadybug;
