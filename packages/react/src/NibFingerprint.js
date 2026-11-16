import { createElement as h, forwardRef } from 'react';

export const NibFingerprint = forwardRef(function NibFingerprint({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 11v3a8 8 0 0 1-1.5 4.7M8 13a4 4 0 0 1 8 0v1a12 12 0 0 1-1 4.5M5 15a7 7 0 0 1 12.7-7.3M19 11.5v1.5a15 15 0 0 1-.6 4M4 9a10 10 0 0 1 6-5.5M14 3.3A10 10 0 0 1 20 8", fill: "none" })
  );
});

export default NibFingerprint;
