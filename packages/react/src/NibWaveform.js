import { createElement as h, forwardRef } from 'react';

export const NibWaveform = forwardRef(function NibWaveform({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12h2M6 8v8M10 4v16M14 7v10M18 10v4M21 12h1", fill: "none" })
  );
});

export default NibWaveform;
