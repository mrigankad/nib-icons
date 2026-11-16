import { createElement as h, forwardRef } from 'react';

export const NibQuote = forwardRef(function NibQuote({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 11.5H6.5A1.5 1.5 0 0 1 5 10V8a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 10 8v4a6 6 0 0 1-5 5.5M19 11.5h-3.5A1.5 1.5 0 0 1 14 10V8a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 19 8v4a6 6 0 0 1-5 5.5", fill: "none" })
  );
});

export default NibQuote;
