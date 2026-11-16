import { createElement as h, forwardRef } from 'react';

export const NibVolumeLow = forwardRef(function NibVolumeLow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 9h3l5-4v14l-5-4H4zM15.5 10a3 3 0 0 1 0 4", fill: "none" })
  );
});

export default NibVolumeLow;
