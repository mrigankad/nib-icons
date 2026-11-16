import { createElement as h, forwardRef } from 'react';

export const NibPharmacy = forwardRef(function NibPharmacy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21V9l9-6 9 6v12M2 21h20M10 11h4v3h3v4h-3v3h-4v-3H7v-4h3z", fill: "none" })
  );
});

export default NibPharmacy;
