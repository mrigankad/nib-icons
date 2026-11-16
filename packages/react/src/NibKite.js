import { createElement as h, forwardRef } from 'react';

export const NibKite = forwardRef(function NibKite({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 2l7 7-7 7-7-7zM14 2v14M7 9h14M14 16c-2 2-4 1-6 3s-3 3-5 3", fill: "none" })
  );
});

export default NibKite;
