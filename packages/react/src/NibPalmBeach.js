import { createElement as h, forwardRef } from 'react';

export const NibPalmBeach = forwardRef(function NibPalmBeach({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M11 7c-2-2-5-2-7 0 3 0 5 0 7 0zM11 7c2-2 5-2 7 0-3 0-5 0-7 0zM11 7c-2 1-3 3-3 5M11 7c2 1 3 3 3 5M11 7c0 5 1 9 2 12M2 20c5-2 15-2 20 0", fill: "none" }),
    h('circle', { cx: "19", cy: "4", r: "1.5", fill: "none" })
  );
});

export default NibPalmBeach;
