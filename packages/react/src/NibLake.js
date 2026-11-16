import { createElement as h, forwardRef } from 'react';

export const NibLake = forwardRef(function NibLake({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "15", rx: "10", ry: "5", fill: "none" }),
    h('path', { d: "M8 15c1-1 2 1 3 0s2 1 3 0M6 7l3-4 3 4M13 8l2.5-3L18 8", fill: "none" })
  );
});

export default NibLake;
