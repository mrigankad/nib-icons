import { createElement as h, forwardRef } from 'react';

export const NibWave = forwardRef(function NibWave({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 18c3 0 4-2 5-5s3-7 8-7c3 0 5 2 5 4-2-1-5 0-5 3 0 2 2 3 4 3M2 21h20", fill: "none" })
  );
});

export default NibWave;
