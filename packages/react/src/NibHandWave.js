import { createElement as h, forwardRef } from 'react';

export const NibHandWave = forwardRef(function NibHandWave({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 12V6a1.5 1.5 0 0 1 3 0v5M11 10.5V4.5a1.5 1.5 0 0 1 3 0v6M14 10.5V5.5a1.5 1.5 0 0 1 3 0V12M17 12V9.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.5A5.5 5.5 0 0 1 8 18.5l-2.7-4.9a1.4 1.4 0 0 1 2.4-1.4L8 13M3 7a5 5 0 0 1 2-4M2.5 10.5A8 8 0 0 1 3 9", fill: "none" })
  );
});

export default NibHandWave;
