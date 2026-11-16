import { createElement as h, forwardRef } from 'react';

export const NibDosa = forwardRef(function NibDosa({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 15 19.5 6.5a2.2 2.2 0 0 1 1.5 3.5L7 19.5A3 3 0 0 1 3 15z", fill: "none" }),
    h('path', { d: "M19.5 6.5 18 9.5", fill: "none" }),
    h('path', { d: "M4 21.5h16", fill: "none" })
  );
});

export default NibDosa;
