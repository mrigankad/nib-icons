import { createElement as h, forwardRef } from 'react';

export const NibBedDouble = forwardRef(function NibBedDouble({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 11V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M2 11h20v7H2zM2 18v3M22 18v3M6 11V8h5v3M13 11V8h5v3", fill: "none" })
  );
});

export default NibBedDouble;
