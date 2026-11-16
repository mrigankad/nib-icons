import { createElement as h, forwardRef } from 'react';

export const NibLetterSpacing = forwardRef(function NibLetterSpacing({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 14l4-10 4 10M9.5 10.5h5M3 19h18M5 17l-2 2 2 2M19 17l2 2-2 2", fill: "none" })
  );
});

export default NibLetterSpacing;
