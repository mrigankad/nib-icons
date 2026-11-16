import { createElement as h, forwardRef } from 'react';

export const NibHandPinch = forwardRef(function NibHandPinch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 13V5.5a1.5 1.5 0 0 1 3 0V10M11 9.5l4-4a1.5 1.5 0 0 1 2.2 2L13.5 12h3a2 2 0 0 1 2 2.3l-.7 3.4A4 4 0 0 1 13.9 21H12a5 5 0 0 1-4.3-2.5l-2.3-4a1.4 1.4 0 0 1 2.4-1.4L8 14", fill: "none" })
  );
});

export default NibHandPinch;
