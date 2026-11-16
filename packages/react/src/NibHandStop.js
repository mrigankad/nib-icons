import { createElement as h, forwardRef } from 'react';

export const NibHandStop = forwardRef(function NibHandStop({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 12V6a1.5 1.5 0 0 1 3 0v5M10 10.5V4.5a1.5 1.5 0 0 1 3 0v6M13 10.5V5.5a1.5 1.5 0 0 1 3 0V12M16 12V8.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.5A5.5 5.5 0 0 1 7 18.5l-2.7-4.9a1.4 1.4 0 0 1 2.4-1.4L7 13", fill: "none" })
  );
});

export default NibHandStop;
