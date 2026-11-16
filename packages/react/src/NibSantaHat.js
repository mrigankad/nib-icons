import { createElement as h, forwardRef } from 'react';

export const NibSantaHat = forwardRef(function NibSantaHat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 17c1-7 4-12 9-12 3 0 5 2 6 5l-2 1M3 17h18v3H3z", fill: "none" }),
    h('circle', { cx: "18", cy: "12", r: "2", fill: "none" })
  );
});

export default NibSantaHat;
