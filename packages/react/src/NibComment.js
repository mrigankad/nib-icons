import { createElement as h, forwardRef } from 'react';

export const NibComment = forwardRef(function NibComment({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4l-2 3-2-3H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", fill: "none" })
  );
});

export default NibComment;
