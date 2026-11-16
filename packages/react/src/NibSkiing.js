import { createElement as h, forwardRef } from 'react';

export const NibSkiing = forwardRef(function NibSkiing({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "16", cy: "4", r: "2", fill: "none" }),
    h('path', { d: "M14 7l-4 3 3 3-2 4M10 10l-3 4M14 7l3 4M2 16l20 5M7 14l-3 6", fill: "none" })
  );
});

export default NibSkiing;
