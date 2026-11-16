import { createElement as h, forwardRef } from 'react';

export const NibLargeText = forwardRef(function NibLargeText({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 19l5-14 5 14M4 14h6M15 19l3-8 3 8M16 16.5h4", fill: "none" })
  );
});

export default NibLargeText;
