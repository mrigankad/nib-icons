import { createElement as h, forwardRef } from 'react';

export const NibAlphabet = forwardRef(function NibAlphabet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17l4-10 4 10M3.5 13.5h5M13 7v10h3a2.5 2.5 0 0 0 0-5h-3 2.5a2.5 2.5 0 0 0 0-5zM22 9a2.5 3 0 1 0 0 6", fill: "none" })
  );
});

export default NibAlphabet;
