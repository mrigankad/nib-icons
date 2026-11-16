import { createElement as h, forwardRef } from 'react';

export const NibFontSize = forwardRef(function NibFontSize({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 19l4.5-13 4.5 13M4.6 15h5.8M14 19l3-8 3 8M15 16.5h4", fill: "none" })
  );
});

export default NibFontSize;
