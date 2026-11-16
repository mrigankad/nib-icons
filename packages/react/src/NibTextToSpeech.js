import { createElement as h, forwardRef } from 'react';

export const NibTextToSpeech = forwardRef(function NibTextToSpeech({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 5h7M2 8h7M2 11h5M11 8h3M13 6l2 2-2 2M17 10v4M20 7v10M23 11v2", fill: "none" })
  );
});

export default NibTextToSpeech;
