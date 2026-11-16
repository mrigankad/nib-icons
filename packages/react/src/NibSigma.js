import { createElement as h, forwardRef } from 'react';

export const NibSigma = forwardRef(function NibSigma({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 6V4H6l6 8-6 8h12v-2", fill: "none" })
  );
});

export default NibSigma;
