import { createElement as h, forwardRef } from 'react';

export const NibHacker = forwardRef(function NibHacker({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21c0-6 2-9 2-12a6 6 0 0 1 12 0c0 3 2 6 2 12M8.5 10.5h7v2a3.5 3.5 0 0 1-7 0zM10.5 12h.01M13.5 12h.01", fill: "none" })
  );
});

export default NibHacker;
