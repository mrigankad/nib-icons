import { createElement as h, forwardRef } from 'react';

export const NibHelmetHard = forwardRef(function NibHelmetHard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17h20v2H2zM4 17v-3a8 8 0 0 1 16 0v3M10 6v5M14 6v5M10 6h4", fill: "none" })
  );
});

export default NibHelmetHard;
