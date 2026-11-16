import { createElement as h, forwardRef } from 'react';

export const NibTheatre = forwardRef(function NibTheatre({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4h16v8a8 8 0 0 1-16 0z", fill: "none" }),
    h('path', { d: "M8.500 9.500v1M15.500 9.500v1", fill: "none" }),
    h('path', { d: "M8.500 14c1 2 2.200 2.800 3.500 2.800s2.500-.8 3.500-2.800", fill: "none" })
  );
});

export default NibTheatre;
