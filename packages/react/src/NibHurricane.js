import { createElement as h, forwardRef } from 'react';

export const NibHurricane = forwardRef(function NibHurricane({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3.5", fill: "none" }),
    h('path', { d: "M9 10C7 7 4 6 2 7c2 .5 3.5 2 4 4M15 14c2 3 5 4 7 3-2-.5-3.5-2-4-4M10 15c-3 2-4 5-3 7 .5-2 2-3.5 4-4M14 9c3-2 4-5 3-7-.5 2-2 3.5-4 4", fill: "none" })
  );
});

export default NibHurricane;
