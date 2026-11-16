import { createElement as h, forwardRef } from 'react';

export const NibFingerprintScan = forwardRef(function NibFingerprintScan({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3M12 11v2.5a5 5 0 0 1-1 3M9 12a3 3 0 0 1 6 0v1a8 8 0 0 1-.6 3", fill: "none" })
  );
});

export default NibFingerprintScan;
