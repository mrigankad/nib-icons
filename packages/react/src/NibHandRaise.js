import { createElement as h, forwardRef } from 'react';

export const NibHandRaise = forwardRef(function NibHandRaise({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 12V6a1.5 1.5 0 0 1 3 0v5M11 10.5V4.5a1.5 1.5 0 0 1 3 0v6M14 10.5V5.5a1.5 1.5 0 0 1 3 0V12M17 12V8.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.5A5.5 5.5 0 0 1 8 18.5V12M3.5 4l2 2M3 9.5h2", fill: "none" })
  );
});

export default NibHandRaise;
