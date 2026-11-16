import { createElement as h, forwardRef } from 'react';

export const NibGuides = forwardRef(function NibGuides({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 8h18M3 16h18M8 3v18M16 3v18", fill: "none", strokeDasharray: "2 2.5" })
  );
});

export default NibGuides;
