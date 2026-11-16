import { createElement as h, forwardRef } from 'react';

export const NibJersey = forwardRef(function NibJersey({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3l-6 3 2 5 2-1v11h10V10l2 1 2-5-6-3c0 1.5-1.5 3-3 3S9 4.5 9 3zM11 12v5M11 12l-1 1M13 12h2v2.5h-2V17h2", fill: "none" })
  );
});

export default NibJersey;
