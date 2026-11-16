import { createElement as h, forwardRef } from 'react';

export const NibBandage = forwardRef(function NibBandage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14.5 3.5l6 6a3 3 0 0 1 0 4.2l-7 7a3 3 0 0 1-4.2 0l-6-6a3 3 0 0 1 0-4.2l7-7a3 3 0 0 1 4.2 0zM8.5 8.5l7 7M11 11h.01M13 13h.01M11 13h.01M13 11h.01", fill: "none" })
  );
});

export default NibBandage;
