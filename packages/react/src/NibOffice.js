import { createElement as h, forwardRef } from 'react';

export const NibOffice = forwardRef(function NibOffice({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6M10.5 21v-3h3v3", fill: "none" })
  );
});

export default NibOffice;
