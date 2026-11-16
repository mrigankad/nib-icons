import { createElement as h, forwardRef } from 'react';

export const NibMuseum = forwardRef(function NibMuseum({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8l10-5 10 5zM4 8v10M20 8v10M2 21h20M3 18h18M8 11v4l2-2 2 2 2-2 2 2v-4", fill: "none" })
  );
});

export default NibMuseum;
