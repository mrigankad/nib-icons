import { createElement as h, forwardRef } from 'react';

export const NibIndiaGate = forwardRef(function NibIndiaGate({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21V6h16v15M3 6h18M6 4h12v2M9 21v-8a3 3 0 0 1 6 0v8M4 10h5M15 10h5M2 21h20", fill: "none" })
  );
});

export default NibIndiaGate;
