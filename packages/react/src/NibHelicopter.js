import { createElement as h, forwardRef } from 'react';

export const NibHelicopter = forwardRef(function NibHelicopter({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h16M11 4v4M7 8h7a5 5 0 0 1 5 5v1H9a2 2 0 0 1-2-2zM19 11h3M22 9v4M10 14v4M16 14v4M7 18h12", fill: "none" })
  );
});

export default NibHelicopter;
