import { createElement as h, forwardRef } from 'react';

export const NibHdmi = forwardRef(function NibHdmi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7h18v6l-3 4H6l-3-4zM7 10.5h10", fill: "none" })
  );
});

export default NibHdmi;
