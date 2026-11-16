import { createElement as h, forwardRef } from 'react';

export const NibSilo = forwardRef(function NibSilo({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 8a6 5 0 0 1 12 0v13H6zM6 12h12M6 16h12M3 21h18M15 21V12", fill: "none" })
  );
});

export default NibSilo;
