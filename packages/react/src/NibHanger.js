import { createElement as h, forwardRef } from 'react';

export const NibHanger = forwardRef(function NibHanger({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 6a2 2 0 1 1 2 2v2L2 17a1 1 0 0 0 .5 2h19a1 1 0 0 0 .5-2l-10-7", fill: "none" })
  );
});

export default NibHanger;
