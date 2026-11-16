import { createElement as h, forwardRef } from 'react';

export const NibAudioLines = forwardRef(function NibAudioLines({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 10v4M7 6v12M11 3v18M15 8v8M19 5v14", fill: "none" })
  );
});

export default NibAudioLines;
