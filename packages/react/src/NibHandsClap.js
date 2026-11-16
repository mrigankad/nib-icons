import { createElement as h, forwardRef } from 'react';

export const NibHandsClap = forwardRef(function NibHandsClap({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 21l-3.5-5V10a1.5 1.5 0 0 1 3 0v2.5M8.5 12V6.5a1.5 1.5 0 0 1 3 0V12M11.5 12V8a1.5 1.5 0 0 1 3 0v5M14.5 11a1.5 1.5 0 0 1 3 0v4a6 6 0 0 1-3 5.2M18 3l1-1.5M21 6.5l1.5-.5M20 4l1.5-1.5", fill: "none" })
  );
});

export default NibHandsClap;
