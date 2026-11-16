import { createElement as h, forwardRef } from 'react';

export const NibBandwidth = forwardRef(function NibBandwidth({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h18M3 18h18M7 12h10M14 9.5l3 2.5-3 2.5M10 9.5L7 12l3 2.5", fill: "none" })
  );
});

export default NibBandwidth;
