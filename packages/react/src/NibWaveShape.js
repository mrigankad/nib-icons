import { createElement as h, forwardRef } from 'react';

export const NibWaveShape = forwardRef(function NibWaveShape({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12c2.5-5 5-5 7.5 0s5 5 7.5 0 3.5-3 5-3", fill: "none" })
  );
});

export default NibWaveShape;
