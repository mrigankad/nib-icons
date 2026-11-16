import { createElement as h, forwardRef } from 'react';

export const NibComments = forwardRef(function NibComments({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 9h9a2 2 0 0 1 2 2v9l-3-2.5h-6a2 2 0 0 1-2-2zM16 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9l3-2.5h4", fill: "none" })
  );
});

export default NibComments;
