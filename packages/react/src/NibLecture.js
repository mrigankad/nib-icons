import { createElement as h, forwardRef } from 'react';

export const NibLecture = forwardRef(function NibLecture({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "5", r: "2.5", fill: "none" }),
    h('path', { d: "M8 13a4 4 0 0 1 8 0M5 13h14v3H5zM8 16v5M16 16v5", fill: "none" })
  );
});

export default NibLecture;
