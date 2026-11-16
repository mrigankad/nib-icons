import { createElement as h, forwardRef } from 'react';

export const NibPregnancy = forwardRef(function NibPregnancy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "11", cy: "4", r: "2.2", fill: "none" }),
    h('path', { d: "M10 7.5c-1.5 0-2.5 1-2.5 2.5v4h1.5v8M11.5 7.5c1 1 1.5 2 1.5 3.5 3 0 5 2 5 4.5S16 20 13 20h-1v2M8 10l-2 3", fill: "none" })
  );
});

export default NibPregnancy;
